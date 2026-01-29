# 04 — Services optional packages section

## Task

- Add the **Optional Starter Packages** section to the Services page: three bundled offerings with package name, price, and “Learn more” link to placeholder routes.

## Mandatory skill usage

- **using-superpowers**: Invoke first and decide which of the below skills to apply based on the page’s current state.
- **brainstorming**: Confirm how packages should relate to individual services (positioning, naming, and order).
- **marketing-ideas**: Evaluate whether these bundles align with realistic, high-leverage offers for your target clients.
- **marketing-psychology**: Apply ethical framing around pricing and bundling (e.g., anchoring, contrast, clarity).
- **copywriting**: Tune package names, one-line explanations, and “Package Price” copy for clarity and believability.
- **frontend-design**: Ensure the packages section visually fits and doesn’t overpower or undercut the main categories.

## Reference Docs (read-only)

- docs/plans/specs/services-landing-spec.md
- docs/services-page.md (packages copy)
- docs/design-guidelines.md
- docs/design-refinement.md
- app/services/page.tsx (existing category sections and data pattern)
- data/services.ts (optional: extend with packages data or keep inline for this ticket)

## Allowed Files (ONLY these)

- app/services/page.tsx
- data/services.ts (only if adding a `packages` export; do not remove or rename existing exports)

> If packages are rendered by a component in components/services/, that component is allowed. Do not create new files outside this list without asking.

## Hard Limits

- Do **not** change hero or category sections; do **not** add the final CTA or footer in this ticket—only the packages block.
- Package links go to `/services/startup-ai`, `/services/speed-seo`, `/services/automation-sprint` (placeholder).
- Reuse the same card/section patterns and design tokens as in ticket 03.
- **If blocked:** Stop and ask; do not edit files outside Allowed Files.

## Instructions

1. Use skills as above; read the packages content in the spec and docs/services-page.md.
2. Add an “Optional Starter Packages” (or “Starter Packages”) section below the three category sections. Content:
   - **Startup AI Jumpstart** — Package Price: $350 → Learn more `/services/startup-ai`
   - **Speed & SEO Tune-Up** — Package Price: $150 → Learn more `/services/speed-seo`
   - **Automation Sprint** — Package Price: $220 → Learn more `/services/automation-sprint`
3. Use the same section structure as category sections (separator, heading, then cards or list). Differentiate “Package Price” from “Starting at” if needed for clarity.
4. Ensure layout is responsive and consistent with the rest of the page.

## Done Criteria

- Services page includes a packages section with three offerings, correct copy, prices, and links to `/services/startup-ai`, `/services/speed-seo`, `/services/automation-sprint`.
- Styling matches design-guidelines and existing category sections.
- Only allowed files were modified.
- Summarize changes in ≤5 bullets (or add Implementation Summary below).
