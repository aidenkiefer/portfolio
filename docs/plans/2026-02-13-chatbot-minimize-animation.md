# Chatbot Minimize Animation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement two animation concepts (Gentle Scale and Shape Morph) with a toggle for the chatbot drawer minimize/expand behavior.

**Architecture:** Replace the current slide-from-right animation with transform-origin-based scaling. Implement two variants: (1) simple scale/opacity, (2) scale/opacity with border-radius morph. Add localStorage toggle to switch between them for A/B testing.

**Tech Stack:** React, TypeScript, Tailwind CSS, CSS transitions, localStorage

**Design Doc:** `docs/plans/2026-02-13-chatbot-minimize-animation-design.md`

---

## Constraints (from CLAUDE.md and Ticket)

- **No shell commands** - Do not run npm, build, or verification commands
- **No verification** - Implementation only; human will test
- **Allowed files:** `components/chatbot/ChatWidget.tsx`, `app/globals.css` (if needed)
- **Preserve:** All existing functionality (API, session, messages, citations, focus, scroll)

---

## Task 1: Add Animation Toggle State

**Files:**
- Modify: `components/chatbot/ChatWidget.tsx:32-40` (state declarations)

**Step 1: Import useState for animation preference**

No additional imports needed (useState already imported).

**Step 2: Add animation style state**

Add after existing state declarations (around line 38):

```typescript
const [animationStyle, setAnimationStyle] = useState<'gentle-scale' | 'shape-morph'>('gentle-scale');
```

**Step 3: Load animation preference from localStorage on mount**

Add to the existing `useEffect` that runs after mount (around line 43-48):

```typescript
useEffect(() => {
  setMounted(true);
  const storedSessionId = getOrCreateSessionId();
  setSessionId(storedSessionId);
  setMessages((prev) => (prev.length === 0 ? [INITIAL_GREETING] : prev));

  // Load animation preference
  const storedAnimation = localStorage.getItem('chatbot-animation') as 'gentle-scale' | 'shape-morph' | null;
  if (storedAnimation) {
    setAnimationStyle(storedAnimation);
  }
}, []);
```

**Step 4: Add helper to toggle animation style (for testing)**

Add this function before the return statement (around line 160):

```typescript
const toggleAnimation = () => {
  const newStyle = animationStyle === 'gentle-scale' ? 'shape-morph' : 'gentle-scale';
  setAnimationStyle(newStyle);
  localStorage.setItem('chatbot-animation', newStyle);
  console.log(`Animation style changed to: ${newStyle}`);
};
```

**Step 5: Expose toggle in dev mode (temporary)**

Add a keyboard listener or make it accessible via window object for testing. Add to the mount effect:

```typescript
// For testing - expose toggle globally
if (typeof window !== 'undefined') {
  (window as any).toggleChatAnimation = toggleAnimation;
}
```

---

## Task 2: Implement Gentle Scale Animation (Concept 2)

**Files:**
- Modify: `components/chatbot/ChatWidget.tsx:166-180` (floating button)
- Modify: `components/chatbot/ChatWidget.tsx:183-194` (drawer aside)

**Step 1: Update button transition classes**

Current button (around line 167-180):

```typescript
<button
  onClick={() => setIsOpen(true)}
  className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-md transition-all duration-200 ${
    isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
  }`}
  style={{
    backgroundColor: designTokens.colors.accent.primary,
    color: designTokens.colors.text.inverse,
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  }}
  aria-label="Open chat"
>
  <MessageCircle size={24} />
