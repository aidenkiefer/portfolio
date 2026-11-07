import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Selective Contract Work',
  description: 'Focused engineering projects in internal tools, integrations, reporting, and automation.',
  path: '/services',
});

const areas = [
  ['Internal tools', 'Operator interfaces and administrative workflows that make complex tasks easier to carry out and inspect.'],
  ['Integrations & automation', 'API connections, scheduled processing, and validation around the data moving between systems.'],
  ['Reporting & data workflows', 'Dashboards, clear metric definitions, drilldowns, and exportable reports.'],
];

export default function ServicesPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <header className="mb-10 max-w-prose">
        <p className="mb-3 text-sm text-accent-primary uppercase tracking-wide">Focused engineering projects</p>
        <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary">Selective contract work</h1>
        <p className="text-text-secondary leading-relaxed">Alongside my full-time internship on OPENLANE&apos;s LaneLink team, I consider a small number of well-defined engineering projects. My interests are internal tools, integrations, reporting, and operational automation.</p>
      </header>
      <div className="mb-10 grid gap-6 md:grid-cols-3">
        {areas.map(([title, description]) => <section key={title} className="rounded-md border border-border p-6"><h2 className="mb-3 text-xl font-semibold text-text-primary">{title}</h2><p className="text-text-secondary leading-relaxed">{description}</p></section>)}
      </div>
      <p className="mb-6 max-w-prose text-text-secondary leading-relaxed">Share the users, current workflow, constraints, and desired outcome. Scope, timing, and pricing are discussed after understanding the work; availability depends on the project.</p>
      <div className="flex flex-wrap gap-4">
        <Link href="/contact#form" className="rounded-md bg-accent-primary px-6 py-3 font-medium text-white hover:bg-accent-primary/90">Discuss a project</Link>
        <Link href="/projects" className="rounded-md border border-border px-6 py-3 font-medium text-text-primary hover:border-accent-primary">Explore my work</Link>
      </div>
    </Container>
  );
}
