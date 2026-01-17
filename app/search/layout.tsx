import { generateMetadata } from '@/lib/seo';
import { ReactNode } from 'react';

export const metadata = generateMetadata({
  title: 'Search',
  description: 'Search through projects and experience by keyword, technology, or skill',
  path: '/search',
});

export default function SearchLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
