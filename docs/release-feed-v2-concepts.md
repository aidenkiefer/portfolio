# Release Feed v2 — Design Concepts

This document proposes **3 new UI concepts** to replace the current timeline / manual / register variants. All three address the same core problems with the existing designs: they are passive vertical feeds with no meaningful interaction, no visual hierarchy between release importance, and they require too much scrolling.

Each concept is a fundamentally different approach to browsing time-based releases — not a stylistic variation of a scroll feed.

---

## Why the current variants fall short

| Problem | Timeline | Manual | Register |
|---------|----------|--------|----------|
| Requires extensive vertical scrolling | ✗ | ✗ | ✗ |
| User navigates, not just reads | ✗ | ✗ | ✗ |
| Major releases feel visually dominant | ✗ | ✗ | ✗ |
| Memorable / signature feature | ✗ | ✗ | ✗ |

All three use `<details>`/`<summary>` for interaction, stack cards by week, and differ only in surface styling. The v2 concepts change the **navigation model** and **visual hierarchy**, not just the CSS.

---

## Concept 1: "The Chronicle" — Week Navigator

### Core idea

Replace vertical scrolling with pagination. One week occupies the full viewport at a time. A timeline scrubber at the top shows all available weeks; arrow buttons and keyboard navigation move through them. Within each week, releases are arranged in an editorial priority grid — not a uniform list.

### Layout

```
┌─────────────────────────────────────────────────────────┐
│  ● ─ ─ ─ ○ ─ ─ ─ ○ ─ ─ ─ ○ ─ ─ ─ ○   ← week scrubber  │
│  Mar 3  Mar 10  Mar 17  Mar 24  Apr 1                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────────┐  ┌────────────┐           │
│  │  MAJOR / HERO SLOT       │  │  Minor A   │           │
│  │  Large title, 2 sentences│  ├────────────┤           │
│  │  Project chip + link     │  │  Minor B   │           │
│  └──────────────────────────┘  └────────────┘           │
│                                                          │
│  patches / docs ────────────────────────────────────    │
│  · Nuewerk v1.2.1  patch  · Portfolio v0.9.3  docs      │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  ←  Previous week               2 of 7    Next week  →  │
└─────────────────────────────────────────────────────────┘
```

- **Hero slot** (left, ~65% width): the highest-category event for the week. If no `major`, takes the first `minor`. Large title (~1.5rem), full summary, project + version chip, case-study link.
- **Supporting grid** (right, ~35% width): remaining `minor` events stacked as compact cards. Title + one-line summary.
- **Patch strip** (below the grid): `patch` and `docs` events as a tight single-line list — category label, version, project monogram, title.
- **Scrubber** (top): horizontal tick marks, one per week. Active week is a filled dot. Clickable to jump.
- **Nav bar** (bottom): ← / → buttons, current position ("2 of 7").

### Interaction model

- `←` / `→` buttons **or** arrow keys move between weeks.
- Transition: the new week **slides in** from the direction traveled (CSS `translate` + `transition`). The outgoing week slides out the opposite direction.
- Clicking a scrubber tick jumps directly, with a brief fade-in (no directional slide for non-adjacent jumps).
- Within the week, each hero/minor card expands inline on click (replace `<details>` with controlled open state + `max-height` animation). Patch strip items expand as a small tooltip or popover.
- Keyboard: `ArrowLeft` / `ArrowRight` navigate weeks; `Enter` on focused card expands it.

### Why it's better than a vertical feed

The entire vertical scrolling problem is eliminated. The layout physically enforces release hierarchy — a major release literally takes up more space than a patch. Users explore the archive rather than scroll it. The scrubber gives an immediate sense of how much history exists without reading it all.

### Tradeoffs / risks

- Users cannot see multiple weeks at once; the archive feels less "browsable at a glance."
- A week with only one patch looks sparse in the hero slot — needs a graceful fallback (promote it to full-width).
- The slide animation must be fast (<200ms) or navigation feels sluggish.
- Scrubber tick labels can overlap if there are many weeks — use abbreviated labels (`Mar 3`, not `March 3–9, 2026`) and hide labels on mobile.

### Component structure

