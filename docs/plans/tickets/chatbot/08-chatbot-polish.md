## 08 — Chatbot: Loading, errors, accessibility, design tokens

## Task

- **Polish the chat UI**: loading state (“Thinking…” or similar) while waiting for the API; error state (friendly message and retry) when the request fails; ensure all interactive elements have accessible labels and keyboard support. Use **lib/design-tokens.ts** consistently for colors and spacing.
- Optionally add a small “Powered by …” or “AI assistant” disclaimer in the drawer footer for transparency.

## Mandatory skill usage

- **frontend-design**, **accessibility-compliance-accessibility-audit** (docs/skills-catalog.md): Design tokens and guidelines; labels, focus, keyboard.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/design-guidelines.md
- docs/design-refinement.md
- lib/design-tokens.ts
- docs/plans/claude-workflow-opt.md
- components/chatbot/* from tickets 03–05

## Allowed Files (ONLY these)

- components/chatbot/ChatWidget.tsx
- components/chatbot/ChatDrawer.tsx (if separate)
- components/chatbot/ChatMessageList.tsx (if separate)
- components/chatbot/ChatInput.tsx (if separate)
- app/globals.css (only if necessary for chatbot-specific overrides)

> If you need new subcomponents, stop and ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not change API contract or backend behavior.
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Loading: when a message is sent and the request is in flight, show a clear loading indicator (e.g. “Thinking…” in the message list or near the input) and disable the send button.
2. Errors: on 4xx/5xx or network error, show a short, friendly message in the UI (e.g. “Something went wrong. Please try again.”) and a retry or “Send again” option. Do not show raw error details to the user.
3. Accessibility: ensure the floating button has an aria-label; the drawer has a role and close button is focusable; the input and send button are keyboard-usable; focus is managed when the drawer opens/closes if feasible.
4. Design tokens: replace any hardcoded colors or spacing with values from lib/design-tokens.ts (or Tailwind classes that map to the same tokens).
5. Optional: add a one-line disclaimer in the drawer footer (e.g. “AI assistant. Responses may be incomplete.”).

## Done Criteria

- Loading and error states are clear and user-friendly.
- Chatbot UI meets basic accessibility (labels, keyboard, focus).
- Design tokens are used consistently.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
