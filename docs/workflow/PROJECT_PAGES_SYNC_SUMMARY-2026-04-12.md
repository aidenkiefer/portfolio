# Project pages sync — follow-ups (2026-04-12)

**Context:** Case studies under `content/projects/*.mdx` were refreshed from `~/projects/workflow-core/project-progress/*.md` and `~/projects/workflow-core/portfolio-extraction/*/project.md` per [project-case-studies.md](./project-case-studies.md).

**Update — recommendations implemented (2026-04-12, later pass):** Release feed registry + events for Crucible and AidDocs; Caliper “Now/Next” + Sprint 15–17 event; `data/skills.ts` links; new “Independent & personal engineering” block in `data/experience.ts`; projects list sorted featured-first; academic case studies set `featured: false`; `docs/index.md` runbook table. **Deferred:** human verification, logo assets (per user).

This document originally listed **optional** site updates; items below are kept as reference.

---

## Experience / Release Feed (`data/release-feed.ts`)

- **`crucible-gladiator-coliseum`** and **`aiddocs`** have MDX case studies but **no** `portfolioSlug` entries in `releaseFeedProjects` today. If you want “View case study” on future Crucible/AidDocs cards, add registry rows + `portfolioSlug`, and curate public-safe events first.
- Re-run [release-feed.md](./release-feed.md) after large quant or N-2 milestones so the board stays consistent with the updated MDX narratives.

---

## Skills & strengths (`data/skills.ts`, `/strengths`)

- **Crucible** case study adds emphasis on **Redis**, **Socket.io scaling**, and **isomorphic game simulation**. If those should surface in tag filters, add or strengthen entries in `data/skills.ts` (and any linked experience bullets) so search weights stay coherent.
- **Caliper** updates mention **regime detection**, **HRP allocation**, **wallet clustering**, and **on-chain signal aggregation**. Consider whether `Machine Learning`, `Time Series`, or a dedicated “Quant / markets” skill row should mention these phrases for recruiter keyword match.
- **AidDocs** highlights **Mermaid**, **Fuse.js**, and **ingestion CLI** patterns — optional tag additions on `/strengths` if you want them discoverable independently of the MDX body.

---

## Experience (`data/experience.ts`)

- No edits were made. If resume bullets should cite **Sprint 17 (quant)**, **Crucible multiplayer**, or **AidDocs roadmap (Auth / Optionalizer CRUD)**, add short dated lines under the relevant role or a “Projects” subsection — keep in sync with what you are willing to defend in interviews.

---

## Project listing metadata

- **Featured set**: `featured: true` remains on the workflow-core–tracked flagship projects. If the projects index should deprioritize academic/legacy MDX files, consider toggling `featured` or adding a separate “Professional” filter (code change in `app/projects` and `lib/content/projects.ts` consumers).
- **Tag taxonomy**: New copy uses existing strings where possible; extraction uses lowercase slugs (`next.js` vs `Next.js`). Portfolio MDX uses title-case tags for consistency with search — if duplicate tag variants appear in search results, normalize in `content/projects/*.mdx` or centralize allowed tags in a constant.

---

## Images & logos

- **Crucible** has no `logo` in MDX (none in extraction). Add `public/images/logos/crucible.*` + frontmatter when you have a mark.
- **Quant / Caliper** logo is unchanged; optional brand asset if you want card parity with N-2 / Optionalizer.

---

## Docs index & onboarding

- Optional: add `docs/workflow/project-case-studies.md` to `docs/index.md` if humans use that map to discover agent runbooks.

---

## Verification (human)

- Spot-check `/projects/[slug]` for **crucible-gladiator-coliseum**, **aiddocs**, **caliper-quant-trading** after deploy.
- Confirm no broken internal links in MDX (if you add relative links later).
