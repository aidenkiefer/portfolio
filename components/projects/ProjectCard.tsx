import Link from 'next/link';
import { Project } from '@/types/content';
import { BadgeRow, Badge } from '../common/BadgeRow';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
    >
      <div className="mb-2 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        {project.featured && (
          <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
            Featured
          </span>
        )}
      </div>
      <p className="mb-4 text-gray-600">{project.summary}</p>
      <BadgeRow>
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </BadgeRow>
    </Link>
  );
}
