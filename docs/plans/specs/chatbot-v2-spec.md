# Chatbot v2 Spec: RAG Optimization & Reliability

This spec defines the **chatbot-v2** workstream: retrieval upgrades, low-confidence handling, consultative prompts, structured-output hardening, typed errors, and an evaluation harness. It extends the existing chatbot (Phase 1 + RAG from **docs/plans/specs/chatbot-feature-spec.md** and **chatbot-rag-ux-spec.md**). Implementation is done via tickets in **docs/plans/tickets/chatbot-v2/**; **CLAUDE.md** and **docs/plans/claude-workflow-opt.md** apply (implementation only, no verification in tickets).

Source: **docs/chatbot-expansion.md** (RAG Chatbot Optimization Guide).

---

## 1. Goals

1. **Fewer “no context found”** without lowering quality (query transform, two-stage retrieval, hybrid keyword, optional neighbor expansion).
2. **Less robotic, more consultative** answers (page context, RESPONSE SHAPE / VOICE in prompt, low-confidence clarifier).
3. **Better reliability** (typed errors, UI recovery messages).
4. **Measurable improvements** (small eval harness: benchmark set + metrics).

---

## 2. Current Code Layout (for tickets)

Use this section so Claude can implement without exploratory file reads.

### 2.1 API route

- **File:** `app/api/chat/route.ts`
- **Flow:** Validate body (`message`, `sessionId?`) → rate limit → create/verify session (Supabase `chat_sessions`) → insert user message (`chat_messages`) → **retrieveRelevantChunks(trimmedMessage)** → if !hasHighConfidence → **getLowConfidenceFallback()**, save fallback, return `{ answer, citations: [], sessionId }` → else **formatContextForLLM**, **extractCitations**, **callLLMWithContext(history, context, availableCitations)** → save assistant message → return `{ answer, citations, recommended_services, cta, sessionId }`.
- **Error handling:** Single catch logs `[Chat API]` and returns 500 with generic message. No typed error codes or request_id.

### 2.2 Retrieval

- **File:** `lib/chatbot/retrieve.ts`
- **Exports:** `retrieveRelevantChunks(query)`, `formatContextForLLM(chunks)`, `extractCitations(chunks)`, `hasHighConfidence(chunks)`, `getLowConfidenceFallback()`.
- **Config:** `RETRIEVAL_CONFIG = { topK: 8, similarityThreshold: 0.43, maxContextTokens: 3000 }`.
- **Current flow:** embed user query → `supabase.rpc('match_documents', { query_embedding, match_threshold, match_count })` → map results to `RetrievedChunk[]`. No query rewriting, no reranking, no keyword path, no neighbor expansion.
- **Types:** `lib/chatbot/rag-types.ts` (RetrievedChunk, SiteDocument, etc.).

### 2.3 Embeddings

- **File:** `lib/chatbot/embed.ts`
- **Export:** `embedText(text: string): Promise<number[]>` — OpenAI `text-embedding-3-small` (1536 dims). Used by indexer and by retrieve.ts.

### 2.4 LLM

- **File:** `lib/chatbot/llm.ts`
- **Exports:** `callLLM(messages)`, `callLLMWithContext(messages, context, citations)`.
- **callLLMWithContext:** Builds system prompt from SYSTEM_PROMPT + context block + “respond with JSON: answer, citations, recommended_services, cta”. Anthropic: parse JSON from text; OpenAI: `response_format: { type: 'json_object' }`. On parse failure, falls back to raw text. No pageContext parameter; no schema validation; no citation filtering against allowed list.
- **Models:** Anthropic `claude-3-5-sonnet-20241022`, OpenAI `gpt-4o-mini`; max_tokens 1024.

### 2.5 Prompts

- **File:** `lib/chatbot/prompts.ts`
- **Export:** `SYSTEM_PROMPT` — About, Services, Tone, Formatting, “increase sales” mapping, Guidelines. No explicit RESPONSE SHAPE, WHEN CONTEXT WEAK, or VOICE section; no PAGE CONTEXT placeholder.

### 2.6 Database (RAG)

- **Supabase:** `site_documents` (id, url, title, section, content, tags, updated_at), `site_embeddings` (document_id, embedding vector(1536), metadata). RPC **match_documents(query_embedding, match_threshold, match_count)** returns rows with similarity = 1 - cosine distance. No tsvector/keyword search yet.

### 2.7 Frontend

- **File:** `components/chatbot/ChatWidget.tsx` — POST body: `{ message, sessionId }`. No `pathname` or pageContext sent. Displays `answer`, `citations`; shows generic error on non-OK response (no handling by error type).

---

## 3. Scope

**In scope (v2):**

- Query transformation (multi-query rewrite) before retrieval.
- Two-stage retrieval: high-recall candidates (e.g. candidateTopK 30–50) + rerank (LLM or lightweight) → finalTopK (e.g. 6–10).
- Optional: hybrid keyword retrieval (tsvector + match_documents_keyword), union + dedupe, then rerank.
- Optional: neighbor expansion (chunk_index, fetch ±1 neighbors after rerank; merge into context).
- Low-confidence: replace single fallback with “1-question clarifier” (page-aware, 2–3 options, CTA).
- Page context: client sends pathname (and optional page title); API passes to LLM; PAGE CONTEXT block in system prompt.
- Prompt: add RESPONSE SHAPE, WHEN CONTEXT WEAK, VOICE; use PAGE CONTEXT in prompt.
- Structured output: schema-validate parsed JSON; filter citations to allowed list; optional one repair attempt before raw-text fallback.
- Typed errors: CONFIG_ERROR, RETRIEVAL_ERROR, LLM_ERROR, RATE_LIMITED, UNKNOWN_ERROR; API returns errorType; UI shows specific messages per type.
- Eval harness: benchmark JSON (questions, pageContext, expectedUrls, intent); script or doc for retrieval/generation/reliability metrics.

**Out of scope (this spec):** Admin UI, auth, streaming, multilingual, changing embedding model.

---

## 4. Retrieval Upgrades (summary)

- **Query transform:** `lib/chatbot/queryTransform.ts` — `transformQueryForRetrieval({ userQuery, pageContext?, conversationSummary? }) => { queries: string[], strategyUsed }`. Start with multi-query rewrite (LLM returns 3–5 alternate queries). For each query: embed, match_documents with lower threshold, union + dedupe by document id/section/content hash.
- **Two-stage:** candidateTopK (e.g. 30), candidateThreshold (e.g. 0.20–0.35); rerank in `lib/chatbot/rerank.ts`; select top finalTopK (e.g. 8); confidence = bestRerankScore or bestSimilarity + minChunksSelected.
- **Hybrid:** Add tsvector column + GIN index; RPC `match_documents_keyword`; run vector + keyword; union + dedupe; feed to rerank.
- **Neighbor expansion:** Store chunk_index per embedding/document; after rerank, fetch chunk_index ± 1 for same document; merge into expanded blocks; formatContextForLLM uses expanded content; cap by token budget.

---

## 5. Low-Confidence Clarifier

- Replace `getLowConfidenceFallback()` with `getLowConfidenceResponse({ userQuery, pageContext? })` returning same shape as LLM (`answer`, `citations`, `recommended_services?`, `cta?`).
- Answer: 1–2 sentences + one clarifying question + 2–3 options (bullets) + CTA (“Tell me which one fits…”).
- Page-aware: e.g. on `/services/chatbots` lean chatbot options; on `/services/seo` lean SEO.

---

## 6. Page Context & Prompt Structure

- **Page context:** Request body may include `pathname` (e.g. `/services/chatbots`), optional `pageTitle`. API passes to retrieve and LLM. System prompt includes “PAGE CONTEXT: current route: …; page title: …”.
- **Prompt additions (prompts.ts):** RESPONSE SHAPE (direct answer, bullets, recommendation, next step); WHEN CONTEXT IS WEAK (transparent, one question, 2–3 options); VOICE (friendly, direct, no fluff, no repeated apologies).

---

## 7. Structured Output & Citations

- Validate parsed JSON: answer string; citations array of strings; citations ⊆ allowed list (URLs passed into callLLMWithContext). If invalid, one repair attempt (resend with schema + invalid JSON); then fallback to raw text.
- **Citation enforcement:** After parse, `returned.citations = returned.citations.filter(url => allowed.includes(url))`.

---

## 8. Typed Errors & UI

- **Server:** Map failures to CONFIG_ERROR, RETRIEVAL_ERROR, LLM_ERROR, RATE_LIMITED, UNKNOWN_ERROR. Response shape: `{ ok: boolean, errorType?: string, assistantMessage?: string, citations?: string[], sessionId? }`. Log request_id and pipeline stage.
- **UI:** On errorType RATE_LIMITED show “Too many messages…”; RETRIEVAL_ERROR “I’m having trouble searching site info…”; LLM_ERROR “Assistant is having trouble…”; CONFIG_ERROR generic + log; UNKNOWN_ERROR generic.

---

## 9. Eval Harness

- Benchmark file: e.g. JSON array of `{ question, pageContext?, expectedUrls?, intent? }` (50–100 items). Include vague, exact-match, and previously failing questions.
- Metrics (document in doc or script): contextFoundRate, citation precision, directness/hallucination flags, low-confidence quality, error rate by type, latency. No requirement to run in tickets; structure only.

---

## 10. Suggested Implementation Order

1. Logging/tracing (request_id, stage timings).
2. Page context injection (API + LLM + prompt).
3. Query transformation (multi-query) + integrate in retrieve.
4. Two-stage retrieval (candidateTopK, rerank, finalTopK).
5. Hybrid keyword retrieval (schema + RPC + union in retrieve).
6. Neighbor expansion (optional).
7. Low-confidence clarifier (replace fallback, page-aware).
8. Prompt structure (RESPONSE SHAPE, WHEN CONTEXT WEAK, VOICE).
9. Structured output hardening + citation filter.
10. Typed errors + API response + UI handling.
11. Eval harness (benchmark set + metrics doc/script).

---

## 11. Reference Docs

- CLAUDE.md
- docs/plans/claude-workflow-opt.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/plans/specs/chatbot-rag-ux-spec.md
- docs/chatbot-expansion.md (full implementation notes)
- docs/chatbot-feature.md (setup, current state)
- docs/skills-catalog.md (skills for tickets; use .claude/skills/CATALOG.md if catalog lives there)
- lib/design-tokens.ts (for UI)

---

## 12. Ticket Order

Execute **chatbot-v2** tickets in numerical order (01 → 11). Dependencies: logging first; page context before clarifier/prompt; query transform before two-stage; two-stage before hybrid; rerank before neighbor expansion; structured output and errors can follow prompt/retrieval work.
