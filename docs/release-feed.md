# Release Feed — feature reference

This document describes the **Release Feed** (“Recent work”) on the portfolio site: what it does, where it lives in the codebase, how data is shaped, and how the three **layout variants** work. For **curating content** from workflow-core progress files, use [`docs/workflow/release-feed.md`](workflow/release-feed.md).

---

## Purpose

The Release Feed is a **public, outcome-first shipping narrative**: a living list of shipped work across multiple products and this site, grouped by calendar week. It is meant for recruiters and clients—not a dump of internal PROGRESS tables.

- **Tone:** Summaries are scannable; internals stay in source repos.
- **Safety:** Copy is hand-curated in TypeScript; nothing is auto-pasted from private markdown without review.

---

## Where it appears

| Surface | Route / anchor | Notes |
|--------|----------------|--------|
| **Experience page** | [`/experience`](https://aidenkiefer.com/experience) → section `#release-feed` | Primary public placement. |
| **Admin preview** | `/admin/release-feed` | Same `ReleaseFeedBoard` plus a temporary variant picker. `noIndex` metadata. |

The board is a client component (`'use client'`) embedded from the Experience page layout.

---

## File map

### Data (source of truth)

| File | Role |
|------|------|
| [`data/release-feed.ts`](../data/release-feed.ts) | `ReleaseFeedEvent[]`, `releaseFeedNow`, `releaseFeedNext`, `releaseFeedProjects` registry, and all TypeScript types (`ReleaseCategory`, `ReleaseProjectKey`, etc.). |

### Layout & orchestration

| File | Role |
|------|------|
| [`components/experience/ReleaseFeedBoard.tsx`](../components/experience/ReleaseFeedBoard.tsx) | Section chrome: heading, intro copy, **Now / Next** cards, project filter chips, and conditional render of the three variant views. |
| [`app/experience/page.tsx`](../app/experience/page.tsx) | Renders `ReleaseFeedBoard` in page flow. |
| [`app/admin/release-feed/page.tsx`](../app/admin/release-feed/page.tsx) | Renders `ReleaseFeedAdminPanel` + `ReleaseFeedBoard` for side-by-side layout comparison. |

### Variants (style / density)

| File | Role |
|------|------|
| [`lib/release-feed-design.ts`](../lib/release-feed-design.ts) | `ReleaseFeedVariant` union, `releaseFeedVariants`, human-readable `releaseFeedVariantInfo` (label + blurb), `RELEASE_FEED_VARIANT_STORAGE_KEY`, `parseStoredReleaseFeedVariant`. |
| [`hooks/useReleaseFeedVariant.ts`](../hooks/useReleaseFeedVariant.ts) | Subscribes to `localStorage` + custom `portfolio-release-feed-variant-change` event; exposes `variant` and `setVariant`. SSR default: `timeline`. |
| [`components/experience/ReleaseFeedTimelineView.tsx`](../components/experience/ReleaseFeedTimelineView.tsx) | **Spine timeline** layout. |
| [`components/experience/ReleaseFeedManualView.tsx`](../components/experience/ReleaseFeedManualView.tsx) | **Changelog manual** layout. |
| [`components/experience/ReleaseFeedRegisterView.tsx`](../components/experience/ReleaseFeedRegisterView.tsx) | **Lab register** layout. |

### Shared UI & utilities

| File | Role |
|------|------|
| [`components/experience/release-feed-shared.tsx`](../components/experience/release-feed-shared.tsx) | `CategoryPill`, `ProjectLinkControl`, `ReleaseEventDetails`, `categoryLabel` / `categoryStyles` / `categoryRail`, `resolveProjectLink`. |
| [`lib/release-feed-utils.ts`](../lib/release-feed-utils.ts) | `groupReleaseFeedByWeek`, `ReleaseFeedWeekGroup` (Monday-based weeks, “This week” / “Last week” / range labels). |

### Temporary admin UI

| File | Role |
|------|------|
| [`components/experience/ReleaseFeedAdminPanel.tsx`](../components/experience/ReleaseFeedAdminPanel.tsx) | Fieldset of three buttons to pick variant; explains `localStorage` and links to Experience. |

### Content workflow (not UI)

| File | Role |
|------|------|
| [`docs/workflow/release-feed.md`](workflow/release-feed.md) | How agents refresh the feed from workflow-core `project-progress/*.md`, field rules, copy rules, ticket template. |

---

## Data model (summary)

Types and constants live in `data/release-feed.ts`.

### `ReleaseFeedProject`

Registry entry per logical product. **Add a project here before** any event references its `projectKey`.

- **`portfolioSlug`** — If set, cards show **View case study** → `/projects/[slug]` (must match `content/projects/*.mdx` stem).
- **`externalUrl`** — Optional outbound link when there is no case study.
- **`monogram`** — Short chip label (e.g. `N2`, `Op`).

### `ReleaseFeedEvent`

One public “shipped” row.

- **`id`** — Stable unique slug across all events.
- **`projectKey`** — Key into `releaseFeedProjects`.
- **`version`** — Display string (e.g. `v1.5.0` or `v2.1.x` when clustering patches).
- **`category`** — Drives chips and register rail color (see below).
- **`title` / `summary`** — Headline + 1–2 sentences, outcome-first.
- **`completedDate`** — `YYYY-MM-DD` (used for week grouping and sort).
- **`highlights`** — Optional bullets inside expanded `<details>`.
- **`tags`** — Optional metadata labels in expanded content.
- **`sourceNote`** — Provenance for audits (e.g. workflow-core file + section).

### `releaseFeedNow` / `releaseFeedNext`

Short labeled bullets for the two cards above the filter row. **Hand-curated**; not derived from backlog tables.

### `releaseFeedEvents`

Ordered array; convention is **newest first** by `completedDate`. Workflow doc suggests keeping roughly **12–24** items and merging micro-patches into single cards when possible.

---

## UI behavior (`ReleaseFeedBoard`)

1. **Section** — `id="release-feed"`, `scroll-mt-24`, `aria-labelledby="release-feed-heading"`.
2. **Now / Next** — Two equal cards in a responsive grid; Now uses accent labels, Next uses secondary body for details.
3. **Filters** — “All projects” plus one chip per **project that appears in at least one event** (derived from `releaseFeedEvents`, not the full registry).
4. **Filtered data** — Events filtered by `projectKey`, then passed through `groupReleaseFeedByWeek`.
5. **Variant switch** — Reads `variant` from `useReleaseFeedVariant()` and renders exactly one of:
   - `ReleaseFeedTimelineView`
   - `ReleaseFeedManualView`
   - `ReleaseFeedRegisterView`

All three receive the same `weeks: ReleaseFeedWeekGroup[]` prop.

---

## Week grouping (`lib/release-feed-utils.ts`)

- Weeks start on **Monday** in the **local** timezone.
- Groups are sorted **newest week first**.
- Within a week, events sort by **`completedDate` descending**.
- Labels:
  - Current week’s Monday → **“This week”**
  - Previous week’s Monday → **“Last week”**
  - Older → **“Mar 18–24, 2026”** style range

---

## Categories (`ReleaseCategory`)

Union: `major` | `minor` | `patch` | `docs` | `infra` | `research` | `in-progress`.

Shared styling in `release-feed-shared.tsx`:

- **`categoryStyles`** — Used by `CategoryPill` (border/background/text).
- **`categoryRail`** — Left border accent class for **register** tiles only.

---

## Layout variants (detail)

Variant IDs are the string literals `'timeline' | 'manual' | 'register'`. Copy below matches `releaseFeedVariantInfo` in `lib/release-feed-design.ts`.

### 1. Timeline — `timeline` (“Spine timeline”)

- **Intent:** Default shipping-narrative baseline — structured, scannable, calm depth.
- **Structure:** Vertical **spine** (line + dot per week) on `sm+`; week headings; each event is a **card** with border and light shadow.
- **Interaction:** `<details>` / `<summary>` — summary shows monogram, project name, version, category pill, date, title, summary, case-study link, chevron; expanded body uses `ReleaseEventDetails`.

### 2. Manual — `manual` (“Changelog manual”)

- **Intent:** Dense **documentation / changelog** feel (Stripe/Vercel-ish): date + project column, minimal chrome.
- **Structure:** Single bordered container; weeks as **section headers** on a sunken strip; rows separated by borders; **hover** lift on row.
- **Interaction:** Same `<details>` pattern; expanded details indented with a **left border** column alignment.

### 3. Register — `register` (“Lab register”)

- **Intent:** **Notebook / lab register** — compact **grid** of tiles, quick scan, warm paper layers.
- **Structure:** Per week: heading + entry count; **2-column grid** (`sm`+) of tiles. Tiles use **left category rail** (`categoryRail`) and sunken background.
- **Interaction:** `<details>`; summary shows category label, version, date, monogram, project, title, **line-clamped** summary, link, chevron.

---

## Variant persistence

- **Key:** `portfolio-release-feed-variant` (`RELEASE_FEED_VARIANT_STORAGE_KEY`).
- **Storage:** `localStorage` only (per browser, not account-wide).
- **Sync:** `useSyncExternalStore` listens to:
  - `storage` (other tabs)
  - `portfolio-release-feed-variant-change` (same tab after `setReleaseFeedVariant`)
- **Invalid values** fall back to **`timeline`** (`parseStoredReleaseFeedVariant`).

Choosing a variant on `/admin/release-feed` updates the same storage key the Experience page reads, so you can **compare in two tabs** as described in `ReleaseFeedAdminPanel`.

---

## Shared components (`release-feed-shared.tsx`)

- **`CategoryPill`** — Renders category with `categoryStyles`.
- **`ProjectLinkControl`** — Resolves link via `resolveProjectLink`: internal **View case study** or external **Open** with icon; `stopPropagation` on click so it doesn’t toggle `<details>` accidentally.
- **`ReleaseEventDetails`** — Highlights list, tags, optional `sourceNote` footnote for provenance.

---

## Removing or extending the feature

### When a single layout wins

`lib/release-feed-design.ts` comments note: remove variant switching and the admin route. Concretely that would mean:

- Delete or inline a single view in `ReleaseFeedBoard`.
- Remove `useReleaseFeedVariant`, `ReleaseFeedAdminPanel`, `/admin/release-feed`, and `release-feed-design.ts` if unused.

### Adding a fourth variant

1. Add union member and `releaseFeedVariantInfo` entry in `lib/release-feed-design.ts`.
2. Extend `parseStoredReleaseFeedVariant` and `releaseFeedVariants` array.
3. Implement `ReleaseFeed*View.tsx` taking `{ weeks: ReleaseFeedWeekGroup[] }` (reuse `release-feed-shared` where possible).
4. Branch in `ReleaseFeedBoard.tsx` and add a button column in `ReleaseFeedAdminPanel` (grid may need `sm:grid-cols-4`).

### Adding a new project

1. Extend `ReleaseProjectKey` and `releaseFeedProjects` in `data/release-feed.ts`.
2. Use the new key on events; ensure `portfolioSlug` matches an MDX file if linking.

---

## Related documentation

- **Curation workflow & copy rules:** [`docs/workflow/release-feed.md`](workflow/release-feed.md)
- **Task type map:** [`docs/workflow/task-type-reference-map.md`](workflow/task-type-reference-map.md) (Release feed row)
- **Site workflow index:** [`docs/workflow/workflow.md`](workflow/workflow.md)