```tsx
<ReleaseFeedChronicle weeks={weeks}>
  <ChronicleTimelineScrubber
    weeks={weeks}
    activeIndex={activeIndex}
    onJump={setActiveIndex}
  />
  <AnimatePresence mode="wait">
    <ChronicleViewport key={activeIndex} week={weeks[activeIndex]}>
      <ChronicleHeroSlot event={primaryEvent} />
      <ChronicleSecondaryGrid events={secondaryEvents} />
      <ChroniclePatchStrip events={patchEvents} />
    </ChronicleViewport>
  </AnimatePresence>
  <ChronicleNavBar
    index={activeIndex}
    total={weeks.length}
    onPrev={() => setActiveIndex(i => i - 1)}
    onNext={() => setActiveIndex(i => i + 1)}
  />
</ReleaseFeedChronicle>
```

**Priority slot logic:**

```ts
function slotEvents(events: ReleaseFeedEvent[]) {
  const sorted = [...events].sort(byCategoryPriority); // major > minor > patch > docs
  const [primary, ...rest] = sorted;
  const secondary = rest.filter(e => e.category === 'minor' || e.category === 'major');
  const patches = rest.filter(e => e.category === 'patch' || e.category === 'docs' || e.category === 'infra');
  return { primary, secondary, patches };
}
```

---

## Concept 2: "The Matrix" — Heatmap + Focused Drawer

### Core idea

Show the **entire history as a compact visual grid** — projects as rows, weeks as columns, each cell colored by activity intensity. The total height of the grid is ~180px regardless of how much data exists. Clicking any cell expands a focused drawer below the grid showing only that cell's events. The user explores rather than scrolls.

### Layout

```
┌────────────────────────────────────────────────────────┐
│         Mar 3  Mar 10  Mar 17  Mar 24  Apr 1  (weeks)  │
│  N2      ░░░░   ████   ░░░░    ████   ████             │
│  Op      ░░░░   ░░░░   ░░░░    ████   ░░░░             │
│  Port    ████   ░░░░   ████    ░░░░   ████             │
└────────────────────────────────────────────────────────┘
         ↑ click any cell ↓
┌────────────────────────────────────────────────────────┐
│  N2 — Week of Mar 24                          [×]       │
│  ─────────────────────────────────────────────────     │
│  · v2.3.0  major   Chat routing overhaul               │
│  · v2.3.1  patch   Fix streaming timeout               │
└────────────────────────────────────────────────────────┘
```

