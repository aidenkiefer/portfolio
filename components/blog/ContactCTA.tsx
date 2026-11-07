import { siteConfig } from '@/data/site';
import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function ContactCTA() {
  return (
    <section className="mt-12 pt-8 border-t border-border">
      <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Get in Touch</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Have questions, feedback, or want to collaborate? I'd love to hear from you.
        </p>
        <div className="flex flex-wrap gap-4">
          {siteConfig.links.email && (
            <Link
              href={siteConfig.links.email}
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-background text-sm font-medium text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all duration-200 ease-out"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
          )}
          {siteConfig.links.linkedin && (
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-background text-sm font-medium text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all duration-200 ease-out"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          )}
          {siteConfig.links.github && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-background text-sm font-medium text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all duration-200 ease-out"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
