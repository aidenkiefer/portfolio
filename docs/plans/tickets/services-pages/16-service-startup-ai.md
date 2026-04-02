## 16 — Service page: Startup AI Jumpstart (`/services/startup-ai`)

## Task

- Create the **Startup AI Jumpstart** package page at `/services/startup-ai`, using `docs/content/startup-ai.md` as the primary copy source.
- Implement hero, problem/promise, deliverables (chatbot, content workflows, personalization), timeline, use cases, and CTA repeat sections in a layout consistent with the portfolio design system.
- **Include links to the individual services in this package**: `/services/chatbots`, `/services/ai-content`, `/services/personalization`; optionally “often combined with” links to `/services/automation`, `/services/performance`, `/services/internal-tools`, `/services/api-integrations` (per spec “Package Pages: Individual Service Links”).

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
- docs/content/startup-ai.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts
- lib/design-tokens.ts
- app/services/page.tsx (for overall services context; do not edit in this ticket)

## Allowed Files (ONLY these)

- app/services/startup-ai/page.tsx (create)

> If you determine a shared `app/services/layout.tsx` or shared components under `components/services/` would be helpful, stop and ask to extend the Allowed Files list rather than creating them in this ticket.

## Hard Limits

- Do **not** modify `app/services/page.tsx` or any other service pages in this ticket.
- Do not change global SEO configuration beyond using `generateMetadata` appropriately on this page.
- Do not alter copy meaning, pricing, or claims beyond light editing for clarity and flow.
- **If blocked:** Stop and ask to extend Allowed Files; do not guess or broaden scope.

## Instructions

1. Use skills as above; read `docs/content/startup-ai.md` and the services-pages spec to understand structure and copy.
2. Create `app/services/startup-ai/page.tsx`:
   - Use `generateMetadata` from `lib/seo.ts` to set a descriptive title and meta description (e.g. “Startup AI Jumpstart – Launch with AI Built In, Not Bolted On”).
   - Implement the hero section using the Title, Subheadline, and primary CTA from the content doc.
3. Implement structured sections based on the doc (match section order and headings where it aids clarity):
   - **Section 1 (What This Package Solves)**: one subheading and paragraph describing startup AI pain and jumpstart promise (including “solid AI foundation” message).
   - **Section 2 (What’s Included)**: subheading “Startup AI Jumpstart Includes” with **AI Customer Service Chatbot**, **AI Content Workflows**, and **AI-Powered Personalization** subsections and bullet lists from the doc.
   - **Section 3 (Timeline & Delivery / Fast, Focused, Founder-Friendly)**: ~5–7 days, kickoff call, setup → testing → live deployment, walkthrough.
   - **Section 4 (Ideal Use Cases / This Package Is Perfect If You’re)**: checklist from the doc (launching, lean team, AI UX without engineers, modern tooling).
   - **Services in this package / Custom packages**: include links to `/services/chatbots`, `/services/ai-content`, `/services/personalization`; optionally “often combined with” links to `/services/automation`, `/services/performance`, `/services/internal-tools`, `/services/api-integrations` per spec. Preserve the doc’s “Want a Custom AI Package?” and “Book a free consultation” CTA.
   - **CTA Repeat**: final banner with doc’s CTA copy and link to `/contact` or `/contact#form`.
4. Use `Container` and existing typography/spacing patterns from other pages (Home, Experience, Services landing). Respect section separators, ChipMark/logo motifs, and the “one accent stripe per page” rule per design-refinement.
5. Add at least:
   - One internal link back to `/services`.
   - One or more links to `/contact` (CTAs).
   - Links to the individual services in this package as specified above.
6. **Before claiming done:** Run the Verification commands below. Only then mark the ticket complete.

## Verification (run before claiming done)

1. **Links:** Confirm at least one link to `/services`, one or more to `/contact`, and links to `/services/chatbots`, `/services/ai-content`, and `/services/personalization` (and optionally automation, performance, internal-tools, api-integrations).

Do not claim the ticket complete without running these and confirming the output.

## Done Criteria

- `/services/startup-ai` exists and renders a full detail page based on `docs/content/startup-ai.md`.
- The page uses `generateMetadata` with a strong, honest title and meta description.
- Layout and styling follow design-guidelines and design-refinement; headings and CTAs are clear and accessible.
- Internal links connect back to `/services`, `/contact`, and to the individual services in this package (chatbots, ai-content, personalization; optionally automation, performance, internal-tools, api-integrations).
- Only `app/services/startup-ai/page.tsx` was created/modified; changes are summarized in ≤5 bullets or an Implementation Summary below.

## Implementation Summary (fill after completing)

- **Completed:** Ticket 16 – Startup AI Jumpstart package page.
- **Changes Made:**
  1. Created `/services/startup-ai` route with full package page layout
  2. Implemented "Package" badge and repositioned accent stripe for visual differentiation
  3. Added "Services in this Package" section with 3-column grid (desktop) featuring left-accent-bordered cards linking to `/services/chatbots`, `/services/ai-content`, and `/services/personalization`
  4. Split "What's Included" into three detailed subsections (AI Chatbot with Bot icon, Content Workflows with FileText icon, Personalization with Target icon)
  5. Included "Often Combined With" callout linking to automation, performance, internal-tools, and api-integrations
  6. Added all required sections: hero, problem/promise, deliverables, timeline, use cases, custom packages, and final CTA
- **Key improvement / Result:** Most comprehensive package page with three-service bundle clearly communicated through 3-column service grid and icon-enhanced deliverables subsections. Package identity is distinct while maintaining portfolio design consistency.
- **Files Modified:** `app/services/startup-ai/page.tsx` (created)
- **Skills Used:** brainstorming, frontend-design, copywriting, content-marketer, marketing-psychology
- **Result:** Premium AI package page with clear three-service value prop and extensive internal linking
