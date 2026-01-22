import { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="mb-6 text-3xl font-semibold text-text-primary" {...props} />,
  h2: (props) => <h2 className="mb-4 mt-10 text-2xl font-semibold text-text-primary" {...props} />,
  h3: (props) => <h3 className="mb-3 mt-8 text-xl font-semibold text-text-primary" {...props} />,
  p: (props) => <p className="mb-4 text-text-primary leading-relaxed" {...props} />,
  ul: (props) => <ul className="mb-6 list-disc space-y-2 pl-6 text-text-primary" {...props} />,
  ol: (props) => <ol className="mb-6 list-decimal space-y-2 pl-6 text-text-primary" {...props} />,
  li: (props) => <li className="text-text-primary leading-relaxed" {...props} />,
  code: (props) => (
    <code
      className="rounded-sm bg-background border border-border px-1.5 py-0.5 text-sm font-mono text-text-primary"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-6 overflow-x-auto rounded-md border border-border bg-background p-4 font-mono text-sm"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-accent-primary underline hover:text-accent-primary/80 transition-colors duration-200 ease-out"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-border pl-4 italic text-text-secondary"
      {...props}
    />
  ),
  div: (props: any) => {
    // Handle divs with className for custom components like PDF embeds
    if (props.className?.includes('my-8')) {
      return <div {...props} />;
    }
    return <div {...props} />;
  },
  iframe: (props: any) => <iframe {...props} />,
};