</button>
```

No changes needed - button already scales to 0 when drawer opens.

**Step 2: Update drawer positioning and transform-origin**

Replace the drawer's `aside` element (around line 183-194). Change from:

```typescript
className={`fixed bottom-0 right-0 z-50 flex h-[600px] w-full flex-col transition-transform duration-300 sm:bottom-6 sm:right-6 sm:h-[600px] sm:w-[400px] sm:rounded-md ${
  isOpen ? 'translate-x-0' : 'translate-x-full'
}`}
```

To (for Gentle Scale):

```typescript
className={`fixed bottom-6 right-6 z-50 flex h-[600px] w-full flex-col sm:w-[400px] sm:rounded-md ${
  isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
}`}
style={{
  backgroundColor: designTokens.colors.surface.raised,
  border: `1px solid ${designTokens.colors.border.subtle}`,
  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
  transformOrigin: 'bottom right',
  transition: `transform ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}, opacity ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}`,
}}
```

**Step 3: Handle mobile positioning**

On mobile, drawer should still be full-width but anchored bottom-right. Update className to handle mobile:

```typescript
className={`fixed z-50 flex flex-col ${
  isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
} w-full h-[600px] bottom-0 right-0 sm:bottom-6 sm:right-6 sm:w-[400px] sm:rounded-md sm:h-[600px]`}
```

**Step 4: Add pointer-events control**

Prevent interaction when closed:

```typescript
style={{
  backgroundColor: designTokens.colors.surface.raised,
  border: `1px solid ${designTokens.colors.border.subtle}`,
  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
  transformOrigin: 'bottom right',
  transition: `transform ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}, opacity ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}`,
  pointerEvents: isOpen ? 'auto' : 'none',
}}
```

---

## Task 3: Add Shape Morph Variant (Concept 4)

**Files:**
- Modify: `components/chatbot/ChatWidget.tsx:183-194` (drawer aside)

**Step 1: Create dynamic style object based on animation style**

Before the drawer return, create a helper to compute styles:

```typescript
// Compute drawer styles based on animation type
const getDrawerStyles = () => {
  const baseStyles = {
    backgroundColor: designTokens.colors.surface.raised,
    border: `1px solid ${designTokens.colors.border.subtle}`,
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    transformOrigin: 'bottom right',
    pointerEvents: isOpen ? ('auto' as const) : ('none' as const),
  };

  if (animationStyle === 'shape-morph') {
    // Shape Morph: add border-radius transition
    return {
      ...baseStyles,
      borderRadius: isOpen ? designTokens.radii.md : '50%',
      transition: `transform ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}, opacity ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}, border-radius ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}`,
    };
  } else {
    // Gentle Scale: standard transition
    return {
      ...baseStyles,
      transition: `transform ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}, opacity ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}`,
    };
  }
};
```

**Step 2: Apply dynamic styles to drawer**

Update the drawer's style prop:

```typescript
<aside
  role="dialog"
  aria-label="Chat assistant"
  className={`fixed z-50 flex flex-col ${
    isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
  } w-full h-[600px] bottom-0 right-0 sm:bottom-6 sm:right-6 sm:w-[400px] sm:rounded-md sm:h-[600px]`}
  style={getDrawerStyles()}
>
```

**Step 3: Handle border-radius override on mobile**

For shape-morph on mobile, the drawer goes full-width so we need to ensure border-radius is appropriate:

```typescript
const getDrawerStyles = () => {
  const baseStyles = {
    backgroundColor: designTokens.colors.surface.raised,
    border: `1px solid ${designTokens.colors.border.subtle}`,
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    transformOrigin: 'bottom right',
    pointerEvents: isOpen ? ('auto' as const) : ('none' as const),
  };

  if (animationStyle === 'shape-morph') {
    return {
      ...baseStyles,
      borderRadius: isOpen ? designTokens.radii.md : '50%',
      transition: `transform ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}, opacity ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}, border-radius ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}`,
    };
  } else {
    return {
      ...baseStyles,
      transition: `transform ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}, opacity ${designTokens.motion.duration.normal} ${designTokens.motion.easing.standard}`,
    };
  }
};
```

Note: The `sm:rounded-md` in className will override borderRadius on larger screens when open, which is correct. When closed, borderRadius: 50% creates the circle shape.

---

## Task 4: Add Reduced Motion Support

**Files:**
- Modify: `components/chatbot/ChatWidget.tsx:183-194` (drawer aside)
- Modify: `app/globals.css` (if not already present)

**Step 1: Check if reduced motion CSS exists**

Check `app/globals.css` for `@media (prefers-reduced-motion: reduce)` rules. If not present, add:

```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Step 2: Alternative - Use React hook for reduced motion**

