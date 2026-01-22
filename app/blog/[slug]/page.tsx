import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { Container } from '@/components/layout/Container';
import { getBlogBySlug, getAllBlogs } from '@/lib/content/blogs';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { mdxComponents } from '@/components/mdx/MDXComponents';
import { RelatedLinks } from '@/components/blog/RelatedLinks';
import { ContactCTA } from '@/components/blog/ContactCTA';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) {
    return generateSEOMetadata({ title: 'Blog Post Not Found' });
  }
  return generateSEOMetadata({
    title: blog.title,
    description: blog.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-accent-primary font-medium hover:text-accent-primary/80 transition-colors duration-200 ease-out mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <article className="max-w-prose">
        <header className="mb-8">
          <time className="text-sm text-text-secondary font-mono mb-4 block">
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight mb-6">
            {blog.title}
          </h1>
          {blog.excerpt && (
            <p className="text-lg text-text-secondary leading-relaxed">
              {blog.excerpt}
            </p>
          )}
        </header>

        <div className="mb-8 h-1 bg-accent-secondary" />

        <div className="prose prose-lg max-w-none">
          <MDXRemote
            source={blog.content || ''}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: 'github-dark',
                      keepBackground: false,
                    },
                  ],
                ],
              },
            }}
          />
        </div>

        {blog.relatedLinks && blog.relatedLinks.length > 0 && (
          <RelatedLinks links={blog.relatedLinks} />
        )}

        <ContactCTA />
      </article>
    </Container>
  );
}
