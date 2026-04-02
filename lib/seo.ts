import { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export function generateMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  /** When true, set robots to noindex,nofollow (e.g. temporary admin routes). */
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const fullDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
    },
  };
}
