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
    <span className="relative rounded-full bg-background border border-border px-2 py-0.5 text-xs font-medium text-text-secondary transition-all duration-200 ease-out hover:border-accent-secondary group/badge">
      {children}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover/badge:opacity-20 blur-md transition-opacity duration-200 ease-out bg-accent-secondary pointer-events-none" />
    </span>
  );
}
