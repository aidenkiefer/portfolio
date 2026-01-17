'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { ChipMark } from '@/components/common/ChipMark';
import { searchContent, SearchResult } from '@/lib/search';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { BadgeRow } from '@/components/common/BadgeRow';
import { SearchableBadge } from '@/components/common/SearchableBadge';
import { Search as SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryParam = searchParams.get('q') || '';
  const tagParam = searchParams.get('tag') || '';
  const typeParam = searchParams.get('type') as 'project' | 'experience' | null;

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedType, setSelectedType] = useState<'project' | 'experience' | 'all'>(typeParam || 'all');

  // Update state when URL params change
  useEffect(() => {
    setSearchQuery(queryParam);
    setSelectedType(typeParam || 'all');
  }, [queryParam, typeParam]);

  // Load search results from API
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentQuery = searchQuery.trim();
    const currentTag = tagParam.trim();
    
    if (!currentQuery && !currentTag) {
      setResults([]);
      return;
    }

    async function performSearch() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (currentQuery) params.set('q', currentQuery);
        if (currentTag) params.set('tag', currentTag);
        if (selectedType !== 'all') params.set('type', selectedType);

        const response = await fetch(`/api/search?${params.toString()}`);
        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }

    performSearch();
  }, [searchQuery, tagParam, selectedType]);

  const projectResults = results.filter(r => r.type === 'project') as SearchResult[];
  const experienceResults = results.filter(r => r.type === 'experience') as SearchResult[];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    if (tagParam) params.set('tag', tagParam);
    if (selectedType !== 'all') params.set('type', selectedType);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <Container className="py-16">
      <div className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          <h1 className="text-4xl font-semibold text-text-primary tracking-tight">Search</h1>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl mb-8">
          Search through projects and experience by keyword or technology. Click on any tag to filter by that technology.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, technology, or skill..."
                className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-background text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary transition-colors duration-200"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-md border border-accent-primary bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-colors duration-200 ease-out"
            >
              Search
            </button>
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedType === 'all'
                  ? 'bg-accent-primary text-white'
                  : 'bg-background border border-border text-text-secondary hover:border-accent-primary'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('project')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedType === 'project'
                  ? 'bg-accent-primary text-white'
                  : 'bg-background border border-border text-text-secondary hover:border-accent-primary'
              }`}
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('experience')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedType === 'experience'
                  ? 'bg-accent-primary text-white'
                  : 'bg-background border border-border text-text-secondary hover:border-accent-primary'
              }`}
            >
              Experience
            </button>
          </div>
        </form>

        {/* Active Filters */}
        {(tagParam || queryParam) && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-sm text-text-secondary">Active filters:</span>
            {tagParam && (
              <SearchableBadge tag={tagParam}>
                {tagParam}
              </SearchableBadge>
            )}
            {queryParam && (
              <span className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-text-secondary">
                "{queryParam}"
              </span>
            )}
            <Link
              href="/search"
              className="text-xs text-accent-primary hover:text-accent-primary/80 transition-colors"
            >
              Clear all
            </Link>
          </div>
        )}
      </div>

      <div className="mb-8 h-1 bg-accent-secondary" />

      {/* Results */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-text-secondary">Searching...</p>
        </div>
      ) : results.length === 0 && (searchQuery || tagParam) ? (
        <div className="text-center py-12">
          <p className="text-text-secondary mb-4">No results found.</p>
          <p className="text-sm text-text-secondary">
            Try different keywords or{' '}
            <Link href="/search" className="text-accent-primary hover:underline">
              clear your search
            </Link>
            .
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-secondary mb-4">Enter a search query or click on a tag to get started.</p>
        </div>
      ) : (
        <div className="space-y-16">
          {/* Project Results */}
          {projectResults.length > 0 && (
            <section>
              <div className="mb-8 flex items-center gap-3">
                <ChipMark className="h-10 w-10 text-text-secondary flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-text-primary tracking-tight">
                  Projects ({projectResults.length})
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {projectResults.map((result) => (
                  <ProjectCard key={(result.item as any).slug} project={result.item as any} />
                ))}
              </div>
            </section>
          )}

          {/* Experience Results */}
          {experienceResults.length > 0 && (
            <section>
              <div className="mb-8 flex items-center gap-3">
                <ChipMark className="h-10 w-10 text-text-secondary flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-text-primary tracking-tight">
                  Experience ({experienceResults.length})
                </h2>
              </div>
              <div className="space-y-12">
                {experienceResults.map((result, idx) => {
                  const exp = result.item as any;
                  return (
                    <div
                      key={idx}
                      className="rounded-md border border-border bg-background p-8"
                      style={{
                        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-text-primary mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-text-primary font-medium mb-1">{exp.company}</p>
                        <p className="text-sm text-text-secondary">
                          {exp.location} • {exp.startDate} - {exp.endDate || 'Present'}
                        </p>
                      </div>
                      <ul className="mb-8 list-disc space-y-3 pl-5 text-text-primary leading-relaxed">
                        {exp.bullets.map((bullet: string, bulletIdx: number) => (
                          <li key={bulletIdx}>{bullet}</li>
                        ))}
                      </ul>
                      <div className="pt-6 border-t border-border">
                        <h4 className="mb-4 text-sm font-medium text-text-primary uppercase tracking-wide">
                          Technologies
                        </h4>
                        <BadgeRow>
                          {exp.techStack.map((tech: string) => (
                            <SearchableBadge key={tech} tag={tech}>
                              {tech}
                            </SearchableBadge>
                          ))}
                        </BadgeRow>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}
    </Container>
  );
}
