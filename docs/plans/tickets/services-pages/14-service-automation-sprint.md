## 14 — Service page: Automation Sprint (`/services/automation-sprint`)

## Task

- Create the **Automation Sprint** package page at `/services/automation-sprint`, using `docs/content/automation-sprint.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, example automations, timeline, and CTA repeat sections in a layout consistent with the portfolio design system.
- **Include links to the individual services in this package**: `/services/automation`, `/services/api-integrations`; optionally “often combined with” links to `/services/internal-tools`, `/services/ai-insights`, `/services/chatbots` (per spec “Package Pages: Individual Service Links”).

## Mandatory skill usage

- **using-superpowers**: Invoke first; orchestrate the rest of the skills and enforce the workflow playbook.
- **brainstorming**: Clarify page goals, target clients, and key outcomes before coding.
- **frontend-design**: Design the page layout, typography, and spacing to match the portfolio’s design-guidelines and design-refinement.
- **interactive-portfolio**: Ensure this service page strengthens the overall portfolio and passes the “30-second test.”
- **copywriting**: Adapt and tighten the copy for clarity and conversion while preserving meaning and pricing.
- **content-marketer**: Align headings, structure, and CTAs with realistic search intent and funnel strategy.
- **marketing-psychology**: Apply ethical behavioral patterns to CTAs and social proof (e.g. use cases) without hype.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Ensure the route and metadata follow App Router norms.
- **Claude Code Guide**: Keep edits small, scoped, and well-verified.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/automation-sprint.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts
- lib/design-tokens.ts
- app/services/page.tsx (for overall services context; do not edit in this ticket)

## Allowed Files (ONLY these)

- app/services/automation-sprint/page.tsx (create)

> If you determine a shared `app/services/layout.tsx` or shared components under `components/services/` would be helpful, stop and ask to extend the Allowed Files list rather than creating them in this ticket.

## Hard Limits

- Do **not** modify `app/services/page.tsx` or any other service pages in this ticket.
- Do not change global SEO configuration beyond using `generateMetadata` appropriately on this page.
- Do not alter copy meaning, pricing, or claims beyond light editing for clarity and flow.
- **If blocked:** Stop and ask to extend Allowed Files; do not guess or broaden scope.

## Instructions

1. Use skills as above; read `docs/content/automation-sprint.md` and the services-pages spec to understand structure and copy.
2. Create `app/services/automation-sprint/page.tsx`:
   - Use `generateMetadata` from `lib/seo.ts` to set a descriptive title and meta description (e.g. “Automation Sprint – Replace Manual Work with Smart Automation”).
   - Implement the hero section using the Title, Subheadline, and primary CTA from the content doc.
3. Implement structured sections based on the doc (match section order and headings where it aids clarity):
   - **Section 1 (What This Package Solves)**: one subheading and paragraph describing manual work pain and automation promise.
   - **Section 2 (What’s Included)**: bullet list of deliverables (1–2 workflows, tools—Python/Zapier/Make/Airtable/API—error handling, documentation + walkthrough).
   - **Section 3 (Example Automations / Common Automations)**: list of example automations from the doc.
   - **Section 4 (Timeline & Delivery / Fast and Practical)**: bullets describing 2–4 days delivery, editable after setup, no long-term lock-in.
   - **Services in this package / Custom packages**: include links to `/services/automation`, `/services/api-integrations`; optionally “often combined with” links to `/services/internal-tools`, `/services/ai-insights`, `/services/chatbots` per spec. Preserve the doc’s “Want to Automate More?” and “Book a free consultation” CTA.
   - **CTA Repeat**: final banner with doc’s CTA copy and link to `/contact` or `/contact#form`.
4. Use `Container` and existing typography/spacing patterns from other pages (Home, Experience, Services landing). Respect section separators, ChipMark/logo motifs, and the “one accent stripe per page” rule per design-refinement.
5. Add at least:
   - One internal link back to `/services`.
   - One or more links to `/contact` (CTAs).
   - Links to the individual services in this package as specified above.
6. **Before claiming done:** Run the Verification commands below. Only then mark the ticket complete.

## Verification (run before claiming done)


1. **Links:** Confirm at least one link to `/services`, one or more to `/contact`, and links to `/services/automation` and `/services/api-integrations` (and optionally internal-tools, ai-insights, chatbots).

Do not claim the ticket complete without running these and confirming the output.

## Done Criteria

- `/services/automation-sprint` exists and renders a full detail page based on `docs/content/automation-sprint.md`.
- The page uses `generateMetadata` with a strong, honest title and meta description.
- Layout and styling follow design-guidelines and design-refinement; headings and CTAs are clear and accessible.
- Internal links connect back to `/services`, `/contact`, and to the individual services in this package (automation, api-integrations; optionally internal-tools, ai-insights, chatbots).
- Only `app/services/automation-sprint/page.tsx` was created/modified; changes are summarized in ≤5 bullets or an Implementation Summary below.

## Implementation Summary (fill after completing)

- **Completed:** Ticket 14 – Automation Sprint package page.
- **Changes Made:**
  1. Created `/services/automation-sprint` route with full package page layout
  2. Implemented "Package" badge in hero to distinguish from individual services
  3. Added "Services in this Package" section with left-accent-bordered cards linking to `/services/automation` and `/services/api-integrations`
  4. Positioned accent stripe after hero (distinct from individual service pages)
  5. Included "Often Combined With" callout linking to internal-tools, ai-insights, and chatbots
  6. Added all required sections: hero, problem/promise, deliverables, example automations, timeline, custom packages, and final CTA
- **Key improvement / Result:** Package page clearly communicates value bundle while visually distinguishing itself from individual service pages through badge, stripe positioning, and left-accent-bordered service cards. All internal links properly connect to services landing, contact, and individual services.
- **Files Modified:** `app/services/automation-sprint/page.tsx` (created)
- **Skills Used:** brainstorming, frontend-design, copywriting, content-marketer, marketing-psychology
- **Result:** Full-featured package page with clear bundle identity and proper internal linking
