## 05 — Service page: AI-Based Business Insights (`/services/ai-insights`)

## Task

- Create the **AI-Based Business Insights (Forecasting & Automation)** detail page at `/services/ai-insights`, using `docs/content/ai-insights.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections using the common pattern.

## Mandatory skill usage

- **using-superpowers**: Invoke first; orchestrate the remaining skills for this analytical offering.
- **brainstorming**: Clarify the core narrative around data, forecasting, and decision support before implementation.
- **frontend-design**: Present technical/analytical content clearly, with calm visual hierarchy and no dashboard gimmicks.
- **interactive-portfolio**: Show your ability to bridge engineering, data, and business outcomes in a portfolio-appropriate way.
- **copywriting**: Refine insights/forecasting copy for clarity, credible outcomes, and guarded expectations.
- **content-marketer**: Align structure and headings with how founders search for and evaluate analytics/AI insight services.
- **marketing-psychology**: Ethically highlight risk reduction, foresight, and leverage without overpromising certainty.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Keep routing and metadata idiomatic.
- **Claude Code Guide**: Keep scope tight and changes well-documented.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/ai-insights.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/ai-insights/page.tsx (create)

> For shared components, request an Allowed Files extension instead of creating them here.

## Hard Limits

- Do **not** modify any other service pages or the Services landing page.
- Do not change global SEO configuration; use `generateMetadata` only for this page.
- Preserve pricing and key claims from the content doc; adjust wording only for clarity and tone.
- **If blocked:** Stop and ask; do not widen the scope.

## Instructions

1. Use skills as above; review `docs/content/ai-insights.md` and the services-pages spec.
2. Create `app/services/ai-insights/page.tsx`:
   - Use `generateMetadata` with a descriptive title and meta description (e.g. “AI-Based Business Insights & Forecasting for SaaS and Ecommerce”).
   - Implement the hero using the Title, Subheadline, and CTA from the content doc.
3. Implement sections:
   - **Problem → Promise**: describe the pain of underused data and the promise of AI-driven insight.
   - **What You Get / Deliverables**: list models, dashboards, playbooks, or automations delivered.
   - **Use Cases / Who This Helps**: show where insights/forecasting are especially valuable.
   - **Timeline & Delivery**: include phases and timelines.
   - **CTA Repeat**: final banner with CTA to `/contact` or `/contact#form`.
4. Use `Container`, thoughtful typography, and consistent section separators and accent elements per design-guidelines and design-refinement.
5. Add internal links:
   - Back to `/services`.
   - To `/contact` to start a project or schedule a call.
6. Verify `/services/ai-insights` renders correctly, remains accessible, and fits the site’s tone and visual system.

## Done Criteria

- `/services/ai-insights` exists and implements the structure/content from `docs/content/ai-insights.md`.
- The page uses `generateMetadata` with a clear, accurate title and meta description.
- Visual and content treatment match the broader services-page pattern and design system.
- Internal links to `/services` and `/contact` are present.
- Only `app/services/ai-insights/page.tsx` was created/modified; work is summarized succinctly.

*** End Patch
```"} ***!
