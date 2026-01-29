# Services Landing Page Spec

This spec is the **only context** needed to execute the services landing page tickets in `docs/plans/tickets/services/`. Claude must follow the design guidelines and refinements referenced below while implementing tickets.

## Scope

- **In scope**: A single **Services** landing page at `/services` that presents contractor offerings for startups, solo founders, and small-to-medium businesses. The page includes a hero, service categories, optional packages, final CTA, and footer note. Subpages (e.g. `/services/chatbots`) are **out of scope** for this phase—use placeholder links only.
- **Out of scope**: Individual service subpages, backend/API for bookings, payment flows, or any changes to blog/projects/experience logic.
- **Goal**: A conversion-focused, mobile-first Services page that advertises tech-forward freelance services with clear CTAs and intentional marketing copy, while staying consistent with the site’s design system.

## Design Constraints (Mandatory)

All UI and layout decisions must follow:

- **docs/design-guidelines.md** — Color system (warm neutrals, accent navy/brick red), typography (IBM Plex Sans/Mono), layout (content width, spacing rhythm, borders over shadows), section separators, card treatments, links, motion, and “what not to add.”
- **docs/design-refinement.md** — Section separators, typographic contrast between sections, card physical presence (choose one: soft shadow, hover lift, or accent border), logo/ChipMark motif, single accent stripe per page, hero refinement (secondary line), micro-interactions (CTA arrows, card hover).

Use **lib/design-tokens.ts** and existing Tailwind/CSS conventions (e.g. `text-text-primary`, `bg-accent-primary`, `border-border`) so the Services page matches Contact, Experience, and Home.

## Recommended Skills for This Spec

When running tickets against this spec, strongly consider using these skills:

- **using-superpowers**: Ensure the right skills are invoked and followed before any implementation.
- **brainstorming**: Turn the services-page brief into clear, validated UI and content decisions before coding.
- **frontend-design**: Design the Services UI to be distinctive, production-grade, and consistent with the portfolio’s visual system.
- **copywriting**: Shape and refine marketing copy (headlines, subheads, CTAs, service descriptions) for clarity and conversion.
- **interactive-portfolio**: Tune the page for how hiring managers and clients scan portfolios and service offerings.
- **marketing-psychology**: Apply behavioral principles (ethically) to CTAs, section ordering, and social proof.
- **marketing-ideas** / **content-marketer**: Position this page within a broader acquisition and content strategy.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Keep `/services` aligned with modern Next.js App Router patterns.
- **Claude Code Guide**: Follow best practices for working with Claude Code and the ticket workflow in this repo.

These should be referenced in individual tickets as appropriate; each ticket should typically use 5–12 of them.

## Content Model

### Hero

- **Headline:** “Modern Tech Services to Supercharge Your Business”
- **Subheadline:** “From AI chatbots to backend automation, I help startups and lean teams unlock growth with fast, effective web-based solutions.”
- **CTAs:** “Book a Free Discovery Call” (primary, e.g. to `/contact`) and “View Services Below” (secondary, anchor or scroll).

### Service Categories (three)

1. **AI-Enhanced Experiences**  
   Tagline: “Tools that engage visitors, automate tasks, and deliver smarter customer experiences.”  
   Services: AI Customer Service Chatbots ($150), AI-Generated Content Workflows ($120), AI-Powered Web Personalization ($230), AI Voiceovers & Video Avatars ($80), AI-Based Business Insights ($260). Each has a “Learn more” link to a placeholder route (e.g. `/services/chatbots`).

2. **Performance, UX, and Optimization**  
   Tagline: “Speed, accessibility, and error-free functionality to keep your site running at its best.”  
   Services: Website Speed & Performance ($120), Technical SEO Setup ($200), Accessibility & Mobile Readiness Audit ($100), One-Off Bug Fixes ($50).

3. **Automation & Backend Integrations**  
   Tagline: “Free up time and connect your stack with custom-built backend tools.”  
   Services: Business Process Automation ($230), API Integrations ($200), Internal Tools & Dashboards ($140).

Each service line: title, short description, “Starting at $X”, and “Learn more” → `/services/<slug>` (placeholder).

### Optional Starter Packages

- **Startup AI Jumpstart** — $350 → `/services/startup-ai`
- **Speed & SEO Tune-Up** — $150 → `/services/speed-seo`
- **Automation Sprint** — $220 → `/services/automation-sprint`

### Consulting & Misc Services Section (“Need Help with Something Else?”)

This section lives near the bottom of the page, above the final CTA and footer.

- **Title:** “Need Help with Something Else?”
- **Body copy (guidance):** Brief paragraph or two explaining that not every useful engagement fits neatly into a predefined package, and that you’re available for:
  - Consulting on tricky architecture or performance issues
  - Short-term advisory work for product/engineering teams
  - One-off problem-solving or exploratory prototypes
  - Miscellaneous technical work that aligns with your experience
- **Pricing message:** Emphasize that these are **custom engagements** with rates set after a **free consultation call** (no public flat pricing here).
- **CTA:** An additional button or prominent link like “Talk Through Your Project” or “Schedule a Free Consult” that routes to `/contact` (or `/contact#form`).

### Final CTA Section

- **Headline:** “Let’s Build Something That Saves You Time or Makes You Money”
- **Subhead:** “If you’re building something and want to move faster, cleaner, or smarter—let’s talk.”
- **Links:** “Book a Free Strategy Call” and “Reach Out by Email” (both to `/contact` or `/contact#form`).

### Footer Note

- Social/contact links (reuse site footer or inline note).
- Copy: “All services are remote and tailored per client. Custom quotes available upon request.”

## UX & Structure

- **Layout:** Clean, section-based, mobile-first. Use section headers, bold subheadings, and clear CTAs.
- **Pricing:** Show “Starting at $X” for each service; package price for bundles. No checkout—CTAs drive to contact.
- **Navigation:** Services page must be reachable from the main nav (e.g. “Services” link). Homepage may link to Services (optional per ticket).
- **Links:** All “Learn more” and package links go to `/services/<slug>`. Those routes can 404 or redirect to `/services` or `/contact` until subpages exist; the landing page only needs correct hrefs.

## Success Criteria

- Services page is live at `/services` and linked from the navbar.
- Hero, three category sections, packages section, final CTA, and footer note are present and match the content model.
- Visual design aligns with design-guidelines and design-refinement (colors, type, spacing, section separators, cards, one accent stripe, ChipMark where appropriate).
- Page is responsive and readable; CTAs are obvious and point to `/contact` or in-page anchors as specified.
- No edits to unrelated pages except navbar (and any shared layout/footer as agreed in tickets).

## Reference Docs (for tickets)

- docs/services-page.md (full copy and structure)
- docs/content/*.md (per-service detailed page copy; for use when designing future subpages, not implemented in this batch)
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
