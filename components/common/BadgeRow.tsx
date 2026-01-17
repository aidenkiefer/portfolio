import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeRowProps {
  children: ReactNode;
  className?: string;
}

export function BadgeRow({ children, className }: BadgeRowProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>{children}</div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-background border border-border px-2 py-0.5 text-xs font-medium text-text-secondary">
      {children}
    </span>
  );
}
