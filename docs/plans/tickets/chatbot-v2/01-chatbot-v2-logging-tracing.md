# 01 — Chatbot v2: Logging and tracing (request_id, pipeline stages)

## Task

Add request correlation and pipeline-stage logging to the chat API. Do not change response shape or retrieval/LLM behavior.

- Generate a request_id at the start of each POST /api/chat (e.g. crypto.randomUUID() or short random string).
- Log with [Chat API] and request_id at: session create/load; retrieval start/end (chunk count); LLM start/end when used; low-confidence path. Include elapsed time for retrieval and LLM where practical.
- Do not log message content, sessionId, or PII; only request_id, stage name, counts, timings.

## Mandatory skill usage

- **error-handling-patterns** (docs/skills-catalog.md): Structured logging and error context.
- **nodejs-backend-patterns** (docs/skills-catalog.md): API route and logging conventions.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Section 2.1)
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- app/api/chat/route.ts

If the route is split, stop and ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not change request/response body or retrieval/LLM logic; only add logging and request_id.
- If blocked: Stop and ask to extend Allowed Files.

## Context (current route)

app/api/chat/route.ts: Single try/catch; logs [Chat API] plus message on error; returns 500. No request_id. Flow: validate, rate limit, session, insert user message, retrieveRelevantChunks, hasHighConfidence or getLowConfidenceFallback or formatContext and callLLMWithContext, insert assistant, return JSON.

## Instructions

1. At the top of the POST handler, generate request_id (e.g. crypto.randomUUID()).
2. Log at: after session resolve; before and after retrieveRelevantChunks (request_id, retrieval start/end, chunk count, ms); before and after callLLMWithContext when used (request_id, llm start/end, ms); when low-confidence path (request_id, low_confidence).
3. Do not log message content, sessionId, or PII.

## Done Criteria

- Every POST generates request_id and logs session, retrieval start/end with count, and either low_confidence or LLM start/end.
- No change to response body or retrieval/LLM behavior.
- Only app/api/chat/route.ts modified; changes summarized in 5 bullets or fewer.
