import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getAllProjects } from '@/lib/content/projects';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Projects',
  description: 'A collection of my software engineering projects',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-12">
      <SectionHeading>Projects</SectionHeading>
      {projects.length === 0 ? (
        <p className="text-gray-600">No projects yet. Check back soon!</p>
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
