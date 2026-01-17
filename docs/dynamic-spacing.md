# Responsive Layout Guidelines — Fix “Skinny Center Column” + Improve Phone/Tablet/Desktop Scaling

This document is the authoritative layout guidance for improving responsive sizing across the site.
Primary goal: avoid the “narrow centered column” feel on full-screen desktop while maintaining excellent readability.

Key principle:
- **Containers can be wide**
- **Long-form text should stay constrained**
- **Cards and grids should expand on desktop**
- **Hero sections should become multi-column at larger breakpoints**

Do NOT redesign the visual style. This is a layout and responsiveness refinement only.

---

## 1) Root Cause (What’s happening now)

In full-screen desktop view, content appears “skinny and long” because the main layout wrapper likely uses a conservative max width (e.g., `max-w-3xl` / `max-w-4xl`) across the entire page.

Fix:
- Implement a **two-tier container system**:
  1) a wide page container for sections and grids
  2) a narrower text container for paragraphs/prose

---

## 2) Standard Container System (Use everywhere)

### 2.1 Page Container (wide)
Use this for the main section wrapper on desktop.

Recommended Tailwind defaults:
- `max-w-7xl` for most pages
- `px-6 sm:px-8 lg:px-10` for padding
- `mx-auto w-full` for centering

**Standard Page Container**
- `mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10`

### 2.2 Prose Container (readable text width)
Use this for paragraphs and long-form text blocks inside a wide container.

Recommended:
- `max-w-prose` (Tailwind)
- OR `max-w-[70ch]` (explicit control)

**Standard Prose Container**
- `max-w-prose` OR `max-w-[70ch]`

Rule:
- Long paragraphs should almost always live inside a prose container.

### 2.3 Grid Container (full section width)
Grids (cards, lists, project tiles) should expand to the full width of the page container.

Rule:
- Grids should NOT be constrained by `max-w-prose`.

---

## 3) Global Implementation Rules

### Rule A: Do not apply one max-width to everything
Do NOT do:
- `max-w-3xl` on the main page wrapper that contains both prose and grids

Instead:
- Use `max-w-7xl` for page sections
- Use `max-w-prose` only around long-form copy

### Rule B: Use content-type width rules
- **Narrative/Essay content** (About, How I Think, intros): constrain to `max-w-prose`
- **Index content** (Projects cards, Experience cards, Coursework cards): allow full container width

---

## 4) Breakpoint Strategy (Phone → Tablet → Desktop)

Use a predictable scaling strategy:

### 4.1 Mobile (default)
- 1-column layouts
- moderate spacing
- avoid side-by-side elements unless essential

### 4.2 Tablet (`sm` / `md`)
- grids become 2 columns where appropriate
- spacing increases slightly
- typography can scale up one step for headings

### 4.3 Desktop (`lg` / `xl`)
- hero becomes two-column
- project grids become 3 columns (or 2 larger “premium” columns)
- section padding increases
- headings scale up again

---

## 5) Page-Specific Guidance

### 5.1 Home Page

#### Hero Section
On desktop, hero should become a two-column layout:
- Left: Name, role, elevator pitch, CTAs
- Right: headshot / avatar (and optionally 1–2 quick facts)

Layout behavior:
- Mobile: stacked
- Desktop: side-by-side

Recommended grid:
- `grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center`

Prose constraint:
- Keep hero copy in `max-w-prose` even on desktop.

#### Selected Work / Projects Preview
Allow the grid to use full width of the page container.

Grid scaling:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

Recommended:
- `grid gap-6 sm:grid-cols-2 xl:grid-cols-3`

Alternative (premium feel):
- `grid gap-8 lg:grid-cols-2` (bigger cards)

---

### 5.2 Projects Page (Index)

- Cards should NOT be constrained to `max-w-prose`.
- Use wide page container.

Recommended grid:
- `grid gap-6 sm:grid-cols-2 xl:grid-cols-3`
or premium:
- `grid gap-8 lg:grid-cols-2`

---

### 5.3 Experience Page

- Keep intro paragraph constrained (`max-w-prose`)
- Let experience cards expand to full container width

Recommended:
- Intro: `max-w-prose`
- Cards: full-width list with consistent spacing
- Optional on desktop: 2-column grid if it stays readable; otherwise keep 1-column cards that are wider

---

### 5.4 Coursework Page

- Intro paragraphs constrained (`max-w-prose`)
- Course groups and course cards should use the wide container
- Skills list can be displayed in 2 columns on desktop if it improves scanning

Recommended:
- Course cards: 2 columns on desktop if they remain readable and consistent
- Skills section: `sm:grid-cols-2` or `lg:grid-cols-3` depending on density

---

### 5.5 Strengths / How I Think Page

This page is intentionally text-forward.
To avoid feeling too narrow on desktop:
- Use wide page container overall
- Keep paragraphs constrained to `max-w-prose`
- Consider a subtle two-column layout for certain elements:
  - e.g., “Key Takeaways” bullets in a side column on desktop
  - or a right-side “summary” card for quick scanning

Do NOT turn the main essay into two columns; it harms readability.

---

### 5.6 Contact Page

Contact cards can be centered but should not be overly narrow.

Recommended:
- Container: `max-w-5xl` or `max-w-6xl` (slightly smaller than other pages)
- Cards: can be in a row at `md`+ if it reads well

Grid scaling:
- Mobile: stacked
- Tablet/Desktop: 2–3 columns depending on number of contact methods

---

## 6) Typography Scaling (Supports “fullness” on desktop)

The page can feel skinny if typography does not scale with viewport.

Recommended scaling:
- H1 scales at `sm` and `lg`
- Paragraph text scales at `sm` (optional) but always keep line length constrained via prose container

Example guidance (not strict code):
- H1: `text-4xl sm:text-5xl lg:text-6xl`
- Body: `text-base sm:text-lg` with appropriate leading

---

## 7) Spacing Scaling (Avoid empty tall scroll)

Use responsive vertical padding for sections:

- `py-10 sm:py-14 lg:py-20`

Avoid using the same large spacing at all sizes.

Also:
- Use subtle section dividers (hairline rules) to break long vertical planes
- Use consistent spacing between sections to create rhythm

---

## 8) Quick Application Checklist (Do this pass across the site)

Apply these changes globally:

1) Replace narrow page wrappers:
- Replace `max-w-3xl` / `max-w-4xl` on full-page containers with `max-w-7xl`

2) Wrap long-form text:
- Wrap paragraph groups with `max-w-prose` or `max-w-[70ch]`

3) Make hero responsive:
- Implement `lg:grid-cols-2` hero layout on the homepage

4) Expand grids:
- Projects grid becomes `sm:2 cols`, `xl:3 cols` (or `lg:2` premium)

5) Ensure cards aren’t constrained:
- Remove prose constraints from card grid parents

6) Verify each page at common breakpoints:
- 375px (mobile)
- 768px (tablet)
- 1280px (desktop)
- 1536px (large desktop)

---

## 9) Non-Goals (Do Not Do)

- Do not make paragraphs full width on desktop
- Do not make everything edge-to-edge
- Do not introduce heavy visual elements to “fill space”
- Do not change palette, typography, or brand direction here

This is purely about responsive sizing and layout scaling.

---

## 10) Success Criteria

These layout changes have succeeded if:

- On desktop, the site no longer feels like a narrow vertical column
- Cards and grids make use of available width
- Long-form text remains easy to read
- Tablet layouts feel intentional (not just stretched mobile)
- Mobile remains clean, scannable, and not cramped

This should feel like a calm, engineered layout that adapts naturally to screen size.
