## 06 — Service page: Website Speed & Performance Optimization (`/services/performance`)

## Task

- Create the **Website Speed & Performance Optimization** detail page at `/services/performance`, using `docs/content/speed-perf-opt.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections in line with the shared services layout.

## Mandatory skill usage

- **using-superpowers**: Invoke first; coordinate all subsequent skills.
- **brainstorming**: Clarify which performance outcomes (Core Web Vitals, UX, conversions) to foreground for this page.
- **frontend-design**: Present technical performance work in a clean, trustworthy layout consistent with design-guidelines.
- **interactive-portfolio**: Show your performance expertise in a way that fits an engineer-focused portfolio.
- **copywriting**: Tighten performance copy for clarity and outcome focus (faster loads, better UX) without hype.
- **content-marketer**: Align sections and headings with how people search for and evaluate performance optimization help.
- **marketing-psychology**: Ethically emphasize risk (lost conversions, SEO impact) and relief (measurable improvements).
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Keep route and metadata implementations idiomatic.
- **Claude Code Guide**: Maintain small, verifiable, ticket-scoped edits.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/speed-perf-opt.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/performance/page.tsx (create)

> If you need shared components for repeated patterns, request an extension to Allowed Files instead of creating them here.

## Hard Limits

- Do **not** modify other service pages or the Services landing page.
- Do not change global SEO behavior; only use `generateMetadata` for this page.
- Keep pricing, scope, and claims consistent with `docs/content/speed-perf-opt.md`, editing only for clarity and tone.
- **If blocked:** Stop and ask; do not broaden scope.

## Instructions

1. Use skills as above; read `docs/content/speed-perf-opt.md` and the services-pages spec.
2. Create `app/services/performance/page.tsx`:
   - Use `generateMetadata` to set a descriptive title and meta description (e.g. “Website Speed & Performance Optimization for Startups & Ecommerce”).
   - Implement hero from the Title, Subheadline, and CTA in the content doc.
3. Implement sections:
   - **Problem → Promise**: frame the costs of slow sites and the promise of targeted optimization.
   - **What You Get / Performance Upgrade Includes**: list audit items and optimization work.
   - **Use Cases / Who This Helps**: highlight site types and situations where this service is ideal.
   - **Timeline & Delivery**: include turnaround and supported stacks.
   - **CTA Repeat**: final call-to-action banner to `/contact` or `/contact#form`.
4. Use `Container`, appropriate heading hierarchy, and consistent section separators and accent elements per design docs.
5. Add internal links:
   - To `/services` (overview of all services).
   - To `/contact` for consultations and bookings.
6. Verify `/services/performance` renders correctly, is responsive, and fits the portfolio’s tone and visual system.

## Done Criteria

- `/services/performance` exists and accurately implements `docs/content/speed-perf-opt.md`.
- The page uses `generateMetadata` with a clear, honest title and meta description.
- Layout and styling follow design-guidelines and design-refinement.
- Internal links to `/services` and `/contact` are present.
- Only `app/services/performance/page.tsx` was created/modified; changes are summarized succinctly.

