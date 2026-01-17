import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { Container } from '@/components/layout/Container';
import { ProjectMeta } from '@/components/projects/ProjectMeta';
import { ProjectNavigation } from '@/components/projects/ProjectNavigation';
import { getProjectBySlug, getAllProjects } from '@/lib/content/projects';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
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
    return generateSEOMetadata({ title: 'Project Not Found' });
  }
  return generateSEOMetadata({
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
    <Container className="py-10 sm:py-14 lg:py-20">
      <ProjectNavigation />
      <ProjectMeta project={project} />
      <article className="prose prose-lg max-w-prose">
        <div className="text-text-primary leading-relaxed">
          <MDXRemote 
            source={project.content || ''} 
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: 'github-dark',
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </article>
      <div className="mt-12 pt-8 border-t border-border">
        <ProjectNavigation />
      </div>
    </Container>
  );
}
