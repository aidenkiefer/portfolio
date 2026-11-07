import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/data/site';
import { generateMetadata } from '@/lib/seo';
import { Mail, Github, Linkedin } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';
import { ContactForm } from '@/components/contact/ContactForm';

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
          <p>I&apos;m interested in software engineering opportunities and collaboration on product workflows, reporting, integrations, and developer tools.</p>
          <p>My current work is on OPENLANE&apos;s LaneLink team. If you&apos;re building a product or growing an engineering team, tell me about the role and the problems you&apos;re working on.</p>
          <p>For a focused internal tool, integration, or reporting project, I also consider <Link href="/services" className="text-accent-primary underline">selective contract work</Link>. You can reach me directly or use the form below.</p>
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
              <div className="text-sm text-text-secondary">{siteConfig.links.email.replace('mailto:', '')}</div>
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

      {/* Email inquiry form (linked from Services CTA) */}
      <section id="form" className="mt-16 sm:mt-20 scroll-mt-20">
        <div className="mb-6 sm:mb-8 h-px bg-accent-secondary" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
          Send a message
        </h2>
        <p className="mb-8 text-text-secondary leading-relaxed max-w-prose">
          Share an engineering opportunity, a collaboration idea, or a focused project. I&apos;ll reply to the email you provide.
        </p>
        <ContactForm />
      </section>
    </Container>
  );
}
