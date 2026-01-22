import { Container } from '@/components/layout/Container';
import { getAllBlogs } from '@/lib/content/blogs';
import { generateMetadata } from '@/lib/seo';
import { BlogList } from '@/components/blog/BlogList';
import { NodeGraph } from '@/components/motion/NodeGraph';

export const metadata = generateMetadata({
  title: 'Blog',
  description: 'Thoughts on software engineering, systems design, and building things that matter',
  path: '/blog',
});

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-12 sm:mb-16 lg:mb-20 relative">
        {/* Node Graph Accent */}
        <div className="absolute right-0 top-0 -z-10 opacity-40 overflow-hidden pointer-events-none w-1/3 h-full hidden lg:block">
          <NodeGraph className="text-accent-primary w-full h-full" />
        </div>
        
        <div className="relative z-10">
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">Blog</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-4 text-text-primary leading-relaxed max-w-prose lg:col-span-2">
              <p>
                Thoughts on software engineering, systems design, and building things that matter. I write about technical decisions, lessons learned, and the process of turning ideas into working systems.
              </p>
              <p>
                These posts reflect my thinking on engineering problems, architectural tradeoffs, and the craft of building software. They're written for other engineers who care about building things well.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 h-1 bg-accent-secondary" />

      <BlogList blogs={blogs} />
    </Container>
  );
}
