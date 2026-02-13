/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // Required for next-mdx-remote v6 with Turbopack (see next-mdx-remote README)
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
