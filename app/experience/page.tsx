import { Container } from '@/components/layout/Container';
import { BadgeRow, Badge } from '@/components/common/BadgeRow';
import { experiences } from '@/data/experience';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Experience',
  description: 'My professional experience and work history',
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <Container className="py-16">
      <div className="mb-20">
        <h1 className="mb-6 text-4xl font-semibold text-text-primary tracking-tight">Experience</h1>
        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
          My professional experience reflects engineering work across web development, systems optimization, and data-driven decision making. Each role has involved building and maintaining systems—not just pages—with attention to performance, structure, and measurable impact.
        </p>
      </div>
      <div className="mb-8 h-1 bg-accent-secondary" />

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="rounded-md border border-border bg-background p-8"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-text-primary mb-2">
                {exp.role}
              </h2>
              <p className="text-lg text-text-primary font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-text-secondary">
                {exp.location} • {exp.startDate} - {exp.endDate || 'Present'}
              </p>
            </div>
            <ul className="mb-8 list-disc space-y-3 pl-5 text-text-primary leading-relaxed">
              {exp.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx}>{bullet}</li>
              ))}
            </ul>
            <div className="pt-6 border-t border-border">
              <h3 className="mb-4 text-sm font-medium text-text-primary uppercase tracking-wide">
                Technologies
              </h3>
              <BadgeRow>
                {exp.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </BadgeRow>
            </div>
            {exp.links && exp.links.length > 0 && (
              <div className="mt-6 flex gap-4">
                {exp.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-primary font-medium hover:text-accent-primary/80 transition-all duration-200 ease-out inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
