'use client';

import { useMemo, useState } from 'react';
import {
  releaseFeedEvents,
  releaseFeedNext,
  releaseFeedNow,
  releaseFeedProjects,
  type ReleaseFeedEvent,
  type ReleaseProjectKey,
} from '@/data/release-feed';
import { groupReleaseFeedByWeek } from '@/lib/release-feed-utils';
import { cn } from '@/lib/utils';
import { ReleaseFeedBroadcastView } from '@/components/experience/ReleaseFeedBroadcastView';

function projectKeysInUse(events: ReleaseFeedEvent[]): ReleaseProjectKey[] {
  const s = new Set<ReleaseProjectKey>();
  for (const e of events) s.add(e.projectKey);
  return [...s];
}

export function ReleaseFeedBoard() {
  const [projectFilter, setProjectFilter] = useState<ReleaseProjectKey | 'all'>('all');

  const projectOptions = useMemo(() => projectKeysInUse(releaseFeedEvents), []);

  const filteredEvents = useMemo(() => {
    if (projectFilter === 'all') return releaseFeedEvents;
    return releaseFeedEvents.filter((e) => e.projectKey === projectFilter);
  }, [projectFilter]);

  const weeks = useMemo(() => groupReleaseFeedByWeek(filteredEvents), [filteredEvents]);

  return (
    <section id="release-feed" className="scroll-mt-24" aria-labelledby="release-feed-heading">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-accent-primary mb-2">
            Shipping narrative
          </p>
          <h2
            id="release-feed-heading"
            className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight"
          >
            Recent work
          </h2>
          <p className="mt-3 max-w-2xl text-text-secondary leading-relaxed text-sm sm:text-base">
            A living feed of what I&apos;ve shipped across products and codebases — grouped by week,
            scoped for a public audience. Summaries are outcome-first; internals stay in source
            repos.
          </p>
        </div>
      </div>

      {/* Now / Next */}
      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <div
          className="rounded-md border border-border bg-background p-5 sm:p-6"
          style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
        >
          <h3 className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-3">
            Now
          </h3>
          <ul className="space-y-3">
            {releaseFeedNow.map((item, i) => (
              <li key={i} className="text-sm text-text-primary leading-relaxed">
                <span className="font-semibold text-accent-primary">{item.label}:</span>{' '}
                {item.detail}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rounded-md border border-border bg-background p-5 sm:p-6"
          style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
        >
          <h3 className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-3">
            Next up
          </h3>
          <ul className="space-y-3">
            {releaseFeedNext.map((item, i) => (
              <li key={i} className="text-sm text-text-primary leading-relaxed">
                <span className="font-semibold text-text-primary">{item.label}:</span>{' '}
                <span className="text-text-secondary">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Project filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setProjectFilter('all')}
          className={cn(
            'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200',
            projectFilter === 'all'
              ? 'border-accent-primary bg-accent-primary text-white'
              : 'border-border bg-background text-text-secondary hover:border-accent-primary/40 hover:text-text-primary'
          )}
        >
          All projects
        </button>
        {projectOptions.map((key) => {
          const p = releaseFeedProjects[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => setProjectFilter(key)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200',
                projectFilter === key
                  ? 'border-accent-primary bg-accent-primary text-white'
                  : 'border-border bg-background text-text-secondary hover:border-accent-primary/40 hover:text-text-primary'
              )}
            >
              <span className="font-mono opacity-80">{p.monogram}</span> · {p.displayName}
            </button>
          );
        })}
      </div>

      <ReleaseFeedBroadcastView weeks={weeks} />
    </section>
  );
}
