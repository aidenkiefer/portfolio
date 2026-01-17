import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'About',
  description: 'My approach to problem-solving and software engineering',
  path: '/strengths',
});

export default function StrengthsPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">About</h1>
        <div className="max-w-prose">
          <p className="text-sm text-text-secondary leading-relaxed">
            This isn't a personality test page: it's an explanation of my engineering mindset. These patterns shape how I approach problems, learn new systems, work on teams, and communicate technical ideas.
          </p>
        </div>
      </div>

      <div className="space-y-12 sm:space-y-16 lg:space-y-20">
        <section>
          <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
            <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
            Strategic Thinking
          </h2>
          <div className="space-y-4 text-text-primary leading-relaxed max-w-prose">
            <p>
              I approach problems systemically and proactively. I see patterns and failure modes early, consider multiple paths before committing, and reduce complexity through structure rather than adding layers. This isn't about overthinking: it's about recognizing that most engineering problems have multiple valid solutions, and the best one depends on the specific context and constraints.
            </p>
            <p>
              In engineering contexts, this shows up in system architecture, algorithm design, debugging and root-cause analysis, and anticipating edge cases. I think before I code: understanding the problem space and constraints helps me choose solutions that are simple, explainable, and maintainable. For example, when designing a database schema, I'll consider not just the immediate requirements but how the data model might need to evolve, what queries will be most common, and how to maintain data integrity as the system grows.
            </p>
            <p>
              This systematic approach has saved me time in the long run. By thinking through edge cases early, I avoid debugging sessions that could have been prevented. By considering multiple approaches, I often find simpler solutions than my first instinct. And by reducing complexity through structure, I build systems that are easier for others to understand and extend.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-8 h-px bg-border" />
          <h2 className="mb-6 text-2xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
            <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
            Ideation & Creative Problem-Solving
          </h2>
          <div className="space-y-4 text-text-primary leading-relaxed max-w-2xl">
            <p>
              I'm comfortable with ambiguity and non-obvious solutions. I generate multiple approaches, connect ideas across domains, and enjoy design-heavy, underspecified problems that require exploring alternatives rather than applying a single pattern. When a problem is underspecified or the requirements are unclear, I see that as an opportunity to ask questions, explore options, and design something that fits the actual need rather than forcing a standard solution.
            </p>
            <p>
              This translates to engineering as exploring alternative designs, applying concepts across domains (like using database normalization principles in API design), and avoiding one-size-fits-all solutions. I don't just apply patterns: I understand them and adapt them to the context. For instance, when building an e-commerce platform, I didn't just follow a React tutorial. I thought about how the data model should be structured, how to optimize for SEO while maintaining performance, and how to design the architecture so it could evolve as requirements changed.
            </p>
            <p>
              This approach means I sometimes take longer on the design phase, but it results in solutions that are more thoughtful and better suited to the specific problem. I'd rather spend time exploring alternatives upfront than discover later that the obvious solution doesn't actually fit the constraints.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-6 sm:mb-8 h-px bg-border" />
          <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
            <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
            Continuous Learning
          </h2>
          <div className="space-y-4 text-text-primary leading-relaxed max-w-prose">
            <p>
              I enjoy learning difficult material and go beyond surface-level familiarity. When I pick up a new technology or system, I read documentation and source code, learn how it works under the hood, and build real projects that require understanding internals, not just using the API.
            </p>
            <p>
              I reflect on what worked and what didn't, which helps me improve designs over time. This long-term growth mindset means I compound knowledge rather than collecting surface-level familiarity with many tools.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-8 h-px bg-border" />
          <h2 className="mb-6 text-2xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
            <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
            Communication & Collaboration
          </h2>
          <div className="space-y-4 text-text-primary leading-relaxed max-w-2xl">
            <p>
              I explain technical ideas clearly and enjoy design discussions. I value shared understanding: making sure others can understand and build on my work is as important as the work itself. I've found that the best technical solutions are often the ones that are easiest to explain. If I can't clearly articulate why a design decision makes sense, that's usually a sign I need to reconsider the approach.
            </p>
            <p>
              This shows up in writing design docs, conducting code reviews, explaining tradeoffs in technical decisions, and onboarding others to systems I've built. I place a high value on communication because it makes collaboration more effective and helps the team make better decisions together. When I'm working on a project, I document not just what I built, but why I made certain choices, what tradeoffs I considered, and what I learned along the way.
            </p>
            <p>
              I also enjoy the collaborative aspects of engineering work. Some of my best solutions have come from discussing problems with others, whether that's explaining my approach and having someone point out a flaw, or hearing about a different perspective that changes how I think about the problem. I believe that good engineering is inherently collaborative, and that clear communication is what makes that collaboration effective.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-6 sm:mb-8 h-px bg-border" />
          <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
            <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
            Approach to Design Decisions
          </h2>
          <div className="space-y-4 text-text-primary leading-relaxed max-w-prose">
            <p>
              I evaluate tradeoffs, consider constraints, and balance short-term needs with long-term maintainability. When making architectural decisions or choosing technologies, I think through multiple possibilities and choose solutions that are simple, explainable, and maintainable rather than clever for their own sake.
            </p>
            <p>
              This disciplined decision-making shows up in refactoring strategy, technology choices, and how I approach system design. I'm comfortable with ambiguity during the design phase: exploring options, asking "what if?" questions, and refining the approach as I learn more about the problem space.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-8 h-px bg-border" />
          <h2 className="mb-6 text-2xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
            <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
            Working on Teams
          </h2>
          <div className="space-y-4 text-text-primary leading-relaxed max-w-2xl">
            <p>
              I bring energy and optimism to collaborative work. I value collaboration and recognize others' contributions, which builds trust and makes team dynamics healthier.
            </p>
            <p>
              In engineering contexts, this means constructive discussions during design reviews, resilience under pressure, and contributing beyond individual output. I find that my best work happens when I can have conversations about problems rather than working in isolation.
            </p>
          </div>
        </section>

        <section className="rounded-md border border-border bg-background p-8 mt-16" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <div className="mb-6 h-1 bg-accent-secondary" />
          <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-text-primary tracking-tight">What This Means for Engineering Work</h2>
          <p className="text-text-primary mb-6 leading-relaxed">
            These patterns translate to concrete behaviors:
          </p>
          <ul className="space-y-3 text-text-primary">
            <li className="flex items-start gap-3">
              <span className="text-accent-primary font-medium mt-1">→</span>
              <span><strong>Systems thinking:</strong> I see the big picture and how components interact, not just individual pieces</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-primary font-medium mt-1">→</span>
              <span><strong>Design-first approach:</strong> I spend time understanding the problem and exploring solutions before jumping to implementation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-primary font-medium mt-1">→</span>
              <span><strong>Deep learning:</strong> When I pick up a new technology, I learn it thoroughly: reading docs, understanding internals, and building real projects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-primary font-medium mt-1">→</span>
              <span><strong>Clear communication:</strong> I explain technical decisions and tradeoffs in ways that help others understand and contribute</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-primary font-medium mt-1">→</span>
              <span><strong>Iterative improvement:</strong> I reflect on what worked, what didn't, and how to do better next time</span>
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
}
