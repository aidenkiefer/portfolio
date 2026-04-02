## 05 — Chatbot: Embed widget on service pages

## Task

- **Embed the chat widget** so it appears on all routes under `/services` (including `/services` and every `/services/*` page).
- Prefer adding **app/services/layout.tsx** that wraps `children` with the chat widget (and any chatbot provider from ticket 04). If the widget or provider must be client components, ensure the layout composes them correctly (e.g. a client wrapper that renders the widget only when pathname is under /services, or a server layout that renders a client widget component).

## Mandatory skill usage

- **nextjs-app-router-patterns**, **frontend-design** (docs/skills-catalog.md): Use layout correctly; avoid unnecessary client boundaries; widget placement does not break existing service page layout.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/plans/claude-workflow-opt.md
- components/chatbot/* from tickets 03–04
- app/services/* structure

## Allowed Files (ONLY these)

- app/services/layout.tsx (create)
- components/chatbot/ChatWidget.tsx (modify only if needed for embed wrapper)
- components/chatbot/ChatbotProvider.tsx (modify only if needed for layout usage)

> If the widget must be conditionally rendered by pathname and that requires a different structure, stop and ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not add the widget to the root layout or non-services pages in this ticket (can be a later enhancement).
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Create `app/services/layout.tsx` that renders `children` and the chat widget. Ensure the widget (and provider if used) are client components and do not block server rendering of the page content.
2. Ensure the layout renders the widget on `/services`, `/services/chatbots`, and other `/services/*` routes (pathname under /services).
3. Ensure the floating button does not obscure critical UI (e.g. CTAs); use z-index and position per design guidelines.

## Done Criteria

- The chat widget is visible on all service pages.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
