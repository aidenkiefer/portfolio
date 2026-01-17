import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/data/site';
import { generateMetadata } from '@/lib/seo';
import { Mail, Github, Linkedin } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Contact',
  description: 'Get in touch with me',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-8 sm:mb-12">
        <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">Contact</h1>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-prose">
          <p>
            If you're interested in my work or think I might be a good fit for your team, I'd be happy to connect. I'm particularly drawn to roles that involve systems thinking, thoughtful design, and collaboration with other engineers.
          </p>
          <p>
            I'm open to full-time opportunities, contract work, and conversations about interesting problems—even if there isn't an immediate role. Whether you're building new products, maintaining existing systems, or solving complex technical challenges, I'd love to hear about what you're working on.
          </p>
          <p>
            Feel free to reach out via email or LinkedIn, and I'll respond promptly. You can also check out my GitHub to see examples of my code and projects.
          </p>
        </div>
      </div>
      <div className="mb-6 sm:mb-8 h-1 bg-accent-secondary" />

      <div className="space-y-4 max-w-2xl sm:max-w-3xl">
        {siteConfig.links.email && (
          <a
            href={siteConfig.links.email}
            className="group flex items-center gap-4 rounded-md border border-border bg-background p-6 transition-colors duration-200 ease-out hover:border-accent-primary"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
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
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
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
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
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
