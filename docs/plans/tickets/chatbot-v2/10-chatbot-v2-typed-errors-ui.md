# 10 — Chatbot v2: Typed errors and UI recovery

## Task

Introduce typed errors: CONFIG_ERROR, RETRIEVAL_ERROR, LLM_ERROR, RATE_LIMITED, UNKNOWN_ERROR. API returns ok: boolean and errorType on failure; UI shows specific message per type.

- API: On failure return 200 with { ok: false, errorType, error?: string, sessionId? } (or 429 for RATE_LIMITED with same body). Map retrieval failure to RETRIEVAL_ERROR, LLM failure to LLM_ERROR, missing env to CONFIG_ERROR. Log request_id and errorType.
- Types: Extend response with ok, errorType?, error?.
- UI: If !ok, switch on errorType: RATE_LIMITED "Too many messages..."; RETRIEVAL_ERROR "I'm having trouble searching site info..."; LLM_ERROR "Assistant having trouble..."; else generic. Do not expose stack or server details.

## Mandatory skill usage

- **error-handling-patterns**, **react-ui-patterns**, **api-security-best-practices**, **accessibility-compliance-accessibility-audit** (docs/skills-catalog.md).
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Sections 2.1, 2.7, 8)
- docs/chatbot-expansion.md (Section 5)
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- app/api/chat/route.ts
- lib/chatbot/types.ts
- components/chatbot/ChatWidget.tsx

## Hard Limits

- Do not expose stack traces or internal errors to client. Do not run shell commands or verification (CLAUDE.md). If blocked, stop and ask to extend Allowed Files.

## Instructions

1. Types: add ok, errorType?, error? to response. Document errorType values.
2. Route: wrap retrieval and LLM in try/catch; set errorType; return { ok: false, errorType, sessionId? }. Keep 429 for rate limit with errorType in body.
3. ChatWidget: parse response; if !ok show message by errorType in same error area as today.

## Done Criteria

- API returns ok and errorType on failure; UI shows specific messages per type. Only listed files modified; summary in 5 bullets or fewer.
