# 02 — Chatbot v2: Page context injection

## Task

Pass current page route (and optional title) from client to API and into the LLM system prompt so answers can be tailored to the page.

- **Request:** Accept optional `pathname` (string) and `pageTitle` (string) in POST body with `message` and `sessionId`. Validate pathname is a path (starts with `/`, no full URLs).
- **API:** Pass pathname and pageTitle to `callLLMWithContext` as pageContext. Do not change retrieval in this ticket.
- **LLM:** Extend `callLLMWithContext(messages, context, citations, pageContext?)`. When pageContext present, add "PAGE CONTEXT" block to system prompt: "Current route: {pathname}. Page title: {pageTitle}." and instruct model to use it to tailor emphasis and next steps.

## Mandatory skill usage

- **llm-application-dev-prompt-optimize**, **prompt-engineering-patterns** (docs/skills-catalog.md): System prompt and PAGE CONTEXT.
- **api-security-best-practices** (docs/skills-catalog.md): Validate pathname; reject full URLs.
- **nextjs-best-practices** (docs/skills-catalog.md): API route and body handling.
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Sections 2.1, 2.4, 2.5; Section 6)
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- app/api/chat/route.ts
- lib/chatbot/llm.ts
- lib/chatbot/types.ts (add pathname?, pageTitle? to request type if here)
- components/chatbot/ChatWidget.tsx (send pathname and optional pageTitle in POST body)

> If request type lives elsewhere, add that file and stop if blocked.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not change retrieval in this ticket.
- **If blocked:** Stop and ask to extend Allowed Files.

## Context

- **route.ts:** Body has message, sessionId. Calls callLLMWithContext(history, context, availableCitations) with no fourth arg.
- **llm.ts:** callLLMWithContext(messages, context, citations) — no pageContext. Builds system from SYSTEM_PROMPT + context + JSON instruction.
- **ChatWidget.tsx:** POST body is { message, sessionId }. Can add pathname (window.location.pathname), pageTitle (document.title).

## Instructions

1. In types: add optional pathname?, pageTitle? to request type. In route: read from body; validate pathname is path (starts with `/`, reasonable length, no protocol).
2. In route: when calling callLLMWithContext, pass fourth arg pageContext: { pathname?, pageTitle? } when pathname present.
3. In llm.ts: add pageContext?: { pathname?: string; pageTitle?: string } to callLLMWithContext. When building system prompt, if pageContext present append "PAGE CONTEXT: Current route: ... Page title: ..." and one line to use it to tailor answers.
4. In ChatWidget.tsx: include pathname (and optionally pageTitle) in POST body; client-side only (window.location.pathname, document.title).

## Done Criteria

- Client sends pathname (and optionally pageTitle); API validates and passes pageContext to callLLMWithContext.
- System prompt includes PAGE CONTEXT block when pageContext provided.
- Only listed files modified; changes summarized in ≤5 bullets.
