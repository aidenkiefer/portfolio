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

  // Sort: featured first, then by date (newest first)
  return blogs.sort((a, b) => {
    // Featured blogs come first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    // Then sort by date (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getFeaturedBlogs(): Blog[] {
  return getAllBlogs().filter((blog) => blog.featured);
}

export function getBlogBySlug(slug: string): Blog | null {
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...(data as Omit<Blog, 'content'>),
    content,
  } as Blog;
}
