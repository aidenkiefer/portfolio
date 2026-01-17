import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/lib/content/projects';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Container className="py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start mb-10">
          <div>
            <h1 className="mb-3 text-5xl font-semibold text-text-primary tracking-tight">
              Aiden Kiefer
            </h1>
            <p className="mb-6 text-xl text-text-secondary font-medium">
              Software Engineer
            </p>
          </div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-border">
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
        
        <p className="text-lg text-text-primary leading-relaxed mb-4 max-w-2xl">
          I'm a systems-minded software engineer with a strong foundation in computer science and hands-on experience across web development, data science, and machine learning. I care deeply about clarity, thoughtful design, and building software that holds up over time.
        </p>
        
        <p className="text-sm text-text-secondary mb-2">
          Chicago-based · Computer Science (UIC) · SWE / SWE-adjacent roles
        </p>
        <p className="text-xs text-text-secondary mb-8 tracking-wider uppercase">
          — systems • clarity • long-term thinking
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
            href="/resume"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-text-primary font-medium transition-colors duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
          >
            View Resume
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
      <section className="mb-20">
        <SectionHeading showSeparator={false} showChip={false}>About Me</SectionHeading>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-2xl">
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
      </section>

      {/* Selected Work Section */}
      {featuredProjects.length > 0 && (
        <section className="mb-20">
          <div className="mb-8 h-px bg-border" />
          <SectionHeading showSeparator={true}>Selected Work</SectionHeading>
          <p className="mb-10 text-sm text-text-secondary max-w-2xl">
            A small selection of projects that represent how I think and work as an engineer.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.slice(0, 3).map((project) => (
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

      {/* How I Approach Engineering Section */}
      <section className="mb-20">
        <SectionHeading showSeparator={true}>How I Approach Engineering</SectionHeading>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-2xl">
          <p>
            When I work on software, I focus first on understanding the problem space and the constraints involved. I prefer to think through multiple possible approaches, weigh tradeoffs, and choose solutions that are simple, explainable, and maintainable rather than clever for their own sake.
          </p>
          <p>
            I enjoy learning new systems and technologies deeply, especially when they expose lower-level details or challenge my assumptions. I also place a high value on communication — writing clear documentation, explaining technical decisions, and making sure others can understand and build on my work.
          </p>
        </div>
      </section>

      {/* Experience Snapshot Section */}
      <section className="mb-20">
        <SectionHeading showSeparator={true}>Experience</SectionHeading>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-2xl mb-6">
          <p>
            I've worked on real-world software projects in both academic and professional contexts, including freelance and internship-style roles. My experience includes building and maintaining production websites, working with databases and analytics, and collaborating with non-technical stakeholders while maintaining engineering standards.
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

      {/* Resume Callout Section */}
      <section className="mb-20">
        <SectionHeading showSeparator={true}>Resume</SectionHeading>
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

      {/* Get in Touch Section */}
      <section>
        <SectionHeading showSeparator={true}>Get in Touch</SectionHeading>
        <div className="mb-6 h-1 bg-accent-primary" />
        <div className="space-y-4 text-text-primary leading-relaxed max-w-2xl mb-8">
          <p>
            If you're interested in my work or think I might be a good fit for your team, I'd be happy to connect.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
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
