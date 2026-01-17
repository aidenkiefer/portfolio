# Design Guidelines — Aiden Kiefer Personal Portfolio

Purpose:
Define a clear, intentional, and consistent visual system for a personal software engineering portfolio site.
This document exists to eliminate ambiguity and ensure all design and UI decisions support clarity,
credibility, and long-term professionalism.

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
> “Does this make the content easier to read, trust, and understand?”

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
- “Startup” visual language

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

- **Borders / dividers:** `#E2DED6`  
  Subtle separators. Borders should be light and quiet.

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
- Regular: body text
- Medium: subheadings
- Semibold: primary headings

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

## 5. Typography Hierarchy

Typography hierarchy should be created using:
- Font size
- Font weight
- Spacing

Not by:
- Changing fonts
- Changing colors excessively

General guidance:
- Headings should feel calm and structured
- Body text should prioritize long-form readability
- Line length should be comfortable (not wide)

---

## 6. Layout & Spacing

### 6.1 Content Width

- Prose max width: ~65–72 characters per line
- Use containers like `max-w-3xl` or `max-w-4xl`
- Avoid full-width text blocks

Code blocks may extend slightly wider than prose.

---

### 6.2 Spacing & Rhythm

- Prefer whitespace over dividers
- Vertical spacing should be consistent and generous
- Use spacing utilities (`space-y-*`) instead of arbitrary margins

Sections should feel like “pages” in a notebook, not stacked cards.

---

## 7. Components & UI Elements

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
- Components should feel “constructed,” not stylized

shadcn/ui components are encouraged, but styling should be overridden to match this system.

---

## 8. Links & Interaction

- Links should be clearly identifiable
- Default link color: muted navy
- Hover state: subtle color shift or underline
- Avoid animated underlines or flashy effects

Interactive elements should feel deliberate and predictable.

---

## 9. Motion & Animation

Motion should be minimal.

Allowed:
- Hover state transitions
- Focus states
- Very subtle entrance animations (optional)

Avoid:
- Page-load animations
- Parallax effects
- Scroll-triggered animations
- Excessive easing or bounce

If animation is used:
- Duration: 150–250ms
- Easing: `ease-out`

Motion must never interfere with reading.

---

## 10. Light / Dark Mode Stance

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

## 11. Accessibility & Readability

- All text must meet WCAG contrast guidelines
- Font sizes should never be “aesthetic-first”
- Color should never be the sole indicator of meaning
- Focus states must be visible

Readability always beats style.

---

## 12. Overall Vibe Check

This site should feel like:
- An engineer’s notebook
- A place for clear thinking
- A calm, deliberate presentation of work

If a recruiter or technical lead thinks:
> “This person values clarity, structure, and craft.”

Then the design has succeeded.
