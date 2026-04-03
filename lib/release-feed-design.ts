/**
 * Temporary multi-layout experiment for the Experience “Recent work” feed.
 * Remove variant switching (and admin route) once a single design is chosen.
 */

export type ReleaseFeedVariant = 'command-room' | 'matrix' | 'broadcast';

export const RELEASE_FEED_VARIANT_STORAGE_KEY = 'portfolio-release-feed-variant';

export const releaseFeedVariants: ReleaseFeedVariant[] = ['command-room', 'matrix', 'broadcast'];

export const releaseFeedVariantInfo: Record<
  ReleaseFeedVariant,
  { label: string; blurb: string }
> = {
  'command-room': {
    label: 'Command Room',
    blurb:
      'Dark terminal panel: navigate weeks laterally, events sized by release importance — major releases dominate, patches collapse into a compact grid.',
  },
  matrix: {
    label: 'Activity Matrix',
    blurb:
      'Heatmap grid of project × week cells — color and intensity encode activity. Click any cell to drill into that week\'s releases for that project.',
  },
  broadcast: {
    label: 'Broadcast',
    blurb:
      'Editorial newsroom layout: headline feature cards for major work, a compact briefs strip for patches and docs — browse by period.',
  },
};

export function parseStoredReleaseFeedVariant(raw: string | null): ReleaseFeedVariant {
  if (raw === 'command-room' || raw === 'matrix' || raw === 'broadcast') return raw;
  return 'broadcast';
}
