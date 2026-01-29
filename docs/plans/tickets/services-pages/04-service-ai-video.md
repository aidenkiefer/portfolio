## 04 — Service page: AI Voiceovers & Video Avatars (`/services/ai-video`)

## Task

- Create the **AI Voiceovers & Video Avatars** detail page at `/services/ai-video`, using `docs/content/ai-vo-avatars.md` as the primary copy source.
- Implement hero, problem/promise, deliverables, use cases, timeline, and CTA repeat sections in the established service-page pattern.

## Mandatory skill usage

- **using-superpowers**: Invoke first to select and coordinate relevant skills.
- **brainstorming**: Clarify how this page should position AI video vs. traditional production for your target audience.
- **frontend-design**: Design a layout that feels visually engaging yet still aligned with the restrained portfolio aesthetic.
- **interactive-portfolio**: Ensure the page showcases your ability to deliver multimedia/creative outcomes without feeling like a SaaS landing page.
- **copywriting**: Polish video/voiceover copy for specificity, outcomes, and honest expectations.
- **content-marketer**: Align structure with how prospects evaluate video services and search for these solutions.
- **marketing-psychology**: Ethically emphasize relief from production pain and benefits of video without over-claiming.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Follow proper route and metadata patterns.
- **Claude Code Guide**: Keep modifications bounded and well-documented.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/content/ai-vo-avatars.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

## Allowed Files (ONLY these)

- app/services/ai-video/page.tsx (create)

> If shared components are needed, ask to extend Allowed Files before creating them.

## Hard Limits

- Do **not** edit other service pages or the Services landing page.
- Do not modify global SEO configuration; only configure this page via `generateMetadata`.
- Keep pricing and claims consistent with the content doc, adjusting only for clarity and tone.
- **If blocked:** Stop and ask; do not expand scope unilaterally.

## Instructions

1. Use skills as above; read `docs/content/ai-vo-avatars.md` and relevant specs.
2. Create `app/services/ai-video/page.tsx`:
   - Use `generateMetadata` to define a descriptive title and meta description (e.g. “AI Voiceover & Video Avatar Services for Founders & Creators”).
   - Implement the hero using the Title, Subheadline, and CTA from the content doc.
3. Implement the sections:
   - **Problem → Promise**: frame the pain of traditional video production and the promise of AI-generated video.
   - **What You Get / Deliverables**: list outputs (scripts, voiceovers, avatar videos, formats).
   - **Use Cases / Who This Helps**: show where AI video is most effective.
   - **Timeline & Delivery**: describe turnaround and process.
   - **CTA Repeat**: final call-to-action banner pointing to `/contact` or `/contact#form`.
4. Follow design-guidelines and design-refinement for spacing, typography, section separators, and accent usage.
5. Include internal links:
   - Back to `/services`.
   - To `/contact` for consultation/booking.
6. Verify `/services/ai-video` renders correctly on mobile and desktop and matches the portfolio’s tone and visual polish.

## Done Criteria

- `/services/ai-video` exists and accurately reflects `docs/content/ai-vo-avatars.md`.
- The page uses `generateMetadata` with an appropriate title and meta description.
- Layout and visual treatment align with the shared service-page pattern and design system.
- Internal links to `/services` and `/contact` are present.
- Only `app/services/ai-video/page.tsx` was created/modified; work is summarized in ≤5 bullets or an Implementation Summary.

