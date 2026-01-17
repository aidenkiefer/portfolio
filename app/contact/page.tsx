import { Container } from '@/components/layout/Container';
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
    <Container className="py-16">
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-semibold text-text-primary">Contact</h1>
        <p className="text-text-primary leading-relaxed max-w-2xl text-lg">
          If you're interested in my work or think I might be a good fit for your team, I'd be happy to connect.
        </p>
      </div>

      <div className="space-y-4 max-w-md">
        {siteConfig.links.email && (
          <a
            href={siteConfig.links.email}
            className="group flex items-center gap-4 rounded-md border border-border bg-background p-6 transition-colors duration-200 ease-out hover:border-accent-primary"
          >
            <div className="rounded-md border border-border bg-background p-3">
              <Mail className="h-5 w-5 text-accent-primary" />
            </div>
            <div>
              <div className="font-semibold text-text-primary">Email</div>
              <div className="text-sm text-text-secondary">aidenjkiefer@gmail.com</div>
            </div>
          </a>
        )}
        {siteConfig.links.linkedin && (
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-md border border-border bg-background p-6 transition-colors duration-200 ease-out hover:border-accent-primary"
          >
            <div className="rounded-md border border-border bg-background p-3">
              <Linkedin className="h-5 w-5 text-accent-primary" />
            </div>
            <div>
              <div className="font-semibold text-text-primary">LinkedIn</div>
              <div className="text-sm text-text-secondary">Connect professionally</div>
            </div>
          </a>
        )}
        {siteConfig.links.github && (
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-md border border-border bg-background p-6 transition-colors duration-200 ease-out hover:border-accent-primary"
          >
            <div className="rounded-md border border-border bg-background p-3">
              <Github className="h-5 w-5 text-accent-primary" />
            </div>
            <div>
              <div className="font-semibold text-text-primary">GitHub</div>
              <div className="text-sm text-text-secondary">View my code and projects</div>
            </div>
          </a>
        )}
      </div>
    </Container>
  );
}
