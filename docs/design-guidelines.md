# Design Guidelines — Aiden Kiefer Personal Portfolio

**Purpose:**  
Define a clear, intentional, and consistent visual system for a personal software engineering portfolio site. This document exists to eliminate ambiguity and ensure all design and UI decisions support clarity, credibility, and long-term professionalism.

This site is **content-first**, **engineer-oriented**, and **calm by design**.

---

## 1. Design Philosophy

This website is:
- Not a marketing landing page
- Not a design portfolio
- Not a startup brand

Its job is to:
1. Reduce cognitive load
2. Make content easy to skim and read
3. Signal calm competence and thoughtfulness
4. Get out of the way of the work and writing

Every design decision should answer:
> "Does this make the content easier to read, trust, and understand?"

If a choice looks interesting but does not improve clarity, it should be avoided.

Subtle nostalgia is allowed. Gimmicks are not.

---

## 2. Visual Tone & Inspiration

High-level inspiration:
- Early Apple-era Human Interface Guidelines (principles, not aesthetics)
- Technical documentation (Stripe, Vercel, Linear)
- Printed matter: notebooks, architectural drawings, manuals

Keywords:
- Warm
- Restrained
- Structured
- Human
- Timeless

Avoid:
- Trend-driven UI
- Heavy gradients
- Neon colors
- Excessive motion
- "Startup" visual language

---

## 3. Color System (Locked)

### 3.1 Base Neutrals (Primary Foundation)

These colors do the majority of the work.

- **Background:** `#F9F6F1`  
  Warm off-white with a slight sepia tone. Should feel like paper, not a screen.

- **Primary text:** `#1C1B19`  
  Warm near-black. Never use pure black.

- **Secondary text / metadata:** `#5E5A54`  
  Used for dates, captions, labels, and de-emphasized content.

- **Muted text:** `#7A746D`  
  Optional: even quieter text for tertiary information.

- **Borders / dividers:** `#E2DED6`  
  Subtle separators. Borders should be light and quiet.

- **Strong borders:** `#D1CBBF`  
  For more prominent separations when needed.

---

### 3.2 Accent Colors (Use Sparingly)

Accent colors are signals, not decoration.

- **Primary accent:** `#1E3A5F` (Muted Navy)
  - Primary links
  - Active navigation states
  - Emphasis markers
  - Section indicators

- **Secondary accent:** `#9F2D20` (Brick Red)
  - Highlights
  - Callouts
  - Occasional emphasis (very sparingly)

Rules:
- Never more than **one accent color per section**
- Never use accent colors for long-form body text
- Accents should communicate interaction or importance, not style

---

### 3.3 Semantic Colors (Restrained)

Semantic colors map to the palette:

- **Info:** `#1E3A5F` (reuse primary accent)
- **Danger:** `#9F2D20` (reuse secondary accent)

Optional future additions (only if truly needed):
- Success: `#166534`
- Warning: `#B45309`

---

### 3.4 Surfaces (Subtle Layering)

For cards, callouts, code blocks:

- **Raised:** `#FBF8F4` - Slightly lighter than background
- **Sunken:** `#F3EFE8` - Slightly darker than background
- **Code:** `#F3EFE8` - Background for code blocks

These create subtle depth without shadows.

---

## 4. Typography (Locked)

### 4.1 Primary Typeface (UI + Body)

**IBM Plex Sans**

Rationale:
- Designed by IBM (engineering heritage)
- Humanist proportions with technical credibility
- Warm, readable, and timeless
- Subtle personality without drawing attention to itself

Usage:
- All UI text
- All body copy
- All headings

Font weights:
- Regular (400): body text
- Medium (500): subheadings
- Semibold (600): primary headings
- Bold (700): strong emphasis (use sparingly)

Avoid:
- Mixing multiple UI fonts
- Decorative fonts
- Display fonts

---

### 4.2 Monospace Typeface (Code Only)

**IBM Plex Mono**

Rationale:
- Designed to pair with Plex Sans
- Clear letterforms
- Technical and serious without being flashy

Usage:
- Code blocks
- Inline code
- Technical identifiers

