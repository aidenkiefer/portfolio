## 04 — Chatbot: Session context and client persistence

## Task

- Add **client-side session persistence** for the chatbot: generate or read `sessionId` (UUID) from `sessionStorage`, and provide it to the chat UI so that each conversation is tied to a session and the API can create/load sessions correctly.
- Optionally provide a **React context** (e.g. `ChatbotProvider`) that exposes `sessionId`, `messages`, `sendMessage`, and `isLoading` so the widget from ticket 03 can use it without prop drilling. If the widget in 03 already manages state and calls the API, this ticket can add only sessionId persistence (e.g. a hook or module that reads/writes sessionStorage) and wire it into the existing send flow.

## Mandatory skill usage

- **react-best-practices** (docs/skills-catalog.md): Client-only context or hook; no server component usage for sessionStorage.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/plans/claude-workflow-opt.md
- components/chatbot/* from ticket 03

## Allowed Files (ONLY these)

- components/chatbot/ChatbotProvider.tsx (create) — or hooks/useChatbotSession.ts
- lib/chatbot/sessionStorage.ts (create) — optional: UUID generation and storage
- components/chatbot/ChatWidget.tsx (modify to consume context or hook)

> If you need to add a different structure, stop and ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not store message content in sessionStorage; only sessionId.
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Create a way to get or create a sessionId (UUID) and persist it in sessionStorage (e.g. key `chatbot_session_id`). Expose it via a hook or context.
2. Ensure the chat send flow (in ChatWidget or provider) includes this sessionId in the POST /api/chat body.
3. If you introduce a provider, wrap only the widget (or the layout that contains the widget) so the rest of the app is unchanged.
4. On first open or new session, sessionId can be generated client-side; the API will create the session row when the first message is sent with that id, or you can let the API always create the session and return the id (then store that in sessionStorage). Spec allows either; choose one and document briefly.

## Done Criteria

- sessionId is persisted in sessionStorage and sent with each POST /api/chat request.
- Chat widget (or provider) uses this sessionId so conversations are continuous per browser session.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
