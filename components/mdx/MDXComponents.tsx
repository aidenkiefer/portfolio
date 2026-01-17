import { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="mb-4 text-3xl font-bold" {...props} />,
  h2: (props) => <h2 className="mb-3 mt-8 text-2xl font-semibold" {...props} />,
  h3: (props) => <h3 className="mb-2 mt-6 text-xl font-semibold" {...props} />,
  p: (props) => <p className="mb-4 text-gray-700" {...props} />,
  ul: (props) => <ul className="mb-4 list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="mb-4 list-decimal space-y-2 pl-6" {...props} />,
  li: (props) => <li className="text-gray-700" {...props} />,
  code: (props) => (
    <code
      className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-blue-600 underline hover:text-blue-800"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-gray-300 pl-4 italic text-gray-600"
      {...props}
    />
  ),
};
