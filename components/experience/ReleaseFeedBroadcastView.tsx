'use client';

import {
  useState,
  useMemo,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { ReleaseFeedWeekGroup } from '@/lib/release-feed-utils';
import {
  releaseFeedProjects,
  type ReleaseFeedEvent,
  type ReleaseCategory,
} from '@/data/release-feed';
import { CategoryPill, resolveProjectLink } from './release-feed-shared';
import { cn } from '@/lib/utils';

// SSR-safe layout effect
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// ─── Helpers ─────────────────────────────────────────────────────────────────

const CATEGORY_WEIGHT: Record<ReleaseCategory, number> = {
  major: 6, minor: 4, 'in-progress': 3, research: 2, patch: 1, docs: 1, infra: 1,
};

function sortByWeight(events: ReleaseFeedEvent[]): ReleaseFeedEvent[] {
  return [...events].sort(
    (a, b) =>
      CATEGORY_WEIGHT[b.category] - CATEGORY_WEIGHT[a.category] ||
      b.completedDate.localeCompare(a.completedDate)
  );
}

const CATEGORY_HEADER_BG: Partial<Record<ReleaseCategory, string>> = {
  major: 'bg-accent-primary',
  minor: 'bg-accent-primary/70',
  'in-progress': 'bg-[#EA580C]',
  research: 'bg-[#0D9488]',
  patch: 'bg-[#16A34A]',
  docs: 'bg-[#A16207]',
  infra: 'bg-[#4F46E5]',
};

const CATEGORY_ACCENT_HEX: Partial<Record<ReleaseCategory, string>> = {
  major: '#1E3A5F',
  minor: '#2B4F7A',
  'in-progress': '#EA580C',
  research: '#0D9488',
  patch: '#16A34A',
  docs: '#A16207',
  infra: '#4F46E5',
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const BROADCAST_STYLES = `
  /* ── Entry animations ─────────────────────────────── */
  @keyframes rfbc-bar-in {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0% 0 0); }
  }
  @keyframes rfbc-card-in {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes rfbc-ticker-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes rfbc-briefs-line-in {
    from { transform: scaleX(0); opacity: 0; }
    to   { transform: scaleX(1); opacity: 1; }
  }
  @keyframes rfbc-tooltip-in {
    from { opacity: 0; transform: translateY(5px) scale(0.975); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* ── Applied classes ──────────────────────────────── */
  .rfbc-bar { animation: rfbc-bar-in 380ms cubic-bezier(0.4, 0, 0.2, 1) forwards; }

  .rfbc-card-in {
    animation: rfbc-card-in 300ms cubic-bezier(0.25, 0, 0, 1) both;
  }

  /* Hover: warm-tinted shadow + lift */
  .rfbc-card {
    transition: box-shadow 220ms ease, transform 220ms ease;
  }
  .rfbc-card:hover {
    box-shadow: 0 8px 28px rgba(30, 58, 95, 0.12), 0 2px 8px rgba(30, 58, 95, 0.06);
    transform: translateY(-2px);
  }

  /* Ticker scroll + pause states */
  .rfbc-ticker { animation: rfbc-ticker-in 420ms ease 80ms both; }
  .rfbc-ticker-inner { animation: rfbc-ticker-scroll 28s linear infinite; }
  .rfbc-ticker:hover .rfbc-ticker-inner,
  .rfbc-ticker[data-paused="true"] .rfbc-ticker-inner {
    animation-play-state: paused;
  }
  @keyframes rfbc-ticker-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* Briefs divider lines sweep in from center */
  .rfbc-briefs-line {
    transform-origin: center;
    animation: rfbc-briefs-line-in 480ms cubic-bezier(0.25, 0, 0, 1) 120ms both;
  }

  /* Tooltip */
  .rfbc-tooltip-card {
    animation: rfbc-tooltip-in 160ms cubic-bezier(0.25, 0, 0, 1) forwards;
  }

  /* Chip */
  .rfbc-chip {
    transition: border-color 160ms ease, background-color 160ms ease,
                color 160ms ease, box-shadow 160ms ease;
  }

  /* Sliding period tab indicator */
  .rfbc-tab-indicator {
    transition: left 220ms cubic-bezier(0.25, 0, 0, 1),
                width 220ms cubic-bezier(0.25, 0, 0, 1);
  }
`;

// ─── Feature card ─────────────────────────────────────────────────────────────

function FeatureCard({
  event,
  size = 'primary',
  animDelay = 0,
}: {
  event: ReleaseFeedEvent;
  size?: 'primary' | 'secondary';
  animDelay?: number;
}) {
  const [open, setOpen] = useState(false);
  const project = releaseFeedProjects[event.projectKey];
  const link = resolveProjectLink(event.projectKey);
  const isPrimary = size === 'primary';
  const headerBg = CATEGORY_HEADER_BG[event.category] ?? 'bg-accent-primary/50';

  return (
    <article
      className={cn(
        'rfbc-card rfbc-card-in rounded-lg border border-border bg-background overflow-hidden flex flex-col h-full',
        open ? 'ring-1 ring-accent-primary/25' : ''
      )}
      style={{
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        animationDelay: `${animDelay}ms`,
      }}
    >
      <div className={cn('rfbc-bar h-1 w-full shrink-0', headerBg)} aria-hidden />

      <div className={cn('flex flex-col flex-1', isPrimary ? 'p-6' : 'p-4')}>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span
            className={cn(
              'font-mono font-bold text-accent-primary',
              isPrimary ? 'text-sm' : 'text-xs'
            )}
          >
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

        <h3
          className={cn(
            'font-semibold text-text-primary leading-snug mb-2',
            isPrimary ? 'text-xl' : 'text-base'
          )}
          style={{ fontFamily: isPrimary ? 'Georgia, "Times New Roman", serif' : undefined }}
        >
          {event.title}
        </h3>

        <p
          className={cn(
            'text-text-secondary leading-relaxed flex-1',
            isPrimary ? 'text-sm' : 'text-xs'
          )}
        >
          {event.summary}
        </p>

        <div className="mt-4 flex items-center gap-4 flex-wrap">
          {link &&
            (link.internal ? (
              <Link
                href={link.href}
                className="inline-flex items-center gap-1 text-xs font-medium text-accent-primary hover:text-accent-primary/80 transition-colors group"
              >
                View case study{' '}
                <ArrowRight
                  size={12}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-accent-primary hover:text-accent-primary/80 transition-colors"
              >
                Open <ExternalLink size={12} aria-hidden />
              </a>
            ))}
          {event.highlights && event.highlights.length > 0 && (
            <button
              className="text-xs text-text-muted hover:text-text-secondary transition-colors font-mono"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
            >
              {open ? 'Collapse ▴' : 'Details ▾'}
            </button>
          )}
        </div>

        {open && event.highlights && event.highlights.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-xs text-text-primary list-disc pl-4 border-t border-border pt-3">
            {event.highlights.map((h, i) => (
              <li key={i} className="leading-relaxed">
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

// ─── Briefs chip with rich tooltip ────────────────────────────────────────────

function BriefsChip({
  event,
  onPinnedChange,
}: {
  event: ReleaseFeedEvent;
  onPinnedChange?: (pinned: boolean) => void;
}) {
  const [visible, setVisible] = useState(false);
  const [pinned, setPinned] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const project = releaseFeedProjects[event.projectKey];
  const link = resolveProjectLink(event.projectKey);
  const accentHex = CATEGORY_ACCENT_HEX[event.category] ?? '#1E3A5F';

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const scheduleHide = useCallback(() => {
    if (pinned) return;
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => setVisible(false), 200);
  }, [pinned, clearHideTimer]);

  // Click-outside dismissal when pinned
  useEffect(() => {
    if (!pinned) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setPinned(false);
        setVisible(false);
        onPinnedChange?.(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [pinned, onPinnedChange]);

  useEffect(
    () => () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    },
    []
  );

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !pinned;
    setPinned(next);
    setVisible(next);
    onPinnedChange?.(next);
  };

  const isOpen = visible || pinned;

  return (
    <div
      ref={containerRef}
      className="relative shrink-0"
      onMouseEnter={() => {
        clearHideTimer();
        setVisible(true);
      }}
      onMouseLeave={scheduleHide}
    >
      <button
        className={cn(
          'rfbc-chip inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-mono whitespace-nowrap',
          isOpen
            ? 'border-accent-primary/40 bg-accent-primary/[0.06] text-text-primary shadow-sm'
            : 'border-border bg-background text-text-secondary hover:border-accent-primary/30 hover:bg-accent-primary/[0.03] hover:text-text-primary'
        )}
        onClick={handleButtonClick}
        aria-expanded={isOpen}
        aria-label={`${project.displayName} ${event.version}: ${event.title}`}
      >
        <span className="font-semibold text-accent-primary">{project.monogram}</span>
        <span className="opacity-40">·</span>
        <span>{event.version}</span>
        <span className="opacity-40 mx-0.5">—</span>
        <span className="max-w-[160px] truncate">{event.title}</span>
        {pinned && (
          <span
            className="ml-1 -mr-0.5 text-text-muted opacity-60 hover:opacity-100 transition-opacity leading-none"
            aria-hidden
            onClick={(e) => {
              e.stopPropagation();
              setPinned(false);
              setVisible(false);
              onPinnedChange?.(false);
            }}
          >
            ×
          </span>
        )}
      </button>

      {/* Tooltip — drop-shadow applied to container so arrow inherits it */}
      {isOpen && (
        <div
          className="absolute bottom-full left-0 mb-3 z-30"
          role="tooltip"
          style={{
            filter:
              'drop-shadow(0 8px 20px rgba(0,0,0,0.12)) drop-shadow(0 2px 4px rgba(0,0,0,0.07))',
          }}
          onMouseEnter={clearHideTimer}
          onMouseLeave={scheduleHide}
        >
          <div className="rfbc-tooltip-card w-[288px] rounded-lg border border-border bg-background overflow-hidden">
            {/* Category accent bar */}
            <div
              className="h-[3px] w-full shrink-0"
              style={{ backgroundColor: accentHex }}
              aria-hidden
            />

            <div className="p-4">
              {/* Project + version row */}
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="font-mono font-bold text-sm text-accent-primary shrink-0">
                    {project.monogram}
                  </span>
                  <span className="font-mono text-[11px] text-text-muted truncate">
                    {project.displayName}
                  </span>
                  <span className="text-text-muted font-mono text-[11px] shrink-0">·</span>
                  <span className="font-mono text-[11px] text-text-muted shrink-0">
                    {event.version}
                  </span>
                </div>
                <CategoryPill category={event.category} />
              </div>

              {/* Date */}
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2.5">
                {event.completedDate}
              </p>

              {/* Title */}
              <p className="text-[13px] font-semibold text-text-primary leading-snug mb-2">
                {event.title}
              </p>

              {/* Summary */}
              <p className="text-xs text-text-secondary leading-relaxed">{event.summary}</p>

              {/* Highlights */}
              {event.highlights && event.highlights.length > 0 && (
                <ul className="mt-3 space-y-1 border-t border-border pt-3">
                  {event.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 text-[11px] text-text-primary leading-relaxed"
                    >
                      <span className="text-accent-primary shrink-0 mt-[2px]">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-1">
                  {event.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border bg-[#F3EFE8] px-1.5 py-0.5 text-[10px] font-mono text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Action link */}
              {link && (
                <div className="mt-3 pt-3 border-t border-border">
                  {link.internal ? (
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent-primary hover:text-accent-primary/75 transition-colors group"
                    >
                      View case study
                      <ArrowRight
                        size={11}
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent-primary hover:text-accent-primary/75 transition-colors"
                    >
                      Open project
                      <ExternalLink size={11} aria-hidden />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Arrow — inherits drop-shadow from container */}
          <div
            className="absolute -bottom-[5px] left-5 w-[10px] h-[10px] rotate-45 bg-background border-r border-b border-border"
            aria-hidden
          />
        </div>
      )}
    </div>
  );
}

// ─── Main view ────────────────────────────────────────────────────────────────

type PeriodIdx = 0 | 1 | 2;

export function ReleaseFeedBroadcastView({ weeks }: { weeks: ReleaseFeedWeekGroup[] }) {
  const [periodIdx, setPeriodIdx] = useState<PeriodIdx>(0);
  const [tickerPaused, setTickerPaused] = useState(false);

  // Sliding tab indicator
  const tabBarRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  const periods = useMemo((): Array<{ label: string; weeks: ReleaseFeedWeekGroup[] }> => {
    const ps = [];
    if (weeks[0]) ps.push({ label: weeks[0].weekLabel, weeks: [weeks[0]] });
    if (weeks[1]) ps.push({ label: weeks[1].weekLabel, weeks: [weeks[1]] });
    if (weeks.length > 2) ps.push({ label: 'All releases', weeks });
    else if (weeks.length > 0 && ps.length < 3) ps.push({ label: 'All releases', weeks });
    return ps;
  }, [weeks]);

  const safeIdx = Math.min(periodIdx, (periods.length - 1) as PeriodIdx);

  // Measure active tab for sliding indicator
  useIsomorphicLayoutEffect(() => {
    const btn = tabButtonRefs.current[safeIdx];
    const bar = tabBarRef.current;
    if (!btn || !bar) return;
    const barRect = bar.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicator({ left: btnRect.left - barRect.left, width: btnRect.width });
  }, [safeIdx, periods.length]);

  if (weeks.length === 0 || periods.length === 0) return null;

  const activePeriod = periods[safeIdx];
  const allEvents = activePeriod.weeks.flatMap((w) => w.events);
  const sorted = sortByWeight(allEvents);

  const featureEvents = sorted.slice(0, 3);
  const briefEvents = sorted.slice(3);
  const [primary, ...secondaries] = featureEvents;

  return (
    <>
      <style suppressHydrationWarning>{BROADCAST_STYLES}</style>

      <div>
        {/* Period tabs with sliding indicator */}
        <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
          <span className="text-xs font-mono text-text-muted uppercase tracking-widest mr-1 shrink-0">
            Period
          </span>

          <div ref={tabBarRef} className="relative flex items-center gap-1">
            {/* Sliding background pill */}
            {indicator && (
              <div
                className="rfbc-tab-indicator absolute top-0 h-full rounded-md bg-accent-primary pointer-events-none"
                style={{ left: indicator.left, width: indicator.width }}
                aria-hidden
              />
            )}

            {periods.map((period, idx) => (
              <button
                key={idx}
                ref={(el) => {
                  tabButtonRefs.current[idx] = el;
                }}
                onClick={() => setPeriodIdx(idx as PeriodIdx)}
                className={cn(
                  'relative z-10 rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200',
                  safeIdx === idx
                    ? 'text-white'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-raised'
                )}
              >
                {period.label}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-mono text-text-muted">
              {allEvents.length} release{allEvents.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Feature zone — re-keyed on period change to retrigger card animations */}
        <div key={safeIdx}>
          {featureEvents.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-8 text-center">
              <p className="text-sm text-text-muted font-mono">No releases in this period.</p>
            </div>
          ) : (
            <div
              className={cn(
                'grid gap-4',
                featureEvents.length === 1
                  ? 'grid-cols-1'
                  : featureEvents.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-3'
              )}
            >
              {primary && (
                <div className={featureEvents.length === 3 ? 'sm:col-span-2' : ''}>
                  <FeatureCard
                    event={primary}
                    size={featureEvents.length === 3 ? 'primary' : 'secondary'}
                    animDelay={0}
                  />
                </div>
              )}
              {secondaries.map((event, i) => (
                <div key={event.id}>
                  <FeatureCard event={event} size="secondary" animDelay={(i + 1) * 70} />
                </div>
              ))}
            </div>
          )}

          {/* Briefs ticker */}
          {briefEvents.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rfbc-briefs-line h-px flex-1 bg-border" aria-hidden />
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest shrink-0">
                  Latest briefs
                </span>
                <div className="rfbc-briefs-line h-px flex-1 bg-border" aria-hidden />
              </div>

              <div
                className="rfbc-ticker overflow-hidden"
                aria-label="Recent patches and minor releases"
                data-paused={tickerPaused ? 'true' : 'false'}
              >
                <div className="rfbc-ticker-inner flex gap-3 w-max">
                  {[...briefEvents, ...briefEvents].map((event, i) => (
                    <BriefsChip
                      key={`${event.id}-${i}`}
                      event={event}
                      onPinnedChange={(p) => setTickerPaused(p)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

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
