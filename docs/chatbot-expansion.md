# RAG Chatbot Optimization Guide (Tailored to Your Current Code)

This guide is tailored to your current implementation style:
- lib/chatbot/retrieve.ts: embedding + Supabase RPC match_documents + context formatting + citations
- lib/chatbot/llm.ts: Anthropic/OpenAI switch + “JSON object” response contract (answer/citations/etc.)
- lib/chatbot/prompts.ts: single SYSTEM_PROMPT with tone/formatting/services guidance

IMPORTANT: As you implement, understand the why behind each change. Use brainstorming and reasoning to consider if there are more optimal options for your specific site content, traffic, and constraints. If you find a more optimal alternative, propose it (and why) before locking it in.

Goal outcomes:
1) Fewer “no context found” situations without lowering quality
2) Less robotic, more consultative answers
3) Better reliability (fewer generic “encountered an issue” outcomes)
4) Measurable improvements via a small eval harness

---

## 0) What You Have Today (Baseline)

Retrieval:
- retrieveRelevantChunks(query) embeds the raw user query and calls match_documents with:
  - topK = 8
  - similarityThreshold = 0.43
  - debug fallback logs best scores below threshold
- formatContextForLLM concatenates chunks into a numbered context list
- extractCitations returns unique URLs from chunks
- low-confidence fallback is a single generic prompt asking for business type and goals

Generation:
- llm.ts builds a systemPromptWithContext by appending:
  - SYSTEM_PROMPT
  - CONTEXT INFORMATION: <context>
  - RESPONSE FORMAT: “respond with JSON object fields: answer, citations, recommended_services, cta”
- Anthropic path: returns JSON.parse(content.text) or falls back to raw text if parsing fails
- OpenAI path: uses response_format: { type: 'json_object' } and JSON.parse(message.content), with fallback to raw text if parsing fails
- max_tokens is currently 1024 for both providers

Prompt:
- prompts.ts SYSTEM_PROMPT includes sections for About, Services, Tone, Formatting, “increase sales” mapping, and Guidelines

