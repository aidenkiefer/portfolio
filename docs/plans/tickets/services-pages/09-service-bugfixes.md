## 09 — Service page: One-Off Bug Fixes & Error Monitoring (`/services/bugfixes`)

## Task

- Create the **One-Off Bug Fixing & Error Monitoring** detail page at `/services/bugfixes`, using `docs/content/bugs-error-monitoring.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections following the common pattern.

## Mandatory skill usage

- **using-superpowers**: Invoke first; orchestrate remaining skills.
- **brainstorming**: Clarify which types of bugs and teams this service is best suited for.
- **frontend-design**: Present technical troubleshooting work in a calm, trustworthy layout aligned with the design system.
- **interactive-portfolio**: Use this page to demonstrate your reliability and debugging mindset as part of your portfolio.
- **copywriting**: Refine copy for clarity, honesty, and emphasis on fast, safe fixes.
- **content-marketer**: Align structure with how non-technical owners think about bug fixing and support.
- **marketing-psychology**: Ethically surface the pain of persistent bugs and relief of quick fixes without fear tactics.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Keep the route and metadata idiomatic.
- **Claude Code Guide**: Maintain constrained, verifiable edits.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/bugs-error-monitoring.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/bugfixes/page.tsx (create)

> If shared components begin to make sense across multiple service pages, request an Allowed Files extension.

## Hard Limits

- Do **not** modify other service pages or landing pages.
- Do not change global SEO logic; only use `generateMetadata` for this page.
- Keep pricing and claims consistent with `docs/content/bugs-error-monitoring.md`, editing only for clarity.
- **If blocked:** Stop and ask; do not expand scope independently.

## Instructions

1. Use skills as above; read `docs/content/bugs-error-monitoring.md` and the services-pages spec.
2. Create `app/services/bugfixes/page.tsx`:
   - Use `generateMetadata` for a descriptive title and meta description (e.g. “One-Off Bug Fixing & Error Monitoring for Websites and Apps”).
   - Implement the hero based on the Title, Subheadline, and CTA in the content doc.
3. Implement sections:
   - **Problem → Promise**: describe the friction small bugs create and the promise of quick, safe fixes.
   - **What You Get / Included in this service**: list what’s covered (e.g. triage, fix, optional monitoring).
   - **Use Cases / Who This Helps**: show examples of ideal situations for this service.
   - **Timeline & Delivery**: outline how fast fixes happen and how communication works.
   - **CTA Repeat**: final banner pointing to `/contact` or `/contact#form`.
4. Use `Container`, consistent headings, spacing, and separators, along with minimal accent usage per design docs.
5. Add internal links:
   - To `/services` for broader context.
   - To `/contact` for bug-fix requests.
6. Verify `/services/bugfixes` renders correctly, is responsive, and fits the portfolio’s tone and visual style.

## Done Criteria

- `/services/bugfixes` exists and faithfully reflects `docs/content/bugs-error-monitoring.md`.
- The page uses `generateMetadata` with an accurate, SEO-conscious title and meta description.
- Layout and styling follow design-guidelines and the shared service-page pattern.
- Internal links to `/services` and `/contact` are present.
- Only `app/services/bugfixes/page.tsx` was created/modified; work is summarized succinctly.

