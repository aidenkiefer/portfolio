import Link from 'next/link';
import {
  releaseFeedProjects,
  type ReleaseFeedEvent,
  type ReleaseProjectKey,
  type ReleaseCategory,
} from '@/data/release-feed';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const categoryLabel: Record<ReleaseCategory, string> = {
  major: 'Major',
  minor: 'Minor',
  patch: 'Patch',
  docs: 'Docs',
  infra: 'Infra',
  research: 'Research',
  'in-progress': 'In progress',
};

export const categoryStyles: Record<ReleaseCategory, string> = {
  major: 'border-accent-secondary/40 bg-accent-secondary/[0.08] text-accent-secondary',
  minor: 'border-accent-primary/35 bg-accent-primary/[0.07] text-accent-primary',
  patch: 'border-border bg-[#F3EFE8] text-text-secondary',
  docs: 'border-border bg-surface-raised text-text-primary',
  infra: 'border-border bg-surface-raised text-text-secondary',
  research: 'border-border bg-surface-raised text-text-secondary',
  'in-progress': 'border-accent-primary/25 bg-accent-primary/[0.05] text-accent-primary',
};

/** Left border accent for register layout (no fill, just rail) */
export const categoryRail: Record<ReleaseCategory, string> = {
  major: 'border-l-accent-secondary',
  minor: 'border-l-accent-primary',
  patch: 'border-l-border-strong',
  docs: 'border-l-text-secondary',
  infra: 'border-l-text-muted',
  research: 'border-l-text-muted',
  'in-progress': 'border-l-accent-primary',
};

export function resolveProjectLink(
  projectKey: ReleaseProjectKey
): { href: string; internal: boolean } | null {
  const p = releaseFeedProjects[projectKey];
  if (p.portfolioSlug) {
    return { href: `/projects/${p.portfolioSlug}`, internal: true };
  }
  if (p.externalUrl) {
    return { href: p.externalUrl, internal: false };
  }
  return null;
}

export function ProjectLinkControl({
  projectKey,
  className,
  onNavigate,
}: {
  projectKey: ReleaseProjectKey;
  className?: string;
  onNavigate?: (e: React.MouseEvent) => void;
}) {
  const link = resolveProjectLink(projectKey);
  if (!link) return null;
  const stop = (e: React.MouseEvent) => {
    onNavigate?.(e);
    e.stopPropagation();
  };
  if (link.internal) {
    return (
      <Link href={link.href} className={cn('inline-flex items-center gap-1', className)} onClick={stop}>
        View case study
        <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
      </Link>
    );
  }
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('inline-flex items-center gap-1', className)}
      onClick={stop}
    >
      Open
      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
    </a>
  );
}

export function ReleaseEventDetails({ event }: { event: ReleaseFeedEvent }) {
  return (
    <>
      {event.highlights && event.highlights.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm text-text-primary list-disc pl-5">
          {event.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      ) : null}
      {event.tags && event.tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.map((t) => (
            <span
              key={t}
              className="rounded border border-border bg-[#F3EFE8] px-2 py-0.5 text-[11px] font-mono text-text-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
      <p className="mt-4 text-[11px] font-mono text-text-muted leading-relaxed opacity-80">
        Source: {event.sourceNote}
      </p>
    </>
  );
}

export function CategoryPill({ category }: { category: ReleaseCategory }) {
  return (
    <span
      className={cn(
        'rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide shrink-0',
        categoryStyles[category]
      )}
    >
      {categoryLabel[category]}
    </span>
  );
}
