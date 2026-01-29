## 08 — Service page: Accessibility & Mobile Readiness Audit (`/services/accessibility`)

## Task

- Create the **Accessibility & Mobile Readiness Audit** detail page at `/services/accessibility`, using `docs/content/accessibility-mobile-opt.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections using the shared service-page pattern.

## Mandatory skill usage

- **using-superpowers**: Invoke first; orchestrate the rest of the skills.
- **brainstorming**: Clarify the dual emphasis on accessibility and mobile UX, and the audiences most impacted.
- **frontend-design**: Present accessibility and mobile-readiness concepts clearly, reflecting the site’s own accessibility values.
- **interactive-portfolio**: Make this page reinforce your credibility as a thoughtful, inclusive engineer.
- **copywriting**: Refine copy around inclusivity, legal risk, and user experience without fear-mongering.
- **content-marketer**: Align structure with how teams evaluate accessibility/mobility audits as a service.
- **marketing-psychology**: Ethically communicate urgency and responsibility while avoiding manipulative tactics.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Keep routing and metadata clean.
- **Claude Code Guide**: Maintain tight scope and verifiable edits.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/accessibility-mobile-opt.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/accessibility/page.tsx (create)

> For any new shared components, request an Explicit Allowed Files extension.

## Hard Limits

- Do **not** modify other service pages or landing pages in this ticket.
- Do not change global SEO configuration; use `generateMetadata` for this page only.
- Preserve pricing and key claims from `docs/content/accessibility-mobile-opt.md`, editing only for clarity/tone.
- **If blocked:** Stop and ask; don’t widen scope.

## Instructions

1. Use skills as above; read `docs/content/accessibility-mobile-opt.md` and the services-pages spec.
2. Create `app/services/accessibility/page.tsx`:
   - Use `generateMetadata` for a descriptive title and meta description (e.g. “Accessibility & Mobile Readiness Audit for Modern Websites”).
   - Implement the hero from the Title, Subheadline, and CTA in the content doc.
3. Implement sections:
   - **Problem → Promise**: frame accessibility and mobile UX as both ethical and practical imperatives.
   - **What You Get / What’s Included**: list the audit coverage and outcomes.
   - **Use Cases / Who This Helps**: highlight orgs and scenarios where this matters most.
   - **Timeline & Delivery**: include how the audit and fixes are delivered.
   - **CTA Repeat**: final call-to-action banner to `/contact` or `/contact#form`.
4. Use `Container`, consistent typography, and section separators as per design-guidelines and design-refinement.
5. Add internal links:
   - To `/services` for the full list of services.
   - To `/contact` for starting an audit.
6. Verify `/services/accessibility` renders correctly, remains accessible, and is visually consistent with the site.

## Done Criteria

- `/services/accessibility` exists and accurately reflects `docs/content/accessibility-mobile-opt.md`.
- The page uses `generateMetadata` with an accurate, SEO-conscious title and meta description.
- Layout and styling follow the design system and shared pattern.
- Internal links to `/services` and `/contact` are present.
- Only `app/services/accessibility/page.tsx` was created/modified; changes are summarized succinctly.

