# Service Pages Enrichment Spec

This spec is the **only context** needed to execute the service-page enrichment tickets in `docs/plans/tickets/service-pages-enrichment/`. Claude must follow this spec plus the design guidelines and workflow playbook when implementing enrichment tickets.

**Prerequisite:** The base service page must already exist at its `/services/*` route (per `docs/plans/specs/services-pages-spec.md`). Enrichment **adds** sections and content; it does not replace the existing hero, problem/promise, deliverables, use cases, timeline, or CTA repeat—those remain. New sections are inserted in a logical order (e.g. after “What You Get” and before or after “Timeline & Delivery” as specified below).

---

## Purpose & Goal

Expand each existing service (or package) page into a **high-authority, SEO-optimized, conversion-focused page** that:

- Clearly explains what the service (or package) is in plain language
- Demonstrates real-world applications and outcomes
- Builds trust with founders, startups, and SMBs
- Increases keyword coverage and topical depth
- Encourages contact or booking without sounding salesy

**Approach:** Add eight defined sections per `docs/service-pages-enrichment.md`. Content is service-specific; structure and headings are consistent. Package pages use the same eight sections with package-appropriate framing (e.g. “What This Package Actually Does,” “Who This Package Is Best For”).

---

## Scope

**In scope:**

- All **12 individual** service pages: `/services/chatbots`, `/services/ai-content`, `/services/personalization`, `/services/ai-video`, `/services/ai-insights`, `/services/performance`, `/services/seo`, `/services/accessibility`, `/services/bugfixes`, `/services/automation`, `/services/api-integrations`, `/services/internal-tools`
- All **3 package** pages: `/services/automation-sprint`, `/services/speed-seo`, `/services/startup-ai`
- Adding the eight enrichment sections (see below) to each page’s component, preserving existing layout and design tokens

**Out of scope:**

- Changing the Services landing page structure or navigation
- Adding new routes or new service pages
- Changing pricing, core value proposition, or hero copy beyond light adaptation for flow
- Removing or replacing existing sections (hero, problem/promise, deliverables, use cases, timeline, CTA repeat); enrichment **adds** sections

**Validation:** Each enriched page contains all eight sections with content appropriate to that service or package; headings and structure match this spec; tone and SEO requirements are met.

---

## Design & Content Constraints (Mandatory)

- **docs/design-guidelines.md** — Color, typography, spacing, card treatments, accessibility. Enriched sections must use the same design system (e.g. `Container`, existing section heading patterns, `lib/design-tokens.ts`).
- **docs/design-refinement.md** — Section separators, card presence, ChipMark/logo usage, single accent stripe per page. New sections must not introduce a second accent stripe or break existing patterns.
- **docs/plans/specs/services-pages-spec.md** — Existing page structure and URL → content mapping remain the source of truth for primary copy; enrichment adds *new* sections and depth.

Content for each section should be derived from or consistent with the matching content doc in `docs/content/*.md` (see URL → Content Mapping in the services-pages spec). For new copy (e.g. FAQs, examples), stay within the service’s scope and avoid changing meaning, pricing, or intent.

---

## Global Writing Guidelines (All Enriched Sections)

- Write for **non-technical founders** first, technical readers second
- Avoid jargon unless immediately explained
- Use short paragraphs, bullet points, and clear subheadings
- Emphasize *outcomes*, not just features
- Assume the reader is asking: “Is this relevant to me?” “Will this actually help my business?” “Is this person legit?”

**Tone:** confident, clear, modern, practical  
**Audience:** startups, solo founders, lean teams, small businesses

---

## Section-by-Section Requirements

Each service (or package) page must include the following eight sections. Heading text below is the required H2 (or equivalent); for package pages, substitute “Service” with “Package” where it reads naturally (e.g. “What This Package Actually Does”).

### Section 1: What This Service Actually Does

**Heading:** `## What This Service Actually Does` (or `## What This Package Actually Does` for package pages)

**Instructions:**

- Explain the service in practical, concrete terms. Avoid leading with tools or APIs; focus on the *job to be done*.
- **Include:** What problem this service solves; what changes *after* the service is implemented; what the client no longer has to worry about.
- **Example framing:** “At its core, this service helps you ___ by ___, so you can ___.”

---

### Section 2: Who This Service Is Best For

**Heading:** `## Who This Service Is Best For` (or `## Who This Package Is Best For` for package pages)

**Instructions:**

- Explicitly call out ideal clients and gently disqualify bad fits.
- **Include two subsections:**

  **✅ Great Fit If You:**

  - List 4–6 clear scenarios
  - Focus on founder pain points (time, scale, clarity, speed)

  **🚫 Not a Great Fit If You:**

  - List 2–4 cases
  - Builds trust and saves bad leads

---

### Section 3: Real-World Examples

**Heading:** `## Real-World Examples`

**Instructions:**

- Provide 2–3 applied scenarios written like mini case studies. They can be hypothetical but must feel realistic.
- **Each example must include:** Client type; initial problem; what was implemented; outcome/result.
- **Structure per example:**

  **Example 1: [Client Type]**

  - **Problem:**
  - **Solution:**
  - **Result:**

- Focus on *business outcomes* (time saved, conversions, clarity, reduced workload).

---

### Section 4: What You Can Expect After Implementation

**Heading:** `## What You Can Expect After Implementation`

**Instructions:**

- Translate the service into measurable or felt benefits.
- **Include:** Operational improvements; time savings; revenue or conversion impact; stress reduction / clarity.
- Use bullet points and strong verbs.

---

### Section 5: How the Process Works

**Heading:** `## How the Process Works`

**Instructions:**

