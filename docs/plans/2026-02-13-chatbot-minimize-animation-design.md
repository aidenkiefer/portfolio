# Chatbot Minimize Animation Design

**Date:** 2026-02-13
**Status:** Approved
**Related Ticket:** docs/plans/tickets/chatbot/13-chatbot-minimize-into-bubble-animation.md

---

## Problem Statement

The chatbot drawer currently slides in from the right edge of the viewport (`translate-x-full`), creating a disconnected relationship between the floating button (at `bottom-6 right-6`) and the drawer panel. The UI feels like two separate elements rather than a cohesive widget that expands and collapses.

**Current behavior:**
- Floating button: `bottom-6 right-6`, scales to 0 when drawer opens
- Drawer: `bottom-0 right-0` (or `sm:bottom-6 sm:right-6`), slides from right with `translate-x-full`
- Transition: 300ms
- Result: Panel feels like it's previewing from the edge, not expanding from the button

---

## Design Goals

1. **Visual continuity:** Drawer should clearly read as "expanding from the bubble" on open and "minimizing into the bubble" on close
2. **Minimal motion:** Honor design guidelines: "motion must never interfere with reading," "restrained, calm"
3. **Functional, not decorative:** Animation should clarify the relationship between button and drawer, not add visual flair
4. **Accessible:** Respect `prefers-reduced-motion: reduce`
5. **Consistent:** Same conceptual behavior on mobile and desktop (adapted for dimensions)
6. **Performance:** CSS-first, no layout shifts, smooth on all devices

---

## User Preferences (From Brainstorming)

- **Bubble behavior:** Hide completely when drawer opens (scale to 0)
- **Motion intensity:** Testing both subtle and refined options before deciding
- **Mobile behavior:** Same animation concept as desktop, adapted for full-width

---

## Animation Concepts (Least → Most Flashy)

### Concept 1: Instant Scale ⚡
- **Duration:** 150ms
- **Properties:** `scale(0 → 1)`, `opacity(0 → 1)`, `transform-origin: bottom right`
- **Flash level:** Minimal—almost imperceptible, feels like state change
- **Use case:** When motion should be nearly invisible

### Concept 2: Gentle Scale 🌱 (Recommended Primary)
- **Duration:** 200ms
- **Properties:** `scale(0 → 1)`, `opacity(0 → 1)`, `transform-origin: bottom right`
- **Flash level:** Balanced—noticeable but restrained, classic functional UI
- **Use case:** Default option, honors design system "normal" duration

### Concept 3: Fade Scale with Micro-Delay ✨
- **Duration:** 250ms (opacity with 50ms delay)
- **Properties:** Staggered scale and opacity
- **Flash level:** More deliberate, sits at edge of "minimal"
- **Use case:** When you want slightly more polish

### Concept 4: Shape Morph Subtle 🔄 (Recommended Alternative)
- **Duration:** 200ms
- **Properties:** `border-radius(50% → 0.375rem)`, `scale(0.15 → 1)`, `opacity(0 → 1)`
- **Flash level:** Intentional animation, makes bubble→drawer relationship explicit
- **Use case:** When visual sophistication is valued over pure simplicity

### Concept 5: Shape Morph Spring 🎪
- **Duration:** 250ms with spring easing
- **Properties:** Same as #4 plus slight scale overshoot (1.02)
- **Flash level:** Most polished, has personality, upper limit for "restrained"
- **Use case:** When you want maximum polish without being flashy

---

## Recommended Implementation

Implement **both Concept 2 and Concept 4** with a toggle mechanism for A/B testing:

### **Concept 2: Gentle Scale (Primary)**
**Why:**
- CSS-only, no complexity
- Perfect balance of functional and polished
- Matches design system "normal" 200ms duration
- Won't distract from content

**Specs:**
- `transform-origin: bottom right`
- `transform: scale(0)` → `scale(1)`
- `opacity: 0` → `1`
- Duration: `200ms`
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Reduced motion: `100ms` or instant

### **Concept 4: Shape Morph Subtle (Alternative)**
**Why:**
- Adds visual sophistication without flashiness
- Shape transformation makes bubble→drawer connection clearer
- Still respects "minimal motion" principle
- Tests whether extra polish is worth complexity

**Specs:**
- Starting state: `border-radius: 50%`, `scale(0.15)` (≈bubble size), `opacity: 0`
- Ending state: `border-radius: 0.375rem`, `scale(1)`, `opacity: 1`
- Duration: `200ms`
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Reduced motion: Skip border-radius, just fade

---

## Technical Specifications

### Positioning Strategy

**Desktop (`sm` and up):**
- Button: `bottom-6 right-6`, `z-40`
- Drawer: `bottom-6 right-6`, `z-50`, anchored to same position as button
- On close, drawer scales down toward button position

