# 13 — Chatbot: Minimize into bubble and open/close animations

## Problem

The chatbot drawer currently sits at the edge of the viewport when closed (or just off-screen). It slides in from the right to open, so the panel feels like a separate panel that “previews” at the edge—barely visible but intrusive. The floating button is fixed in the bottom-right corner; the drawer is anchored at `bottom-0 right-0` (or `sm:bottom-6 sm:right-6`) and uses `translate-x-full` when closed. The result is an awkward relationship between button and panel: the UI does not feel like a single element that expands and collapses.

## Task

Redesign the open/close behavior so that:

1. **Closed state:** Only the chat bubble button is visible, pinned to the bottom-right corner (e.g. `bottom-6 right-6`). There is no visible panel or edge-peek; the panel is fully “inside” or “behind” the bubble from the user’s perspective.
2. **Open state:** The chat panel opens from that same corner so it clearly reads as “expanding from the bubble” rather than “sliding in from the edge.”
3. **Animation:** The transition between open and closed is an explicit open/close animation (expand/collapse, scale, morph, or combined) that reinforces “minimizing into the bubble” on close and “expanding from the bubble” on open. Animation must remain accessible (prefer reduced motion when requested) and consistent with the portfolio’s restrained, calm design (see docs/design-guidelines.md).

Implementation must not change API behavior, session handling, or message/citation logic—only the layout, positioning, and open/close animation of the widget and drawer.

---

## Animation proposal requirement (before implementation)

Using **frontend-design**, **UI animation**, and any other helpful skills from docs/skills-catalog.md (e.g. **ui-ux-designer**, **tailwind-design-system**, **mobile-design**, **accessibility-compliance-accessibility-audit**), **propose exactly 5 open/close animation concepts** that satisfy the “minimize into bubble” behavior above. Order them from **least flashy to most flashy**.

For each concept, provide:

1. **Name** — Short label (e.g. “Corner scale”, “Slide + scale”).
2. **Description** — 2–4 sentences: what the user sees on open and on close (e.g. “On close, the panel scales down toward the button position while opacity decreases…”).
3. **Technical approach** — Brief note on how to achieve it (CSS transform/opacity, transform-origin, optional Framer Motion or CSS-only, etc.).
4. **Flash level** — Why it sits at this position in the 1–5 order (e.g. “Minimal motion, fast duration” = least flashy; “Multi-step with spring and overlay” = more flashy).

Then:

- **Recommend** one option that best fits the portfolio’s design guidelines (restrained, calm, content-first).
- **Implement** the recommended option in the codebase (or, if the user has specified a different choice, implement that one). Implementation must respect `prefers-reduced-motion` (e.g. shorter or no animation when requested).

---

## Mandatory skill usage

- **frontend-design** (docs/skills-catalog.md): Layout, positioning, visual hierarchy, and making the panel feel like it minimizes into the bubble.
- **ui-ux-designer** (docs/skills-catalog.md): Interface behavior, animation concepts, and consistency with design system.
- **accessibility-compliance-accessibility-audit** (docs/skills-catalog.md): Focus management, reduced motion, and keyboard/AT support for the animated panel.
- **react-best-practices** (docs/skills-catalog.md): Component structure, state, and performance for animation.
- **tailwind-design-system** or **tailwind-patterns** (docs/skills-catalog.md): Use design tokens and Tailwind for layout and transition utilities where applicable.

Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

---

## Reference docs (read-only)

- CLAUDE.md
- docs/design-guidelines.md (restrained, calm, avoid excessive motion)
- docs/plans/specs/chatbot-feature-spec.md
- docs/plans/specs/chatbot-rag-ux-spec.md
- lib/design-tokens.ts
- docs/plans/claude-workflow-opt.md
- docs/skills-catalog.md

---

## Allowed files (ONLY these)

- components/chatbot/ChatWidget.tsx
- app/globals.css (only if necessary for chatbot-specific animation or reduced-motion overrides)

If a dedicated animation or layout component is needed (e.g. ChatDrawer with its own transition), add it under `components/chatbot/` and list it in Allowed Files. Do not change the API route, lib/chatbot/* (except as noted in Hard Limits), or app/services/layout.tsx beyond what is strictly required for embedding.

---

## Hard limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not change the chat API, session storage, or message/citation data flow; only the visual presentation and open/close behavior of the widget.
- **If blocked:** Stop and ask to extend Allowed Files.

---

## Instructions

1. **Propose** the 5 animation concepts (least → most flashy) with Name, Description, Technical approach, and Flash level as above. Recommend one that fits the design guidelines.
2. **Implement** the recommended (or user-specified) animation:
   - Position the drawer so its closed state is aligned with the bubble (same anchor: bottom-right). The panel should expand from that point on open and collapse toward it on close.
   - Use CSS and/or React state to drive the animation (Tailwind transition-* or a small animation library if already in the project). Avoid layout shift and overflow issues on mobile and desktop.
   - Honor `prefers-reduced-motion: reduce` (shorter duration or no transform animation).
3. Ensure the floating button remains the single visible control when closed; no persistent panel edge or “preview” when the drawer is closed.
4. Preserve existing behavior: focus management on open, scroll to bottom, overlay on small screens if applicable, and all existing buttons (reset, close) and content (messages, input, citations, disclosure).

---

## Done criteria

- Five animation concepts are documented (least to most flashy) with name, description, technical approach, and flash level; one is recommended and justified.
- The chosen animation is implemented: closed = only bubble visible; open = panel expands from the bubble; close = panel minimizes into the bubble.
- Reduced motion is respected when the user prefers it.
- No change to API, session, or message logic; only layout, positioning, and animation.
- Only the listed files were modified; changes are summarized in a short Implementation Summary (≤5 bullets).
