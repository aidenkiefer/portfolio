'use client';

import { releaseFeedProjects, type ReleaseFeedEvent } from '@/data/release-feed';
import type { ReleaseFeedWeekGroup } from '@/lib/release-feed-utils';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import {
  categoryLabel,
  categoryRail,
  ProjectLinkControl,
  ReleaseEventDetails,
} from '@/components/experience/release-feed-shared';

function RegisterTile({ event }: { event: ReleaseFeedEvent }) {
  const project = releaseFeedProjects[event.projectKey];

  return (
    <article
      className={cn(
        'rounded-sm border border-border bg-surface-sunken/90 overflow-hidden transition-colors duration-200',
        'hover:border-accent-primary/30',
        'border-l-[3px]',
        categoryRail[event.category]
      )}
      style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.03)' }}
    >
      <details className="group">
        <summary className="cursor-pointer list-none p-4 [&::-webkit-details-marker]:hidden">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <span className="font-mono text-[10px] font-semibold text-text-secondary uppercase tracking-wider">
                {categoryLabel[event.category]}
              </span>
              <span className="text-text-muted">·</span>
              <span className="font-mono text-[11px] text-accent-primary">{event.version}</span>
            </div>
            <time className="font-mono text-[10px] text-text-muted shrink-0 tabular-nums" dateTime={event.completedDate}>
              {event.completedDate}
            </time>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex h-6 min-w-[1.75rem] items-center justify-center rounded border border-border bg-background px-1.5 font-mono text-[10px] font-semibold text-text-primary">
              {project.monogram}
            </span>
            <span className="text-xs font-semibold text-text-primary truncate">{project.displayName}</span>
          </div>
          <p className="text-sm font-medium text-text-primary leading-snug">{event.title}</p>
          <p className="mt-2 text-xs text-text-secondary leading-relaxed line-clamp-3">{event.summary}</p>
          <div className="mt-3 flex items-center justify-between gap-2">
            <ProjectLinkControl
              projectKey={event.projectKey}
              className="text-[11px] font-medium text-accent-primary hover:text-accent-primary/80"
            />
            <ChevronDown className="h-4 w-4 text-text-muted transition-transform duration-200 group-open:rotate-180 shrink-0" />
          </div>
        </summary>
        <div className="border-t border-border bg-background/60 px-4 pb-4 pt-0">
          <ReleaseEventDetails event={event} />
        </div>
      </details>
    </article>
  );
}

export function ReleaseFeedRegisterView({ weeks }: { weeks: ReleaseFeedWeekGroup[] }) {
  if (weeks.length === 0) {
    return <p className="text-text-secondary text-sm py-6">No items for this filter.</p>;
  }

  return (
    <div className="space-y-10 sm:space-y-12">
      {weeks.map((week) => (
        <div key={week.weekStart}>
          <div className="mb-4 flex items-baseline gap-3 border-b border-border pb-2">
            <h3 className="text-base font-semibold text-text-primary tracking-tight">{week.weekLabel}</h3>
            <span className="text-[11px] font-mono text-text-muted">{week.events.length} entr{week.events.length === 1 ? 'y' : 'ies'}</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {week.events.map((event) => (
              <RegisterTile key={event.id} event={event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
