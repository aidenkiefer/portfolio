## 02 — Service page: AI-Generated Content Workflows (`/services/ai-content`)

## Task

- Create the **AI-Generated Content Workflows** detail page at `/services/ai-content`, using `docs/content/ai-workflows.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections in a layout consistent with the portfolio design system.

## Mandatory skill usage

- **using-superpowers**: Invoke first to orchestrate all other skills for this ticket.
- **brainstorming**: Clarify key outcomes (time saved, content throughput) and main audience segments before coding.
- **frontend-design**: Shape the page layout, hierarchy, and spacing according to design-guidelines and design-refinement.
- **interactive-portfolio**: Make this service page feel like a natural extension of your portfolio and services narrative.
- **copywriting**: Tighten and adapt the content workflows copy for clarity, specificity, and credible value.
- **content-marketer**: Ensure headings, structure, and CTAs support real content marketing and SEO workflows.
- **marketing-psychology**: Apply ethical persuasion patterns around effort reduction, time savings, and social proof.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Keep route, metadata, and component structure idiomatic.
- **Claude Code Guide**: Keep changes small, testable, and scoped to this page.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/ai-workflows.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts
- app/services/page.tsx (context only; do not edit here)

## Allowed Files (ONLY these)

- app/services/ai-content/page.tsx (create)

> If you decide to introduce shared components under `components/services/`, stop and ask to extend Allowed Files rather than creating them in this ticket.

## Hard Limits

- Do **not** modify any other service pages or the Services landing page in this ticket.
- Do not modify global SEO behavior beyond using `generateMetadata` correctly for this page.
- Do not change pricing, guarantees, or claims from the content doc beyond minor wording improvements.
- **If blocked:** Stop and ask to extend Allowed Files; do not guess paths or broaden scope.

## Instructions

1. Use skills as above; study `docs/content/ai-workflows.md` and the services-pages spec.
2. Create `app/services/ai-content/page.tsx`:
   - Use `generateMetadata` to set a descriptive title and meta description (e.g. “AI-Generated Content Workflows for Founders & Marketers”).
   - Implement the hero using the Title, Subheadline, and CTA from the content doc.
3. Implement structured sections:
   - **Problem → Promise**: describe the content time crunch and the promise of workflows.
   - **What You Get / Deliverables**: bullet list of workflows, templates, and training.
   - **Use Cases / Perfect For**: checklists outlining ideal customers and situations.
   - **Timeline & Delivery**: include setup timing and any optional add-ons.
   - **CTA Repeat**: final banner with a service-specific CTA to `/contact` or `/contact#form`.
4. Use `Container` and typography/spacing consistent with other pages. Add subtle section separators and optional ChipMark/iconography as per design-refinement.
5. Include at least:
   - One internal link back to `/services`.
   - Clear CTAs linking to `/contact` (and/or `/contact#form`).
6. Verify `/services/ai-content` renders correctly, matches the site’s tone and design, and introduces no accessibility or layout regressions.

## Done Criteria

- `/services/ai-content` exists and reflects `docs/content/ai-workflows.md` in structure and meaning.
- The page uses `generateMetadata` with a strong, accurate title and meta description.
- Layout, headings, and CTAs follow design-guidelines and design-refinement.
- Internal links connect to `/services` and `/contact`.
- Only `app/services/ai-content/page.tsx` was created/modified; changes are summarized in ≤5 bullets or an Implementation Summary.