Never use monospace for:
- Paragraph text
- Navigation
- Headings

---

### 4.3 Typography Hierarchy

Typography hierarchy should be created using:
- Font size
- Font weight
- Spacing

Not by:
- Changing fonts
- Changing colors excessively

Type scale:
- `xs`: 0.75rem (12px)
- `sm`: 0.875rem (14px)
- `base`: 1rem (16px)
- `lg`: 1.125rem (18px)
- `xl`: 1.25rem (20px)
- `2xl`: 1.5rem (24px)
- `3xl`: 1.875rem (30px)
- `4xl`: 2.25rem (36px)

Line heights (tuned for long-form reading):
- `tight`: 1.2
- `snug`: 1.35
- `normal`: 1.5
- `relaxed`: 1.65

Letter spacing (subtle):
- `tighter`: -0.02em
- `normal`: 0em
- `wide`: 0.01em

General guidance:
- Headings should feel calm and structured
- Body text should prioritize long-form readability
- Line length should be comfortable (not wide)

---

## 5. Layout & Spacing

### 5.1 Content Width

- Prose max width: ~65–72 characters per line
- Use containers like `max-w-3xl` or `max-w-4xl`
- Avoid full-width text blocks

Code blocks may extend slightly wider than prose.

Measure targets:
- Prose: `72ch`
- Wide: `88ch`

---

### 5.2 Spacing & Rhythm

- Prefer whitespace over dividers
- Vertical spacing should be consistent and generous
- Use spacing utilities (`space-y-*`) instead of arbitrary margins

Sections should feel like "pages" in a notebook, not stacked cards.

Spacing scale (4px base rhythm):
- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 0.75rem (12px)
- `4`: 1rem (16px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)
- `20`: 5rem (80px)
- `24`: 6rem (96px)

---

### 5.3 Border Radius

- `sm`: 0.25rem (4px)
- `md`: 0.375rem (6px) - default
- `lg`: 0.5rem (8px) - use sparingly

Soft corners create a constructed, not stylized, feel.

---

### 5.4 Shadows

Keep shadows minimal; prefer borders.

- `none`: none
- `soft`: `0 1px 2px rgba(0,0,0,0.06)`

Only use shadows when borders are insufficient.

---

## 6. Visual Refinements & Rhythm

### 6.1 Section Separators

To create visual rhythm and prevent monotony:

**Option A: Hairline Rule**
- Height: 1px
- Color: `#E2DED6` (muted divider)
- Apply above major sections (Selected Work, Experience, etc.)

**Option B: Micro-Section Labels**
- Small label above section headers
- Styling: small caps or uppercase, letter-spaced
- Color: muted secondary text (`#5E5A54`)

Only one separator style should be used globally.

---

### 6.2 Typographic Contrast Between Sections

Increase contrast between section types:

- Section intro text: slightly lighter or smaller than body paragraphs
- Body paragraphs: darkest and most readable text
- Section headers: slightly tighter letter spacing for emphasis

This adds depth without adding color or ornamentation.

---

### 6.3 Card Physical Presence

Cards should feel like objects, not flat containers.

Choose only one of the following treatments:

**Option A: Soft Static Shadow**
- `box-shadow: 0 1px 0 rgba(0,0,0,0.04);`

**Option B: Hover Lift**
- On hover, cards translate upward by 1–2px

**Option C: Accent Border**
- Thin left border using muted accent color

Do not combine these effects.

---

## 7. Character and Identity (Subtle, Recurring Motifs)

### 7.1 Logo Motif Reuse

The chip logo should not only live in the navbar.

Use simplified or partial forms of the logo as recurring system elements:
- Small chip outline next to section headers
- Chip icon as a custom bullet in select lists
- Very faint chip watermark in the hero section (5–8% opacity)

This builds brand cohesion and recognizability.

---

### 7.2 Accent Stripe Per Page

Each page may include one thin horizontal accent line.

Specifications:
- Height: 2–4px
- Color: muted navy (primary) or brick red (secondary)
- Placement examples:
  - under the hero section
  - above the footer
  - beneath a major section header

Only one accent stripe per page.

---

### 7.3 Hero Section Refinement

