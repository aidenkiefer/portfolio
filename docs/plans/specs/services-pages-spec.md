# Services Detail Pages Spec

This spec is the **only context** needed to execute the services detail page tickets in `docs/plans/tickets/services-pages/`. Claude must follow the design guidelines, refinements, and workflow playbook while implementing tickets.

## Scope

- **In scope**: Creating a set of individual service pages under `/services/*` that correspond to the offerings listed on the Services landing page, using content from `docs/content/*.md`:
  - `/services/chatbots`
  - `/services/ai-content`
  - `/services/personalization`
  - `/services/ai-video`
  - `/services/ai-insights`
  - `/services/performance`
  - `/services/seo`
  - `/services/accessibility`
  - `/services/bugfixes`
  - `/services/automation`
  - `/services/api-integrations`
  - `/services/internal-tools`
- **Also in scope**: Updating the Services landing page so its “Learn more” links point to and integrate with these new pages.
- **Out of scope**: Changes to unrelated routes, global site navigation beyond what is needed to connect these pages, or any non-services content.
- **Goal**: Give each service its own high-quality, SEO-conscious, conversion-ready page while keeping the experience aligned with the portfolio’s calm, engineer-first design language.

## Design & Content Constraints (Mandatory)

All UI and layout decisions must follow:

- **docs/design-guidelines.md** — Color system, typography, spacing, card treatments, “no gradients/trendy visuals,” accessibility and readability constraints.
- **docs/design-refinement.md** — Section separators, card presence, logo/ChipMark usage, single accent stripe per page, micro-interactions, hero refinements.
- **lib/design-tokens.ts** — Use existing tokens and Tailwind utility patterns (e.g. `text-text-primary`, `bg-background`, `border-border`) to keep pages consistent with the rest of the site.

Content constraints:

- Each detail page’s **primary copy** comes from the matching file in `docs/content/*.md`. Claude may lightly adapt copy for flow or layout, but must not change meaning, pricing, or intent without explicit instruction.
- Services landing page (`/services`) remains the “overview” page; detail pages should:
  - Reinforce and expand on the summaries from `docs/services-page.md`.
  - Provide more depth, examples, and CTAs for that specific service.

## URL → Content Mapping

Use these mappings between landing page slugs and content docs:

- `/services/chatbots` → `docs/content/ai-chatbot.md`
- `/services/ai-content` → `docs/content/ai-workflows.md`
- `/services/personalization` → `docs/content/ai-personalization.md`
- `/services/ai-video` → `docs/content/ai-vo-avatars.md`
- `/services/ai-insights` → `docs/content/ai-insights.md`
- `/services/performance` → `docs/content/speed-perf-opt.md`
- `/services/seo` → `docs/content/tech-seo-setup.md`
- `/services/accessibility` → `docs/content/accessibility-mobile-opt.md`
- `/services/bugfixes` → `docs/content/bugs-error-monitoring.md`
- `/services/automation` → `docs/content/process-automation.md`
- `/services/api-integrations` → `docs/content/api-tooling.md`
- `/services/internal-tools` → `docs/content/admin-tools.md`

## Page Layout Pattern

Each service page should follow a common structure, adapted from the content docs:

1. **Hero section**
   - Title, subheadline, and primary CTA button (from the doc’s “Header (Hero)”).
   - Clear H1 and H2 hierarchy; hero must feel consistent with the Services landing page and home hero patterns.
2. **Problem → Promise section**
   - One subheading and one explanatory paragraph describing the pain and promise (from the doc).
3. **What You Get / Deliverables**
   - Bullet list of what’s included (deliverables, features, scope).
4. **Use Cases / Who This Helps**
   - Checklist-style use cases or audience types (✅ bullets in docs).
5. **Timeline & Delivery**
   - Short section describing turnaround time, phases, and optional add-ons.
6. **CTA Repeat**
   - Final CTA banner reinforcing the service-specific action and linking to `/contact` (or `/contact#form`).

Visual treatment:

- Use `Container`, existing section heading patterns, and card-like panels where appropriate.
- Respect the “one accent stripe per page” rule and ChipMark/logo motif usage.
- Keep motion minimal and consistent with design-refinement guidance.

## SEO & UX Considerations

- Each page must:
  - Use `generateMetadata` from `lib/seo.ts` for a descriptive, honest title and meta description.
  - Have exactly one H1 that matches or closely mirrors the service name and value proposition.
  - Use H2/H3 headings that reflect how someone might search for that service (but no keyword stuffing).
  - Include at least one internal link back to `/services` and one to `/contact`, plus any other genuinely helpful cross-links.
- Preserve the calm, credibility-first tone: no hype, no exaggerated claims, no fake proof.

## Recommended Skills for This Spec

When running tickets against this spec, strongly consider:

- **using-superpowers**: Orchestrate skill usage and enforce the workflow playbook.
- **brainstorming**: Clarify each page’s purpose, target client, and key outcomes before coding.
- **frontend-design**: Design each service page to be distinctive but consistent with the core portfolio design system.
- **interactive-portfolio**: Make the service pages feel like part of a cohesive, high-quality portfolio that converts.
- **copywriting**: Adapt and refine service copy for clarity, honesty, and conversion (without changing meaning).
- **content-marketer**: Ensure each page supports a coherent SEO and content strategy, not just isolated copy.
- **marketing-psychology**: Apply behavioral models around CTAs, social proof, and friction reduction ethically.
- **marketing-ideas**: Sanity-check which differentiators and use cases to foreground for each service.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Ensure routes, layouts, and metadata follow App Router norms.
- **Claude Code Guide**: Keep work small-scoped, verifiable, and aligned with the repo’s ticketing workflow.

## Success Criteria

- All 12 service pages exist at the correct `/services/*` paths, with layouts and copy grounded in `docs/content/*.md`.
- Each page:
  - Uses `generateMetadata` with a strong title and meta description.
  - Follows the shared layout pattern while allowing for service-specific details.
  - Includes clear, relevant CTAs and internal links.
- The Services landing page:
  - Links to these pages via its “Learn more” links and/or additional inline links where helpful.
  - Remains visually and structurally consistent with its own spec.
- No unrelated pages or global settings are modified beyond minimal SEO wiring that clearly benefits these pages.

## Reference Docs (for tickets)

- docs/services-page.md
- docs/content/*.md (service-specific page copy)
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/seo.ts

