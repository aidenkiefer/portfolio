import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/lib/content/projects';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Container className="py-12">
      <section className="mb-16">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">
          Aiden Kiefer
        </h1>
        <p className="mb-6 text-xl text-gray-600">
          Systems-minded Software Engineer
        </p>
        <p className="mb-4 text-lg text-gray-700">
          I'm a software engineer with experience across web development, data & machine learning, databases, and systems programming. Based in Chicago, IL.
        </p>
        <p className="mb-8 text-gray-700">
          My differentiator isn't just that I can write code—it's that I think in systems and tradeoffs, learn new technologies deeply, and communicate technical ideas clearly. I enjoy ambiguity and design-heavy problems.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="rounded bg-gray-900 px-6 py-3 text-white hover:bg-gray-800"
          >
            View Projects
          </Link>
          <Link
            href="/resume"
            className="rounded border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            Download Resume
          </Link>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section>
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-800"
            >
              View all projects →
            </Link>
          </div>
        </section>
      )}
    </Container>
  );
}
