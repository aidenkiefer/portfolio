import type { ReleaseFeedEvent } from '@/data/release-feed';

export interface ReleaseFeedWeekGroup {
  /** Display label: "This week", "Last week", or "Mar 18–24, 2026" */
  weekLabel: string;
  /** ISO Monday date YYYY-MM-DD for stable sort */
  weekStart: string;
  events: ReleaseFeedEvent[];
}

function parseISODate(s: string): Date {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** Monday-based week start (local timezone) */
function startOfWeekMonday(d: Date): Date {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  const day = c.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  c.setDate(c.getDate() + diff);
  return c;
}

function formatWeekRange(start: Date): string {
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  const y = start.getFullYear();
  const a = start.toLocaleDateString('en-US', opts);
  const b = end.toLocaleDateString('en-US', { ...opts, year: start.getFullYear() !== end.getFullYear() ? 'numeric' : undefined });
  return `${a}–${b}, ${y}`;
}

function mondayISO(d: Date): string {
  const s = startOfWeekMonday(d);
  const y = s.getFullYear();
  const m = String(s.getMonth() + 1).padStart(2, '0');
  const day = String(s.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Group events by calendar week (Monday start). Weeks sorted newest first.
 */
export function groupReleaseFeedByWeek(events: ReleaseFeedEvent[]): ReleaseFeedWeekGroup[] {
  const now = new Date();
  now.setHours(12, 0, 0, 0);
  const thisWeekStart = startOfWeekMonday(now);
  const lastWeekStart = new Date(thisWeekStart);
  lastWeekStart.setDate(lastWeekStart.getDate() - 7);

  const map = new Map<string, ReleaseFeedEvent[]>();

  for (const e of events) {
    const d = parseISODate(e.completedDate);
    const ws = startOfWeekMonday(d);
    const key = mondayISO(ws);
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  }

  const keys = [...map.keys()].sort((a, b) => b.localeCompare(a));

  return keys.map((weekStart) => {
    const start = parseISODate(weekStart);
    const evs = map.get(weekStart)!;
    evs.sort((a, b) => b.completedDate.localeCompare(a.completedDate));

    let weekLabel: string;
    if (weekStart === mondayISO(thisWeekStart)) {
      weekLabel = 'This week';
    } else if (weekStart === mondayISO(lastWeekStart)) {
      weekLabel = 'Last week';
    } else {
      weekLabel = formatWeekRange(start);
    }

    return { weekLabel, weekStart, events: evs };
  });
}
