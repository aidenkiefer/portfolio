## 02 — Chatbot: POST /api/chat route

## Task

- Create **POST /api/chat** (or **POST /api/chatbot**) that: accepts `{ message, sessionId? }`; creates or loads a session in Supabase; appends the user message to `chat_messages`; calls the LLM (OpenAI or Anthropic) with a system prompt and conversation history; appends the assistant message to `chat_messages`; returns `{ assistantMessage, sessionId }`.
- Use the Supabase client from ticket 01. LLM provider: branch on env (e.g. if `ANTHROPIC_API_KEY` is set use Anthropic, else `OPENAI_API_KEY` for OpenAI). System prompt can be a short placeholder in this ticket; ticket 06 will refine it.
- Add the LLM SDK dependency (openai and/or @anthropic-ai/sdk) to package.json as needed.

## Mandatory skill usage

- **llm-app-patterns**, **llm-application-dev-ai-assistant** (docs/skills-catalog.md): Production LLM patterns; conversational interfaces and chatbot API design; system prompt + conversation history handling.
- **prompt-engineer** or **prompt-engineering-patterns** (docs/skills-catalog.md): Placeholder system prompt and conversation formatting for the LLM call.
- **brainstorming** (docs/skills-catalog.md): Confirm request/response shape and error handling before coding.
- **backend-security-coder** or **api-security-best-practices** (docs/skills-catalog.md): Validate input, truncate message length, avoid leaking secrets.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/chatbot-feature.md
- docs/plans/claude-workflow-opt.md
- lib/supabase/server.ts (or lib/chatbot/supabase.ts) from ticket 01

## Allowed Files (ONLY these)

- package.json (add openai and/or @anthropic-ai/sdk if not present)
- app/api/chat/route.ts (create) — or app/api/chatbot/route.ts
- lib/chatbot/llm.ts (create) — optional: encapsulate LLM call
- lib/chatbot/types.ts (create) — optional: request/response types

> If you need to add a shared validation schema (e.g. Zod), ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not log message content or PII.
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Create POST handler: parse JSON body, validate `message` (required, non-empty, max length e.g. 2000 chars), optional `sessionId` (UUID format).
2. Supabase: if `sessionId` provided, verify session exists; else create a new row in `chat_sessions` and use its id.
3. Insert user message into `chat_messages` (session_id, role 'user', content).
4. Fetch recent messages for this session (e.g. last 20) and build conversation history for the LLM.
5. Call LLM with a minimal system prompt (e.g. “You are a helpful assistant for a freelance engineer’s portfolio site.”) and the conversation history; get assistant reply.
6. Insert assistant message into `chat_messages`; return `{ assistantMessage, sessionId }`.
7. On error (DB or LLM), return 500 with a generic message; do not expose stack or details.

## Done Criteria

- POST /api/chat (or /api/chatbot) exists and accepts the specified body; returns the specified JSON.
- Sessions and messages are created/read in Supabase per spec data model.
- One LLM provider is used based on env; system prompt is a placeholder for ticket 06.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
