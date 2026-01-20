import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project } from '@/types/content';

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        ...(data as Omit<Project, 'content'>),
        content,
      } as Project;
    });

  return projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...(data as Omit<Project, 'content'>),
    content,
  } as Project;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectsWithLogos(): Project[] {
  const projectsWithLogos = getAllProjects().filter((project) => project.logo);
  // Return the three specific projects with logos in a specific order
  const logoProjectSlugs = [
    'n2-water-ecommerce-storefront',
    'relational-database-design-normalization',
    'tender-heart-vintage',
  ];
  
  return logoProjectSlugs
    .map((slug) => projectsWithLogos.find((p) => p.slug === slug))
    .filter((project): project is Project => project !== undefined);
}
