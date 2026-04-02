## 14 — Enrich package page: Speed & SEO Tune-Up (`/services/speed-seo`)

## Task

- Add the **eight enrichment sections** (per `docs/plans/specs/service-pages-enrichment-spec.md`) to the existing `/services/speed-seo` **package** page.
- Use **package framing** where the spec allows: e.g. “What This Package Actually Does,” “Who This Package Is Best For.” Real-World Examples, FAQs, and “How the Process Works” should reflect the *package* (Speed & SEO Tune-Up) and bundled outcomes.
- Preserve the existing hero, problem/promise, deliverables (performance + technical SEO), timeline, use cases, services-in-package links, and CTA repeat. Insert the eight sections in spec order after the existing content and before the final CTA repeat.
- Content must be specific to Speed & SEO Tune-Up and consistent with `docs/content/speed-seo-tune.md`; use the global writing guidelines (non-technical founders first, outcomes, plain language).

## Mandatory skill usage

- **using-superpowers**: Invoke first; orchestrate the rest of the skills and enforce the workflow playbook.
- **brainstorming**: Clarify page goals, target clients, and key outcomes for the enriched content before writing.
- **copywriting**: Draft and refine section copy for clarity, honesty, and conversion without changing meaning or pricing.
- **content-marketer**: Align headings, FAQs, and examples with search intent and funnel strategy.
- **frontend-design**: Keep new sections consistent with the portfolio design system and design-refinement.
- **interactive-portfolio**: Ensure enriched content strengthens the page for conversion and credibility.
- **Claude Code Guide**: Keep edits scoped to the allowed file and well-structured.

## Reference Docs (read-only)

- docs/plans/specs/service-pages-enrichment-spec.md
- docs/service-pages-enrichment.md
- docs/plans/specs/services-pages-spec.md
- docs/content/speed-seo-tune.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/design-tokens.ts

## Allowed Files (ONLY these)

- app/services/speed-seo/page.tsx

> If a shared component for enriched sections is needed, stop and ask to extend the Allowed Files list.

## Hard Limits

- Do **not** remove or replace existing sections (hero, problem/promise, deliverables, timeline, use cases, services-in-package links, CTA repeat). Only **add** the eight enrichment sections.
- Do not change pricing, core value proposition, or hero copy beyond light adaptation for flow.
- Do not edit any other service pages or the Services landing page.
- **If blocked:** Stop and ask to extend Allowed Files; do not guess or broaden scope.

## Instructions

1. Use skills as above; read the enrichment spec and `docs/content/speed-seo-tune.md` to understand the package and section requirements. Note: this is a **package** page—use package framing per spec (e.g. “What This Package Actually Does,” “Who This Package Is Best For”).
2. Open `app/services/speed-seo/page.tsx` and locate where existing content ends and the final CTA repeat begins.
3. Add the eight sections in this order, using the headings and structure from the enrichment spec (with package wording where specified):
   - **Section 1:** What This Package Actually Does
   - **Section 2:** Who This Package Is Best For (subsections: Great Fit If You, Not a Great Fit If You)
   - **Section 3:** Real-World Examples (2–3 examples tied to Speed & SEO Tune-Up / bundled outcomes)
   - **Section 4:** What You Can Expect After Implementation
   - **Section 5:** How the Process Works (Discovery, Build, Testing, Delivery—package scope)
   - **Section 6:** Tools & Technology Used (optional but recommended; reflect package scope)
   - **Section 7:** Frequently Asked Questions (5–8 FAQs about the package)
   - **Section 8:** Next Steps (soft CTA, link to `/contact`)
4. Use `Container` and existing section/heading patterns; respect design-guidelines and design-refinement (one accent stripe, ChipMark usage, etc.).
5. Ensure all new copy follows the global writing guidelines (short paragraphs, bullets, outcomes-first, non-technical founders first).

## Done Criteria

- `/services/speed-seo` page contains all eight enrichment sections in the specified order, with package-appropriate headings.
- Existing sections (hero, problem/promise, deliverables, timeline, use cases, services-in-package links, CTA repeat) are unchanged.
- Content is specific to Speed & SEO Tune-Up (package) and consistent with `docs/content/speed-seo-tune.md`.
- Only `app/services/speed-seo/page.tsx` was modified; changes are summarized in ≤5 bullets or an Implementation Summary.
