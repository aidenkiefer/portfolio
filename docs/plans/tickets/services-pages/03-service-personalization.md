## 03 — Service page: AI-Powered Web Personalization (`/services/personalization`)

## Task

- Create the **AI-Powered Web Personalization** detail page at `/services/personalization`, using `docs/content/ai-personalization.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections consistent with the site’s design system.

## Mandatory skill usage

- **using-superpowers**: Invoke first to coordinate the other skills for this page.
- **brainstorming**: Clarify the personalization narrative (who it’s for, what it changes, where it’s applied) before coding.
- **frontend-design**: Design sections and callouts that visually communicate dynamic, adaptive experiences without being flashy.
- **interactive-portfolio**: Ensure the page shows your thoughtfulness about UX and systems, not just marketing claims.
- **copywriting**: Refine personalization copy for clarity and concrete outcomes (engagement, retention, conversions).
- **content-marketer**: Align headings and structure with likely personalization-related search and evaluation flows.
- **marketing-psychology**: Apply ethical persuasion for personalization benefits without overpromising or being creepy.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Implement the route and metadata cleanly.
- **Claude Code Guide**: Maintain small, verifiable edits and stick to ticket scope.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/ai-personalization.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/personalization/page.tsx (create)

> If you need shared components for repeated patterns across service pages, stop and ask to extend Allowed Files rather than creating them here.

## Hard Limits

- Do **not** change any other service page or the Services landing page in this ticket.
- Do not modify global SEO configuration; only use `generateMetadata` for this page.
- Preserve pricing and claims from the content doc; only adjust wording for clarity and flow.
- **If blocked:** Stop and ask; don’t broaden the scope on your own.

## Instructions

1. Use skills as above; read `docs/content/ai-personalization.md` and the services-pages spec.
2. Create `app/services/personalization/page.tsx`:
   - Use `generateMetadata` to set a descriptive title and meta description (e.g. “AI-Powered Web Personalization for Startups & DTC Brands”).
   - Implement hero based on the Title, Subheadline, and CTA from the content doc.
3. Implement sections:
   - **Problem → Promise**: articulate the static-site problem and dynamic-experience promise.
   - **What You Get**: list the types of personalization and strategy work delivered.
   - **Use Cases / Examples That Convert**: show concrete personalization scenarios.
   - **Timeline & Delivery**: include turnaround and phases.
   - **CTA Repeat**: final banner with a clear CTA to `/contact` or `/contact#form`.
4. Use `Container`, proper heading hierarchy, section separators, and subtle accent elements as described in design-guidelines and design-refinement.
5. Add internal links:
   - To `/services` (e.g. “See all services”).
   - To `/contact` for consultation or getting started.
6. Verify `/services/personalization` renders correctly, is responsive, and matches the portfolio’s tone and visual system.

## Done Criteria

- `/services/personalization` exists and implements the structure and content from `docs/content/ai-personalization.md`.
- The page uses `generateMetadata` with a clear, accurate title and meta description.
- Visual and typographic treatment adheres to design-guidelines and design-refinement.
- Internal links to `/services` and `/contact` are present and appropriate.
- Only `app/services/personalization/page.tsx` was created/modified; changes are summarized concisely.

*** End Patch`"} ***!
