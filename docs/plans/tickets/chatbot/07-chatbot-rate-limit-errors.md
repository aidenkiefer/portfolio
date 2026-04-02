## 07 — Chatbot: Rate limiting and error handling

## Task

- Add **rate limiting** for POST /api/chat to avoid abuse and cost (e.g. per sessionId and optionally per IP). Use a simple in-memory store or a minimal dependency (e.g. a small LRU cache keyed by sessionId/IP with request counts and a reset window). Spec suggests something like 20 messages per session per hour; make the limit and window configurable via env or constants.
- Harden **error handling**: validate request body (e.g. Zod or manual checks); return 400 for invalid input, 429 for rate limit exceeded, 500 for server/LLM errors with a generic client message. Do not log message content or PII.

## Mandatory skill usage

- **api-security-best-practices**, **backend-security-coder** (docs/skills-catalog.md): Input validation, rate limiting, safe error responses; no leaking of stack traces or secrets to the client.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/plans/claude-workflow-opt.md
- app/api/chat/route.ts from ticket 02

## Allowed Files (ONLY these)

- app/api/chat/route.ts (modify)
- lib/chatbot/rateLimit.ts (create) — or inline in route
- package.json (add dependency only if needed for rate limiting, e.g. lru-cache)

> If the project already has a rate-limit utility, stop and ask to extend Allowed Files to use it.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not log message content or PII.
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Implement rate limiting: before processing the message, check a counter for the sessionId (and optionally IP from headers). If over the limit, return 429 with a short JSON message (e.g. “Too many messages; try again later.”). Increment counter after a successful request; use a time window (e.g. 1 hour) and reset or decay. In-memory is acceptable for v1 (single instance).
2. Validate request body: message required, non-empty, max length (e.g. 2000 chars); sessionId optional, UUID format if present. Return 400 with a clear error if invalid.
3. Ensure all catch paths return 500 with a generic message; do not expose internal errors or stack traces to the client.
4. In logs, do not include message content or sessionId in a way that could identify users; log only status codes and route.

## Done Criteria

- Rate limiting is in place (per sessionId and optionally IP) with configurable limit and window.
- Invalid input returns 400; rate limit exceeded returns 429; server errors return 500 with a generic message.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
