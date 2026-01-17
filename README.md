# Personal Portfolio Website

A Next.js portfolio website built with TypeScript, TailwindCSS, and MDX.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js App Router pages
- `components/` - React components
- `content/projects/` - MDX project files
- `data/` - Structured data (experience, coursework, skills)
- `lib/` - Utility functions and helpers
- `types/` - TypeScript type definitions

## Adding Projects

Create a new `.mdx` file in `content/projects/` with frontmatter:

```mdx
---
title: "Project Title"
slug: "project-slug"
date: "2025-01-01"
featured: false
tags: ["Tag1", "Tag2"]
stack: ["Tech1", "Tech2"]
summary: "Brief description"
highlights:
  - "Highlight 1"
  - "Highlight 2"
---

Your project content here...
```

## Building

```bash
npm run build
```

## Deployment

This project is configured for deployment on Vercel.
