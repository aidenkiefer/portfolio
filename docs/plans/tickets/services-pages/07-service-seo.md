## 07 — Service page: Technical SEO Setup (`/services/seo`)

## Task

- Create the **Technical SEO Setup & Optimization** detail page at `/services/seo`, using `docs/content/tech-seo-setup.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections in the common pattern.

## Mandatory skill usage

- **using-superpowers**: Invoke first to coordinate skills, especially for SEO-related decisions.
- **brainstorming**: Clarify how this page should position technical SEO work (crawlability, indexing, structure).
- **frontend-design**: Present technical SEO concepts clearly without cluttering the page or violating design-guidelines.
- **interactive-portfolio**: Make the page demonstrate your technical judgment and care rather than looking like a generic SEO agency site.
- **copywriting**: Refine copy for clarity and honest articulation of what technical SEO covers and does not cover.
- **content-marketer**: Align structure and headings with how founders/marketers evaluate technical SEO help and search for it.
- **marketing-psychology**: Ethically highlight the consequences of poor SEO hygiene and benefits of getting the foundation right.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Ensure route and metadata are implemented cleanly.
- **Claude Code Guide**: Keep the ticket focused and easy to verify.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/tech-seo-setup.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/seo/page.tsx (create)

> If you need to touch other files for shared components, request an explicit Allowed Files extension.

## Hard Limits

- Do **not** modify other service pages or the Services landing page.
- Do not alter global SEO logic; only configure this page via `generateMetadata`.
- Do not change pricing or material claims from `docs/content/tech-seo-setup.md`, beyond wording cleanup.
- **If blocked:** Stop and ask instead of guessing.

## Instructions

1. Use skills as above; read `docs/content/tech-seo-setup.md` and the services-pages spec.
2. Create `app/services/seo/page.tsx`:
   - Use `generateMetadata` for a descriptive title and meta description (e.g. “Technical SEO Setup & Optimization for Startups and Small Businesses”).
   - Implement the hero using the Title, Subheadline, and CTA from the content doc.
3. Implement sections:
   - **Problem → Promise**: explain the cost of poor technical SEO and the promise of a clean foundation.
   - **What You Get / SEO Package Includes**: list audit/fix items (metadata, sitemaps, mobile readiness, etc.).
   - **Use Cases / Who This Helps**: target audiences or site types that benefit most.
   - **Timeline & Delivery**: include work phases and rough timing.
   - **CTA Repeat**: final banner with a strong, specific CTA linking to `/contact` or `/contact#form`.
4. Use `Container`, balanced headings, and spacing per design-guidelines; incorporate section separators and optional ChipMark as appropriate.
5. Add internal links:
   - To `/services` (overview).
   - To `/contact` for getting started.
6. Verify `/services/seo` renders correctly, is responsive, and matches the site’s tone and design system.

## Done Criteria

- `/services/seo` exists and faithfully implements `docs/content/tech-seo-setup.md`.
- The page uses `generateMetadata` with accurate, SEO-conscious title and meta description.
- Layout and styling align with design-guidelines and the services-page pattern.
- Internal links to `/services` and `/contact` exist and are sensible.
- Only `app/services/seo/page.tsx` was created/modified; changes are summarized concisely.

