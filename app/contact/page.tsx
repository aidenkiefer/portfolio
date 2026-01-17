import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { siteConfig } from '@/data/site';
import { generateMetadata } from '@/lib/seo';
import { Mail, Github, Linkedin } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Contact',
  description: 'Get in touch with me',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <Container className="py-12">
      <SectionHeading>Contact</SectionHeading>
      <div className="prose prose-lg max-w-none">
        <p className="mb-8 text-lg text-gray-700">
          I'm always open to discussing new opportunities, projects, or just
          connecting. Feel free to reach out!
        </p>
        <div className="space-y-4">
          {siteConfig.links.email && (
            <a
              href={siteConfig.links.email}
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
            >
              <Mail className="h-5 w-5" />
              <span>Email me</span>
            </a>
          )}
          {siteConfig.links.linkedin && (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
            >
              <Linkedin className="h-5 w-5" />
              <span>Connect on LinkedIn</span>
            </a>
          )}
          {siteConfig.links.github && (
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
              <span>View my GitHub</span>
            </a>
          )}
        </div>
      </div>
    </Container>
  );
}
