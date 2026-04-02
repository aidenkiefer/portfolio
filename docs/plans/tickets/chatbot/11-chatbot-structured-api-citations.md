## 11 — Chatbot: Structured API response and citations

## Task

- Extend **POST /api/chat** so the response is **structured**: `{ answer, citations[], recommended_services?, cta?, sessionId }`. `answer` is markdown; `citations` are URLs (e.g. `/services/chatbots`); optional `recommended_services` and `cta` for conversion.
- **Flow:** Validate request → create/load session → save user message → embed user message → retrieve top 6–10 chunks from site_embeddings (using lib/chatbot from ticket 10) → build LLM prompt with system + retrieved context + conversation history → call LLM with structured-output instruction → parse answer, citations, recommended_services, cta → save assistant message (store full answer in chat_messages) → return structured response.
- **Low confidence:** If retrieval scores below a threshold, return a single fallback message (e.g. “I’m not fully sure based on the info on this site. Want to tell me your business type and goals?”) and empty citations.

## Mandatory skill usage

- **llm-app-patterns**, **rag-engineer** (docs/skills-catalog.md): RAG retrieval, context injection, production LLM patterns.
- **prompt-engineer**, **prompt-engineering-patterns** (docs/skills-catalog.md): System prompt and structured-output instructions for answer + citations + optional recommended_services/cta.
- **api-security-best-practices** (docs/skills-catalog.md): Input validation, no leaking of internals.
- **context-window-management**, **conversation-memory** (docs/skills-catalog.md): Managing LLM context and persistent conversation memory.
- **llm-application-dev-ai-assistant** (docs/skills-catalog.md): Conversational interfaces and chatbot patterns.
- **nextjs-best-practices** (docs/skills-catalog.md): Next.js App Router API route patterns and best practices.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-rag-ux-spec.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/plans/claude-workflow-opt.md
- docs/skills-catalog.md
- lib/chatbot/* from tickets 01, 02, 10 (Supabase client, embed, chunk, rag-types)

## Allowed Files (ONLY these)

- app/api/chat/route.ts (or app/api/chatbot/route.ts)
- lib/chatbot/retrieve.ts (create) — query embedding + top-k from site_embeddings
- lib/chatbot/llm.ts (or equivalent) — extend for structured output and context
- lib/chatbot/types.ts — extend response type: answer, citations[], recommended_services?, cta?, sessionId

> If you need a new file for prompt building, ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not change the public request shape (message, sessionId?); only extend the response.
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Implement lib/chatbot/retrieve.ts: embed the user message (reuse embed from ticket 10), query site_embeddings for top 6–10 similar chunks, return chunks with url/title/section for citations.
2. Define low-confidence threshold (e.g. max similarity score); when below, return fallback message and empty citations without calling the LLM with context.
3. Extend LLM call: build system prompt + retrieved context + conversation history; instruct LLM to answer from context and output structured fields (answer, citations as URLs, optional recommended_services, optional cta). Parse response into the new shape.
4. Update route: after LLM, save assistant message (full answer) to chat_messages; return `{ answer, citations, recommended_services?, cta?, sessionId }`.
5. Keep existing error handling and validation; do not log message content or PII.

## Done Criteria

- POST /api/chat returns the structured response shape; answer is markdown; citations are URLs.
- Retrieval uses site_embeddings and injects context into the LLM prompt.
- Low-confidence path returns fallback message and empty citations.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
