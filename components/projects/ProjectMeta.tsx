import { Project } from '@/types/content';
import { BadgeRow, Badge } from '../common/BadgeRow';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <div className="mb-12 space-y-6 border-b border-border pb-8">
      <div>
        <h1 className="mb-3 text-4xl font-semibold text-text-primary">
          {project.title}
        </h1>
        <p className="text-lg text-text-secondary">{project.summary}</p>
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <div>
          <h3 className="mb-3 font-medium text-text-primary">Highlights</h3>
          <ul className="list-disc space-y-2 pl-5 text-text-secondary">
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
            className="flex items-center gap-2 text-sm text-accent-primary hover:text-accent-primary/80 transition-colors duration-200 ease-out"
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
            className="flex items-center gap-2 text-sm text-accent-primary hover:text-accent-primary/80 transition-colors duration-200 ease-out"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        )}
      </div>

      <div>
        <h3 className="mb-3 font-medium text-text-primary">Tech Stack</h3>
        <BadgeRow>
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </BadgeRow>
      </div>

      <div>
        <h3 className="mb-3 font-medium text-text-primary">Tags</h3>
        <BadgeRow>
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </BadgeRow>
      </div>
    </div>
  );
}
