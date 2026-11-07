import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { getAllBlogs } from '@/lib/content/blogs';
import { generateMetadata } from '@/lib/seo';
import { BlogList } from '@/components/blog/BlogList';

export const metadata = generateMetadata({
  title: 'Blog',
  description: 'Engineering notes on multi-repository products, reporting, integration testing, automation, and technical decisions.',
  path: '/blog',
});

export default function BlogPage() {
  const blogs = getAllBlogs();
  const featured = blogs.filter((blog) => blog.featured).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <header className="mb-10 max-w-prose">
        <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary">Engineering notes</h1>
        <p className="text-text-secondary leading-relaxed">Working in a multi-repository product, defining useful reports, making integration tests repeatable, and building reliable automation. I write about decisions and lessons from LaneLink and my independent projects.</p>
      </header>
      {featured.length > 0 && <section className="mb-12" aria-labelledby="featured-writing">
        <h2 id="featured-writing" className="mb-4 text-xl font-semibold text-text-primary">Featured writing</h2>
        <div className="grid gap-4 sm:grid-cols-2">{featured.map((blog) => <Link key={blog.slug} href={`/blog/${blog.slug}`} className="rounded-md border border-border p-5 font-medium text-accent-primary hover:border-accent-primary">{blog.title} →</Link>)}</div>
      </section>}
      <section aria-labelledby="latest-writing">
        <h2 id="latest-writing" className="mb-4 text-2xl font-semibold text-text-primary">Latest writing</h2>
        <BlogList blogs={blogs} />
      </section>
    </Container>
  );
}
