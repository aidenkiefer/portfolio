import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'How I Think',
  description: 'My approach to problem-solving and software engineering',
  path: '/strengths',
});

export default function StrengthsPage() {
  return (
    <Container className="py-12">
      <SectionHeading>How I Think</SectionHeading>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          This page explains my engineering mindset—how I approach problems, learn new systems, work on teams, and communicate technical ideas. These patterns come from my natural strengths and have shaped how I work as an engineer.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Strategic Thinking</h2>
        <p className="text-gray-700">
          I quickly spot patterns and issues that others miss. When facing a problem, I generate alternative paths forward and choose the most effective one. This means I see patterns where others see complexity—whether that's in system architecture, algorithm design, or debugging a tricky bug.
        </p>
        <p className="text-gray-700 mt-4">
          In practice, this shows up as: evaluating multiple approaches before committing, considering edge cases and failure modes early, and making complex ideas accessible through clear explanations.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Ideation & Creative Problem-Solving</h2>
        <p className="text-gray-700">
          I'm fascinated by ideas and see connections that others don't. This helps me view problems from different perspectives and find unique ways to link concepts. When a standard solution doesn't fit, I create a new one.
        </p>
        <p className="text-gray-700 mt-4">
          This translates to engineering as: brainstorming multiple solutions before narrowing down, connecting ideas from different domains (e.g., applying database normalization principles to API design), and enjoying the ambiguity that comes with design-heavy problems.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Continuous Learning</h2>
        <p className="text-gray-700">
          The process of learning excites me as much as the outcome. I'm attracted to difficult and challenging endeavors—I'd rather tackle a hard problem that stretches my understanding than take the easy path. This drives me to learn new technologies deeply, not just superficially.
        </p>
        <p className="text-gray-700 mt-4">
          In my work, this means: diving deep into documentation and source code when learning a new framework, seeking out challenging projects that require new skills, and continuously improving through reflection on what worked and what didn't.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Communication & Collaboration</h2>
        <p className="text-gray-700">
          I find it natural to put technical thoughts into words. I enjoy explaining complex systems, breaking down design decisions, and helping others understand the "why" behind technical choices. Good conversations about technical problems energize me.
        </p>
        <p className="text-gray-700 mt-4">
          This shows up as: writing clear documentation and code comments, explaining tradeoffs in design reviews, and helping teammates understand systems by telling the story of how they work.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Approach to Design Decisions</h2>
        <p className="text-gray-700">
          I make informed decisions based on tradeoffs, constraints, and long-term maintainability. I consider multiple possibilities, evaluate them against the problem context, and choose the path that balances immediate needs with future flexibility.
        </p>
        <p className="text-gray-700 mt-4">
          This means I'm comfortable with ambiguity during the design phase—exploring options, asking "what if?" questions, and refining the approach as I learn more about the problem space.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Working on Teams</h2>
        <p className="text-gray-700">
          I bring energy and enthusiasm to collaborative work. I value clear communication, enjoy discussing technical ideas with teammates, and find that my best work happens when I can have conversations about problems rather than working in isolation.
        </p>
        <p className="text-gray-700 mt-4">
          I'm naturally optimistic about what's possible, which helps when facing challenging problems or tight deadlines. I also recognize and acknowledge the contributions of teammates, which builds trust and makes collaboration more effective.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">What This Means for Engineering Work</h2>
        <p className="text-gray-700">
          These patterns translate to how I work:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-gray-700 mt-4">
          <li><strong>Systems thinking:</strong> I see the big picture and how components interact, not just individual pieces</li>
          <li><strong>Design-first approach:</strong> I spend time understanding the problem and exploring solutions before jumping to implementation</li>
          <li><strong>Deep learning:</strong> When I pick up a new technology, I learn it thoroughly—reading docs, understanding internals, and building real projects</li>
          <li><strong>Clear communication:</strong> I explain technical decisions and tradeoffs in ways that help others understand and contribute</li>
          <li><strong>Iterative improvement:</strong> I reflect on what worked, what didn't, and how to do better next time</li>
        </ul>
      </div>
    </Container>
  );
}
