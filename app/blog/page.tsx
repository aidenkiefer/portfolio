import { Container } from '@/components/layout/Container';
import { getAllBlogs } from '@/lib/content/blogs';
import { generateMetadata } from '@/lib/seo';
import { BlogList } from '@/components/blog/BlogList';

export const metadata = generateMetadata({
  title: 'Blog',
  description: 'Thoughts on software engineering, systems design, and building things that matter',
  path: '/blog',
});

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">Blog</h1>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-prose">
          <p>
            Thoughts on software engineering, systems design, and building things that matter. I write about technical decisions, lessons learned, and the process of turning ideas into working systems.
          </p>
          <p>
            These posts reflect my thinking on engineering problems, architectural tradeoffs, and the craft of building software. They're written for other engineers who care about building things well.
          </p>
        </div>
      </div>
      <div className="mb-8 h-1 bg-accent-secondary" />

      <BlogList blogs={blogs} />
    </Container>
  );
}
