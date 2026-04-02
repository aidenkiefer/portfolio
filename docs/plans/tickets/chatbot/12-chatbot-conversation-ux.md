## 12 — Chatbot: Conversation UX (greeting, quick-start, markdown, citations, reset, disclosure)

## Task

- **First message:** When the drawer opens and there are no messages, show one assistant message: “Hey! I’m Aiden’s site assistant. Ask me anything about his services, pricing, timelines, or what would work best for your business.”
- **Quick-start buttons:** Up to 6 clickable suggested prompts, e.g. “Which service is best if I want more leads?”, “Can you explain the AI chatbot service?”, “How fast can these be delivered?”, “What’s the pricing and process?”, “What tech stack do you use?”, “How do I get started?”. On click, send as user message (no duplicate if already sent).
- **Markdown:** Render assistant `answer` as markdown in the message bubble (use a small, safe markdown-to-React renderer).
- **Citations:** If `citations` from the API is non-empty, show links below the message (e.g. “Sources: /services/chatbots, /services”).
- **Reset:** Button or control to clear messages and start a new conversation (new sessionId; clear client-side session storage for this widget).
- **Disclosure:** “This demo is powered by AI and may make mistakes. For specific details, contact Aiden directly.” in the drawer footer or near the input.

## Mandatory skill usage

- **frontend-design**, **react-best-practices** (docs/skills-catalog.md): Layout, message bubble, buttons, design tokens.
- **react-ui-patterns** (docs/skills-catalog.md): Loading/empty states, integrating new response shape (answer, citations).
- **accessibility-compliance-accessibility-audit** (docs/skills-catalog.md): Labels, keyboard, focus for new controls and links.
- **ui-ux-designer** (docs/skills-catalog.md): Interface designs, wireframes, design systems, accessibility standards.
- **nextjs-app-router-patterns** (docs/skills-catalog.md): Next.js 14+ App Router patterns for frontend components.
- **tailwind-design-system**, **tailwind-patterns** (docs/skills-catalog.md): Design systems with Tailwind CSS v4, component design tokens.
- **mobile-design** (docs/skills-catalog.md): Mobile-first design, touch interactions, responsive chatbot interface.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-rag-ux-spec.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/design-guidelines.md
- lib/design-tokens.ts
- docs/plans/claude-workflow-opt.md
- docs/skills-catalog.md
- components/chatbot/* from tickets 03–05, 08

## Allowed Files (ONLY these)

- components/chatbot/ChatWidget.tsx
- components/chatbot/ChatDrawer.tsx (if separate)
- components/chatbot/ChatMessageList.tsx (if separate)
- components/chatbot/ChatInput.tsx (if separate)
- components/chatbot/QuickStartPrompts.tsx (create) — optional: only if you need a dedicated component for quick-start buttons
- app/globals.css (only if necessary for chatbot-specific overrides)

> If you need a new subcomponent (e.g. MarkdownMessage), add it under components/chatbot/ and list it in Allowed Files after asking. Do not add verification steps.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not change the API route or backend; only consume the new response shape (answer, citations, recommended_services?, cta?).
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. On drawer open with no messages, insert and display the single initial greeting as an assistant message (client-side only; no API call for it).
2. Add quick-start prompts (up to 6) as buttons or links; on click, set input to the prompt text and send (or send directly); avoid sending the same prompt twice in one session if desired.
3. Update message rendering: use assistant `answer` (from API response) and render it as markdown; support inline and block elements safely.
4. When the API returns non-empty `citations`, render “Sources:” plus links (using citations as hrefs; same-origin paths like /services/chatbots).
5. Add a “New conversation” or “Reset” control; on action, clear local messages and sessionId so the next send creates a new session; update UI to show empty state and the initial greeting again.
6. Add disclosure text in the drawer footer or above/below the input: “This demo is powered by AI and may make mistakes. For specific details, contact Aiden directly.”
7. Use lib/design-tokens.ts for colors and spacing; ensure new controls have accessible labels and keyboard support.

## Done Criteria

- Initial greeting appears when drawer opens with no messages.
- Quick-start buttons send the specified prompts as user messages.
- Assistant messages render as markdown; citations appear as source links when present.
- Reset clears conversation and session; disclosure text is visible.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
