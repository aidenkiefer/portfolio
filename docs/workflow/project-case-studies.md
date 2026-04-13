# Project case studies — `/projects` MDX (`content/projects/*.mdx`)

**Purpose:** Keep public project pages aligned with the canonical **workflow-core** artifacts: milestone truth in **`project-progress/*.md`** and external-facing narrative depth in **`portfolio-extraction/{key}/project.md`**.

**Published pages:** `app/projects/[slug]/page.tsx` reads MDX from **`content/projects/{slug}.mdx`** (slug must match frontmatter `slug`).

---

## Source files (read-only for agents)

Paths assume repos live as siblings under `~/projects/`; adjust if your layout differs.

| Role | Path pattern | Use when |
|------|----------------|----------|
| Central progress mirrors | `~/projects/workflow-core/project-progress/{key}-progress.md` | **Milestones, patches, dates, backlog** — what actually shipped and when |
| Portfolio extraction (case study) | `~/projects/workflow-core/portfolio-extraction/{key}/project.md` | **Narrative, stack evidence, architecture, tradeoffs** — recruiter-safe depth |
| Optional structured metadata | `~/projects/workflow-core/portfolio-extraction/{key}/project.json` | Slug, URLs, stack array — cross-check against MDX frontmatter |

### `{key}` → portfolio MDX `slug` (this site)

| workflow-core `{key}` | `content/projects` file (no `.mdx`) | Notes |
|----------------------|-------------------------------------|--------|
| `portfolio` | `personal-portfolio-website` | This repo’s site |
| `n-2` | `n2-water-ecommerce-storefront` | Extraction frontmatter slug is `n-2-water`; **portfolio slug stays** `n2-water-ecommerce-storefront` for stable URLs |
| `quant` | `caliper-quant-trading` | |
| `crucible` | `crucible-gladiator-coliseum` | |
| `aiddocs` | `aiddocs` | |
| `optionalizer` | `optionalizer` | |
| `viridian-vault` | `viridian-vault` | |

If **`portfolio-extraction/{key}/`** exists but **`content/projects`** has **no** matching case study, **create** `{slug}.mdx` using an existing featured project as a structural template (frontmatter + section headings below).

**Do not** paste raw progress **tables** into MDX. Summarize into prose and bullets; tables belong in workflow-core.

---

## Target schema (published MDX frontmatter)

Match existing projects (see `lib/content/projects.ts` / any `content/projects/*.mdx`):

| Field | Rule |
|-------|------|
| `title` | Public headline; may shorten extraction `title` for scannability |
| `slug` | **Stable URL segment**; must match filename `{slug}.mdx` |
| `date` | Use extraction frontmatter **`date`** when refreshing; else latest meaningful ship date from progress mirror |
| `featured` | Usually `true` for workflow-core–tracked flagship projects |
| `tags` | Map extraction/portfolio tags to this site’s **tag taxonomy** (see `/strengths`, search — prefer existing tag strings) |
| `stack` | Short tool list for chips; derive from extraction `tech_stack` (strip “— evidence: …” clauses) |
| `repoUrl` / `liveUrl` | From extraction `links.repo` / `links.demo` when not `TODO` or empty |
| `logo` | Optional; keep path under `public/images/logos/` if present |
| `summary` | 1–3 sentences, outcome-first, **no secrets** |
| `highlights` | 3–6 short strings; strongest differentiators |

Body sections (recommended order, align with existing case studies):

1. `## Overview`
2. `## Problem & Context` (or `## Problem / Motivation`)
3. `## Constraints`
4. `## Approach & Design Decisions`
5. `## Implementation Highlights`
6. `## Results & Evaluation`
7. `## Tradeoffs & Limitations`
8. `## What I Learned` (optional but encouraged)

Omit internal-only paths, env values, and client names unless cleared for public use.

---

## Reconciliation rules (progress vs extraction)

1. **Conflict on dates or shipped scope:** Trust **`project-progress/{key}-progress.md`** (mirror of each repo’s `docs/plans/PROGRESS.md`) for **what completed when**.
2. **Narrative, architecture, stack evidence:** Prefer **`portfolio-extraction/{key}/project.md`** for wording and technical detail; fix factual drift using the progress mirror.
3. **If extraction is stale** (old frontmatter `date` vs new milestones in progress): still update **Results & Evaluation** and MDX `date` from progress; consider flagging a follow-up for a full extraction refresh per `workflow-core/update.md`.

---

## Public copy rules (non-negotiable)

Same spirit as [release-feed.md](./release-feed.md):

1. **Outcome over internals** — No OAuth secrets, private API keys, or unreleased client identifiers.
2. **Honest status** — Use “planned”, “in progress”, “spec’d” consistent with progress tables; no fabricated metrics.
3. **Stable slugs** — Do not rename `slug` without intentional redirects (breaking URLs).
4. **Tag consistency** — Prefer tags that already appear on other projects or `/strengths` so search and filtering stay coherent.

---

## Refresh workflow (for agents)

1. **Read** the relevant `project-progress/{key}-progress.md` and `portfolio-extraction/{key}/project.md` for each project you are updating.
2. **Open** the matching `content/projects/{slug}.mdx` (or create it from a peer template).
3. **Update** frontmatter (`date`, `summary`, `highlights`, `stack`, URLs) from extraction + progress.
4. **Rewrite or patch** body sections so **Results & Evaluation** matches the latest **Done** milestones/patches; keep Overview/Approach aligned with extraction where still accurate.
5. **Cross-check** `data/release-feed.ts` — if `portfolioSlug` points at this MDX, the slug must exist (see [release-feed.md](./release-feed.md)).
6. **Optional:** Append a one-line note to **`docs/plans/PROGRESS.md`** in this repo when the case-study refresh itself is significant.
7. **Follow-up proposals:** If the refresh surfaces updates outside `content/projects/` (release feed registry, `data/skills.ts`, experience bullets, logos), capture them in a short dated summary under **`docs/workflow/PROJECT_PAGES_SYNC_SUMMARY-YYYY-MM-DD.md`** rather than expanding scope silently.

---

## Related workflow docs

- [release-feed.md](./release-feed.md) — Experience page feed from `project-progress/` only (curated TS).
- [workflow.md](./workflow.md) — Session entrypoint.
- [execution-rules.md](./execution-rules.md) — Budgets and constraints.
- **`~/projects/workflow-core/update.md`** — Sync progress + extraction in the workflow-core repo before refreshing this site.

---

## Ticket template snippet

```markdown
## Task
Refresh project case studies from workflow-core `project-progress/` + `portfolio-extraction/`.

### Allowed files (edit)
- content/projects/{slug}.mdx
- (optional) docs/plans/PROGRESS.md

### Required read-only references
- ~/projects/workflow-core/project-progress/{key}-progress.md
- ~/projects/workflow-core/portfolio-extraction/{key}/project.md
- docs/workflow/project-case-studies.md

### Done criteria
- Frontmatter and body reflect latest shipped work (progress mirror) and accurate narrative (extraction).
- Slug unchanged unless ticket explicitly migrates URLs.
- No secrets or internal-only details in public fields.
```
