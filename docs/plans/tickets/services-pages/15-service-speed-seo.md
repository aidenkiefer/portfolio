## 15 — Service page: Speed & SEO Tune-Up (`/services/speed-seo`)

## Task

- Create the **Speed & SEO Tune-Up** package page at `/services/speed-seo`, using `docs/content/speed-seo-tune.md` as the primary copy source.
- Implement hero, problem/promise, deliverables (performance + technical SEO), timeline, use cases, and CTA repeat sections in a layout consistent with the portfolio design system.
- **Include links to the individual services in this package**: `/services/performance`, `/services/seo`; optionally “often combined with” links to `/services/accessibility`, `/services/personalization`, `/services/automation` (per spec “Package Pages: Individual Service Links”).

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
- docs/content/speed-seo-tune.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts
- lib/design-tokens.ts
- app/services/page.tsx (for overall services context; do not edit in this ticket)

## Allowed Files (ONLY these)

- app/services/speed-seo/page.tsx (create)

> If you determine a shared `app/services/layout.tsx` or shared components under `components/services/` would be helpful, stop and ask to extend the Allowed Files list rather than creating them in this ticket.

## Hard Limits

- Do **not** modify `app/services/page.tsx` or any other service pages in this ticket.
- Do not change global SEO configuration beyond using `generateMetadata` appropriately on this page.
- Do not alter copy meaning, pricing, or claims beyond light editing for clarity and flow.
- **If blocked:** Stop and ask to extend Allowed Files; do not guess or broaden scope.

## Instructions

1. Use skills as above; read `docs/content/speed-seo-tune.md` and the services-pages spec to understand structure and copy.
2. Create `app/services/speed-seo/page.tsx`:
   - Use `generateMetadata` from `lib/seo.ts` to set a descriptive title and meta description (e.g. “Speed & SEO Tune-Up – Make Your Website Faster and Easier to Find”).
   - Implement the hero section using the Title, Subheadline, and primary CTA from the content doc.
3. Implement structured sections based on the doc (match section order and headings where it aids clarity):
   - **Section 1 (What This Package Solves)**: one subheading and paragraph describing slow/invisible site pain and optimization promise.
   - **Section 2 (What’s Included)**: subheading “Speed & SEO Tune-Up Includes” with **Performance Optimization** (Core Web Vitals, image/script/asset optimization, caching/CDN, mobile) and **Technical SEO Setup** (metadata, sitemap/robots, GSC, crawl/indexing) subsections and bullet lists from the doc.
   - **Section 3 (Timeline & Delivery / Quick Wins, Real Impact)**: 2–3 days delivery, before/after report, no design/content changes required.
   - **Section 4 (Ideal Use Cases / This Package Is Great If You)**: checklist from the doc (bounce rate, SEO without retainers, launch/relaunch, mobile).
   - **Services in this package / Custom packages**: include links to `/services/performance`, `/services/seo`; optionally “often combined with” links to `/services/accessibility`, `/services/personalization`, `/services/automation` per spec. Preserve the doc’s “Need More Than a Tune-Up?” and “Book a free consultation” CTA.
   - **CTA Repeat**: final banner with doc’s CTA copy and link to `/contact` or `/contact#form`.
4. Use `Container` and existing typography/spacing patterns from other pages (Home, Experience, Services landing). Respect section separators, ChipMark/logo motifs, and the “one accent stripe per page” rule per design-refinement.
5. Add at least:
   - One internal link back to `/services`.
   - One or more links to `/contact` (CTAs).
   - Links to the individual services in this package as specified above.
6. **Before claiming done:** Run the Verification commands below, read the full output, and confirm they pass. Only then mark the ticket complete.

## Verification (run before claiming done)

1. **Links:** Confirm at least one link to `/services`, one or more to `/contact`, and links to `/services/performance` and `/services/seo` (and optionally accessibility, personalization, automation).

Do not claim the ticket complete without running these and confirming the output.

## Done Criteria

- `/services/speed-seo` exists and renders a full detail page based on `docs/content/speed-seo-tune.md`.
- The page uses `generateMetadata` with a strong, honest title and meta description.
- Layout and styling follow design-guidelines and design-refinement; headings and CTAs are clear and accessible.
- Internal links connect back to `/services`, `/contact`, and to the individual services in this package (performance, seo; optionally accessibility, personalization, automation).
- Only `app/services/speed-seo/page.tsx` was created/modified; changes are summarized in ≤5 bullets or an Implementation Summary below.

## Implementation Summary (fill after completing)

- **Completed:** Ticket 15 – Speed & SEO Tune-Up package page.
- **Changes Made:**
  1. Created `/services/speed-seo` route with full package page layout
  2. Implemented "Package" badge and repositioned accent stripe for visual differentiation
  3. Added "Services in this Package" section with left-accent-bordered cards linking to `/services/performance` and `/services/seo`
  4. Split "What's Included" into two subsections (Performance Optimization with Zap icon, Technical SEO with Search icon) for clarity
  5. Included "Often Combined With" callout linking to accessibility, personalization, and automation
  6. Added all required sections: hero, problem/promise, deliverables, timeline, use cases, custom packages, and final CTA
- **Key improvement / Result:** Package page uses visual hierarchy (icons, dual subsections) to communicate both performance and SEO value clearly. Distinct package identity through badge and stripe positioning maintains design consistency while signaling premium bundle.
- **Files Modified:** `app/services/speed-seo/page.tsx` (created)
- **Skills Used:** brainstorming, frontend-design, copywriting, content-marketer, marketing-psychology
- **Result:** Dual-service package page with clear value props and proper internal linking
