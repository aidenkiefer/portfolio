import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Blog } from '@/types/content';

const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');

export function getAllBlogs(): Blog[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const blogs = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        ...(data as Omit<Blog, 'content'>),
        content,
      } as Blog;
    });

  // Return blogs unsorted - BlogList component will handle sorting
  // This ensures the sorting UI works correctly
  return blogs;
}

export function getFeaturedBlogs(): Blog[] {
  return getAllBlogs().filter((blog) => blog.featured);
}

export function getBlogBySlug(slug: string): Blog | null {
  if (!fs.existsSync(blogsDirectory)) {
    return null;
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  
  // Search through all blog files to find one with matching slug
  for (const fileName of fileNames) {
    if (!fileName.endsWith('.mdx')) continue;
    
    const filePath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Check if this file's slug matches
    if (data.slug === slug) {
      return {
        ...(data as Omit<Blog, 'content'>),
        content,
      } as Blog;
    }
  }

  return null;
}
