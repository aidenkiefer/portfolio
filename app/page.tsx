import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getProjectsWithLogos } from '@/lib/content/projects';
import { ArrowRight, Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { servicePackages } from '@/data/services';
import { ChipMark } from '@/components/common/ChipMark';
import { NodeGraph } from '@/components/motion/NodeGraph';

export default function Home() {
  const selectedProjects = getProjectsWithLogos();

  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10 mb-8 sm:mb-10">
          <div>
            <h1 className="mb-3 text-5xl font-semibold text-text-primary tracking-tight">
              Aiden Kiefer
            </h1>
            <p className="mb-6 text-xl text-text-secondary font-medium">
              Software Engineer
            </p>
          </div>
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border border-border">
            <picture className="block w-full h-full">
              <source srcSet="/images/portrait.avif" type="image/avif" />
              <img
                src="/images/portrait.jpg"
                alt="Aiden Kiefer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </picture>
          </div>
        </div>
        
        <p className="text-xs text-accent-primary mb-4 tracking-wider uppercase">
          systems • clarity • long-term thinking
        </p>
        
        <div className="max-w-prose">
          <p className="text-base sm:text-lg text-text-primary leading-relaxed mb-4">
            I'm a systems-minded software engineer with a strong foundation in computer science and hands-on experience across web development, data science, and machine learning. I care deeply about clarity, thoughtful design, and building software that holds up over time.
          </p>
        </div>
        
        <p className="text-sm text-text-secondary mb-8">
          Chicago-based · Computer Science (UIC) · SWE / SWE-adjacent roles
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-accent-primary bg-accent-primary px-6 py-3 text-white font-medium transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-text-primary font-medium transition-colors duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-text-secondary font-medium transition-colors duration-200 ease-out hover:text-accent-primary"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20 relative">
        {/* Node Graph Accent */}
        <div className="absolute inset-0 -z-10 opacity-40 overflow-hidden pointer-events-none">
          <NodeGraph className="text-accent-primary w-full h-full" />
        </div>
        
        <div className="relative z-10">
          <div className="mb-6 sm:mb-8 flex items-center gap-3">
            <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">About Me</h2>
          </div>
          <div className="space-y-4 text-text-primary leading-relaxed max-w-prose">
            <p>
              I'm a computer science graduate from the University of Illinois Chicago with a strong interest in systems, software design, and the intersection between theory and real-world engineering. I enjoy working on problems that are ambiguous, design-heavy, and require careful tradeoffs rather than purely mechanical execution.
            </p>
            <p>
              My background spans core computer science topics like data structures, algorithms, databases, and systems programming, alongside applied work in web development, data science, and machine learning. Across all of it, I tend to gravitate toward understanding how things work under the hood and how individual decisions affect the system as a whole.
            </p>
            <p>
              I value clarity, communication, and steady improvement. I'm especially motivated by work that rewards thoughtful design, long-term thinking, and collaboration with other engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Work With Me (Contract) Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-6 sm:mb-8 h-px bg-border" />
        <div className="mb-6 sm:mb-8 flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">Work With Me</h2>
        </div>
        <p className="mb-8 text-text-secondary leading-relaxed max-w-prose">
          From AI chatbots to backend automation, I help startups and lean teams unlock growth with fast, effective web-based solutions. I offer individual services (chatbots, performance, SEO, automation, and more) as well as bundled packages below—all with transparent pricing and no long-term retainer.
        </p>
        <div className="grid gap-6 sm:grid-cols-3 mb-8">
          {servicePackages.map((pkg) => (
            <Link
              key={pkg.slug}
              href={`/services/${pkg.slug}`}
              className="block rounded-md border border-border bg-background p-6 transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
              style={{
                boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {pkg.name}
              </h3>
              <p className="mb-4 text-sm text-text-secondary leading-relaxed">
                {pkg.description}
              </p>
              <span className="text-base font-semibold text-text-primary">
                ${pkg.price}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-base font-medium text-text-primary transition-colors duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
          >
            See all services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-colors duration-200 ease-out hover:bg-accent-primary/90"
          >
            Free consult
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Selected Work Section */}
      {selectedProjects.length > 0 && (
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-6 sm:mb-8 h-px bg-border" />
          <div className="mb-6 sm:mb-8 flex items-center gap-3">
            <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">Selected Work</h2>
          </div>
          <div className="max-w-prose mb-8 sm:mb-10">
            <p className="text-sm text-text-secondary">
              A small selection of projects that represent how I think and work as an engineer.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent-primary font-medium hover:text-accent-primary/80 transition-all duration-200 ease-out group"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      )}

      {/* Resume Callout Section */}
      <section className="mb-20">
        <div className="mb-8 h-px bg-border" />
        <div className="mb-8 flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          <h2 className="text-3xl font-semibold text-text-primary tracking-tight">Resume</h2>
        </div>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-2xl mb-6">
          <p>
            For a concise overview of my background, experience, and skills, you can view or download my resume below.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-md border border-accent-primary bg-accent-primary px-6 py-3 text-white font-medium transition-colors duration-200 ease-out hover:bg-accent-primary/90"
          >
            View Resume (PDF)
          </Link>
          <a
            href="/resume/Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-text-primary font-medium transition-colors duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Experience Snapshot Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-6 sm:mb-8 h-px bg-border" />
        <div className="mb-6 sm:mb-8 flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">Experience</h2>
        </div>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-prose mb-6">
          <p>
            I've worked on real-world software projects in both academic and professional contexts, including freelance and internship-style roles. My experience includes building and maintaining production websites, working with databases and analytics, and collaborating with non-technical stakeholders while maintaining engineering standards.
          </p>
          <p>
            What I value most in these experiences is the opportunity to work on systems that have real users and real constraints. Whether it's optimizing a search campaign's performance, building a content management system that needs to scale, or designing database schemas that support complex business logic, I've learned to balance immediate needs with long-term maintainability. These projects have taught me that good engineering isn't just about writing code: it's about understanding context, making informed tradeoffs, and building systems that others can understand and extend.
          </p>
        </div>
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-accent-primary font-medium hover:text-accent-primary/80 transition-all duration-200 ease-out group"
        >
          View Full Experience
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </section>

      {/* How I Approach Engineering Section */}
      <section className="mb-20">
        <div className="mb-8 h-px bg-border" />
        <div className="mb-8 flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          <h2 className="text-3xl font-semibold text-text-primary tracking-tight">How I Approach Engineering</h2>
        </div>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-2xl">
          <p>
            When I work on software, I focus first on understanding the problem space and the constraints involved. I prefer to think through multiple possible approaches, weigh tradeoffs, and choose solutions that are simple, explainable, and maintainable rather than clever for their own sake.
          </p>
          <p>
            This approach has served me well across different domains. Whether I'm designing a database schema, building a machine learning pipeline, or architecting a web application, I start by asking: What are we actually trying to solve? What constraints matter most? What will this look like in six months or a year? These questions help me avoid premature optimization and choose solutions that fit the context.
          </p>
          <p>
            I enjoy learning new systems and technologies deeply, especially when they expose lower-level details or challenge my assumptions. When I pick up a new framework or tool, I read the documentation thoroughly, explore the source code when possible, and build real projects that require understanding internals, not just using the API. This depth-first approach means I compound knowledge over time rather than collecting surface-level familiarity with many tools.
          </p>
          <p>
            I also place a high value on communication: writing clear documentation, explaining technical decisions, and making sure others can understand and build on my work. I've found that the best technical solutions are often the ones that are easiest to explain. If I can't clearly articulate why a design decision makes sense, that's usually a sign I need to reconsider the approach.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section>
        <div className="mb-6 sm:mb-8 h-px bg-border" />
        <div className="mb-6 sm:mb-8 flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">Get in Touch</h2>
        </div>
        <div className="mb-6 h-1 bg-accent-secondary" />
        <div className="space-y-4 text-text-primary leading-relaxed max-w-prose mb-8">
          <p>
            If you're interested in my work or think I might be a good fit for your team, I'd be happy to connect. I'm particularly drawn to roles that involve systems thinking, thoughtful design, and collaboration with other engineers. Whether you're building new products, maintaining existing systems, or solving complex technical challenges, I'd love to hear about what you're working on.
          </p>
          <p>
            I'm open to full-time opportunities, contract work, and conversations about interesting problems, even if there isn't an immediate role. Feel free to reach out via email or LinkedIn, and I'll respond promptly.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-text-primary font-medium transition-colors duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
          >
            <Briefcase className="h-4 w-4" />
            Services
          </Link>
          {siteConfig.links.email && (
            <a
              href={siteConfig.links.email}
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-text-primary font-medium transition-colors duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          )}
          {siteConfig.links.linkedin && (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-text-primary font-medium transition-colors duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          )}
          {siteConfig.links.github && (
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-text-primary font-medium transition-colors duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </section>
    </Container>
  );
}
