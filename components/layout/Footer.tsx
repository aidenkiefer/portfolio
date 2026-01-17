import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { Container } from './Container';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex gap-4">
            {siteConfig.links.github && (
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            {siteConfig.links.linkedin && (
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
            {siteConfig.links.email && (
              <Link
                href={siteConfig.links.email}
                className="text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out"
              >
                <Mail className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
