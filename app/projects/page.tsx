import { Container } from '@/components/layout/Container';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getAllProjects } from '@/lib/content/projects';
import { generateMetadata } from '@/lib/seo';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Projects',
  description: 'Case studies in problem-solving, design decisions, and technical tradeoffs',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-16">
      <div className="mb-20">
        <h1 className="mb-6 text-4xl font-semibold text-text-primary tracking-tight">Projects</h1>
        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
          Each project is a case study in problem-solving. I focus on design decisions, technical tradeoffs, and what I learned—not just what I built. These projects reflect how I approach systems, ambiguity, and real engineering constraints.
        </p>
      </div>
      <div className="mb-8 h-1 bg-accent-primary" />
      {projects.length === 0 ? (
        <p className="text-text-secondary">No projects yet. Check back soon!</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </Container>
  );
}
