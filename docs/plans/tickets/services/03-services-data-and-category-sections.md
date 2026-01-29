# 03 — Services data and category sections

## Task

- Introduce a **data source** for services (e.g. `data/services.ts`) with the three categories and all service items (titles, descriptions, “starting at” prices, slugs for “Learn more” links).
- Render the **three category sections** on the Services page: AI-Enhanced Experiences, Performance/UX/Optimization, Automation & Backend. Each section has a category heading, tagline, and a list of service cards (title, short description, “Starting at $X”, “Learn more” → `/services/<slug>`).

## Mandatory skill usage

- **using-superpowers**: Invoke first and orchestrate the rest of the skills for this multi-section change.
- **brainstorming**: Validate how to group services, order categories, and name slugs before locking the data model.
- **copywriting**: Polish individual service descriptions and taglines for clarity and outcome-focused language.
- **content-marketer**: Sanity-check that the services mix and ordering make sense for your ICP and funnel.
- **marketing-psychology**: Apply behavioral principles to section ordering, microcopy (e.g., “Starting at”), and link language.
- **interactive-portfolio**: Ensure the categories and card layouts help busy visitors quickly understand what you offer.
- **frontend-design**: Shape the sections, separators, and cards (including card treatment choice) to match design-guidelines and design-refinement.
- **nextjs-best-practices**: Keep `data/services.ts` and the `/services` page implementation idiomatic for Next.js App Router.

## Reference Docs (read-only)

- docs/plans/specs/services-landing-spec.md
- docs/services-page.md (full service list and copy)
- docs/design-guidelines.md
- docs/design-refinement.md
- app/experience/page.tsx (section separators, SectionHeading/ChipMark, cards)
- components/common/SectionHeading.tsx
- lib/design-tokens.ts

## Allowed Files (ONLY these)

- data/services.ts (create)
- app/services/page.tsx
- components/services/ (create only if you introduce reusable components here; e.g. ServiceCard, ServiceCategorySection)

> If SectionHeading or ChipMark live in a different path, read them only; do not edit. If you need to add a new component in another folder, stop and ask to extend Allowed Files.

## Hard Limits

- Do **not** add the optional packages section or final CTA in this ticket—only the three category sections and their data.
- All “Learn more” links must point to `/services/<slug>` (placeholder routes; they may 404 until subpages exist).
- Use design system: borders over shadows, one card treatment (soft shadow, hover lift, or accent border per design-refinement), section separators and ChipMark where appropriate.
- **If blocked:** Stop and ask; do not edit files outside Allowed Files.

## Instructions

1. Use skills as above; read the content model in the spec and docs/services-page.md for exact service names, descriptions, and prices.
2. Create `data/services.ts`: export a structure for the three categories, each with a title, tagline, and array of services (title, description, price, slug). Match the copy from services-page.md exactly.
3. In `app/services/page.tsx`, render three sections (one per category). Each section: optional hairline separator, section heading (with ChipMark/SectionHeading if used elsewhere), tagline, then a grid or list of service cards. Each card: service title, short description, “Starting at $X”, and “Learn more” link to `/services/<slug>`.
4. Ensure responsive layout (mobile-first) and consistent spacing/typography with Experience and Contact. Add an `id` (e.g. `id="services"`) on the first category so “View Services Below” can anchor to it.
5. Verify all slugs and prices match the spec; no placeholder “TBD” in production copy.

## Done Criteria

- `data/services.ts` exists and exports the three categories with all services and correct copy/prices/slugs.
- Services page shows three category sections with headings, taglines, and service cards; each card has “Starting at $X” and “Learn more” → `/services/<slug>`.
- Section separators and card styling follow design-guidelines and design-refinement.
- Only `data/services.ts`, `app/services/page.tsx`, and optionally `components/services/*` were modified.
- Summarize changes in ≤5 bullets (or add Implementation Summary below).
