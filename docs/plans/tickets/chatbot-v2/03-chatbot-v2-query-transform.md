# 03 — Chatbot v2: Query transformation (multi-query rewrite)

## Task

Add query transformation before retrieval so underspecified or differently phrased user queries still retrieve relevant chunks. Implement **multi-query rewrite**: use the LLM to produce 3–5 alternate retrieval queries from the user message; run retrieval for each; union and dedupe results; use the combined set for the rest of the pipeline.

- **New module:** `lib/chatbot/queryTransform.ts`.
  - Export: `transformQueryForRetrieval(input: { userQuery: string; pageContext?: { pathname?: string }; conversationSummary?: string }) => Promise<{ queries: string[]; strategyUsed: string }>`.
  - Strategy: multi-query rewrite. Call LLM with a short prompt: given the user query (and optional page route), output 3–5 alternate short retrieval queries (concrete nouns, service names, goal keywords). Strict JSON format: `{ "queries": ["...", "..."] }`. strategyUsed = `"multi_query"`.
- **Retrieve:** In `lib/chatbot/retrieve.ts`, before embedding: call transformQueryForRetrieval to get queries. For each query, call embedText and match_documents with a **lower** threshold (e.g. 0.25) and match_count per query (e.g. 10). Union all results; dedupe by document id (and optionally section or content hash). Sort by similarity descending; take top RETRIEVAL_CONFIG.topK (or a new candidateTopK if you introduce it; for this ticket, re-use topK). Log original user query, transformed queries, and per-query top scores / final deduped count (reuse existing [Chat API] style).
- **Config:** Add a retrieval config for “candidate” threshold used in this multi-query phase (e.g. match_threshold 0.25 for each sub-query). Keep existing similarityThreshold for the final confidence check (hasHighConfidence on the merged list).

## Mandatory skill usage

- **rag-engineer**, **rag-implementation** (docs/skills-catalog.md): Retrieval pipeline and query expansion.
- **prompt-engineer**, **prompt-engineering-patterns** (docs/skills-catalog.md): Short, strict prompt for multi-query JSON.
- **llm-application-dev-prompt-optimize** (docs/skills-catalog.md): LLM call for structured output (queries array).
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Sections 2.2, 2.3, 4; chatbot-expansion 1.1)
- docs/chatbot-expansion.md (Section 1.1 Query Transformations)
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- lib/chatbot/queryTransform.ts (create)
- lib/chatbot/retrieve.ts
- lib/chatbot/embed.ts (read-only; do not change)
- lib/chatbot/llm.ts (only if you need a small helper for the transform LLM call; prefer a minimal fetch to the same provider used elsewhere, or reuse existing client with a tiny system prompt)

> If you need a separate “transform” LLM call, use the same provider (Anthropic/OpenAI) as in llm.ts; keep prompt minimal to control cost. If blocked, stop and ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not change the API route or the response shape in this ticket.
- **If blocked:** Stop and ask to extend Allowed Files.

## Context

- **retrieve.ts:** `retrieveRelevantChunks(query)` currently: embedText(query) → match_documents(query_embedding, threshold 0.43, count 8) → map to RetrievedChunk[]. No transformation.
- **embed.ts:** embedText(text) returns Promise<number[]>.
- **match_documents:** Supabase RPC; params query_embedding, match_threshold, match_count. Returns rows with id, url, title, section, content, tags, updated_at, similarity.

## Instructions

1. Create lib/chatbot/queryTransform.ts. Implement transformQueryForRetrieval: call LLM with a prompt that asks for 3–5 alternate retrieval queries in JSON { queries: string[] }. Input: userQuery, optional pageContext.pathname, optional conversationSummary. Parse JSON; if parsing fails, return { queries: [userQuery], strategyUsed: "none" }. Validate queries is an array of non-empty strings; trim and dedupe.
2. In retrieve.ts: at the start of retrieveRelevantChunks, call transformQueryForRetrieval({ userQuery: query, pageContext }). For each transformed query, embedText(q) and supabase.rpc('match_documents', { query_embedding, match_threshold: 0.25 (or config), match_count: 10 }). Collect all results; dedupe by document id (keep highest similarity per document). Sort by similarity desc; take top RETRIEVAL_CONFIG.topK. Log [Chat API] with request_id if available (from ticket 01), original query, transformed queries, and final deduped count.
3. Pass the merged list through the rest of the existing flow (hasHighConfidence, formatContextForLLM, etc.). Ensure hasHighConfidence still uses existing similarityThreshold against the merged chunks.

## Done Criteria

- transformQueryForRetrieval exists and returns 3–5 queries for typical user messages; on failure returns single original query.
- retrieveRelevantChunks uses multi-query retrieval, dedupes by document id, and returns top topK chunks; logging includes transformed queries and counts.
- Only the listed files were modified; changes summarized in ≤5 bullets.
