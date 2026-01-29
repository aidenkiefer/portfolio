# 02 — Services hero section

## Task

- Implement the **Services hero section** on `/services`: headline, subheadline, and two CTA buttons, following the design guidelines and refinements.

## Mandatory skill usage

- **using-superpowers**: Invoke first and select relevant skills before touching the hero implementation.
- **brainstorming**: Clarify hero messaging, audience, and primary/secondary CTAs using the services brief before writing JSX.
- **copywriting**: Refine headline, subheadline, and button labels for clarity, honesty, and conversion (no hype).
- **marketing-psychology**: Apply ethical behavioral patterns to CTA prominence, ordering, and framing.
- **interactive-portfolio**: Ensure the hero positions you clearly for clients and passes the “30-second test.”
- **frontend-design**: Design typography, spacing, and CTA treatment so the hero feels intentional and consistent with design-guidelines and design-refinement.

## Reference Docs (read-only)

- docs/plans/specs/services-landing-spec.md
- docs/services-page.md (hero copy)
- docs/design-guidelines.md
- docs/design-refinement.md
- app/page.tsx (home hero pattern for Container, spacing, CTAs)
- app/contact/page.tsx (accent stripe, section pattern)

## Allowed Files (ONLY these)

- app/services/page.tsx

> If a shared Hero component is introduced later, stop and ask to extend the list. For this ticket, implement the hero inline in the page.

## Hard Limits

- Do **not** add service categories, packages, or final CTA in this ticket—only the hero block.
- Follow design-guidelines (typography, colors, spacing, one accent stripe if applicable) and design-refinement (hero secondary line if used).
- **If blocked:** Stop and ask; do not edit files outside Allowed Files.

## Instructions

1. Use skills as above; open `app/services/page.tsx` and the reference pages for hero/CTA patterns.
2. Add the hero section to the Services page:
   - **Headline:** “Modern Tech Services to Supercharge Your Business”
   - **Subheadline:** “From AI chatbots to backend automation, I help startups and lean teams unlock growth with fast, effective web-based solutions.”
   - **CTAs:** “Book a Free Discovery Call” (primary, link to `/contact`) and “View Services Below” (secondary, e.g. `#services` or smooth scroll to first category).
3. Reuse existing patterns: `Container`, heading hierarchy, button/link styles (primary = accent fill, secondary = border or text), and spacing consistent with Home/Contact. Add the optional secondary line (design-refinement hero) if the spec allows (e.g. “— contractor services • startups • small business” or similar).
4. If the spec’s “one accent stripe per page” is applied on this page, you may add it under the hero; otherwise leave stripe placement for a later ticket.

## Done Criteria

- Services page hero displays the correct headline, subheadline, and two CTAs with correct links.
- Typography and spacing match design-guidelines; CTAs are clearly identifiable (links, hover states).
- Only `app/services/page.tsx` was modified.
- Summarize changes in ≤5 bullets (or add Implementation Summary below).