If you prefer programmatic control, add state to detect reduced motion preference:

```typescript
const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  setPrefersReducedMotion(mediaQuery.matches);

  const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
  mediaQuery.addEventListener('change', handler);
  return () => mediaQuery.removeEventListener('change', handler);
}, []);
```

**Step 3: Adjust transition duration for reduced motion**

Update `getDrawerStyles()` to use shorter duration when reduced motion is preferred:

```typescript
const duration = prefersReducedMotion ? '100ms' : designTokens.motion.duration.normal;

// Use `duration` in transition strings instead of designTokens.motion.duration.normal
```

Or rely on the global CSS rule (Step 1) which is simpler and doesn't require state.

**Decision:** Use global CSS approach (Step 1) for simplicity, unless programmatic control is needed.

---

## Task 5: Fix Mobile Full-Width Behavior

**Files:**
- Modify: `components/chatbot/ChatWidget.tsx:183-194` (drawer className)

**Step 1: Ensure mobile drawer expands from bottom-right even at full width**

The current approach uses `bottom-0 right-0` on mobile and `sm:bottom-6 sm:right-6` on desktop. This is correct for anchoring.

However, for the animation to feel right on mobile, we want it to still expand from the bottom-right corner even though it's full-width.

Current className should work, but verify the transform-origin is maintained:

```typescript
className={`fixed z-50 flex flex-col ${
  isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
} w-full h-[600px] bottom-0 right-0 sm:bottom-6 sm:right-6 sm:w-[400px] sm:rounded-md sm:h-[600px]`}
```

`transformOrigin: 'bottom right'` in style will apply to both mobile and desktop, which is correct.

**Step 2: Test that mobile doesn't create horizontal overflow**

Ensure no horizontal scrollbar appears during animation. If issues occur, add `overflow-hidden` to body or parent.

No code change needed if current implementation works correctly.

---

## Task 6: Preserve Existing Functionality

**Files:**
- Verify: All existing behavior is maintained

**Step 1: Ensure focus management still works**

Check that the existing focus effect (lines 51-55) still works:

```typescript
useEffect(() => {
  if (isOpen && inputRef.current) {
    inputRef.current.focus();
  }
}, [isOpen]);
```

No changes needed - this should still work since we're only changing the animation, not the open/close state.

**Step 2: Ensure scroll-to-bottom still works**

Check that the scroll effect (lines 58-60) still works:

```typescript
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages, isLoading]);
```

No changes needed.

**Step 3: Ensure backdrop still works on mobile**

Check the backdrop element (lines 388-394):

```typescript
{isOpen && (
  <div
    className="fixed inset-0 z-40 bg-black/20 sm:hidden"
    onClick={() => setIsOpen(false)}
    aria-hidden="true"
  />
)}
```

The backdrop is z-40, button is z-40, drawer is z-50. This is correct - backdrop should appear between button and drawer on mobile.

No changes needed.

---

## Task 7: Add Animation Style Indicator (Temporary, for Testing)

**Files:**
- Modify: `components/chatbot/ChatWidget.tsx:195-231` (header section)

**Step 1: Add visual indicator of current animation style**

In the drawer header, add a small badge showing current animation (for testing only, remove later):

After the "Questions?" heading (around line 206), add:

```typescript
<h2
  className="text-lg font-semibold"
  style={{ color: designTokens.colors.text.primary }}
>
  Questions?
  <span
    className="ml-2 text-xs"
    style={{ color: designTokens.colors.text.muted }}
    title="Click console: window.toggleChatAnimation()"
  >
    ({animationStyle})
  </span>
</h2>
```

This shows which animation is active and reminds the user how to toggle.

**Step 2: Log animation changes**

The `toggleAnimation` function already logs to console (from Task 1, Step 4).

User can open dev console and run:
```javascript
window.toggleChatAnimation()
```

To switch between 'gentle-scale' and 'shape-morph'.

---

## Task 8: Final Code Review Checklist

**Step 1: Verify all changes are scoped correctly**

Files modified:
- `components/chatbot/ChatWidget.tsx` ✓
- `app/globals.css` (optional, if adding reduced motion rule)

