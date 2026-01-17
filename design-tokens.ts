// design-tokens.ts
// Single source of truth for the site’s visual system.
// Keep these values stable; update intentionally and propagate via imports.

export const designTokens = {
    meta: {
      name: "Aiden Kiefer Portfolio Design System",
      version: "1.0.0",
    },
  
    // ---------------------------------------------------------------------------
    // Color System (Locked)
    // ---------------------------------------------------------------------------
    colors: {
      // Base neutrals (warm, paper-like)
      bg: "#F9F6F1", // warm off-white
      text: {
        primary: "#1C1B19", // warm near-black (never pure black)
        secondary: "#5E5A54", // warm gray for metadata
        muted: "#7A746D", // optional: even quieter text
        inverse: "#F9F6F1", // for use on dark surfaces (rare, if needed)
      },
      border: {
        subtle: "#E2DED6",
        strong: "#D1CBBF",
      },
  
      // Accent colors (signals, not decoration)
      accent: {
        primary: "#1E3A5F", // muted navy (links, active states)
        secondary: "#9F2D20", // brick red (highlights/callouts, sparingly)
      },
  
      // Semantic colors (keep restrained; map to palette)
      semantic: {
        info: "#1E3A5F", // reuse primary accent
        danger: "#9F2D20", // reuse secondary accent
        // Optional future additions (only if truly needed):
        // success: "#166534",
        // warning: "#B45309",
      },
  
      // Surfaces (for cards, callouts, code blocks)
      surface: {
        // Slightly tinted variants of bg for subtle layering
        raised: "#FBF8F4",
        sunken: "#F3EFE8",
        code: "#F3EFE8",
        // for dark UI (if ever needed)
        // dark: "#1C1B19",
      },
    },
  
    // ---------------------------------------------------------------------------
    // Typography (Locked)
    // ---------------------------------------------------------------------------
    typography: {
      // Next.js next/font names or CSS variable references
      fonts: {
        // Recommended: load via next/font/google or local and assign to CSS vars:
        // --font-sans and --font-mono
        sans: "var(--font-sans)", // IBM Plex Sans
        mono: "var(--font-mono)", // IBM Plex Mono
      },
  
      // Font weights (IBM Plex Sans supports these well)
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
  
      // Type scale (calm, readable; adjust only with intent)
      // Use these for consistent hierarchy across pages + MDX.
      sizes: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
      },
  
      // Line heights tuned for long-form reading
      lineHeights: {
        tight: 1.2,
        snug: 1.35,
        normal: 1.5,
        relaxed: 1.65,
      },
  
      // Letter spacing (subtle; avoid “designy” tracking)
      letterSpacing: {
        tighter: "-0.02em",
        normal: "0em",
        wide: "0.01em",
      },
  
      // Prose width target (~65–72ch). Use in layout containers.
      measure: {
        prose: "72ch",
        wide: "88ch",
      },
    },
  
    // ---------------------------------------------------------------------------
    // Layout & Spacing
    // ---------------------------------------------------------------------------
    radii: {
      sm: "0.25rem", // 4px
      md: "0.375rem", // 6px (default)
      lg: "0.5rem", // 8px (use sparingly)
    },
  
    // Keep shadows minimal; prefer borders.
    shadows: {
      none: "none",
      soft: "0 1px 2px rgba(0,0,0,0.06)",
    },
  
    spacing: {
      // Tailwind already covers spacing; this is for non-Tailwind usage or consistency.
      // Values match a calm 4px base rhythm.
      0: "0rem",
      1: "0.25rem", // 4px
      2: "0.5rem", // 8px
      3: "0.75rem", // 12px
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      6: "1.5rem", // 24px
      8: "2rem", // 32px
      10: "2.5rem", // 40px
      12: "3rem", // 48px
      16: "4rem", // 64px
      20: "5rem", // 80px
      24: "6rem", // 96px
    },
  
    breakpoints: {
      // Align with Tailwind defaults unless you have a strong reason not to.
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  
    // ---------------------------------------------------------------------------
    // Motion (Minimal)
    // ---------------------------------------------------------------------------
    motion: {
      duration: {
        fast: "150ms",
        normal: "200ms",
        slow: "250ms",
      },
      easing: {
        standard: "cubic-bezier(0.16, 1, 0.3, 1)", // ease-out-ish
      },
    },
  } as const;
  
  export type DesignTokens = typeof designTokens;
  
  /**
   * Optional helper: CSS variables for global theming.
   * Use this if you want to inject tokens into :root via a style tag or CSS file.
   */
  export function designTokensToCssVars(tokens: DesignTokens = designTokens) {
    return {
      "--bg": tokens.colors.bg,
      "--text-primary": tokens.colors.text.primary,
      "--text-secondary": tokens.colors.text.secondary,
      "--border-subtle": tokens.colors.border.subtle,
      "--border-strong": tokens.colors.border.strong,
      "--accent-primary": tokens.colors.accent.primary,
      "--accent-secondary": tokens.colors.accent.secondary,
      "--surface-raised": tokens.colors.surface.raised,
      "--surface-sunken": tokens.colors.surface.sunken,
      "--surface-code": tokens.colors.surface.code,
      "--radius-sm": tokens.radii.sm,
      "--radius-md": tokens.radii.md,
      "--radius-lg": tokens.radii.lg,
      "--shadow-soft": tokens.shadows.soft,
      "--motion-fast": tokens.motion.duration.fast,
      "--motion-normal": tokens.motion.duration.normal,
      "--motion-slow": tokens.motion.duration.slow,
      "--motion-ease": tokens.motion.easing.standard,
      "--measure-prose": tokens.typography.measure.prose,
      "--measure-wide": tokens.typography.measure.wide,
    } as const;
  }
  