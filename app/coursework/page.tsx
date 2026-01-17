import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BadgeRow, Badge } from '@/components/common/BadgeRow';
import { coursework } from '@/data/coursework';
import { skills } from '@/data/skills';
import { generateMetadata } from '@/lib/seo';

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
    <Container className="py-12">
      <SectionHeading>Coursework & Skills</SectionHeading>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Coursework
        </h2>
        <div className="space-y-8">
          {coursework.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.courses.map((course, courseIdx) => (
                  <div
                    key={courseIdx}
                    className="rounded-lg border border-gray-200 p-4"
                  >
                    <div className="mb-2">
                      <span className="font-mono text-sm text-gray-600">
                        {course.code}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {course.name}
                      </h4>
                    </div>
                    <div className="mb-2">
                      <p className="text-sm text-gray-600">Skills Learned:</p>
                      <BadgeRow>
                        {course.skillsLearned.map((skill, skillIdx) => (
                          <Badge key={skillIdx}>{skill}</Badge>
                        ))}
                      </BadgeRow>
                    </div>
                    {course.projectLinks && course.projectLinks.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-600">
                          Related Projects:
                        </p>
                        <div className="mt-1 flex gap-2">
                          {course.projectLinks.map((slug) => (
                            <Link
                              key={slug}
                              href={`/projects/${slug}`}
                              className="text-sm text-blue-600 hover:text-blue-800"
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
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">Skills</h2>
        <div className="space-y-6">
          {skillsByCategory.map(({ category, skills: categorySkills }) => (
            <div key={category}>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
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
