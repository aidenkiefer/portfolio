# Release Feed — Experience page (`/experience`)

**Purpose:** Keep the public “Recent work” board accurate, safe to show to recruiters/clients, and cheap to refresh from internal progress logs.

**Published data:** `data/release-feed.ts` (`releaseFeedEvents`, `releaseFeedNow`, `releaseFeedNext`, `releaseFeedProjects`).

**Rendered in:** `components/experience/ReleaseFeedBoard.tsx` on `app/experience/page.tsx`.

---

## Source files (read-only for agents)

Scan these when refreshing the feed (paths assume repos live as siblings; adjust if your layout differs):

| Project | Progress file |
|---------|----------------|
| N-2 Water | `~/projects/workflow-core/project-progress/n-2-progress.md` |
| Optionalizer | `~/projects/workflow-core/project-progress/optionalizer-progress.md` |
| Viridian Vault | `~/projects/workflow-core/project-progress/viridian-vault-progress.md` |
| Caliper (quant) | `~/projects/workflow-core/project-progress/quant-progress.md` |
| This portfolio | `docs/plans/PROGRESS.md` (this repo) |

Do **not** copy markdown tables straight into the UI. Always edit the curated TypeScript structures in `data/release-feed.ts`.

---

## Target schema (published)

Each public event should map to this shape (see `ReleaseFeedEvent` in `data/release-feed.ts`):

| Field | Rule |
|-------|------|
| `id` | Stable slug, unique across all events (`vv-1-5-0`, `opt-gmail-cluster`). |
| `projectKey` | One of `releaseFeedProjects` keys. Add a registry entry before first use. |
| `version` | Display string (`v1.5.0`, `v2.1.x` when clustering patches). |
| `category` | `major` \| `minor` \| `patch` \| `docs` \| `infra` \| `research` \| `in-progress` — drives UI chip. |
| `title` | One scannable headline; **verb + outcome** (see copy rules below). |
| `summary` | 1–2 sentences, outcome-first, no secrets. |
| `completedDate` | `YYYY-MM-DD` — use best-known date from the progress row; avoid fabricating. |
| `highlights` | Optional 2–4 bullets for expanded `<details>`. |
| `tags` | Optional short labels: `UI`, `backend`, `API`, `docs`, `workflow`, etc. |
| `sourceNote` | Provenance string: file path + section + row identity (for audits). |

**`releaseFeedNow` / `releaseFeedNext`:** Hand-curated strips at the top of the board. Update when reality changes; do not auto-parse backlog tables without human review (privacy + accuracy).

---

## Parsing heuristics (from PROGRESS markdown)

Use these to *propose* updates; human (or explicit ticket) approves edits to `data/release-feed.ts`.

### Milestones / sprints tables

- Rows with **Status** `Done` and a **Completed** date → strong candidates for feed items.
- **Version** column → use as `version` when present.
- **Summary / notes** column → raw input only; rewrite into `title` + `summary` per copy rules.
- Infer `category`:
  - `X.0.0` major bumps → often `major` (confirm scope).
  - Feature milestones → `minor`.
  - Explicit docs/workflow-only rows → `docs` or `infra`.

### Patch-level tables

- Each dated patch *can* become an event, but **most patches should be grouped** into one public card (same project, same theme, adjacent dates).
- Skip or merge: merge conflicts, one-off spacing, mechanical indexing-only rows unless they tell a compelling story.
- Gmail-style multi-ticket bursts → **one** card with `version` like `v2.1.x` and `highlights` listing the slices.

### Backlog / planned tables

- **Default:** do not publish automatically.
- **Exception:** curated `releaseFeedNext` bullets that are already safe to say in public.

---

## Public copy rules (non-negotiable)

1. **Outcome over internals** — No OAuth scopes, internal route paths, or client names unless cleared.
2. **Compress clusters** — Fewer, stronger cards beat a stream of micro-patches.
3. **Strong verbs** — Prefer shipped, built, launched, redesigned, integrated, completed; avoid “touched”, “adjusted files”.
4. **Cap detail** — Cards answer: what shipped, what kind of work, why it matters.
5. **Privacy** — If unsure, set a shorter summary or omit the item until reviewed.

**Formula:** `[Verb] + [user-visible or system outcome] + [why it matters]`.

---

## Project → portfolio navigation

`releaseFeedProjects` controls links on each card:

- **`portfolioSlug`** — If set, the UI shows **View case study** → `/projects/[slug]` (must match `content/projects/*.mdx` without extension).
- **`externalUrl`** — Optional when there is no case study (e.g. private repo link later).
- **Neither** — Card renders without a project link; feed still shows the work.

When adding a new public case study, add `portfolioSlug` and verify the MDX file exists.

---

## Refresh workflow (for agents)

1. **Read** the relevant `workflow-core/project-progress/*.md` files (and `docs/plans/PROGRESS.md` for this site).
2. **Identify** new completed milestone rows and meaningful patch clusters since the last feed update (compare `sourceNote` / dates to `releaseFeedEvents`).
3. **Draft** new `ReleaseFeedEvent` objects (do not append raw table text).
4. **Edit** `data/release-feed.ts`:
   - Prepend new events (newest first) or keep sorted descending by `completedDate`.
   - Trim very old items if the list grows past ~24 (archive in prose elsewhere if needed).
   - Update `releaseFeedNow` / `releaseFeedNext` if current focus changed.
5. **Review** for public safety (copy rules above).
6. **Optional:** Append a one-line note to `docs/plans/PROGRESS.md` for this repo when the feed refresh itself is significant.

---

## Related workflow docs

- `docs/workflow/workflow.md` — Session ritual.
- `docs/workflow/execution-rules.md` — Budgets and constraints.
- `docs/workflow/project-case-studies.md` — `/projects` MDX from `workflow-core/project-progress/` + `portfolio-extraction/`.
- `docs/plans/PROGRESS.md` — Portfolio repo milestone log (separate from workflow-core files).

---

## Ticket template snippet

When asking an agent to refresh the feed:

```markdown
## Task
Refresh the Experience Release Feed from workflow-core progress files.

### Allowed files (edit)
- data/release-feed.ts

### Required read-only references
- ~/projects/workflow-core/project-progress/n-2-progress.md
- ~/projects/workflow-core/project-progress/optionalizer-progress.md
- (add others as needed)
- docs/workflow/release-feed.md

### Done criteria
- New completed work represented as curated ReleaseFeedEvent rows (grouped patches).
- sourceNote filled for each new row.
- No internal-only details in title/summary/highlights.
```
