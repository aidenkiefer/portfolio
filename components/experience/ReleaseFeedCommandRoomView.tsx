'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ReleaseFeedWeekGroup } from '@/lib/release-feed-utils';
import { releaseFeedProjects, type ReleaseFeedEvent, type ReleaseCategory } from '@/data/release-feed';
import { categoryLabel } from './release-feed-shared';

// ─── Card sub-components ────────────────────────────────────────────────────

function MajorCard({ event }: { event: ReleaseFeedEvent }) {
  const [open, setOpen] = useState(false);
  const project = releaseFeedProjects[event.projectKey];
  return (
    <div
      style={{
        background: '#1E2124',
        borderRadius: '7px',
        borderLeft: '3px solid #F4A629',
        marginBottom: '10px',
        overflow: 'hidden',
      }}
    >
      <button
        style={{ width: '100%', textAlign: 'left', padding: '13px 15px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'block' }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', fontFamily: 'monospace', background: '#F4A629', color: '#16181A', borderRadius: '3px', padding: '1px 6px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Major
              </span>
              <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#6B7280' }}>
                {project.monogram} · {event.version} · {event.completedDate}
              </span>
            </div>
            <p style={{ fontSize: '13px', fontWeight: '600', color: '#F3F4F6', lineHeight: 1.4, margin: '0 0 4px' }}>
              {event.title}
            </p>
            <p style={{ fontSize: '11px', color: '#9CA3AF', lineHeight: 1.5, margin: 0 }}>
              {event.summary}
            </p>
          </div>
          <span
            aria-hidden
            style={{ color: '#4B5563', flexShrink: 0, marginTop: '2px', fontSize: '12px', transition: 'transform 200ms', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', display: 'block' }}
          >
            ▾
          </span>
        </div>
      </button>
      {open && (
        <div style={{ padding: '0 15px 13px', borderTop: '1px solid #2A2D30', marginTop: '0' }}>
          {event.highlights && event.highlights.length > 0 && (
            <ul style={{ marginTop: '10px', paddingLeft: '16px', listStyle: 'disc', margin: '10px 0 0' }}>
              {event.highlights.map((h, i) => (
                <li key={i} style={{ fontSize: '11px', color: '#D1D5DB', marginBottom: '3px', lineHeight: 1.5 }}>
                  {h}
                </li>
              ))}
            </ul>
          )}
          {event.tags && event.tags.length > 0 && (
            <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {event.tags.map((t) => (
                <span key={t} style={{ fontSize: '10px', fontFamily: 'monospace', background: '#2A2D30', color: '#9CA3AF', borderRadius: '3px', padding: '2px 7px' }}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MinorCard({ event }: { event: ReleaseFeedEvent }) {
  const [open, setOpen] = useState(false);
  const project = releaseFeedProjects[event.projectKey];
  const accentColor = event.category === 'in-progress' ? '#FB923C' : '#93C5FD';
  return (
    <div style={{ background: '#1A1D20', borderRadius: '6px', border: '1px solid #2A2D30', marginBottom: '8px', overflow: 'hidden' }}>
      <button
        style={{ width: '100%', textAlign: 'left', padding: '10px 13px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'block' }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '4px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '9px', fontFamily: 'monospace', color: accentColor, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '600' }}>
            {categoryLabel[event.category]}
          </span>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#4B5563' }}>
            {project.monogram} · {event.version}
          </span>
        </div>
        <p style={{ fontSize: '12px', fontWeight: '500', color: '#E5E7EB', lineHeight: 1.4, margin: 0 }}>
          {event.title}
        </p>
      </button>
      {open && (
        <div style={{ padding: '0 13px 10px', borderTop: '1px solid #222629' }}>
          <p style={{ marginTop: '8px', fontSize: '11px', color: '#9CA3AF', lineHeight: 1.5, margin: '8px 0 0' }}>
            {event.summary}
          </p>
          {event.highlights && event.highlights.length > 0 && (
            <ul style={{ marginTop: '7px', paddingLeft: '15px', listStyle: 'disc' }}>
              {event.highlights.map((h, i) => (
                <li key={i} style={{ fontSize: '11px', color: '#6B7280', marginBottom: '2px', lineHeight: 1.4 }}>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function CompactCard({ event }: { event: ReleaseFeedEvent }) {
  const project = releaseFeedProjects[event.projectKey];
  return (
    <div style={{ background: '#18191C', borderRadius: '5px', border: '1px solid #222629', padding: '8px 10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '9px', fontFamily: 'monospace', color: '#4B5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {categoryLabel[event.category]}
        </span>
        <span style={{ fontSize: '9px', color: '#374151' }}>·</span>
        <span style={{ fontSize: '9px', fontFamily: 'monospace', color: '#4B5563' }}>{project.monogram} {event.version}</span>
      </div>
      <p style={{ fontSize: '11px', color: '#9CA3AF', lineHeight: 1.4, margin: 0 }}>{event.title}</p>
    </div>
  );
}

// ─── Main view ──────────────────────────────────────────────────────────────

export function ReleaseFeedCommandRoomView({ weeks }: { weeks: ReleaseFeedWeekGroup[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [stageKey, setStageKey] = useState(0);

  if (weeks.length === 0) return null;

  const activeWeek = weeks[activeIdx];

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= weeks.length) return;
    setActiveIdx(idx);
    setStageKey((k) => k + 1);
  };

  const majorEvents = activeWeek.events.filter((e) => e.category === 'major');
  const minorEvents = activeWeek.events.filter((e) =>
    ((['minor', 'in-progress'] as ReleaseCategory[]).includes(e.category))
  );
  const compactEvents = activeWeek.events.filter((e) =>
    ((['patch', 'docs', 'infra', 'research'] as ReleaseCategory[]).includes(e.category))
  );

  return (
    <>
      <style>{`
        @keyframes rfcr-slide-in {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .rfcr-stage { animation: rfcr-slide-in 220ms ease; }
        .rfcr-rail-btn { transition: background 120ms; }
        .rfcr-rail-btn:hover { background: rgba(255,255,255,0.035) !important; }
        .rfcr-nav-btn:not(:disabled):hover { color: #D1D5DB !important; }
      `}</style>

      <div style={{ background: '#16181A', borderRadius: '10px', border: '1px solid #242729', overflow: 'hidden' }}>

        {/* Header bar */}
        <div style={{ borderBottom: '1px solid #242729', padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F4A629', display: 'inline-block', flexShrink: 0 }} aria-hidden />
          <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#4B5563', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Release feed · Command Room
          </span>
        </div>

        <div style={{ display: 'flex', minHeight: '400px' }}>

          {/* Week rail */}
          <div
            role="tablist"
            aria-label="Select week"
            style={{ width: '148px', borderRight: '1px solid #242729', flexShrink: 0, overflowY: 'auto', paddingTop: '6px', paddingBottom: '6px' }}
          >
            <p style={{ fontSize: '9px', fontFamily: 'monospace', color: '#374151', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 14px 8px' }}>
              Weeks
            </p>
            {weeks.map((week, idx) => {
              const active = idx === activeIdx;
              return (
                <button
                  key={week.weekStart}
                  role="tab"
                  aria-selected={active}
                  className="rfcr-rail-btn"
                  onClick={() => goTo(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    textAlign: 'left',
                    padding: '7px 14px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    borderLeft: `2px solid ${active ? '#F4A629' : 'transparent'}`,
                  }}
                >
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: active ? '#F4A629' : '#6B7280', fontWeight: active ? '600' : '400', lineHeight: 1.3, marginRight: '6px' }}>
                    {week.weekLabel}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0, background: active ? '#F4A629' : '#242729', fontSize: '9px', fontFamily: 'monospace', color: active ? '#16181A' : '#4B5563', fontWeight: '700' }}>
                    {week.events.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stage */}
          <div
            key={stageKey}
            className="rfcr-stage"
            role="tabpanel"
            style={{ flex: 1, padding: '18px 20px', overflowY: 'auto', minWidth: 0 }}
          >
            <p style={{ fontSize: '10px', fontFamily: 'monospace', color: '#374151', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              {activeWeek.weekLabel} · {activeWeek.events.length} release{activeWeek.events.length !== 1 ? 's' : ''}
            </p>

            {majorEvents.map((e) => <MajorCard key={e.id} event={e} />)}
            {minorEvents.map((e) => <MinorCard key={e.id} event={e} />)}

            {compactEvents.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: compactEvents.length === 1 ? '1fr' : 'repeat(2, 1fr)',
                  gap: '7px',
                  marginTop: majorEvents.length > 0 || minorEvents.length > 0 ? '8px' : '0',
                }}
              >
                {compactEvents.map((e) => <CompactCard key={e.id} event={e} />)}
              </div>
            )}
          </div>
        </div>

        {/* Footer nav */}
        <div style={{ borderTop: '1px solid #242729', padding: '9px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            className="rfcr-nav-btn"
            onClick={() => goTo(activeIdx + 1)}
            disabled={activeIdx >= weeks.length - 1}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontFamily: 'monospace', color: activeIdx >= weeks.length - 1 ? '#2A2D30' : '#6B7280', background: 'none', border: 'none', cursor: activeIdx >= weeks.length - 1 ? 'default' : 'pointer', padding: '4px 0' }}
          >
            <ChevronLeft size={12} aria-hidden /> Older
          </button>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#374151' }}>
            {activeIdx + 1} / {weeks.length}
          </span>
          <button
            className="rfcr-nav-btn"
            onClick={() => goTo(activeIdx - 1)}
            disabled={activeIdx <= 0}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontFamily: 'monospace', color: activeIdx <= 0 ? '#2A2D30' : '#6B7280', background: 'none', border: 'none', cursor: activeIdx <= 0 ? 'default' : 'pointer', padding: '4px 0' }}
          >
            Newer <ChevronRight size={12} aria-hidden />
          </button>
        </div>

      </div>
    </>
  );
}
