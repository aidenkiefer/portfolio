## 11 — Service page: API Integrations & Tool Connections (`/services/api-integrations`)

## Task

- Create the **API Integrations & Tool Wiring** detail page at `/services/api-integrations`, using `docs/content/api-tooling.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections using the shared layout.

## Mandatory skill usage

- **using-superpowers**: Invoke first to coordinate all skills.
- **brainstorming**: Clarify integration stories (CRMs, SaaS tools, data sources) and primary benefits.
- **frontend-design**: Present integration work in a structured, technical-yet-approachable layout aligned with design-guidelines.
- **interactive-portfolio**: Use the page to emphasize your ability to connect systems and reason about data flows.
- **copywriting**: Refine integration copy for clarity, concrete outcomes, and non-hypey language.
- **content-marketer**: Align structure with how teams evaluate integration work (reliability, maintainability, future-proofing).
- **marketing-psychology**: Ethically emphasize pain of disjointed systems and benefits of well-designed integrations.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Implement route and metadata cleanly.
- **Claude Code Guide**: Keep changes constrained and testable.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/api-tooling.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/api-integrations/page.tsx (create)

> For any shared components, request an Allowed Files extension first.

## Hard Limits

- Do **not** modify other service pages or the Services landing page.
- Do not adjust global SEO configuration; only use `generateMetadata` for this route.
- Preserve pricing and key claims from `docs/content/api-tooling.md`, editing only for clarity/tone.
- **If blocked:** Stop and ask; do not expand scope.

## Instructions

1. Use skills as above; read `docs/content/api-tooling.md` and the services-pages spec.
2. Create `app/services/api-integrations/page.tsx`:
   - Use `generateMetadata` with a descriptive title and meta description (e.g. “API Integrations & Tool Connections for Modern Stacks”).
   - Implement hero from the Title, Subheadline, and CTA in the content doc.
3. Implement sections:
   - **Problem → Promise**: describe disjointed tools and the promise of robust integrations.
   - **What You Get / Integration Package Includes**: list deliverables (auth, retries, monitoring, docs, etc.).
   - **Use Cases / Who This Helps**: highlight ideal integration scenarios and client types.
   - **Timeline & Delivery**: describe phases and timelines.
   - **CTA Repeat**: final CTA banner pointing to `/contact` or `/contact#form`.
4. Use `Container`, clear headings, and spacing with section separators and minimal accent touches per design docs.
5. Add internal links:
   - To `/services`.
   - To `/contact` for starting an integration project.
6. Verify `/services/api-integrations` renders correctly, is responsive, and matches the portfolio’s tone and visual system.

## Done Criteria

- `/services/api-integrations` exists and reflects `docs/content/api-tooling.md`.
- The page uses `generateMetadata` with accurate, SEO-conscious title and meta description.
- Layout and styling match design-guidelines and the service-page pattern.
- Internal links to `/services` and `/contact` are present.
- Only `app/services/api-integrations/page.tsx` was created/modified; work is summarized succinctly.

