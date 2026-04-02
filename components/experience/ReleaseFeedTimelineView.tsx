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

function ReleaseCard({ event }: { event: ReleaseFeedEvent }) {
  const project = releaseFeedProjects[event.projectKey];

  return (
    <article
      className="rounded-md border border-border bg-background overflow-hidden transition-colors duration-200 hover:border-accent-primary/35"
      style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
    >
      <details className="group">
        <summary className="cursor-pointer list-none p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex h-7 min-w-[2rem] items-center justify-center rounded border border-border bg-surface-raised px-2 font-mono text-[11px] font-semibold text-text-primary">
                  {project.monogram}
                </span>
                <span className="text-sm font-semibold text-text-primary">{project.displayName}</span>
                <span className="font-mono text-xs text-accent-primary">{event.version}</span>
                <CategoryPill category={event.category} />
                <time className="text-xs text-text-secondary font-mono" dateTime={event.completedDate}>
                  {event.completedDate}
                </time>
              </div>
              <p className="text-base font-medium text-text-primary leading-snug pr-8">{event.title}</p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{event.summary}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
              <ProjectLinkControl
                projectKey={event.projectKey}
                className="text-xs font-medium text-accent-primary hover:text-accent-primary/80 whitespace-nowrap"
              />
              <ChevronDown className="h-4 w-4 text-text-secondary transition-transform duration-200 group-open:rotate-180 sm:mt-1" />
            </div>
          </div>
        </summary>
        <div className="border-t border-border px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
          <ReleaseEventDetails event={event} />
        </div>
      </details>
    </article>
  );
}

export function ReleaseFeedTimelineView({ weeks }: { weeks: ReleaseFeedWeekGroup[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border hidden sm:block" aria-hidden />
      <div className="space-y-12 sm:space-y-14">
        {weeks.length === 0 ? (
          <p className="text-text-secondary text-sm pl-0 sm:pl-10">No items for this filter.</p>
        ) : (
          weeks.map((week) => (
            <div key={week.weekStart} className="relative sm:pl-10">
              <div className="hidden sm:flex absolute left-0 top-1.5 h-6 w-6 items-center justify-center rounded-full border-2 border-accent-primary bg-background z-[1]">
                <span className="h-2 w-2 rounded-full bg-accent-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-4 tracking-tight">{week.weekLabel}</h3>
              <div className="space-y-4">
                {week.events.map((event) => (
                  <ReleaseCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
