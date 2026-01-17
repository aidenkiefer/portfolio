import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BadgeRow, Badge } from '@/components/common/BadgeRow';
import { experiences } from '@/data/experience';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Experience',
  description: 'My professional experience and work history',
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <Container className="py-12">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-200 p-6"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                {exp.role}
              </h3>
              <p className="text-lg text-gray-700">{exp.company}</p>
              <p className="text-sm text-gray-600">
                {exp.location} • {exp.startDate} - {exp.endDate || 'Present'}
              </p>
            </div>
            <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
              {exp.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx}>{bullet}</li>
              ))}
            </ul>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-gray-900">
                Tech Stack
              </h4>
              <BadgeRow>
                {exp.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </BadgeRow>
            </div>
            {exp.links && exp.links.length > 0 && (
              <div className="mt-4">
                {exp.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    {link.label} →
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
