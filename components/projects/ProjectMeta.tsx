import { Project } from '@/types/content';
import { BadgeRow, Badge } from '../common/BadgeRow';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <div className="mb-8 space-y-4 border-b border-gray-200 pb-8">
      <div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          {project.title}
        </h1>
        <p className="text-lg text-gray-600">{project.summary}</p>
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <div>
          <h3 className="mb-2 font-semibold text-gray-900">Highlights</h3>
          <ul className="list-disc space-y-1 pl-5 text-gray-600">
            {project.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        {project.repoUrl && (
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <Github className="h-4 w-4" />
            View Code
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        )}
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-gray-900">Tech Stack</h3>
        <BadgeRow>
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </BadgeRow>
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-gray-900">Tags</h3>
        <BadgeRow>
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </BadgeRow>
      </div>
    </div>
  );
}
