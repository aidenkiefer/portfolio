'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface SearchableBadgeProps {
  children: ReactNode;
  tag?: string;
  href?: string;
  className?: string;
}

export function SearchableBadge({ 
  children, 
  tag, 
  href,
  className = '' 
}: SearchableBadgeProps) {
  // If href is provided, use it directly
  if (href) {
    return (
      <Link
        href={href}
        className={`relative rounded-full bg-background border border-border px-2 py-0.5 text-xs font-medium text-text-secondary transition-all duration-200 ease-out hover:border-accent-secondary group/badge ${className}`}
      >
        {children}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover/badge:opacity-20 blur-md transition-opacity duration-200 ease-out bg-accent-secondary pointer-events-none" />
      </Link>
    );
  }

  // If tag is provided, link to search results
  if (tag) {
    const searchUrl = `/search?tag=${encodeURIComponent(tag)}`;
    return (
      <Link
        href={searchUrl}
        className={`relative rounded-full bg-background border border-border px-2 py-0.5 text-xs font-medium text-text-secondary transition-all duration-200 ease-out hover:border-accent-secondary group/badge ${className}`}
      >
        {children}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover/badge:opacity-20 blur-md transition-opacity duration-200 ease-out bg-accent-secondary pointer-events-none" />
      </Link>
    );
  }

  // Default: non-clickable badge
  return (
    <span className={`relative rounded-full bg-background border border-border px-2 py-0.5 text-xs font-medium text-text-secondary transition-all duration-200 ease-out hover:border-accent-secondary group/badge ${className}`}>
      {children}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover/badge:opacity-20 blur-md transition-opacity duration-200 ease-out bg-accent-secondary pointer-events-none" />
    </span>
  );
}
