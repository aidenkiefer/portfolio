## 10 — Service page: Business Process Automation (`/services/automation`)

## Task

- Create the **Business Process Automation** detail page at `/services/automation`, using `docs/content/process-automation.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections following the shared pattern.

## Mandatory skill usage

- **using-superpowers**: Invoke first; coordinate other skills for this automation-focused service.
- **brainstorming**: Clarify which automation scenarios (lead routing, reporting, content ops) to emphasize.
- **frontend-design**: Present automation concepts clearly and calmly, avoiding “busy” SaaS aesthetics.
- **interactive-portfolio**: Make this page highlight your systems and automation mindset within the portfolio.
- **copywriting**: Refine copy to emphasize time saved, reduced errors, and clear outcomes without overpromising.
- **content-marketer**: Align structure with how prospects evaluate automation/ops improvement work.
- **marketing-psychology**: Ethically communicate pain points of manual workflows and the benefits of automation.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Keep route and metadata idiomatic.
- **Claude Code Guide**: Maintain small, scoped changes.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/process-automation.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/automation/page.tsx (create)

> If you need reusable components across automation/other pages, request an Allowed Files extension.

## Hard Limits

- Do **not** modify other service pages or the Services landing page.
- Do not change global SEO behavior; only use `generateMetadata` for this page.
- Preserve pricing and claims from `docs/content/process-automation.md`, adjusting only for clarity/tone.
- **If blocked:** Stop and ask instead of widening scope.

## Instructions

1. Use skills as above; review `docs/content/process-automation.md` and the services-pages spec.
2. Create `app/services/automation/page.tsx`:
   - Use `generateMetadata` with a descriptive title and meta description (e.g. “Business Process Automation for Lean Teams & Founders”).
   - Implement hero using the Title, Subheadline, and CTA from the content doc.
3. Implement sections:
   - **Problem → Promise**: explain manual bottlenecks and the promise of done-for-you automation.
   - **What You Get / Typical Automations Include**: list types of automations delivered.
   - **Use Cases / Who This Helps**: show situations and roles where this service fits.
   - **Timeline & Delivery**: outline phases and timing.
   - **CTA Repeat**: final banner with CTA to `/contact` or `/contact#form`.
4. Use `Container`, consistent headings, spacing, separators, and accent usage per design docs.
5. Add internal links:
   - Back to `/services`.
   - To `/contact` for consultation/engagement.
6. Verify `/services/automation` renders correctly, is responsive, and visually aligned with the portfolio.

## Done Criteria

- `/services/automation` exists and accurately implements `docs/content/process-automation.md`.
- The page uses `generateMetadata` with an honest, SEO-conscious title and meta description.
- Layout and styling follow design-guidelines and the shared pattern.
- Internal links to `/services` and `/contact` are present.
- Only `app/services/automation/page.tsx` was created/modified; work is summarized succinctly.

