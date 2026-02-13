# Chatbot v2 — tickets

Execute these tickets **in order** (01 → 11). They implement the RAG optimization and reliability workstream from **docs/plans/specs/chatbot-v2-spec.md** and **docs/chatbot-expansion.md**.

- **CLAUDE.md** — execution rules (implementation only; no shell commands, no verification, no GitHub).
- **Spec:** docs/plans/specs/chatbot-v2-spec.md
- **Workflow:** docs/plans/claude-workflow-opt.md (one ticket at a time, Allowed Files, no QA in tickets).
- **Skills:** docs/skills-catalog.md (mandated skills in tickets come from here).

| # | Ticket | Scope |
|---|--------|--------|
| 01 | 01-chatbot-v2-logging-tracing.md | request_id, pipeline stage timings in API |
| 02 | 02-chatbot-v2-page-context.md | pathname/pageTitle in request; PAGE CONTEXT in LLM prompt |
| 03 | 03-chatbot-v2-query-transform.md | multi-query rewrite; queryTransform.ts; integrate in retrieve |
| 04 | 04-chatbot-v2-two-stage-rerank.md | candidateTopK + rerank module + finalTopK; confidence logic |
| 05 | 05-chatbot-v2-hybrid-keyword.md | tsvector + match_documents_keyword; union in retrieve |
| 06 | 06-chatbot-v2-neighbor-expansion.md | chunk_index; fetch neighbors after rerank; expand context |
| 07 | 07-chatbot-v2-low-confidence-clarifier.md | getLowConfidenceResponse; page-aware; 1 question + options |
| 08 | 08-chatbot-v2-prompt-structure.md | RESPONSE SHAPE, WHEN CONTEXT WEAK, VOICE in prompts.ts |
| 09 | 09-chatbot-v2-structured-output-citations.md | schema validation; citation filter; repair attempt in llm.ts |
| 10 | 10-chatbot-v2-typed-errors-ui.md | error taxonomy; API errorType; UI messages per type |
| 11 | 11-chatbot-v2-eval-harness.md | benchmark JSON; metrics doc/script structure |
