import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { BadgeRow, Badge } from '@/components/common/BadgeRow';
import { coursework } from '@/data/coursework';
import { skills } from '@/data/skills';
import { generateMetadata } from '@/lib/seo';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Coursework & Skills',
  description: 'Relevant coursework and technical skills',
  path: '/coursework',
});

const skillCategories = ['Languages', 'Systems', 'Web', 'Data/ML', 'Tools'];

export default function CourseworkPage() {
  const skillsByCategory = skillCategories.map((category) => ({
    category,
    skills: skills.filter((skill) => skill.category === category),
  }));

  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">Coursework & Skills</h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="space-y-4 text-text-primary leading-relaxed max-w-prose">
              <p>
                My coursework is curated to show strong computer science fundamentals and exposure across systems, algorithms, machine learning, databases, and UI. These courses have shaped how I think about engineering problems and informed my approach to system design.
              </p>
              <p>
                What I value most about my education is the balance between theory and practice. Courses like Systems Programming and Computer Design taught me to think about how software interacts with hardware and the operating system. Database Systems and Software Design helped me understand how to model real-world requirements and make architectural decisions. And courses in machine learning and data science gave me the mathematical foundation to work with complex, ambiguous problems.
              </p>
              <p>
                Below, I've organized the coursework by theme rather than chronologically, focusing on the skills and concepts that are most relevant to engineering work. Each course listing includes the key skills I learned and, where applicable, links to projects that demonstrate those skills in practice.
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-64 h-40 md:h-48 rounded-md overflow-hidden border border-border">
            <Image
              src="/images/UIC.avif"
              alt="University of Illinois Chicago"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
        </div>
      </div>

      <section className="mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-10 text-2xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Coursework
        </h2>
        <div className="space-y-16">
          {coursework.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="mb-8 text-xl font-semibold text-text-primary border-b border-border pb-3">
                {group.title}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {group.courses.map((course, courseIdx) => (
                  <div
                    key={courseIdx}
                    className="rounded-md border border-border bg-background p-6 transition-colors duration-200 ease-out hover:border-accent-primary"
                    style={{
                      boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <div className="mb-4">
                      <span className="font-mono text-xs text-accent-primary font-medium">
                        {course.code}
                      </span>
                      <h4 className="text-lg font-semibold text-text-primary mt-2">
                        {course.name}
                      </h4>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-text-secondary uppercase tracking-wide mb-3">Skills Learned</p>
                      <BadgeRow>
                        {course.skillsLearned.map((skill, skillIdx) => (
                          <Badge key={skillIdx}>{skill}</Badge>
                        ))}
                      </BadgeRow>
                    </div>
                    {course.projectLinks && course.projectLinks.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-text-secondary uppercase tracking-wide mb-3">
                          Related Projects
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {course.projectLinks.map((slug) => (
                            <Link
                              key={slug}
                              href={`/projects/${slug}`}
                              className="text-sm text-accent-primary font-medium hover:text-accent-primary/80 transition-colors duration-200 ease-out"
                            >
                              {slug.replace(/-/g, ' ')} →
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8 h-px bg-border" />
        <div className="mb-6 h-1 bg-accent-secondary" />
        <h2 className="mb-8 sm:mb-10 text-xl sm:text-2xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Technical Skills
        </h2>
        <div className="max-w-prose mb-8 sm:mb-10">
          <p className="text-sm text-text-secondary leading-relaxed">
            A quick, scannable overview of technical tools and domains. Skills listed here are supported by coursework, projects, or experience and represent real working knowledge.
          </p>
        </div>
        <div className="space-y-10">
          {skillsByCategory.map(({ category, skills: categorySkills }) => (
            <div key={category}>
              <h3 className="mb-4 text-lg font-semibold text-text-primary">
                {category}
              </h3>
              <BadgeRow>
                {categorySkills.map((skill) => (
                  <Badge key={skill.name}>{skill.name}</Badge>
                ))}
              </BadgeRow>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
