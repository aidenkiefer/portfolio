## 03 — Chatbot: Chat UI component

## Task

- Build the **chat widget** UI: floating button, drawer (slide-in panel), message list, input field, and send button.
- Use **lib/design-tokens.ts** and **docs/design-guidelines.md** / **docs/design-refinement.md** for colors, typography, and spacing. Restrained, calm; no heavy gradients or flashy motion.
- Component should be a client component (useState for open/close, messages, input). Do not call the API in this ticket if ticket 04 will own sessionId and fetch; otherwise implement a minimal call to POST /api/chat for send.

## Mandatory skill usage

- **frontend-design**, **react-best-practices** (docs/skills-catalog.md): Match portfolio design system; use design tokens; client component, minimal re-renders, accessible markup.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/design-guidelines.md
- docs/design-refinement.md
- lib/design-tokens.ts
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- components/chatbot/ChatWidget.tsx (create)
- components/chatbot/ChatDrawer.tsx (create) — optional: split drawer
- components/chatbot/ChatMessageList.tsx (create) — optional: split message list
- components/chatbot/ChatInput.tsx (create) — optional: split input
- app/globals.css (only if needed for chatbot-specific styles; prefer Tailwind + tokens)

> If the project uses a specific component folder pattern, stop and ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not embed the widget in the layout in this ticket (ticket 05).
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Create a floating button (fixed bottom-right) with an accessible label (e.g. “Open chat”). Use accent primary or neutral from design tokens.
2. Create a drawer that opens when the button is clicked: header (“Chat” or “Questions?”), scrollable message list area, input + send button at bottom, close button.
3. Message list: display messages with clear user vs assistant styling (e.g. alignment or bubbles). No timestamps required for v1.
4. Input: controlled input, send on button click or Enter; disable send while loading. Do not submit empty messages.
5. If ticket 04 is not yet implemented, use local state for messages and a one-off fetch to POST /api/chat on send; otherwise integrate with context from ticket 04 in a follow-up or combine in ticket 05.
6. Use Tailwind and design tokens; keep motion minimal (e.g. drawer slide only).

## Done Criteria

- Chat widget component exists with button, drawer, message list, and input.
- Styling uses design tokens and matches design guidelines.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
