/**
 * Temporary multi-layout experiment for the Experience “Recent work” feed.
 * Remove variant switching (and admin route) once a single design is chosen.
 */

export type ReleaseFeedVariant = 'timeline' | 'manual' | 'register';

export const RELEASE_FEED_VARIANT_STORAGE_KEY = 'portfolio-release-feed-variant';

export const releaseFeedVariants: ReleaseFeedVariant[] = ['timeline', 'manual', 'register'];

export const releaseFeedVariantInfo: Record<
  ReleaseFeedVariant,
  { label: string; blurb: string }
> = {
  timeline: {
    label: 'Spine timeline',
    blurb:
      'Vertical week spine with expandable cards — closest to the shipping-narrative “cornerstone” baseline (structured, scannable, calm depth).',
  },
  manual: {
    label: 'Changelog manual',
    blurb:
      'Dense documentation-style rows: date + project column, minimal chrome — evokes manuals and release notes (Stripe/Vercel tone).',
  },
  register: {
    label: 'Lab register',
    blurb:
      'Compact grid of notebook-style tiles with a left category rail — warm paper layers, quick scanning without losing hierarchy.',
  },
};

export function parseStoredReleaseFeedVariant(raw: string | null): ReleaseFeedVariant {
  if (raw === 'manual' || raw === 'register' || raw === 'timeline') return raw;
  return 'timeline';
}
