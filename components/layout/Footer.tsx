import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { Container } from './Container';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex gap-4">
            {siteConfig.links.github && (
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            {siteConfig.links.linkedin && (
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
            {siteConfig.links.email && (
              <Link
                href={siteConfig.links.email}
                className="text-gray-600 hover:text-gray-900"
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