Add a secondary line beneath the title and role:

Example:
— systems • clarity • long-term thinking

Styling:
- small
- letter-spaced
- muted text color

This breaks the vertical block and reinforces identity immediately.

---

## 8. Components & UI Elements

The following components must be visually consistent across the site:

- Section headings
- Subheadings
- Body text
- Links
- Project cards
- Tags / badges
- Code blocks
- Callouts / notes

Guidelines:
- Soft corners (4–6px radius)
- Minimal or no shadows
- Prefer borders over shadows
- Components should feel "constructed," not stylized

---

## 9. Links & Interaction

- Links should be clearly identifiable
- Default link color: muted navy (`#1E3A5F`)
- Hover state: subtle color shift or underline
- Avoid animated underlines or flashy effects

Interactive elements should feel deliberate and predictable.

---

## 10. Motion & Animation

Motion should be minimal.

**Allowed:**
- Hover state transitions
- Focus states
- Very subtle entrance animations (optional)
- CTA arrows translate 2–4px on hover
- Card titles darken slightly on hover

**Avoid:**
- Page-load animations
- Parallax effects
- Scroll-triggered animations
- Excessive easing or bounce
- Auto-playing animations
- Decorative motion

If animation is used:
- Duration: 150–250ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-ish)

Motion must never interfere with reading.

---

## 11. Optional Visual Texture (Choose At Most One)

If additional richness is desired, select only one of the following.

### 11.1 Paper Grain Texture
A barely visible noise texture applied to the background.

Guidelines:
- Opacity: ~2–3%
- Very fine grain
- No visible pattern

This reinforces a "notebook / engineered artifact" feel.

### 11.2 Blueprint Grid
A faint grid applied only to the hero section background.

Guidelines:
- 1px lines
- Extremely low contrast
- Hidden on mobile

This subtly communicates systems thinking.

### 11.3 Marginalia Notes
Occasional short, italic or monospace notes used sparingly.

Example:
"Designed for long-term maintainability."

Use as commentary, not decoration.

---

## 12. Light / Dark Mode Stance

Primary mode: **Light mode only**

Rationale:
- Warm off-white palette is central to the identity
- Light mode supports long-form reading
- Dark mode is optional and non-essential

If dark mode is added later, it must:
- Preserve warmth
- Avoid pure blacks
- Maintain contrast standards

---

## 13. Accessibility & Readability

- All text must meet WCAG contrast guidelines
- Font sizes should never be "aesthetic-first"
- Color should never be the sole indicator of meaning
- Focus states must be visible

Readability always beats style.

---

## 14. Breakpoints

Align with Tailwind defaults:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 15. What Not To Add

To preserve credibility and restraint, avoid:
- Gradients
- Bright or saturated colors
- Icon-heavy layouts
- Decorative imagery without meaning
- Animations on page load
- Trend-driven visual effects

The site should feel engineered, not decorated.

---

## 16. Guiding Principle

Every visual element must justify itself by improving:
- Clarity
- Rhythm
- Comprehension
- or Identity

If an element exists only to "fill space," it should be removed.

The goal is controlled richness, not visual density.

---

## 17. Success Criteria

The design has succeeded if:
- The site feels more alive without feeling busy
- Sections feel distinct and intentional
- The design reinforces trust and thoughtfulness
- Nothing feels trendy or short-lived
- A recruiter or technical lead thinks: "This person values clarity, structure, and craft."

This site should feel like a well-designed tool, not a marketing page.

---

## 18. Overall Vibe Check

This site should feel like:
- An engineer's notebook
- A place for clear thinking
- A calm, deliberate presentation of work

If a recruiter or technical lead thinks:
> "This person values clarity, structure, and craft."

Then the design has succeeded.

---

## 19. Design Token Reference

All design tokens are defined in `lib/design-tokens.ts` and can be imported for programmatic use. The tokens include:

- Colors (base neutrals, accents, semantic, surfaces)
- Typography (fonts, weights, sizes, line heights, letter spacing, measure)
- Layout (radii, shadows, spacing, breakpoints)
- Motion (duration, easing)

Use these tokens consistently across the codebase to maintain visual consistency.
