import Link from 'next/link';
import { RelatedLink as RelatedLinkType } from '@/types/content';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface RelatedLinksProps {
  links: RelatedLinkType[];
}

export function RelatedLinks({ links }: RelatedLinksProps) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="text-xl font-semibold text-text-primary mb-6">Related Links</h2>
      <div className="space-y-3">
        {links.map((link, index) => {
          const isExternal = link.type === 'external' || link.url.startsWith('http');
          const href = link.type === 'blog' 
            ? `/blog/${link.url}` 
            : link.type === 'project'
            ? `/projects/${link.url}`
            : link.url;

          return (
            <Link
              key={index}
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3 rounded-md border border-border bg-background p-4 transition-all duration-200 ease-out hover:border-accent-primary"
              style={{
                boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex-1">
                <div className="font-medium text-text-primary group-hover:text-accent-primary transition-colors duration-200 ease-out">
                  {link.label}
                </div>
              </div>
              {isExternal ? (
                <ExternalLink className="h-4 w-4 text-text-secondary group-hover:text-accent-primary transition-colors duration-200 ease-out flex-shrink-0" />
              ) : (
                <ArrowRight className="h-4 w-4 text-text-secondary group-hover:text-accent-primary transition-colors duration-200 ease-out flex-shrink-0" />
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
