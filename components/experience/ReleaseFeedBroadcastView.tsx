'use client';

import { useState, useMemo, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { ReleaseFeedWeekGroup } from '@/lib/release-feed-utils';
import { releaseFeedProjects, type ReleaseFeedEvent, type ReleaseCategory } from '@/data/release-feed';
import { CategoryPill, categoryLabel, resolveProjectLink } from './release-feed-shared';
import { cn } from '@/lib/utils';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const CATEGORY_WEIGHT: Record<ReleaseCategory, number> = {
  major: 6, minor: 4, 'in-progress': 3, research: 2, patch: 1, docs: 1, infra: 1,
};

function sortByWeight(events: ReleaseFeedEvent[]): ReleaseFeedEvent[] {
  return [...events].sort(
    (a, b) => CATEGORY_WEIGHT[b.category] - CATEGORY_WEIGHT[a.category] || b.completedDate.localeCompare(a.completedDate)
  );
}

// Category color for the feature card header bar
const CATEGORY_HEADER_BG: Partial<Record<ReleaseCategory, string>> = {
  major: 'bg-accent-primary',
  minor: 'bg-accent-primary/70',
  'in-progress': 'bg-[#EA580C]',
  research: 'bg-[#0D9488]',
  patch: 'bg-[#16A34A]',
  docs: 'bg-[#A16207]',
  infra: 'bg-[#4F46E5]',
};

// ─── Feature card ─────────────────────────────────────────────────────────────

function FeatureCard({ event, size = 'primary' }: { event: ReleaseFeedEvent; size?: 'primary' | 'secondary' }) {
  const [open, setOpen] = useState(false);
  const project = releaseFeedProjects[event.projectKey];
  const link = resolveProjectLink(event.projectKey);
  const isPrimary = size === 'primary';
  const headerBg = CATEGORY_HEADER_BG[event.category] ?? 'bg-accent-primary/50';

  return (
    <>
      <style>{`
        @keyframes rfbc-bar-in {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
        .rfbc-bar { animation: rfbc-bar-in 380ms cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .rfbc-card { transition: box-shadow 180ms, transform 180ms; }
        .rfbc-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.09); transform: translateY(-1px); }
      `}</style>
      <article
        className={cn(
          'rfbc-card rounded-lg border border-border bg-background overflow-hidden flex flex-col h-full',
          open ? 'ring-1 ring-accent-primary/25' : ''
        )}
        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
      >
        {/* Category header bar */}
        <div className={cn('rfbc-bar h-1 w-full shrink-0', headerBg)} aria-hidden />

        <div className={cn('flex flex-col flex-1', isPrimary ? 'p-6' : 'p-4')}>
          {/* Meta row */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span className={cn('font-mono font-bold text-accent-primary', isPrimary ? 'text-sm' : 'text-xs')}>
              {project.monogram}
            </span>
            <span className="text-text-muted font-mono text-xs">·</span>
            <span className="font-mono text-text-muted text-xs">{event.version}</span>
            <span className="text-text-muted font-mono text-xs">·</span>
            <span className="font-mono text-text-muted text-[10px]">{event.completedDate}</span>
            <div className="ml-auto">
              <CategoryPill category={event.category} />
            </div>
          </div>

          {/* Title */}
          <h3
            className={cn('font-semibold text-text-primary leading-snug mb-2', isPrimary ? 'text-xl' : 'text-base')}
            style={{ fontFamily: isPrimary ? 'Georgia, "Times New Roman", serif' : undefined }}
          >
            {event.title}
          </h3>

          {/* Summary — always visible */}
          <p className={cn('text-text-secondary leading-relaxed flex-1', isPrimary ? 'text-sm' : 'text-xs')}>
            {event.summary}
          </p>

          {/* Actions */}
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            {link && (
              link.internal ? (
                <Link href={link.href} className="inline-flex items-center gap-1 text-xs font-medium text-accent-primary hover:text-accent-primary/80 transition-colors">
                  View case study <ArrowRight size={12} aria-hidden />
                </Link>
              ) : (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-accent-primary hover:text-accent-primary/80 transition-colors">
                  Open <ExternalLink size={12} aria-hidden />
                </a>
              )
            )}
            {(event.highlights && event.highlights.length > 0) && (
              <button
                className="text-xs text-text-muted hover:text-text-secondary transition-colors font-mono"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
              >
                {open ? 'Collapse ▴' : 'Details ▾'}
              </button>
            )}
          </div>

          {/* Expandable highlights */}
          {open && event.highlights && event.highlights.length > 0 && (
            <ul className="mt-3 space-y-1.5 text-xs text-text-primary list-disc pl-4 border-t border-border pt-3">
              {event.highlights.map((h, i) => (
                <li key={i} className="leading-relaxed">{h}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </>
  );
}

// ─── Briefs chip strip ─────────────────────────────────────────────────────────

function BriefsChip({ event }: { event: ReleaseFeedEvent }) {
  const [showPopover, setShowPopover] = useState(false);
  const project = releaseFeedProjects[event.projectKey];

  return (
    <div className="relative shrink-0">
      <button
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-mono transition-colors whitespace-nowrap',
          showPopover
            ? 'border-accent-primary/40 bg-accent-primary/5 text-text-primary'
            : 'border-border bg-background text-text-secondary hover:border-accent-primary/30 hover:text-text-primary'
        )}
        onMouseEnter={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
        onClick={() => setShowPopover((o) => !o)}
        aria-expanded={showPopover}
        aria-label={`${project.displayName} ${event.version}: ${event.title}`}
      >
        <span className="font-semibold text-accent-primary">{project.monogram}</span>
        <span className="opacity-40">·</span>
        <span>{event.version}</span>
        <span className="opacity-40">—</span>
        <span className="max-w-[160px] truncate">{event.title}</span>
      </button>

      {showPopover && (
        <div
          className="absolute bottom-full left-0 mb-2 w-64 rounded-lg border border-border bg-background shadow-lg p-3 z-10"
          role="tooltip"
        >
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <CategoryPill category={event.category} />
            <span className="text-xs font-mono text-text-muted">{event.completedDate}</span>
          </div>
          <p className="text-xs font-medium text-text-primary mb-1">{event.title}</p>
          <p className="text-xs text-text-secondary leading-relaxed">{event.summary}</p>
        </div>
      )}
    </div>
  );
}

// ─── Main view ────────────────────────────────────────────────────────────────

type PeriodIdx = 0 | 1 | 2; // 0=recent, 1=previous, 2=all

export function ReleaseFeedBroadcastView({ weeks }: { weeks: ReleaseFeedWeekGroup[] }) {
  const [periodIdx, setPeriodIdx] = useState<PeriodIdx>(0);
  const tickerRef = useRef<HTMLDivElement>(null);

  // Determine period tabs based on available weeks
  const periods = useMemo((): Array<{ label: string; weeks: ReleaseFeedWeekGroup[] }> => {
    const ps = [];
    if (weeks[0]) ps.push({ label: weeks[0].weekLabel, weeks: [weeks[0]] });
    if (weeks[1]) ps.push({ label: weeks[1].weekLabel, weeks: [weeks[1]] });
    if (weeks.length > 2) ps.push({ label: 'All releases', weeks });
    else if (weeks.length > 0 && ps.length < 3) ps.push({ label: 'All releases', weeks });
    return ps;
  }, [weeks]);

  if (weeks.length === 0 || periods.length === 0) return null;

  const safeIdx = Math.min(periodIdx, (periods.length - 1) as PeriodIdx);
  const activePeriod = periods[safeIdx];

  const allEvents = activePeriod.weeks.flatMap((w) => w.events);
  const sorted = sortByWeight(allEvents);

  // Feature zone: top 3 by weight; briefs: the rest
  const featureEvents = sorted.slice(0, 3);
  const briefEvents = sorted.slice(3);

  // Layout: 3-col grid for features
  const [primary, ...secondaries] = featureEvents;

  return (
    <>
      <style>{`
        @keyframes rfbc-content-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .rfbc-content { animation: rfbc-content-in 220ms ease; }
        @keyframes rfbc-ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .rfbc-ticker-inner { animation: rfbc-ticker-scroll 28s linear infinite; }
        .rfbc-ticker:hover .rfbc-ticker-inner { animation-play-state: paused; }
      `}</style>

      <div>
        {/* Period tabs */}
        <div className="flex items-center gap-1 mb-6 border-b border-border pb-4">
          <span className="text-xs font-mono text-text-muted uppercase tracking-widest mr-3">Period</span>
          {periods.map((period, idx) => (
            <button
              key={idx}
              onClick={() => setPeriodIdx(idx as PeriodIdx)}
              className={cn(
                'rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
                safeIdx === idx
                  ? 'bg-accent-primary text-white'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-raised'
              )}
            >
              {period.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-text-muted">{allEvents.length} release{allEvents.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Feature zone */}
        <div className="rfbc-content" key={safeIdx}>
          {featureEvents.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-8 text-center">
              <p className="text-sm text-text-muted font-mono">No releases in this period.</p>
            </div>
          ) : (
            <div className={cn(
              'grid gap-4',
              featureEvents.length === 1 ? 'grid-cols-1' :
              featureEvents.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
              'grid-cols-1 sm:grid-cols-3'
            )}>
              {/* Primary card — larger in a 3-col layout */}
              {primary && (
                <div className={featureEvents.length === 3 ? 'sm:col-span-2' : ''}>
                  <FeatureCard event={primary} size={featureEvents.length === 3 ? 'primary' : 'secondary'} />
                </div>
              )}
              {/* Secondary cards */}
              {secondaries.map((event) => (
                <div key={event.id}>
                  <FeatureCard event={event} size="secondary" />
                </div>
              ))}
            </div>
          )}

          {/* Briefs ticker */}
          {briefEvents.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px flex-1 bg-border" aria-hidden />
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest shrink-0">
                  Latest briefs
                </span>
                <div className="h-px flex-1 bg-border" aria-hidden />
              </div>

              {/* Scrollable ticker */}
              <div
                ref={tickerRef}
                className="rfbc-ticker overflow-hidden"
                aria-label="Recent patches and minor releases"
              >
                <div className="rfbc-ticker-inner flex gap-3 w-max">
                  {/* Duplicate for seamless loop */}
                  {[...briefEvents, ...briefEvents].map((event, i) => (
                    <BriefsChip key={`${event.id}-${i}`} event={event} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* If all events are features (no briefs), show a dateline footer */}
          {briefEvents.length === 0 && featureEvents.length > 0 && (
            <p className="mt-4 text-[10px] font-mono text-text-muted text-center tracking-widest uppercase">
              All releases this period are featured above
            </p>
          )}
        </div>
      </div>
    </>
  );
}
