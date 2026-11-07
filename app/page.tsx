import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/lib/content/projects';
import { ArrowRight } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

const focusAreas = [
  { title: 'Cross-service workflows', text: 'Auction transfers that update active vehicle state while preserving prior history and auditability.' },
  { title: 'Reporting people can inspect', text: 'Nine lifecycle KPIs with matching vehicle-level drilldowns, consistent filters, and authorization.' },
  { title: 'Tools for other engineers', text: 'An authenticated integration-test dashboard with validated vehicle lifecycle simulation and repeatable setup and teardown.' },
];

export default function Home() {
  const selectedProjects = getFeaturedProjects();
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.5fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-wide text-accent-primary">Aiden Kiefer · Chicago, IL</p>
            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
              Software engineer building product workflows, data systems, and developer tools.
            </h1>
            <p className="max-w-prose text-base sm:text-lg leading-relaxed text-text-secondary">
              I&apos;m a Software Engineer Intern on LaneLink at OPENLANE, working full-time across React and TypeScript interfaces,
              Node.js services, and Firebase/Firestore. I care about clear user experiences and reliable systems that people depend on.
            </p>
          </div>
          <picture className="block h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border border-border lg:justify-self-end">
            <source srcSet="/images/portrait.avif" type="image/avif" />
            <img src="/images/portrait.jpg" alt="Aiden Kiefer" className="h-full w-full object-cover" loading="eager" />
          </picture>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/experience" className="inline-flex items-center gap-2 rounded-md bg-accent-primary px-6 py-3 font-medium text-white hover:bg-accent-primary/90">
            View Experience <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/projects" className="rounded-md border border-border px-6 py-3 font-medium text-text-primary hover:border-accent-primary">Explore Projects</Link>
          <Link href="/resume" className="px-4 py-3 font-medium text-accent-primary">Resume</Link>
        </div>
      </section>

      <section className="mb-12 sm:mb-16 lg:mb-20">
        <p className="mb-3 text-xs uppercase tracking-wide text-accent-primary">OPENLANE · LaneLink · June 2026–Present</p>
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary">Current engineering work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="rounded-md border border-border p-6">
              <h3 className="mb-3 text-lg font-semibold text-text-primary">{area.title}</h3>
              <p className="text-text-secondary leading-relaxed">{area.text}</p>
            </div>
          ))}
        </div>
        <Link href="/projects/lanelink-engineering" className="mt-6 inline-flex items-center gap-2 font-medium text-accent-primary">Selected LaneLink work <ArrowRight className="h-4 w-4" /></Link>
      </section>

      <section className="mb-12 sm:mb-16 lg:mb-20 border-t border-border pt-8">
        <div className="mb-6 flex items-center gap-3">
          <ChipMark className="h-12 w-12 text-text-secondary" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">Selected projects</h2>
        </div>
        <p className="mb-8 max-w-prose text-text-secondary">Independent projects and earlier client work exploring product architecture, data pipelines, commerce, and content tooling.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {selectedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <Link href="/projects" className="mt-6 inline-flex items-center gap-2 font-medium text-accent-primary">All projects <ArrowRight className="h-4 w-4" /></Link>
      </section>

      <section className="mb-12 sm:mb-16 border-t border-border pt-8">
        <h2 className="mb-4 text-2xl font-semibold text-text-primary">About me</h2>
        <div className="max-w-prose space-y-4 leading-relaxed text-text-primary">
          <p>I graduated from the University of Illinois Chicago with a B.S. in Computer Science in December 2025. My work has grown from independent full-stack applications and commerce into a multi-repository product with real operational workflows.</p>
          <p>I start by tracing how a user action moves through the system, making data and failure cases explicit, and choosing an approach that teammates can understand and maintain. Review, testing, and clear communication are part of that work.</p>
        </div>
        <Link href="/blog" className="mt-6 inline-block font-medium text-accent-primary">Read my engineering notes →</Link>
      </section>

      <section className="border-t border-border pt-8">
        <h2 className="mb-4 text-2xl font-semibold text-text-primary">Let&apos;s connect</h2>
        <p className="mb-6 max-w-prose leading-relaxed text-text-secondary">I&apos;m interested in software engineering opportunities and collaboration on product workflows, integrations, reporting, and developer tools.</p>
        <Link href="/contact" className="inline-flex rounded-md bg-accent-primary px-6 py-3 font-medium text-white hover:bg-accent-primary/90">Get in touch</Link>
        <p className="mt-5 text-sm text-text-secondary">For selective contract inquiries, <Link href="/services" className="text-accent-primary underline">see the work I consider</Link>.</p>
      </section>
    </Container>
  );
}