- **Grid rows:** one per project (from `releaseFeedProjects` filtered to projects with events).
- **Grid columns:** most recent N weeks (8–12), newest on the right.
- **Cell color:** hue determined by the highest-category event in that cell (`major` = deep accent, `minor` = medium, `patch`/`docs` = light). Opacity scales with event count. Empty cells are a faint muted square.
- **Row labels:** project monogram + name on the left axis.
- **Column labels:** `Mar 3`, `Mar 10` etc. above the grid.
- **Drawer:** slides open below the grid when a cell is selected. Shows a clean list of events for that project + week. No week-group header needed (it's the drawer title). Dismiss with `×` or clicking another cell.

### Interaction model

- **Hover cell:** tooltip shows `"3 events · N2 · Mar 24–30"` + category summary.
- **Click cell:** drawer expands below the grid. Selected cell gets a visible ring/border.
- **Click row label:** drawer shows all events for that project across all weeks (flat list, newest first).
- **Click column label:** drawer shows all events across all projects for that week (grouped by project).
- **Click `×` or grid background:** drawer collapses.
- **Keyboard:** arrow keys on focused cell move the selection; `Enter` opens drawer; `Escape` closes.

### Why it's better than a vertical feed

The entire history fits in a fixed ~180px block — no scrolling needed to "see" the archive. The heatmap immediately reveals shipping velocity, quiet periods, and which projects are most active. Users make discoveries by exploring the visual pattern, not by reading every item. The grid rewards developers who understand density metaphors (like GitHub contribution graphs).

### Tradeoffs / risks

- **Sparse data looks bad:** a grid with 2 projects and 4 weeks looks empty and confusing. Needs at least 3 projects × 6 weeks of data to be meaningful.
- **Non-technical visitors may not understand** the heatmap metaphor immediately — needs a brief legend.
- **Accessibility:** color-only encoding requires a text fallback; tooltip + ARIA labels are mandatory.
- **Mobile:** a 12-column grid is very tight on small screens. Options: reduce visible weeks (show 4–6), or collapse to a project accordion with week bars per row.
- The drawer height must be bounded (`max-height` + `overflow-y: auto`) to avoid layout shift.

### Component structure

```tsx
<ReleaseFeedMatrix weeks={weeks} projects={activeProjects}>
  <MatrixGrid
    weeks={weeks}
    projects={activeProjects}
    onCellSelect={setSelection}
    selection={selection}
  />
  <MatrixLegend />
  <AnimatePresence>
    {selection && (
      <MatrixDrawer
        key={`${selection.projectKey}-${selection.weekLabel}`}
        events={filteredEvents}
        title={drawerTitle}
        onClose={() => setSelection(null)}
      />
    )}
  </AnimatePresence>
</ReleaseFeedMatrix>
```

**Cell color logic:**

```ts
function cellColor(events: ReleaseFeedEvent[]): string {
  if (!events.length) return 'var(--matrix-empty)';
  const top = Math.max(...events.map(e => categoryRank[e.category]));
  const intensity = Math.min(events.length / 3, 1); // cap at full opacity at 3+ events
  return `hsla(var(--matrix-hue-${categoryHue[top]}), ${30 + intensity * 60}%)`;
}
```

---

## Concept 3: "The Dispatch" — Editorial Card Stack

### Core idea

Each week is a "dispatch issue" — a fixed-height card styled like an editorial newsletter or zine page. Cards are stacked visually; the active issue is in the foreground, previous issues peek behind it as offset layers. Navigation flips through issues. Within each card, the layout is a newspaper-style grid: one "headline story" takes most of the space, secondary items run as a "briefs" column, and patches appear as footnote-style one-liners at the bottom.

### Layout

```
┌─────────────────────────────────────────────────────────┐
│  DISPATCH  ·  Issue #4  ·  Week of Mar 24–30, 2026      │
├────────────────────────────────┬────────────────────────┤
│                                │  BRIEFS                 │
│  HEADLINE                      │  ─────────────────      │
│  Chat routing overhaul         │  Op v0.4.2 minor        │
│  ─────────────────────────     │  Workflow update        │
│  N2 · v2.3.0 · major           │  ─────────────────      │
│                                │  Port v1.1.0 minor      │
│  Rewrote the entire message    │  SEO metadata pass      │
│  routing layer to support      │                         │
│  streaming and multi-turn...   │                         │
│                                │                         │
│  [View case study →]           │                         │
├────────────────────────────────┴────────────────────────┤
│  PATCHES  ·  v2.3.1 fix streaming timeout  ·  v1.0.4…   │
└─────────────────────────────────────────────────────────┘
        ← [Mar 17–23]          [Apr 1–7] →
   [░░░░░░░░░] peek of prev issue behind card
```

- **Card header strip:** "DISPATCH · Issue #4 · Week of Mar 24–30, 2026" in small monospaced caps.
- **Headline column** (~60% width): the primary event. Large title (24–28px), project monogram + version + category pill, 2–3 sentence summary, optional case-study link.
- **Briefs column** (~40% width): remaining `minor` events as compact 2-line rows (title + monogram/version). Separated by a thin rule.
- **Patches strip** (bottom): single line, comma/dot-separated list of `patch` / `docs` / `infra` events. "PATCHES ·" label prefix.
- **Stack effect:** 2–3 previous issues offset by (4px right, 3px down) each, slightly scaled down, showing only their header strip. Creates the illusion of a stack of papers.
- **Navigation:** prev/next buttons below the stack. Clicking a peeking card behind navigates to it.

### Interaction model

- **Click `→` or press `ArrowRight`:** current card "slides out" to the left while next card slides in from the right. Use `framer-motion` or CSS `keyframes`.
- **Click `←` or press `ArrowLeft`:** reverse.
- **Click a peeking card** in the stack: jump to that issue with a "lift" animation (card rises to the front).
- **Click the headline or a brief:** the card expands inline — the briefs column is replaced by the full `ReleaseEventDetails` for the selected event. A back arrow returns to the default card layout.
- **Hover headline/brief:** subtle paper-texture lift (`box-shadow` increase, slight `translateY(-2px)`).

### Why it's better than a vertical feed

Fixed card height eliminates scrolling entirely. The "issue" metaphor reframes shipped software as authored work — each week has a cover story, not a changelog dump. The editorial grid enforces hierarchy without any configuration: the headline slot simply exists, and whatever goes in it must be the most significant work. The stacked-cards visual is immediately distinctive and recognizable — no other dev portfolio uses this pattern.

### Tradeoffs / risks

- **Fixed height means truncation risk:** a major release with a very long summary needs either a hard cutoff or a "read more" expand mechanism within the headline slot.
- **Sparse weeks look awkward:** if a week only has 2 patches and nothing headline-worthy, the headline column will look empty. Mitigation: promote the top patch to headline if no `minor`/`major` exists; always show something in the primary column.
- **The "stack" CSS is finicky:** getting the z-index layering, transforms, and hover states to look right — rather than just "boxes behind boxes" — requires careful implementation. Consider a fixed number of visible layers (2–3 max).
- **Issue numbering:** if items are added/removed from the feed, issue numbers will change. Options: derive from the week's calendar position, or make it a cosmetic incrementing count without semantic meaning.

### Component structure

```tsx
<ReleaseFeedDispatch weeks={weeks} activeIndex={activeIndex}>
  <DispatchStack weeks={weeks} activeIndex={activeIndex} onJump={setActiveIndex} />
  <AnimatePresence mode="wait">
    <DispatchCard key={activeIndex} week={weeks[activeIndex]} issueNumber={totalWeeks - activeIndex}>
      <DispatchHeader week={weeks[activeIndex]} issueNumber={...} />
      <DispatchBody>
        <DispatchHeadline event={primaryEvent} onExpand={setExpanded} expanded={expanded} />
        <DispatchBriefs events={secondaryEvents} onSelect={setExpanded} />
      </DispatchBody>
      <DispatchPatchStrip events={patchEvents} />
    </DispatchCard>
  </AnimatePresence>
  <DispatchNavigation
    index={activeIndex}
    total={weeks.length}
    prevLabel={weeks[activeIndex + 1]?.label}
    nextLabel={weeks[activeIndex - 1]?.label}
    onPrev={...}
    onNext={...}
  />
</ReleaseFeedDispatch>
```

**Primary event selection:**

```ts
function selectPrimary(events: ReleaseFeedEvent[]): ReleaseFeedEvent {
  return (
    events.find(e => e.category === 'major') ??
    events.find(e => e.category === 'minor') ??
    events.find(e => e.category === 'research') ??
    events[0] // always returns something if events is non-empty
  );
}
```

---

## Concept comparison

| Dimension | Chronicle | Matrix | Dispatch |
|-----------|-----------|--------|----------|
| Navigation model | Pagination (week-by-week) | Exploration (heatmap click) | Card flip (issue-by-issue) |
| Scrolling | None | None | None |
| Overview vs. detail | Detail-first | Overview-first | Detail-first |
| Visual hierarchy | Grid slots (hero / grid / strip) | Cell intensity | Editorial columns (headline / briefs / footnotes) |
| Ideal audience | Anyone | Developers | Anyone |
| "Wow" factor | Medium | High (developer recognition) | High (distinctive metaphor) |
| Complexity to build | Medium | High | Medium-high |
| Risk of looking sparse | Low | Medium | Medium |

---

## Recommended path

**Start with The Dispatch** — it has the highest visual distinctiveness, maps directly to the existing data model, and has a clear build path using `framer-motion` + CSS. It requires no special data restructuring and will work with the current `ReleaseFeedWeekGroup[]` prop signature.

**Add The Chronicle as the secondary variant** — it's the most accessible concept (no heatmap learning curve) and the pagination model solves the scrolling problem cleanly.

**Defer The Matrix** until there are at least 4 active projects with 6+ weeks of history — it needs data density to be compelling.

---

## Integration notes

All three concepts accept `weeks: ReleaseFeedWeekGroup[]` matching the existing prop contract from `lib/release-feed-utils.ts`. No changes to the data layer are required.

New variant IDs: `'chronicle' | 'matrix' | 'dispatch'` replacing `'timeline' | 'manual' | 'register'`.

Add to `lib/release-feed-design.ts` following the existing `releaseFeedVariants` / `releaseFeedVariantInfo` pattern.