**Mobile:**
- Button: `bottom-6 right-6`, `z-40`
- Drawer: Full-width, but still anchored to bottom-right
- Transform origin remains `bottom right` so expansion feels directional

### Animation States

**Closed:**
- Button: visible, `scale(1)`, `opacity: 1`
- Drawer: hidden, `scale(0)`, `opacity: 0`, `pointer-events: none`

**Opening:**
- Button: `scale(0)`, `opacity: 0` (200ms)
- Drawer: `scale(0 → 1)`, `opacity(0 → 1)` (200ms)
- For Concept 4: also animate `border-radius`

**Open:**
- Button: hidden
- Drawer: visible, `scale(1)`, `opacity: 1`

**Closing:**
- Drawer: `scale(1 → 0)`, `opacity(1 → 0)` (200ms)
- For Concept 4: also animate `border-radius`
- Button: `scale(0 → 1)`, `opacity(0 → 1)` (200ms, slight delay?)

### Reduced Motion

When `prefers-reduced-motion: reduce`:
- **Concept 2:** Reduce duration to 100ms or skip animation (instant)
- **Concept 4:** Skip border-radius animation, just use opacity fade at 100ms
- User preference for accessibility over polish

### Toggle Mechanism

Two implementation options:

**Option A: Component prop (simpler, recommended)**
```typescript
<ChatWidget animationStyle="gentle-scale" | "shape-morph" />
```

**Option B: localStorage flag (easier for runtime testing)**
```typescript
const animationStyle = localStorage.getItem('chatbot-animation') || 'gentle-scale';
```

Recommend **Option B** for testing phase, then hard-code the winner and remove the toggle for production.

---

## Layout & CSS Strategy

### Core Changes

1. **Drawer positioning:**
   - Remove `translate-x-full` (old slide-from-right behavior)
   - Add `transform-origin: bottom right`
   - Use `scale(0)` for closed state instead of translate

2. **Button visibility:**
   - Keep existing scale-to-0 on open
   - Ensure timing matches drawer animation

3. **Z-index:**
   - Button: `z-40`
   - Drawer: `z-50`
   - Backdrop: `z-40` (between button and drawer)

### CSS Classes (Tailwind + inline styles)

**Gentle Scale (Concept 2):**
```css
/* Closed state */
.drawer-closed {
  transform: scale(0);
  opacity: 0;
  transform-origin: bottom right;
}

/* Open state */
.drawer-open {
  transform: scale(1);
  opacity: 1;
}

/* Transition */
transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 200ms cubic-bezier(0.16, 1, 0.3, 1);
```

**Shape Morph (Concept 4):**
```css
/* Additional properties */
.drawer-closed {
  border-radius: 50%;
  /* plus all from Concept 2 */
}

.drawer-open {
  border-radius: 0.375rem; /* md */
  /* plus all from Concept 2 */
}

/* Additional transition */
transition: /* ...existing... */,
            border-radius 200ms cubic-bezier(0.16, 1, 0.3, 1);
```

---

## Mobile Considerations

- Full-width drawer on mobile (`w-full` on small screens)
- Transform-origin stays `bottom right` so expansion is directional
- May want to adjust scale starting point on mobile (test `scale(0.05)` vs `scale(0.15)`)
- Same duration and easing as desktop
- Ensure no horizontal overflow or layout shift

---

## Edge Cases & Considerations

1. **Backdrop timing:** Mobile backdrop should fade in/out in sync with drawer
2. **Focus management:** Preserve existing focus behavior (focus input when drawer opens)
3. **Scroll position:** Preserve scroll-to-bottom behavior
4. **Quick open/close:** Animation should be interruptible (test rapid toggling)
5. **First load:** Drawer starts closed, no animation on mount
6. **Performance:** Test on low-end Android devices, especially for Concept 4 with border-radius

---

## Success Criteria

- [ ] Drawer clearly reads as expanding from the bubble corner
- [ ] Animation duration is 200ms (matches design system "normal")
- [ ] Reduced motion is respected (shorter or no animation)
- [ ] No layout shift or overflow on mobile or desktop
- [ ] No change to API, session, or message logic
- [ ] Both Concept 2 and Concept 4 are implemented with toggle
- [ ] User can test both and choose winner
- [ ] Winner will be hard-coded, toggle removed for production

---

## Open Questions

- [x] Should bubble remain visible when drawer opens? → **No, hide it completely**
- [x] Different animation on mobile? → **No, same concept adapted**
- [x] Motion intensity preference? → **Test both options, decide after seeing them**
- [ ] Which concept wins after testing? (To be determined)

---

## Next Steps

1. Implement both Concept 2 and Concept 4 in `ChatWidget.tsx`
2. Add toggle mechanism (localStorage for testing)
3. Test on desktop and mobile
4. Test with reduced motion enabled
5. Choose winner and remove toggle
6. Update this document with final decision
