import Image from 'next/image';
import { Project } from '@/types/content';
import { BadgeRow } from '../common/BadgeRow';
import { SearchableBadge } from '../common/SearchableBadge';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { ProjectLogo } from '@/components/projects/ProjectLogo';

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  const isLaneLink = project.slug === 'lanelink-engineering';
  return (
    <div className="mb-12 space-y-6 border-b border-border pb-8">
      {isLaneLink && (
        <div className="overflow-hidden rounded-md border border-border">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#101c4e] px-5 py-4">
            <Image src="/images/logos/openlane-white.svg" alt="OPENLANE" width={160} height={22} className="h-auto w-40" />
            <span className="text-xs uppercase tracking-wide text-white/80">Professional engineering experience</span>
          </div>
          <div className="px-5 py-5">
            <Image src="/images/logos/lanelink.png" alt="LaneLink" width={240} height={44} className="h-auto w-60 max-w-full" />
          </div>
        </div>
      )}
      <div>
        <div className="flex items-start gap-4 mb-3">
          {project.logo && !isLaneLink && (
            <ProjectLogo src={project.logo} size="md" className="mt-1" />
          )}
          <h1 className="text-4xl font-semibold text-text-primary">
            {project.title}
          </h1>
        </div>
        <p className="text-lg text-text-secondary">{project.summary}</p>
      </div>

      {project.status && (
        <dl className="grid gap-5 sm:grid-cols-2 text-sm">
          {[
            ['Status', project.status], ['My role', project.ownership],
            ['Users', project.audience], ['Result', project.outcome],
          ].map(([label, value]) => value ? (
            <div key={label}><dt className="mb-1 font-semibold text-text-primary">{label}</dt><dd className="text-text-secondary leading-relaxed">{value}</dd></div>
          ) : null)}
        </dl>
      )}
      {project.workflow && (
        <figure className="rounded-md border border-border p-5">
          <figcaption className="mb-4 text-sm font-medium text-text-primary">Workflow overview</figcaption>
          <ol className="grid gap-3 sm:grid-cols-2">
            {project.workflow.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="font-mono text-accent-primary">{index + 1}.</span>{step}
              </li>
            ))}
          </ol>
        </figure>
      )}

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
            <SearchableBadge key={tech} tag={tech}>
              {tech}
            </SearchableBadge>
          ))}
        </BadgeRow>
      </div>

      <div>
        <h3 className="mb-3 font-medium text-text-primary">Tags</h3>
        <BadgeRow>
          {project.tags.map((tag) => (
            <SearchableBadge key={tag} tag={tag}>
              {tag}
            </SearchableBadge>
          ))}
        </BadgeRow>
      </div>
    </div>
  );
}
