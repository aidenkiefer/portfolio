import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/content';
import { BadgeRow } from '../common/BadgeRow';
import { SearchableBadge } from '../common/SearchableBadge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-md border border-border bg-background p-6 transition-all duration-200 ease-out hover:border-accent-primary"
      style={{
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {project.logo && (
            <div className="flex-shrink-0 mt-0.5" style={{ width: '48px', height: '48px' }}>
              <Image
                src={project.logo}
                alt=""
                width={48}
                height={48}
                className="object-contain"
                style={{ width: '48px', height: '48px' }}
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-all duration-200 ease-out group-hover:opacity-90 flex-1">
            {project.title}
          </h3>
        </div>
        {project.featured && (
          <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-text-secondary flex-shrink-0">
            Featured
          </span>
        )}
      </div>
      <p className="mb-4 text-text-secondary leading-relaxed">{project.summary}</p>
      {project.stack && project.stack.length > 0 && (
        <div className="mb-2">
          <p className="text-[10px] text-text-secondary uppercase tracking-wide mb-1.5">Stack</p>
          <BadgeRow>
            {project.stack.slice(0, 5).map((tech) => (
              <SearchableBadge key={tech} tag={tech}>
                {tech}
              </SearchableBadge>
            ))}
          </BadgeRow>
        </div>
      )}
      {project.tags && project.tags.length > 0 && (
        <div>
          <p className="text-[10px] text-text-secondary uppercase tracking-wide mb-1.5">Topics</p>
          <BadgeRow>
            {project.tags.slice(0, 7).map((tag) => (
              <SearchableBadge key={tag} tag={tag}>
                {tag}
              </SearchableBadge>
            ))}
          </BadgeRow>
        </div>
      )}
    </Link>
  );
}
