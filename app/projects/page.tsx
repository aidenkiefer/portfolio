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
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">Projects</h1>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-prose">
          <p>
            Each project is a case study in problem-solving. I focus on design decisions, technical tradeoffs, and what I learned—not just what I built. These projects reflect how I approach systems, ambiguity, and real engineering constraints.
          </p>
          <p>
            The projects here span academic work, applied engineering, and production systems. What ties them together is a focus on understanding problems deeply before jumping to solutions, making informed decisions about tradeoffs, and building systems that are maintainable and explainable. Some projects are polished and production-ready; others are explorations that helped me understand fundamental concepts. All of them represent real thinking about real problems.
          </p>
          <p>
            When you click into a case study, you'll find detailed explanations of the problem context, the constraints I worked within, the design decisions I made, and what I learned along the way. My goal isn't to showcase perfect solutions—it's to demonstrate how I think through engineering challenges and make decisions when the path forward isn't obvious.
          </p>
        </div>
      </div>
      <div className="mb-8 h-1 bg-accent-secondary" />
      {projects.length === 0 ? (
        <p className="text-text-secondary">No projects yet. Check back soon!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </Container>
  );
}