- Outline the process step-by-step to reduce friction and fear.
- **Suggested format (adapt to service):**
  1. **Discovery / Setup**
  2. **Build / Configuration**
  3. **Testing & Iteration**
  4. **Delivery & Walkthrough**
- Keep it simple; avoid internal jargon.

---

### Section 6: Tools & Technology Used (Optional but Recommended)

**Heading:** `## Tools & Technology Used`

**Instructions:**

- Build credibility without overwhelming non-technical readers.
- List tools grouped by category with short explanations (e.g. “AI Models — used for ___”, “Automation Platforms — used for ___”, “Custom Code — used for ___”).
- **Optional note:** “Tool choice depends on your stack—I adapt to what you already use.”
- If the service is very tool-light, this section may be one short paragraph; do not invent tools.

---

### Section 7: Frequently Asked Questions

**Heading:** `## Frequently Asked Questions`

**Instructions:**

- Add 5–8 FAQs targeting: objections, pricing concerns, timeline questions, technical misunderstandings.
- **Examples:** How long does this take? Do I need technical knowledge? Will this work with my existing site/tools? Is this a one-time setup or ongoing?
- Each answer: 2–4 sentences; clear and reassuring; keyword-aware but natural.

---

### Section 8: Next Steps (Soft Conversion CTA)

**Heading:** `## Next Steps`

**Instructions:**

- Close with a calm, confident CTA. Do not hard-sell.
- **Example:** “If you think this could help your business, the next step is a short call to see if it’s a good fit.”
- **Include:** Primary CTA (book call or contact); secondary CTA (contact form); optional reassurance (“No obligation”, “Quick call”, etc.).
- Link to `/contact` or `/contact#form` as appropriate.

---

## Placement of Enriched Sections

- Insert the eight sections in **this order** (1 → 8) within the page.
- Place them **after** the existing “What You Get / Deliverables” and “Use Cases / Who This Helps” (and “Timeline & Delivery” if that appears before the CTA repeat in the current page). Typically: existing content first, then Section 1 (What This Service Actually Does) through Section 8 (Next Steps), then the existing **CTA Repeat** at the bottom.
- If the current page order differs (e.g. Timeline before Use Cases), add the eight sections in a single block after the last “content” section and before the final CTA banner.

---

## Package Pages: Adaptation

For `/services/automation-sprint`, `/services/speed-seo`, and `/services/startup-ai`:

- Use the same eight sections and the same global writing guidelines.
- Use package framing where it reads naturally: “What This Package Actually Does,” “Who This Package Is Best For,” etc.
- Real-World Examples and FAQs should reflect the *package* (e.g. “Automation Sprint,” “Speed & SEO Tune-Up,” “Startup AI Jumpstart”) and the bundled outcomes, not a single service.
- “How the Process Works” and “Tools & Technology Used” should reflect the package scope (multiple services/tools in one engagement).

---

## SEO & Output Requirements

- Use semantic markdown headings (H2 for section titles, H3 for subsections like “Great Fit If You” / “Not a Great Fit If You” and for each FAQ question or example title).
- Keep paragraphs scannable (short sentences, bullets where appropriate).
- Optimize for SEO depth without keyword stuffing.
- Assume the page supports long-term organic traffic; headings should reflect how people search for the service.

---

## URL → Content Mapping (Reference)

Use the same mapping as in `docs/plans/specs/services-pages-spec.md` for primary copy and service context:

| Route | Content doc |
|-------|-------------|
| `/services/chatbots` | `docs/content/ai-chatbot.md` |
| `/services/ai-content` | `docs/content/ai-workflows.md` |
| `/services/personalization` | `docs/content/ai-personalization.md` |
| `/services/ai-video` | `docs/content/ai-vo-avatars.md` |
| `/services/ai-insights` | `docs/content/ai-insights.md` |
| `/services/performance` | `docs/content/speed-perf-opt.md` |
| `/services/seo` | `docs/content/tech-seo-setup.md` |
| `/services/accessibility` | `docs/content/accessibility-mobile-opt.md` |
| `/services/bugfixes` | `docs/content/bugs-error-monitoring.md` |
| `/services/automation` | `docs/content/process-automation.md` |
| `/services/api-integrations` | `docs/content/api-tooling.md` |
| `/services/internal-tools` | `docs/content/admin-tools.md` |
| `/services/automation-sprint` | `docs/content/automation-sprint.md` |
| `/services/speed-seo` | `docs/content/speed-seo-tune.md` |
| `/services/startup-ai` | `docs/content/startup-ai.md` |

---

## Success Criteria

- All 15 service/package pages contain the eight enrichment sections in the specified order.
- Each section uses the required heading and follows the section instructions in this spec.
- Content is service- (or package-) specific, consistent with the corresponding content doc, and aligned with the global writing guidelines.
- Design and layout remain consistent with design-guidelines and design-refinement; no new accent stripes or broken patterns.
- FAQs, examples, and “Next Steps” are present and appropriate to the service/package.
- Only the designated page file(s) per ticket are modified; no unrelated routes or global settings changed.

---

## Ticket Execution Order

Execute tickets in `docs/plans/tickets/service-pages-enrichment/` in numerical order (01 → 15). Each ticket covers one page. Order: chatbots, ai-content, personalization, ai-video, ai-insights, performance, seo, accessibility, bugfixes, automation, api-integrations, internal-tools, automation-sprint, speed-seo, startup-ai. See `docs/plans/tickets/service-pages-enrichment/README.md` for the full table.

---

## Reference Docs (for tickets)

- docs/plans/specs/service-pages-enrichment-spec.md (this spec)
- docs/service-pages-enrichment.md (workflow and section details)
- docs/plans/specs/services-pages-spec.md (existing page structure, URL mapping)
- docs/content/*.md (per-page content source)
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- lib/design-tokens.ts
