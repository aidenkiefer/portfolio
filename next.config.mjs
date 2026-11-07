/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/services/:path+', destination: '/services', permanent: true }];
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // Required for next-mdx-remote v6 with Turbopack (see next-mdx-remote README)
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
