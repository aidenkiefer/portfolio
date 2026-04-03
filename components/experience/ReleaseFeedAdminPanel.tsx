'use client';

import Link from 'next/link';
import { releaseFeedVariantInfo, releaseFeedVariants } from '@/lib/release-feed-design';
import { useReleaseFeedVariant } from '@/hooks/useReleaseFeedVariant';
import { cn } from '@/lib/utils';

/**
 * Temporary studio UI: pick a Release Feed layout variant.
 * Remove this component and `/admin/release-feed` when the design is final.
 */
export function ReleaseFeedAdminPanel() {
  const { variant, setVariant } = useReleaseFeedVariant();

  return (
    <div
      className="mb-10 rounded-md border-2 border-dashed border-accent-primary/35 bg-surface-raised p-5 sm:p-6"
      role="region"
      aria-label="Release feed layout preview (temporary)"
    >
      <p className="text-xs font-mono uppercase tracking-widest text-accent-primary mb-2">Temporary admin</p>
      <h2 className="text-lg font-semibold text-text-primary mb-2">Release feed layout</h2>
      <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-2xl">
        Compare three layouts — each a fundamentally different approach to browsing time-based releases.
        Your choice is saved in this browser only (<code className="font-mono text-xs text-text-primary">localStorage</code>
        ). Open{' '}
        <Link href="/experience#release-feed" className="text-accent-primary font-medium hover:text-accent-primary/80">
          Experience → Recent work
        </Link>{' '}
        in another tab to see the same variant.
      </p>
      <fieldset>
        <legend className="sr-only">Select release feed layout variant</legend>
        <div className="grid gap-3 sm:grid-cols-3" role="group" aria-label="Layout options">
          {releaseFeedVariants.map((v) => {
            const active = variant === v;
            const info = releaseFeedVariantInfo[v];
            return (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                className={cn(
                  'text-left rounded-md border p-4 transition-colors duration-200',
                  active
                    ? 'border-accent-primary bg-background ring-1 ring-accent-primary/25'
                    : 'border-border bg-background hover:border-accent-primary/30'
                )}
              >
                <span className="block text-sm font-semibold text-text-primary mb-1">{info.label}</span>
                <span className="block text-xs text-text-secondary leading-relaxed">{info.blurb}</span>
                {active ? (
                  <span className="mt-3 inline-block text-[10px] font-mono uppercase tracking-wider text-accent-primary">
                    Active
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