Where quality is currently limited:
- retrieval is “single-shot dense retrieval” (no query rewriting, no hybrid keyword, no reranking, no neighbor expansion)
- the bot has no page-awareness (it doesn’t know which /services/* page it’s on unless the retrieved context happens to say so)
- when retrieval is weak, you either:
  - pass empty context and the model answers generically, or
  - hit low-confidence fallback that may feel repetitive and unhelpful

---

## 1) Retrieval Upgrades (Highest ROI)

### 1.1 Add Query Transformations (rewrite / multi-query / HyDE)

Why:
Most “no context” failures happen because the user query is underspecified or phrased differently than your indexed content. Query transformations increase recall without lowering your threshold into junk.

Where it fits:
In retrieve.ts, before embedText(query), generate 1–N retrieval queries and retrieve for each.

Implementation plan:
1) Create a new module, e.g. lib/chatbot/queryTransform.ts with a single exported function:
- transformQueryForRetrieval(input: { userQuery, pageContext?, conversationSummary? }) => { queries: string[]; strategyUsed: string }

2) Choose ONE strategy to start (recommendation: multi-query rewrite first):
A) Multi-query rewrite (recommended first)
- Ask the LLM to produce 3–5 alternate retrieval queries.
- Each query should be short and include concrete nouns (service names, technologies, goal keywords).
- Keep a strict format: return JSON { queries: [..] }.

B) HyDE (optional second step)
- Ask the LLM to produce a “hypothetical ideal answer paragraph” (not shown to user).
- Embed that paragraph and retrieve against it.
- HyDE helps when semantic mismatch is high, but can drift if the model invents details.

3) Retrieval execution:
- For each transformed query:
  - embedText(transformedQuery)
  - call match_documents with a lower candidate threshold (see reranking section below)
- union results, dedupe by (document.id + section + content hash)

4) Logging:
- log original user query
- log transformed queries
- log per-query top scores and final deduped candidate count

Acceptance criteria:
- Your “no relevant chunks found” cases drop notably for vague questions like:
  - “how much is it”
  - “can you build a chatbot”
  - “what stack do you use”
  - “how long does it take”

---

### 1.2 Two-Stage Retrieval + Reranking (Precision without losing recall)

Why:
Dense retrieval with topK=8 is often too “thin”:
- If the best chunk ranks #12, you never see it.
- If you expand topK too high and pass it directly to the LLM, you add noise and answers get worse.

Two-stage pattern:
Stage 1 (high recall): retrieve many candidates
Stage 2 (high precision): rerank to pick the best small set to pass to the LLM

Implementation plan:
1) Change retrieval config into two sets:
- candidateTopK: e.g. 30–50
- finalTopK: e.g. 6–10
- candidateThreshold: e.g. 0.20–0.35 (or 0 with a cap, depending on your corpus)
- finalConfidenceThreshold: keep your current 0.43 as a “do we have enough to answer directly?” gate

2) Add a reranker module, e.g. lib/chatbot/rerank.ts:
- rerankChunks({ query, chunks, pageContext? }) => Array<RetrievedChunk & { rerankScore: number }>

Reranker options (pick based on cost/effort):
A) LLM rerank (easiest to implement now)
- Provide the query + titles/sections/snippets of each chunk
- Ask for a ranked list of chunk indices with scores (0–100) and a brief reason per top chunk
- Return JSON object
- Keep prompt short to control cost

B) Lightweight model rerank (later)
- If you later adopt a dedicated reranking model, this module becomes the swap point.

3) Selection:
- After reranking, take top finalTopK
- Then proceed to formatContextForLLM and citations extraction

4) Confidence logic update:
- Replace hasHighConfidence(chunks) with a combined check:
  - bestRerankScore >= rerankThreshold OR bestSimilarity >= similarityThreshold
  - and at least minChunksSelected (e.g. 2) unless the top chunk is extremely strong

Acceptance criteria:
- Citations become more consistently relevant
- Answers feel more specific because the context is cleaner
- You can raise candidate recall without harming answer quality

---

### 1.3 Add Hybrid Retrieval (Keyword + Vector)

Why:
Vector search can miss exact matches:
- “Shopify”
- “SEO audit”
- “pricing”
- exact service names and package names

Hybrid retrieval gives you:
- semantic recall (vector)
- lexical precision (keyword)

Implementation plan (Postgres/Supabase-native):
1) Extend your indexing schema to support keyword search:
- Add a tsvector column (or a generated tsvector) over:
  - title
  - section
  - content
  - tags (if tags is text[])
- Create a GIN index for that tsvector.

2) Add a keyword RPC function (similar shape to match_documents):
- match_documents_keyword(query_text, match_count) that returns:
  - id, url, title, section, content, tags, updated_at, rank

3) In retrieveRelevantChunks:
- Run both:
  - vector candidates via match_documents
  - keyword candidates via match_documents_keyword
- Union + dedupe
- Feed union into reranking

4) Merge scoring (optional):
- If you want a merge before rerank, use a simple heuristic:
  - include top N keyword results always
  - include top M vector results always
  - rerank decides final set

Acceptance criteria:
- “exact term” queries reliably cite the correct page/section
- You don’t have to lower similarityThreshold just to catch exact words

---

### 1.4 Neighbor Expansion (Small chunks for search; larger context for answer)

Why:
Your chunks are sized for retrieval. That’s good. But answers often become shallow if the best chunk lacks surrounding context.

Implementation plan:
1) In your embeddings table, store chunk_index and doc_id (document_id already exists conceptually; ensure it’s exposed in match_documents results).
2) After final reranking selects the best chunks:
- for each selected chunk, fetch neighbor chunks from the same document:
  - chunk_index - 1
  - chunk_index + 1
- Merge them into a single “expanded chunk block”
3) Update formatContextForLLM to use expanded content blocks rather than raw chunk content

Guardrails:
- Expand only after reranking, not before
- Cap total context size (token budget)
- If neighbors are irrelevant (different heading/section), skip expansion

Acceptance criteria:
- More complete answers with fewer “it depends” filler lines
- Still minimal hallucination because the answer stays grounded

---

## 2) Low-Confidence Handling That Feels Helpful (Not Generic)

### 2.1 Replace the single low-confidence fallback with a “1-question clarifier mode”

Why:
When you don’t have enough context, apologizing and punting feels robotic.
A better pattern: ask one targeted clarifying question and offer options.

Implementation plan:
1) Replace getLowConfidenceFallback() with:
- getLowConfidenceResponse({ userQuery, pageContext? }) => { answer, citations: [], recommended_services?, cta? }

2) Enforce this response structure:
- 1–2 sentences: “I want to make sure I point you to the right thing.”
- Ask ONE question:
  - budget, timeline, platform, goal, or “which of these are you trying to do?”
- Provide 2–3 plausible paths (bullets)
- CTA: “Tell me which one fits and I’ll tailor the recommendation.”

3) Make it page-aware:
- If user is on /services/chatbots: default options should lean chatbot-related
- If user is on /services/seo: default options should lean SEO-related

Acceptance criteria:
- Low-confidence responses still move the conversation forward
- Users answer the clarifier question and your next turn retrieves better context

---

## 3) Make Responses Less Robotic (Prompt + Page Context + Output Shape)

### 3.1 Add Page Context injection to llm.ts

Why:
Your system prompt is global. Without page context, answers can feel generic even when correct.

Implementation plan:
1) Expand callLLMWithContext signature to accept pageContext:
- callLLMWithContext(messages, context, citations, pageContext?)

2) Include a small, consistent “PAGE CONTEXT” block in systemPromptWithContext:
- Current route: /services/...
- Page title: ...
- Optional: “primary service intent”

3) Where to get pageContext:
- From the API route request body (client can send current pathname)
- Or from headers (if you have it)
- Keep it minimal and safe (don’t pass anything sensitive)

Acceptance criteria:
- The same question asked on different service pages gets different emphasis and more relevant next steps

---

### 3.2 Improve SYSTEM_PROMPT to enforce a consultative structure

Why:
“Robotic” often means the assistant is either too formal, too long, or too “generic helpful.”
A consistent response structure fixes this.

Implementation plan (prompts.ts):
Add a section like “RESPONSE SHAPE”:
- Direct answer first (1–2 sentences)
- Key details (3–6 bullets)
- Recommendation (1 short paragraph)
- Next step (one question OR one CTA)

Add a section “WHEN CONTEXT IS WEAK”:
- Be transparent
- Ask one clarifying question
- Offer 2–3 options

Add a “VOICE” section:
- Friendly, direct, professional
- No corporate fluff
- Avoid repetitive apologies

Acceptance criteria:
- Answers are skimmable and feel like a helpful human consultant
- Less filler, more actionable detail

---

## 4) Structured Output Hardening (Stop JSON parse fallbacks from degrading quality)

Today:
- Both Anthropic and OpenAI paths try JSON.parse and fall back to raw text if parsing fails.
That fallback is a major source of “robotic” or inconsistent UI behavior, because the response shape can change suddenly.

### 4.1 Prefer schema-validated structured output (especially for OpenAI)

Why:
JSON mode guarantees valid JSON, but not schema adherence.
Schema adherence reduces edge cases.

Implementation plan:
1) For OpenAI:
- Prefer structured outputs with a JSON schema response format when your model supports it.
- Define a schema for:
  - answer: string
  - citations: string[]
  - recommended_services: optional string
  - cta: optional string

2) Validation:
- Validate the parsed object before returning it:
  - citations must be an array of strings
  - citations must be a subset of the citations list you provided (no invented URLs)
  - answer must be a string

3) Repair strategy (if invalid):
- Instead of falling back to raw text immediately, do a single “self-repair” attempt:
  - Send the invalid JSON + the schema and ask the model to output corrected JSON only
- If repair fails, then fall back (rare)

Acceptance criteria:
- Far fewer malformed responses
- Citations become more trustworthy and consistent

---

### 4.2 Citation enforcement (prevent hallucinated URLs)

Why:
Even if you tell the model to cite only provided URLs, it may invent one sometimes.

Implementation plan:
- In llm.ts, after parsing the response, filter citations to the allowed set:
  - allowed = citations passed into callLLMWithContext
  - returnedCitations = returned.citations.filter(url => allowed.includes(url))
- Optionally: if filtering removed all citations, that’s okay; show none

Acceptance criteria:
- The UI never shows citations that don’t exist in your indexed sources

---

## 5) Reliability: Replace “Encountered an issue” with Typed Errors + UI Recovery

Your current system likely collapses failures into a generic message at the API boundary.
To fix user experience, you need typed error categories that the UI can handle.

### 5.1 Define an error taxonomy (server-side)

Create a small enum-like set:
- CONFIG_ERROR (missing env vars)
- RETRIEVAL_ERROR (Supabase RPC failed, embedding failed)
- LLM_ERROR (provider down, rate limited, invalid response)
- RATE_LIMITED (429)
- UNKNOWN_ERROR

Implementation plan:
1) In the API route, wrap:
- retrieval
- LLM call
with specific try/catch branches and map them to typed errors.

2) Return a structured ChatResponse:
- ok: boolean
- errorType?: string
- assistantMessage?: string
- citations?: string[]

3) UI behavior:
- If RATE_LIMITED: show “Too many messages — try again in a bit”
- If RETRIEVAL_ERROR: show “I’m having trouble searching site info, but I can still answer generally — what are you trying to build?”
- If LLM_ERROR: show “The assistant is having trouble right now — please retry”
- If CONFIG_ERROR: show a safe generic message (and log loudly server-side)

Acceptance criteria:
- Users get a useful next step even when things break
- Your logs show exactly what failed and where

---

## 6) Evaluation Harness (So improvements aren’t vibes)

### 6.1 Create a small benchmark set

Create 50–100 test questions in a JSON file:
Each entry:
- question: string
- pageContext: route (optional)
- expectedUrls: string[] (best guess)
- intent: “pricing” | “timeline” | “capabilities” | “stack” | “process” | etc.

Include:
- vague questions
- exact match questions
- tricky ones that previously failed

### 6.2 Track metrics

Retrieval metrics:
- contextFoundRate: % queries where final selected chunks >= N
- citationPrecision (manual quick check): do citations support the answer?

Generation metrics:
- directness score (1–5 rubric)
- hallucination flags (any claim not in context)
- low-confidence quality: did it ask one good clarifying question?

Reliability metrics:
- error rate by errorType
- latency (retrieval + rerank + generation)

Acceptance criteria:
- Each upgrade improves at least one metric without harming others

---

## 7) Suggested Implementation Order (Minimize regressions)

1) Add logging/tracing improvements first (so you can see what changed)
2) Add pageContext injection (cheap + immediate tone improvement)
3) Add query rewriting (multi-query) to increase retrieval hit-rate
4) Increase candidateTopK and implement reranking to maintain precision
5) Add hybrid keyword retrieval (catch exact matches)
6) Add neighbor expansion (depth without noise)
7) Replace low-confidence fallback with clarifier mode
8) Harden structured outputs + citation filtering
9) Add eval harness and run regressions before each deploy

---

## 8) Concrete “Where to Edit” Checklist (Aligned to your files)

prompts.ts:
- Add “RESPONSE SHAPE” section
- Add “WHEN CONTEXT IS WEAK” rules
- Add “PAGE AWARENESS” instruction: use the provided PAGE CONTEXT block to tailor answers
- Add “DO NOT” rules to reduce robotic patterns (no excessive apologies; no generic filler)

retrieve.ts:
- Split retrieval into:
  - transformQueryForRetrieval
  - retrieveVectorCandidates (match_documents with candidateTopK)
  - retrieveKeywordCandidates (new keyword RPC)
  - dedupeCandidates
  - rerankCandidates
  - selectFinalChunks
  - expandNeighbors (optional)
- Update formatContextForLLM to support expanded content blocks
- Update hasHighConfidence to account for rerank scoring + chunk count

llm.ts:
- Update callLLMWithContext signature to accept pageContext
- Add PAGE CONTEXT block into system prompt
- Add schema validation and citation filtering after JSON parse
- Add one “repair attempt” pathway before falling back to raw text

API route:
- Pass current pathname/page title from client
- Use typed error responses
- Log request_id and pipeline stage timings

---

## 9) Notes on “More Optimal Options” to Consider (Brainstorm Prompt)

As you build, consider:
- Is LLM reranking too expensive? If yes, try a cheaper rerank prompt (titles/sections only) or batch scoring.
- Is HyDE better than multi-query for your corpus? Test both on your benchmark set.
- Should you change chunking strategy? Sometimes “section-aware chunking” (by headings) beats token-window chunking.
- Would a lightweight “intent classifier” improve routing? Example: route “pricing” queries to a pricing-focused prompt and retrieval filter.
- Should you keep max_tokens at 1024? If answers feel shallow, consider increasing max_tokens and tightening context size instead.
- Should you add caching? Cache transformed queries and retrieval results per (query + page route) for speed and cost.

Write down your hypothesis before implementing each major change, and use the eval harness to verify it.

---