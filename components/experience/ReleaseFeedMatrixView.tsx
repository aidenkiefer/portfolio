'use client';

import { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import type { ReleaseFeedWeekGroup } from '@/lib/release-feed-utils';
import { releaseFeedProjects, type ReleaseFeedEvent, type ReleaseCategory, type ReleaseProjectKey } from '@/data/release-feed';
import { CategoryPill, categoryLabel } from './release-feed-shared';
import { cn } from '@/lib/utils';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const CATEGORY_WEIGHT: Record<ReleaseCategory, number> = {
  major: 6, minor: 4, 'in-progress': 3, research: 2, patch: 1, docs: 1, infra: 1,
};

function dominantCategory(events: ReleaseFeedEvent[]): ReleaseCategory {
  return events.reduce((a, b) =>
    CATEGORY_WEIGHT[b.category] > CATEGORY_WEIGHT[a.category] ? b : a
  ).category;
}

// Cell background color: opacity scales with count, hue with dominant category
const CATEGORY_CELL_COLOR: Record<ReleaseCategory, string> = {
  major: '30, 58, 95',        // navy
  minor: '37, 99, 235',       // blue
  'in-progress': '234, 88, 12', // orange
  patch: '22, 163, 74',       // green
  docs: '161, 98, 7',         // amber
  infra: '79, 70, 229',       // indigo
  research: '13, 148, 136',   // teal
};

function cellStyle(events: ReleaseFeedEvent[], isSelected: boolean, isHovered: boolean): React.CSSProperties {
  if (events.length === 0) {
    return {
      background: isHovered ? '#F0EBE3' : '#F9F6F1',
      border: `1px solid ${isHovered ? '#D4C9BA' : '#E8E0D4'}`,
      cursor: 'default',
    };
  }
  const cat = dominantCategory(events);
  const rgb = CATEGORY_CELL_COLOR[cat];
  const alpha = Math.min(0.12 + events.length * 0.14, 0.72);
  return {
    background: isSelected
      ? `rgba(${rgb}, ${Math.min(alpha + 0.2, 0.9)})`
      : isHovered
      ? `rgba(${rgb}, ${alpha + 0.1})`
      : `rgba(${rgb}, ${alpha})`,
    border: isSelected
      ? `1px solid rgba(${rgb}, 0.6)`
      : `1px solid rgba(${rgb}, 0.2)`,
    cursor: 'pointer',
  };
}

const MAX_WEEKS = 10;

type CellKey = `${ReleaseProjectKey}|${string}`; // projectKey|weekStart

// ─── Detail panel ─────────────────────────────────────────────────────────────

function MatrixDetailPanel({
  events,
  projectKey,
  weekLabel,
  onClose,
}: {
  events: ReleaseFeedEvent[];
  projectKey: ReleaseProjectKey;
  weekLabel: string;
  onClose: () => void;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const project = releaseFeedProjects[projectKey];

  return (
    <>
      <style>{`
        @keyframes rfmx-panel-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rfmx-panel { animation: rfmx-panel-in 200ms ease; }
      `}</style>
      <div className="rfmx-panel mt-3 rounded-lg border border-border bg-background overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}>
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-raised">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-accent-primary">{project.monogram}</span>
            <span className="text-sm font-medium text-text-primary">{project.displayName}</span>
            <span className="text-xs text-text-muted font-mono">·</span>
            <span className="text-xs font-mono text-text-secondary">{weekLabel}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close detail panel"
            className="rounded p-1 text-text-muted hover:text-text-primary hover:bg-surface-raised transition-colors"
          >
            <X size={14} aria-hidden />
          </button>
        </div>
        <ul className="divide-y divide-border">
          {events.map((event) => {
            const open = expandedId === event.id;
            return (
              <li key={event.id}>
                <button
                  className="w-full text-left px-5 py-3 hover:bg-surface-raised transition-colors"
                  onClick={() => setExpandedId(open ? null : event.id)}
                  aria-expanded={open}
                >
                  <div className="flex items-start gap-3">
                    <CategoryPill category={event.category} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-mono text-text-muted">{event.version}</span>
                        <span className="text-xs font-mono text-text-muted opacity-50">·</span>
                        <span className="text-xs font-mono text-text-muted">{event.completedDate}</span>
                      </div>
                      <p className="text-sm font-medium text-text-primary leading-snug">{event.title}</p>
                    </div>
                    <span className="text-text-muted text-xs shrink-0 mt-0.5 transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} aria-hidden>▾</span>
                  </div>
                </button>
                {open && (
                  <div className="px-5 pb-4 pt-0 border-t border-border">
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">{event.summary}</p>
                    {event.highlights && event.highlights.length > 0 && (
                      <ul className="mt-3 space-y-1.5 text-sm text-text-primary list-disc pl-5">
                        {event.highlights.map((h, i) => <li key={i} className="leading-relaxed">{h}</li>)}
                      </ul>
                    )}
                    {event.tags && event.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {event.tags.map((t) => (
                          <span key={t} className="rounded border border-border bg-[#F3EFE8] px-2 py-0.5 text-[10px] font-mono text-text-secondary">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

// ─── Main view ────────────────────────────────────────────────────────────────

export function ReleaseFeedMatrixView({ weeks }: { weeks: ReleaseFeedWeekGroup[] }) {
  const [selectedCell, setSelectedCell] = useState<CellKey | null>(null);
  const [hoveredCell, setHoveredCell] = useState<CellKey | null>(null);

  // Derive ordered project list from events (preserving first-appearance order)
  const projectKeys = useMemo(() => {
    const seen = new Set<ReleaseProjectKey>();
    const ordered: ReleaseProjectKey[] = [];
    for (const week of weeks) {
      for (const e of week.events) {
        if (!seen.has(e.projectKey)) { seen.add(e.projectKey); ordered.push(e.projectKey); }
      }
    }
    return ordered;
  }, [weeks]);

  // Cap display weeks
  const displayWeeks = weeks.slice(0, MAX_WEEKS);

  // Build event lookup: (projectKey, weekStart) → ReleaseFeedEvent[]
  const eventMap = useMemo(() => {
    const map = new Map<CellKey, ReleaseFeedEvent[]>();
    for (const week of displayWeeks) {
      for (const e of week.events) {
        const key: CellKey = `${e.projectKey}|${week.weekStart}`;
        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(e);
      }
    }
    return map;
  }, [displayWeeks]);

  if (projectKeys.length === 0 || displayWeeks.length === 0) return null;

  const parsedSelected = selectedCell ? (selectedCell.split('|') as [ReleaseProjectKey, string]) : null;
  const selectedEvents = selectedCell ? (eventMap.get(selectedCell) ?? []) : [];
  const selectedWeekLabel = parsedSelected ? (displayWeeks.find((w) => w.weekStart === parsedSelected[1])?.weekLabel ?? parsedSelected[1]) : '';

  const CELL_SIZE = 34;
  const LABEL_W = 120;

  return (
    <div>
      {/* Legend */}
      <div className="mb-4 flex items-center gap-5 flex-wrap">
        <span className="text-xs font-mono text-text-muted uppercase tracking-widest">Activity</span>
        <div className="flex items-center gap-2">
          {(['major', 'minor', 'patch', 'docs', 'infra', 'research'] as ReleaseCategory[]).map((cat) => (
            <div key={cat} className="flex items-center gap-1.5">
              <span
                style={{ width: 10, height: 10, borderRadius: 2, display: 'inline-block', background: `rgba(${CATEGORY_CELL_COLOR[cat]}, 0.65)` }}
                aria-hidden
              />
              <span className="text-[10px] font-mono text-text-muted">{categoryLabel[cat]}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 ml-auto">
          <span className="text-[10px] font-mono text-text-muted">Intensity = event count</span>
        </div>
      </div>

      {/* Matrix */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <div style={{ minWidth: LABEL_W + displayWeeks.length * (CELL_SIZE + 4) + 16 }}>

          {/* Column headers */}
          <div className="flex border-b border-border bg-surface-raised px-3 py-2" style={{ paddingLeft: LABEL_W + 12 }}>
            {displayWeeks.map((week) => (
              <div
                key={week.weekStart}
                style={{ width: CELL_SIZE, marginRight: 4, flexShrink: 0 }}
                className="text-center"
              >
                <span className="text-[9px] font-mono text-text-muted leading-tight block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: 44, margin: '0 auto' }}>
                  {week.weekLabel}
                </span>
              </div>
            ))}
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {projectKeys.map((projectKey) => {
              const project = releaseFeedProjects[projectKey];
              return (
                <div key={projectKey} className="flex items-center px-3 py-2 hover:bg-surface-raised/50 transition-colors">
                  {/* Row label */}
                  <div style={{ width: LABEL_W, flexShrink: 0 }} className="flex items-center gap-2 pr-3">
                    <span className="text-xs font-mono font-semibold text-accent-primary shrink-0">{project.monogram}</span>
                    <span className="text-xs text-text-secondary truncate">{project.displayName}</span>
                  </div>

                  {/* Cells */}
                  <div className="flex items-center gap-1">
                    {displayWeeks.map((week) => {
                      const key: CellKey = `${projectKey}|${week.weekStart}`;
                      const cellEvents = eventMap.get(key) ?? [];
                      const isSelected = selectedCell === key;
                      const isHovered = hoveredCell === key;
                      const hasMajor = cellEvents.some((e) => e.category === 'major');
                      const isEmpty = cellEvents.length === 0;

                      return (
                        <button
                          key={key}
                          style={{
                            width: CELL_SIZE,
                            height: CELL_SIZE,
                            borderRadius: 5,
                            flexShrink: 0,
                            position: 'relative',
                            transition: 'all 150ms',
                            transform: isSelected || isHovered ? 'scale(1.08)' : 'scale(1)',
                            ...cellStyle(cellEvents, isSelected, isHovered),
                          }}
                          onClick={() => {
                            if (isEmpty) return;
                            setSelectedCell(isSelected ? null : key);
                          }}
                          onMouseEnter={() => !isEmpty && setHoveredCell(key)}
                          onMouseLeave={() => setHoveredCell(null)}
                          aria-label={
                            isEmpty
                              ? `${project.displayName}, ${week.weekLabel}: no releases`
                              : `${project.displayName}, ${week.weekLabel}: ${cellEvents.length} release${cellEvents.length !== 1 ? 's' : ''}`
                          }
                          aria-pressed={isSelected}
                          disabled={isEmpty}
                        >
                          {/* Event count badge */}
                          {!isEmpty && (
                            <span style={{ fontSize: 9, fontFamily: 'monospace', fontWeight: '700', color: 'inherit', display: 'block', textAlign: 'center', lineHeight: `${CELL_SIZE}px` }}>
                              {cellEvents.length}
                            </span>
                          )}
                          {/* Major pulse ring */}
                          {hasMajor && (
                            <span
                              aria-hidden
                              style={{ position: 'absolute', inset: -3, borderRadius: 7, border: '1.5px solid rgba(30, 58, 95, 0.35)', animation: 'rfmx-pulse 2.4s ease-in-out infinite' }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rfmx-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 0.15; transform: scale(1.12); }
        }
      `}</style>

      {/* Detail panel */}
      {selectedCell && parsedSelected && selectedEvents.length > 0 && (
        <MatrixDetailPanel
          key={selectedCell}
          events={selectedEvents}
          projectKey={parsedSelected[0]}
          weekLabel={selectedWeekLabel}
          onClose={() => setSelectedCell(null)}
        />
      )}

      {displayWeeks.length < weeks.length && (
        <p className="mt-3 text-xs font-mono text-text-muted text-center">
          Showing {displayWeeks.length} of {weeks.length} weeks. Use the project filter above to narrow.
        </p>
      )}
    </div>
  );
}
