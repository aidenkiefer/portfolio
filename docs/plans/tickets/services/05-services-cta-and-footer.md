# 05 — Services final CTA and footer note

## Task

- Add the **“Need Help with Something Else?” consulting/misc services section** near the bottom of the Services page.
- Add the **final CTA section** to the Services page (headline, subhead, two links: “Book a Free Strategy Call” and “Reach Out by Email”).
- Add the **footer note** with the disclaimer and, if not already present, contact/social links (reuse site footer pattern or inline note).

## Mandatory skill usage

- **using-superpowers**: Invoke first and coordinate the remaining skills for this final, conversion-critical section.
- **brainstorming**: Align on the primary and secondary actions for this page and how they relate to your broader services strategy.
- **copywriting**: Craft and refine the final CTA headline, subhead, button/anchor text, and disclaimer copy.
- **marketing-psychology**: Apply ethical behavioral models to reduce friction, clarify next steps, and avoid manipulative urgency.
- **interactive-portfolio**: Ensure the final section makes it very obvious how to work with you and doesn’t bury key actions.
- **frontend-design**: Design CTA prominence, spacing, and footer note styling so the page ends with a confident, calm close.

## Reference Docs (read-only)

- docs/plans/specs/services-landing-spec.md
- docs/services-page.md (final CTA and footer copy)
- docs/design-guidelines.md
- docs/design-refinement.md
- app/contact/page.tsx (CTA links, accent stripe)
- components/layout/Footer.tsx (if footer note reuses or links to site footer)

## Allowed Files (ONLY these)

- app/services/page.tsx
- components/layout/Footer.tsx (only if adding a small site-wide note or link; otherwise keep footer note inside the Services page)

> If the global Footer is the only place for the disclaimer, stop and ask whether to add it to the page content or to the Footer component.

## Hard Limits

- Do **not** change hero, category sections, or packages section in this ticket—only the new consulting/misc section, final CTA block, and footer note.
- “Book a Free Strategy Call” and “Reach Out by Email” must link to `/contact` and `/contact#form` (or equivalent) as specified in the spec.
- Footer note text: “All services are remote and tailored per client. Custom quotes available upon request.” Plus social/contact links if appropriate.
- **If blocked:** Stop and ask; do not edit files outside Allowed Files.

## Instructions

1. Use skills as above; read the consulting section, final CTA, and footer note details in the spec and docs/services-page.md.
2. Add a **“Need Help with Something Else?”** section below the packages section and above the final CTA. This section should:
   - Explain that you also take on consulting and miscellaneous technical work that doesn’t fit neatly into the listed services.
   - Mention that pricing for this work is determined after a **free consultation meeting** (no fixed “starting at” price).
   - Include an additional CTA (e.g. “Talk Through Your Project” or “Schedule a Free Consult”) linking to `/contact` (or `/contact#form`).
3. Add a final CTA section below that consulting section:
   - **Headline:** “Let’s Build Something That Saves You Time or Makes You Money”
   - **Subhead:** “If you’re building something and want to move faster, cleaner, or smarter—let’s talk.”
   - **Links:** “Book a Free Strategy Call” → `/contact`, “Reach Out by Email” → `/contact#form` (or `/contact` with anchor if the form has an id).
4. Add the footer note: disclaimer text plus contact/social links (inline on the page or by reusing Footer; do not duplicate site-wide footer content unnecessarily).
5. If the page does not yet have the single “accent stripe per page” (design-refinement), you may add it above the footer note or under the final CTA; otherwise leave as-is.
6. Verify links work and the page scroll flow (hero → categories → packages → consulting/misc → CTA → footer) is clear.

## Done Criteria

- Services page includes a **“Need Help with Something Else?”** consulting/miscellaneous services section above the final CTA, clearly stating that pricing is custom and determined via free consultation.
- Services page ends with a final CTA section (headline, subhead, two CTAs) and a footer note with the disclaimer and contact/social links.
- CTA links go to `/contact` and `/contact#form` (or equivalent).
- Styling matches design-guidelines; only allowed files were modified.
- Summarize changes in ≤5 bullets (or add Implementation Summary below).
