## 06 — Services SEO optimization

## Task

- Improve the **SEO footprint** of the `/services` landing page so it has a stronger chance of ranking for relevant queries (e.g. “freelance software engineer services”, “AI automation for small business”, “web performance consulting”).
- Apply **on-page SEO best practices** without turning the page into keyword-stuffed marketing; preserve the calm, engineer-oriented tone.

## Mandatory skill usage

- **using-superpowers**: Invoke this first; let it orchestrate the remaining skills.
- **content-marketer**: Drive overall SEO/content strategy for this page (keywords, internal links, content structure).
- **copywriting**: Refine titles, headings, and body copy for clarity, honesty, and search relevance—without hype or stuffing.
- **marketing-ideas**: Sanity-check which search intents and angles (AI, automation, performance, consulting) are worth emphasizing.
- **marketing-psychology**: Ensure SEO-driven changes still respect user behavior, friction, and ethical communication.
- **interactive-portfolio**: Keep the page portfolio-appropriate while making it more discoverable and skimmable.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Ensure metadata and any structured data are added in an idiomatic Next.js way.
- **Claude Code Guide**: Follow best practices for small, verifiable edits and avoiding overreach.

## Reference Docs (read-only)

- docs/plans/specs/services-landing-spec.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- lib/seo.ts
- app/contact/page.tsx, app/experience/page.tsx (for metadata + internal linking patterns)

## Allowed Files (ONLY these)

- app/services/page.tsx
- lib/seo.ts (read-only unless a small, clearly positive SEO tweak is required; see Hard Limits)
- data/site.ts (only if adding or adjusting site-level metadata such as description/keywords that clearly help this page)

> If you discover that global SEO configuration lives elsewhere (e.g. custom `metadata` in `app/layout.tsx`), stop and ask to extend Allowed Files rather than editing it directly.

## Hard Limits

- Do **not** add spammy keyword stuffing, hidden text, or misleading copy—SEO improvements must stay aligned with the site’s tone and ethics.
- Do not change global SEO behavior (e.g. robots, sitemaps) beyond minor, clearly-justified metadata tweaks in `lib/seo.ts` or `data/site.ts`.
- Do not alter the visual layout or structure of the Services page beyond what is necessary for headings, copy refinement, or small internal links.
- **If blocked:** Stop and ask for an explicit file/path extension; do not guess or broaden scope.

## Instructions

1. Use skills as above; review the spec and existing `/services` implementation so you understand the current structure (hero, categories, packages, consulting section, final CTA).
2. Identify **primary SEO themes** for this page (e.g. freelance software engineer services, AI automation for startups, website performance consulting) using `content-marketer` and `marketing-ideas`. Decide how they map to:
   - Page `<title>` and meta description (via `generateMetadata` call for `/services`).
   - H1/H2 hierarchy and section headings.
3. In `app/services/page.tsx`:
   - Ensure there is exactly **one H1** that clearly describes the page purpose in SEO-friendly but natural language.
   - Adjust H2/H3 headings to better reflect search intent where appropriate (without breaking design-guidelines).
   - Lightly refine body copy where it improves clarity and search relevance, but do not over-optimize or change the page’s personality.
   - Add **sensible internal links** to other relevant pages (e.g. `/projects`, `/blog`, key service subpages once they exist, `/contact`) from appropriate sections.
4. Using `lib/seo.ts` and the existing `generateMetadata` pattern:
   - Confirm that the `/services` page sets a strong, descriptive title and meta description that reflect your target queries and positioning.
   - If necessary, adjust `data/site.ts` description or add a services-specific description that `generateMetadata` can use.
5. (Optional, only if it aligns with constraints) Consider adding a small, unobtrusive JSON-LD block for `Service` or `Organization` schema to the page if you can do so cleanly and without cluttering the UI. If unsure, skip this and leave a note instead of implementing.
6. Verify that:
   - The page still reads naturally to humans.
   - Headings and metadata are more search-friendly.
   - There are no regressions to layout, accessibility, or design-guidelines.

## Done Criteria

- `/services` has a clear, SEO-conscious title, meta description, and H1/H2 structure aligned with the spec and services you offer.
- Body copy is slightly more search-relevant but still calm, honest, and portfolio-appropriate (no keyword stuffing).
- Internal links from `/services` help search engines and users discover related pages (projects, blog, contact, or future service subpages).
- Any changes to `lib/seo.ts` or `data/site.ts` are minimal, clearly beneficial, and do not disrupt other pages.
- Only files in Allowed Files were modified; a brief summary of SEO-focused changes is included (≤5 bullets or an Implementation Summary).

