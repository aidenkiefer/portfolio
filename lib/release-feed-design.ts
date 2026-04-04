/**
 * Release Feed design constants.
 * The Broadcast layout is the canonical design for the Experience page.
 */

// Retained for any legacy imports that may reference these — safe to remove
// once all consumers are cleaned up.
export type ReleaseFeedVariant = 'broadcast';
export const RELEASE_FEED_DEFAULT_VARIANT: ReleaseFeedVariant = 'broadcast';
export const RELEASE_FEED_VARIANT_STORAGE_KEY = 'portfolio-release-feed-variant';
export const releaseFeedVariants: ReleaseFeedVariant[] = ['broadcast'];
export const releaseFeedVariantInfo: Record<ReleaseFeedVariant, { label: string; blurb: string }> =
  {
    broadcast: {
      label: 'Broadcast',
      blurb:
        'Editorial newsroom layout: headline feature cards for major work, a compact briefs strip for patches and docs — browse by period.',
    },
  };

export function parseStoredReleaseFeedVariant(_raw: string | null): ReleaseFeedVariant {
  return 'broadcast';
}
