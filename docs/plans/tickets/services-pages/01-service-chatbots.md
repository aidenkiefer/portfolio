## 01 — Service page: AI Customer Service Chatbots (`/services/chatbots`)

## Task

- Create the **AI Customer Service Chatbots** detail page at `/services/chatbots`, using `docs/content/ai-chatbot.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections in a layout consistent with the portfolio design system.

## Mandatory skill usage

- **using-superpowers**: Invoke first; orchestrate the rest of the skills and enforce the workflow playbook.
- **brainstorming**: Clarify page goals, target clients, and key outcomes before coding.
- **frontend-design**: Design the page layout, typography, and spacing to match the portfolio’s design-guidelines and design-refinement.
- **interactive-portfolio**: Ensure this service page strengthens the overall portfolio and passes the “30-second test.”
- **copywriting**: Adapt and tighten the chatbot copy for clarity and conversion while preserving meaning and pricing.
- **content-marketer**: Align headings, structure, and CTAs with realistic search intent and funnel strategy.
- **marketing-psychology**: Apply ethical behavioral patterns to CTAs and social proof (e.g. use cases) without hype.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Ensure the route and metadata follow App Router norms.
- **Claude Code Guide**: Keep edits small, scoped, and well-verified.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/ai-chatbot.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts
- app/services/page.tsx (for overall services context; do not edit in this ticket)

## Allowed Files (ONLY these)

- app/services/chatbots/page.tsx (create)

> If you determine a shared `app/services/layout.tsx` or shared components under `components/services/` would be helpful, stop and ask to extend the Allowed Files list rather than creating them in this ticket.

## Hard Limits

- Do **not** modify `app/services/page.tsx` or any other service pages in this ticket.
- Do not change global SEO configuration beyond using `generateMetadata` appropriately in this page.
- Do not alter copy meaning, pricing, or claims beyond light editing for clarity and flow.
- **If blocked:** Stop and ask to extend Allowed Files; do not guess or broaden scope.

## Instructions

1. Use skills as above; read `docs/content/ai-chatbot.md` and the services-pages spec to understand structure and copy.
2. Create `app/services/chatbots/page.tsx`:
   - Use `generateMetadata` from `lib/seo.ts` to set a descriptive title and meta description (e.g. “AI Customer Service Chatbots for Startups & Small Businesses”).
   - Implement the hero section using the Title, Subheadline, and primary CTA from the content doc.
3. Implement structured sections based on the doc:
   - **Problem → Promise**: one subheading and paragraph describing the support pain and chatbot promise.
   - **What You Get / What’s Included**: bullet list of deliverables (custom-trained GPT chatbot, integrations, etc.).
   - **Use Cases**: checklist of real-world use cases (ecommerce, startups, creators, agencies).
   - **Timeline & Delivery**: bullets describing prototype and full deployment timelines.
   - **CTA Repeat**: final banner with service-specific CTA linking to `/contact` or `/contact#form`.
4. Use `Container` and existing typography/spacing patterns from other pages (Home, Experience, Services landing). Respect section separators, ChipMark/logo motifs, and the “one accent stripe per page” rule per design-refinement.
5. Add at least:
   - One internal link back to `/services`.
   - One or more links to `/contact` (CTAs).
6. Verify the page renders at `/services/chatbots`, matches the tone and design of the site, and contains no layout or accessibility regressions.

## Done Criteria

- `/services/chatbots` exists and renders a full detail page based on `docs/content/ai-chatbot.md`.
- The page uses `generateMetadata` with a strong, honest title and meta description.
- Layout and styling follow design-guidelines and design-refinement; headings and CTAs are clear and accessible.
- Internal links connect back to `/services` and `/contact`.
- Only `app/services/chatbots/page.tsx` was created/modified; changes are summarized in ≤5 bullets or an Implementation Summary.

