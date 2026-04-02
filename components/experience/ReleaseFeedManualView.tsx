'use client';

import { releaseFeedProjects, type ReleaseFeedEvent } from '@/data/release-feed';
import type { ReleaseFeedWeekGroup } from '@/lib/release-feed-utils';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import {
  CategoryPill,
  ProjectLinkControl,
  ReleaseEventDetails,
} from '@/components/experience/release-feed-shared';

function ManualRow({ event }: { event: ReleaseFeedEvent }) {
  const project = releaseFeedProjects[event.projectKey];

  return (
    <article className="border-b border-border last:border-b-0">
      <details className="group">
        <summary
          className={cn(
            'cursor-pointer list-none py-4 sm:py-5 px-1 sm:px-2 [&::-webkit-details-marker]:hidden',
            'hover:bg-surface-raised/60 transition-colors rounded-sm'
          )}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex shrink-0 gap-3 sm:w-[7.5rem] sm:flex-col sm:gap-1">
              <time
                className="font-mono text-[11px] text-text-secondary tabular-nums"
                dateTime={event.completedDate}
              >
                {event.completedDate}
              </time>
              <span className="inline-flex h-6 w-8 items-center justify-center rounded border border-border bg-background font-mono text-[10px] font-semibold text-text-primary sm:w-fit sm:px-2">
                {project.monogram}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-semibold text-text-primary uppercase tracking-wide">
                  {project.displayName}
                </span>
                <span className="font-mono text-[11px] text-accent-primary">{event.version}</span>
                <CategoryPill category={event.category} />
              </div>
              <p className="text-sm sm:text-base font-medium text-text-primary leading-snug">{event.title}</p>
              <p className="mt-1.5 text-sm text-text-secondary leading-relaxed max-w-3xl">{event.summary}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
              <ProjectLinkControl
                projectKey={event.projectKey}
                className="text-[11px] font-medium text-accent-primary hover:text-accent-primary/80"
              />
              <ChevronDown className="h-4 w-4 text-text-muted transition-transform duration-200 group-open:rotate-180" />
            </div>
          </div>
        </summary>
        <div className="pb-5 pl-0 sm:pl-[calc(7.5rem+1.5rem)] pr-1">
          <div className="border-l-2 border-border pl-4 sm:pl-5">
            <ReleaseEventDetails event={event} />
          </div>
        </div>
      </details>
    </article>
  );
}

export function ReleaseFeedManualView({ weeks }: { weeks: ReleaseFeedWeekGroup[] }) {
  if (weeks.length === 0) {
    return <p className="text-text-secondary text-sm py-6">No items for this filter.</p>;
  }

  return (
    <div className="rounded-md border border-border bg-background overflow-hidden">
      <div className="divide-y divide-border">
        {weeks.map((week) => (
          <div key={week.weekStart}>
            <div className="bg-surface-sunken/80 border-b border-border px-4 py-2.5 sm:px-5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-secondary">{week.weekLabel}</h3>
            </div>
            <div className="px-3 sm:px-4">
              {week.events.map((event) => (
                <ManualRow key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
