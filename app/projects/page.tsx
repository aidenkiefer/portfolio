import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getAllProjects, getFeaturedProjects } from '@/lib/content/projects';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Projects',
  description: 'Selected work in product architecture, reporting, integrations, and developer tooling.',
  path: '/projects',
});

export default function ProjectsPage() {
  const featured = getFeaturedProjects();
  const moreProjects = getAllProjects().filter((project) => !project.featured && project.slug !== 'lanelink-engineering');
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <header className="mb-8 sm:mb-10 max-w-prose">
        <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary">Projects</h1>
        <p className="text-text-secondary leading-relaxed">Selected work in product architecture, data systems, integrations, and developer tooling. Each case study explains the problem, my role, implementation decisions, and current limitations.</p>
      </header>
      <aside className="mb-10 rounded-md border border-border p-6">
        <p className="mb-2 text-xs uppercase tracking-wide text-accent-primary">Professional work · OPENLANE</p>
        <Link href="/projects/lanelink-engineering" className="text-xl font-semibold text-text-primary hover:text-accent-primary">LaneLink: workflows, reporting, and integration-test tooling →</Link>
        <p className="mt-2 max-w-prose text-text-secondary">Selected completed contributions from my full-time software engineering internship.</p>
      </aside>
      <section aria-labelledby="selected-projects">
        <h2 id="selected-projects" className="mb-6 text-2xl font-semibold text-text-primary">Selected projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
      <section className="mt-16 border-t border-border pt-8" aria-labelledby="more-projects">
        <h2 id="more-projects" className="mb-3 text-2xl font-semibold text-text-primary">More projects & coursework</h2>
        <p className="mb-6 text-text-secondary">Additional work in systems, machine learning, real-time applications, and web development.</p>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{moreProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
    </Container>
  );
}
