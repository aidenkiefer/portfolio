# 01 — Services route and nav

## Task

- Add the **Services** route at `/services` with a minimal page (metadata + `Container` shell; no hero or sections yet).
- Add **Services** to the main navigation so the page is reachable from the navbar (desktop and mobile).

## Mandatory skill usage

- **using-superpowers**: Invoke this first and let it guide which additional skills to load.
- **Claude Code Guide**: Use for best practices around file discovery, small-scoped edits, and verification.
- **nextjs-best-practices**: Ensure the new `/services` route and metadata follow App Router conventions.
- **nextjs-app-router-patterns**: Sanity-check route placement and page structure.
- **frontend-design**: Keep the initial shell visually consistent with existing pages (Container usage, spacing, typography).

## Reference Docs (read-only)

- docs/plans/specs/services-landing-spec.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- app/services/page.tsx (create if missing)
- components/layout/Navbar.tsx

> If the nav or layout lives elsewhere, stop and ask to extend the Allowed Files list.

## Hard Limits

- Do **not** add hero, service categories, or CTA content in this ticket—only route + nav + page shell.
- Do not edit files outside Allowed Files (except reading reference docs).
- **If blocked:** Stop and ask to add a specific file; do not guess paths.

## Instructions

1. Use skills as above; then locate the app router structure and the Navbar component.
2. Create `app/services/page.tsx`: default export, `generateMetadata` (or `metadata`) for title/description/path `/services` (reuse `lib/seo.ts` pattern from Contact or Experience), and a `Container` with minimal placeholder content (e.g. a heading "Services" and short intro line).
3. In `Navbar.tsx`, add a "Services" item to the nav list (same shape as existing items), linking to `/services`, for both desktop and mobile menus.
4. Verify the page renders at `/services` and the Services link appears in the nav and works.

## Done Criteria

- Navigating to `/services` shows a valid page with correct metadata and a simple shell (Container + heading).
- Navbar shows "Services" linking to `/services` on desktop and in the mobile menu.
- Only `app/services/page.tsx` and `components/layout/Navbar.tsx` were modified.
- Summarize changes in ≤5 bullets (or add Implementation Summary below).
