import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container } from '@/components/layout/Container';
import { ProjectMeta } from '@/components/projects/ProjectMeta';
import { getProjectBySlug, getAllProjects } from '@/lib/content/projects';
import { generateMetadata } from '@/lib/seo';
import { mdxComponents } from '@/components/mdx/MDXComponents';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return generateMetadata({ title: 'Project Not Found' });
  }
  return generateMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-12">
      <ProjectMeta project={project} />
      <article className="prose prose-lg max-w-none">
        <MDXRemote source={project.content || ''} components={mdxComponents} />
      </article>
    </Container>
  );
}