**Step 2: Verify no API or data flow changes**

- No changes to `handleSend`, `handleReset`, `handleQuickStart` ✓
- No changes to message rendering, citations, markdown ✓
- No changes to session storage ✓

**Step 3: Verify accessibility**

- `aria-label` preserved on button and drawer ✓
- `role="dialog"` preserved ✓
- Focus management preserved ✓
- Reduced motion supported ✓

**Step 4: Remove temporary testing code before production**

- Remove animation style indicator from header (Task 7, Step 1)
- Remove `window.toggleChatAnimation` exposure (Task 1, Step 5)
- Hard-code chosen animation style
- Remove localStorage toggle logic

---

## Testing Guidance (for Human)

Since shell commands are not allowed per CLAUDE.md, the human should manually test:

### Desktop Testing
1. Open the chatbot by clicking the bubble button
   - Verify drawer expands from bottom-right corner
   - Verify bubble disappears during expansion
2. Close the chatbot using X button
   - Verify drawer collapses back to bottom-right
   - Verify bubble reappears at bottom-right
3. Toggle animation style via console: `window.toggleChatAnimation()`
4. Repeat open/close with shape-morph style
5. Verify rapid open/close works without glitches

### Mobile Testing (resize browser to <640px or use device)
1. Repeat desktop tests on mobile viewport
2. Verify drawer expands from bottom-right even at full-width
3. Verify backdrop appears and can close drawer
4. Verify no horizontal overflow

### Reduced Motion Testing
1. Enable "Reduce motion" in OS accessibility settings
2. Open/close drawer
3. Verify animation is near-instant or very brief

### Existing Functionality Testing
1. Send messages, verify they work
2. Click quick-start buttons, verify they work
3. Check citations render correctly
4. Reset conversation, verify it works
5. Check markdown rendering
6. Verify input focus on open
7. Verify scroll to bottom on new messages

---

## Production Cleanup (After Testing)

Once you've chosen the winning animation:

### Step 1: Hard-code chosen animation style

Replace:
```typescript
const [animationStyle, setAnimationStyle] = useState<'gentle-scale' | 'shape-morph'>('gentle-scale');
```

With (if gentle-scale wins):
```typescript
const animationStyle = 'gentle-scale';
```

Or (if shape-morph wins):
```typescript
const animationStyle = 'shape-morph';
```

### Step 2: Remove toggle function

Remove the `toggleAnimation` function entirely.

### Step 3: Remove localStorage logic

Remove the localStorage loading code from the mount effect:
```typescript
const storedAnimation = localStorage.getItem('chatbot-animation') as 'gentle-scale' | 'shape-morph' | null;
if (storedAnimation) {
  setAnimationStyle(storedAnimation);
}
```

### Step 4: Remove window.toggleChatAnimation

Remove:
```typescript
if (typeof window !== 'undefined') {
  (window as any).toggleChatAnimation = toggleAnimation;
}
```

### Step 5: Remove animation indicator from header

Remove the `({animationStyle})` badge from the header.

### Step 6: Update design doc with winner

Update `docs/plans/2026-02-13-chatbot-minimize-animation-design.md` with final decision.

---

## Summary of Changes

**Files Modified:**
- `components/chatbot/ChatWidget.tsx` - All animation logic
- `app/globals.css` - Optional reduced motion rule (if not already present)

**Key Changes:**
1. Replaced `translate-x-full` with `scale(0)` for closed state
2. Added `transform-origin: bottom right` to drawer
3. Implemented two animation variants (gentle-scale, shape-morph)
4. Added localStorage toggle for A/B testing
5. Preserved all existing functionality (API, session, messages, focus, scroll)
6. Added reduced motion support

**What's Preserved:**
- Message sending/receiving
- Session management
- Focus management
- Scroll behavior
- Citations rendering
- Quick-start buttons
- Reset functionality
- Mobile backdrop
- All ARIA labels and roles

**Next Steps:**
1. Implement all tasks in order
2. Human tests both animations
3. Choose winner
4. Run production cleanup
5. Commit final code
