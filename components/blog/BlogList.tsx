'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BadgeRow } from '@/components/common/BadgeRow';
import { SearchableBadge } from '@/components/common/SearchableBadge';
import { Blog } from '@/types/content';
import { ChevronDown, ChevronRight } from 'lucide-react';

type SortOption = 'newest' | 'oldest' | 'alphabetical';

interface BlogListProps {
  blogs: Blog[];
}

export function BlogList({ blogs }: BlogListProps) {
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [expandedTags, setExpandedTags] = useState<Set<string>>(new Set());

  const sortedBlogs = useMemo(() => {
    // Sort function based on selected option
    const sortFunction = (a: Blog, b: Blog) => {
      switch (sortBy) {
        case 'newest':
          // Sort by date (newest first)
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          // Sort by date (oldest first)
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'alphabetical':
          // Sort alphabetically by title
          return a.title.localeCompare(b.title);
        default:
          // Default to newest first
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    };

    // If sorting by 'newest' (default), show pinned first, then featured, then rest
    if (sortBy === 'newest') {
      const pinned = blogs.filter((blog) => blog.pinned);
      const featured = blogs.filter((blog) => !blog.pinned && blog.featured);
      const rest = blogs.filter((blog) => !blog.pinned && !blog.featured);
      const sortedPinned = [...pinned].sort(sortFunction);
      const sortedFeatured = [...featured].sort(sortFunction);
      const sortedRest = [...rest].sort(sortFunction);
      return [...sortedPinned, ...sortedFeatured, ...sortedRest];
    }

    // For other sort options, sort all blogs together (featured doesn't get special treatment)
    return [...blogs].sort(sortFunction);
  }, [blogs, sortBy]);

  const sortLabels: Record<SortOption, string> = {
    newest: 'Newest First',
    oldest: 'Oldest First',
    alphabetical: 'Alphabetical',
  };

  if (sortedBlogs.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-secondary">No blog posts yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <>
      {blogs.length > 1 && (
        <div className="mb-8 flex justify-end">
          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary border border-border rounded-md bg-background hover:border-accent-primary hover:text-accent-primary transition-all duration-200 ease-out"
            >
              <span>Sort: {sortLabels[sortBy]}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showSortMenu ? 'rotate-180' : ''}`} />
            </button>
            {showSortMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowSortMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-20">
                  <div className="py-1">
                    {(['newest', 'oldest', 'alphabetical'] as SortOption[]).map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setShowSortMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ease-out ${
                          sortBy === option
                            ? 'bg-accent-primary/10 text-accent-primary font-medium'
                            : 'text-text-secondary hover:bg-background/50 hover:text-text-primary'
                        }`}
                      >
                        {sortLabels[option]}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {sortedBlogs.map((blog) => {
          // Sort tags alphabetically (as a proxy for relevance/importance)
          const sortedTags = blog.tags ? [...blog.tags].sort((a, b) => a.localeCompare(b)) : [];
          const isExpanded = expandedTags.has(blog.slug);
          const MAX_TAGS = 10;
          const visibleTags = isExpanded ? sortedTags : sortedTags.slice(0, MAX_TAGS);
          const hasMoreTags = sortedTags.length > MAX_TAGS;

          return (
            <article
              key={blog.slug}
              className="group block rounded-md border border-border bg-background p-8 transition-all duration-200 ease-out hover:border-accent-primary flex flex-col"
              style={{
                boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              <Link href={`/blog/${blog.slug}`} className="flex-grow">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <time className="text-sm text-text-secondary font-mono">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {(blog.pinned || blog.featured) && (
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-text-secondary flex-shrink-0">
                      {blog.pinned ? 'Pinned' : 'Featured'}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-semibold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-200 ease-out">
                  {blog.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
              </Link>
              {sortedTags.length > 0 && (
                <div className="pt-4 border-t border-border mt-auto">
                  <BadgeRow>
                    {visibleTags.map((tag) => (
                      <SearchableBadge key={tag} tag={tag}>
                        {tag}
                      </SearchableBadge>
                    ))}
                  </BadgeRow>
                  {hasMoreTags && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setExpandedTags((prev) => {
                          const next = new Set(prev);
                          if (isExpanded) {
                            next.delete(blog.slug);
                          } else {
                            next.add(blog.slug);
                          }
                          return next;
                        });
                      }}
                      className="mt-3 flex items-center gap-1 text-xs text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out"
                    >
                      {isExpanded ? (
                        <>
                          Show less
                          <ChevronRight className="h-3 w-3 -rotate-90" />
                        </>
                      ) : (
                        <>
                          See {sortedTags.length - MAX_TAGS} more
                          <ChevronRight className="h-3 w-3 rotate-90" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
