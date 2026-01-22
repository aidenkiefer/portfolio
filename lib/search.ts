import { Project } from '@/types/content';
import { Experience } from '@/types/content';
import { Blog } from '@/types/content';

export interface SearchResult {
  type: 'project' | 'experience' | 'blog';
  item: Project | Experience | Blog;
  relevanceScore: number;
  matchedFields: string[];
}

/**
 * Calculate relevance score for a search result
 */
function calculateRelevanceScore(
  item: Project | Experience | Blog,
  query: string,
  tag?: string
): { score: number; matchedFields: string[] } {
  const queryLower = query.toLowerCase();
  const matchedFields: string[] = [];
  let score = 0;

  if (tag) {
    // Exact tag match gets highest score
    const itemTags = 'tags' in item ? (item.tags || []) : [];
    const itemStack = 'stack' in item ? (item.stack || []) : 'techStack' in item ? (item.techStack || []) : [];
    const allTags = [...itemTags, ...itemStack];
    
    if (allTags.some(t => t.toLowerCase() === tag.toLowerCase())) {
      score += 100;
      matchedFields.push('tag');
    }
  }

  if (query) {
    // Title/role match (highest weight)
    const title = 'title' in item ? item.title : 'role' in item ? item.role : '';
    if (title.toLowerCase().includes(queryLower)) {
      score += 50;
      matchedFields.push('title');
    }

    // Excerpt match (for blogs)
    if ('excerpt' in item && item.excerpt) {
      if (item.excerpt.toLowerCase().includes(queryLower)) {
        score += 35;
        matchedFields.push('excerpt');
      }
    }

    // Company name match (for experience)
    if ('company' in item && item.company.toLowerCase().includes(queryLower)) {
      score += 40;
      matchedFields.push('company');
    }

    // Summary/description match
    const summary = 'summary' in item ? item.summary : '';
    if (summary && summary.toLowerCase().includes(queryLower)) {
      score += 30;
      matchedFields.push('summary');
    }

    // Tag/stack match
    const tags = 'tags' in item ? (item.tags || []) : [];
    const stack = 'stack' in item ? (item.stack || []) : 'techStack' in item ? (item.techStack || []) : [];
    const allTech = [...tags, ...stack];
    
    const matchingTech = allTech.filter(tech => 
      tech.toLowerCase().includes(queryLower)
    );
    if (matchingTech.length > 0) {
      score += 20 * matchingTech.length;
      matchedFields.push('tech');
    }

    // Content match (lower weight)
    if ('content' in item && item.content) {
      const contentMatches = (item.content.toLowerCase().match(new RegExp(queryLower, 'g')) || []).length;
      if (contentMatches > 0) {
        score += 10 * Math.min(contentMatches, 5); // Cap at 5 matches
        matchedFields.push('content');
      }
    }

    // Bullets match (for experience)
    if ('bullets' in item) {
      const matchingBullets = item.bullets.filter(bullet =>
        bullet.toLowerCase().includes(queryLower)
      );
      if (matchingBullets.length > 0) {
        score += 15 * matchingBullets.length;
        matchedFields.push('bullets');
      }
    }
  }

  return { score, matchedFields };
}

/**
 * Search through projects, experience, and blogs
 */
export function searchContent(
  projects: Project[],
  experiences: Experience[],
  blogs: Blog[],
  query: string = '',
  tag: string = '',
  type?: 'project' | 'experience' | 'blog'
): SearchResult[] {
  const results: SearchResult[] = [];

  // Normalize query and tag
  const normalizedQuery = query.trim();
  const normalizedTag = tag.trim();

  // If no query and no tag, return empty
  if (!normalizedQuery && !normalizedTag) {
    return [];
  }

  // Search projects
  if (!type || type === 'project') {
    projects.forEach((project) => {
      const { score, matchedFields } = calculateRelevanceScore(
        project,
        normalizedQuery,
        normalizedTag
      );

      if (score > 0) {
        results.push({
          type: 'project',
          item: project,
          relevanceScore: score,
          matchedFields,
        });
      }
    });
  }

  // Search experience
  if (!type || type === 'experience') {
    experiences.forEach((exp) => {
      const { score, matchedFields } = calculateRelevanceScore(
        exp,
        normalizedQuery,
        normalizedTag
      );

      if (score > 0) {
        results.push({
          type: 'experience',
          item: exp,
          relevanceScore: score,
          matchedFields,
        });
      }
    });
  }

  // Search blogs
  if (!type || type === 'blog') {
    blogs.forEach((blog) => {
      const { score, matchedFields } = calculateRelevanceScore(
        blog,
        normalizedQuery,
        normalizedTag
      );

      if (score > 0) {
        results.push({
          type: 'blog',
          item: blog,
          relevanceScore: score,
          matchedFields,
        });
      }
    });
  }

  // Sort by relevance score (descending)
  return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

/**
 * Get all unique tags from projects, experience, and blogs
 */
export function getAllTags(projects: Project[], experiences: Experience[], blogs: Blog[]): string[] {
  const tags = new Set<string>();
  
  projects.forEach((project) => {
    project.tags?.forEach(tag => tags.add(tag));
    project.stack?.forEach(tech => tags.add(tech));
  });

  experiences.forEach((exp) => {
    exp.techStack?.forEach(tech => tags.add(tech));
  });

  blogs.forEach((blog) => {
    blog.tags?.forEach(tag => tags.add(tag));
  });

  return Array.from(tags).sort();
}
