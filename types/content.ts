export interface Project {
  title: string;
  slug: string;
  date: string;
  featured: boolean;
  tags: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  summary: string;
  highlights: string[];
  content?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  bullets: string[];
  techStack: string[];
  links?: {
    url: string;
    label: string;
  }[];
}

export interface Course {
  code: string;
  name: string;
  skillsLearned: string[];
  projectLinks?: string[];
}

export interface CourseworkGroup {
  title: string;
  courses: Course[];
}

export interface Skill {
  name: string;
  category: string;
  projectLinks?: string[];
  experienceLinks?: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
}
