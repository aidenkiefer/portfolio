## 12 — Service page: Internal Tools & Dashboards (`/services/internal-tools`)

## Task

- Create the **Lightweight Internal Tools & Dashboards** detail page at `/services/internal-tools`, using `docs/content/admin-tools.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections using the shared layout pattern.

## Mandatory skill usage

- **using-superpowers**: Invoke first; coordinate all other skills.
- **brainstorming**: Clarify internal-tool stories (data visibility, workflow fit, replacing spreadsheets) and ideal clients.
- **frontend-design**: Present internal tools visually in a way that feels solid and thoughtful, not dashboard-flashy.
- **interactive-portfolio**: Use this page to show your ability to design tools around real workflows and systems.
- **copywriting**: Refine copy to emphasize real operational benefits and constraints without hyping “platform” language.
- **content-marketer**: Align structure with how teams think about internal tools vs. off-the-shelf software.
- **marketing-psychology**: Ethically underline the costs of glue solutions and the value of bespoke tools.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Implement route and metadata according to best practices.
- **Claude Code Guide**: Maintain small, explicit, and verifiable edits.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/admin-tools.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/internal-tools/page.tsx (create)

> If shared components are needed for admin-tool-like layouts, request an Allowed Files extension first.

## Hard Limits

- Do **not** modify other service pages or the Services landing page.
- Do not adjust global SEO behavior; only use `generateMetadata` for this route.
- Preserve pricing and key claims from `docs/content/admin-tools.md`, editing only for clarity/tone.
- **If blocked:** Stop and ask; do not broaden scope yourself.

## Instructions

1. Use skills as above; read `docs/content/admin-tools.md` and the services-pages spec.
2. Create `app/services/internal-tools/page.tsx`:
   - Use `generateMetadata` with a descriptive title and meta description (e.g. “Internal Tools & Dashboards for Startups and Agencies”).
   - Implement hero using the Title, Subheadline, and CTA from the content doc.
3. Implement sections:
   - **Problem → Promise**: describe the shortcomings of spreadsheet+glue workflows and the promise of purpose-built tools.
   - **What You Get / What I Build**: list the kinds of tools and dashboards you create.
   - **Use Cases / Who This Helps**: highlight ideal situations and team types.
   - **Timeline & Delivery**: outline how projects run and expected timelines.
   - **CTA Repeat**: final CTA banner linking to `/contact` or `/contact#form`.
4. Use `Container`, structured headings, consistent spacing, separators, and accent usage as per design-docs.
5. Add internal links:
   - To `/services`.
   - To `/contact` for starting an internal tools project.
6. Verify `/services/internal-tools` renders correctly, is responsive, and fits the broader portfolio aesthetic.

## Done Criteria

- `/services/internal-tools` exists and accurately reflects `docs/content/admin-tools.md`.
- The page uses `generateMetadata` with a clear, SEO-conscious title and meta description.
- Layout and styling follow design-guidelines and the shared service-page pattern.
- Internal links to `/services` and `/contact` are present.
- Only `app/services/internal-tools/page.tsx` was created/modified; work is summarized succinctly.

