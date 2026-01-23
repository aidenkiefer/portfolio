# Personal Portfolio Website

A Next.js portfolio website built with TypeScript, TailwindCSS, and MDX. This site showcases projects, experience, coursework, and engineering approach for SWE/SWE-adjacent roles.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: TailwindCSS 4
- **Content**: MDX for project case studies, TypeScript modules for structured data
- **Icons**: lucide-react
- **Code Highlighting**: rehype-pretty-code
- **Hosting**: Vercel (configured)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects listing and detail pages
│   ├── blog/              # Blog listing and detail pages
│   ├── experience/        # Experience & Education page (includes coursework)
│   ├── strengths/         # About / How I Think page
│   ├── resume/            # Resume page
│   ├── contact/           # Contact page
│   ├── search/            # Global search page
│   └── api/               # API routes
│       └── search/        # Search API endpoint
├── components/            # React components
│   ├── layout/            # Layout components (Navbar, Footer, Container)
│   ├── common/            # Shared components (BadgeRow, SectionHeading, SearchableBadge)
│   ├── projects/          # Project-specific components
│   ├── blog/              # Blog-specific components
│   ├── admin/             # Admin components (AdminLoginModal, AdminProvider)
│   ├── motion/            # Motion/animation components
│   ├── mdx/               # MDX custom components
│   └── Logo.tsx           # Personal logo SVG component
├── content/               # Content files
│   ├── projects/          # MDX project case studies
│   └── blogs/             # MDX blog posts
├── copy/                  # Content copy and guidelines
├── data/                  # Structured data (TypeScript modules)
│   ├── experience.ts      # Work experience entries
│   ├── coursework.ts      # Coursework grouped by theme
│   ├── skills.ts          # Technical skills by category
│   └── site.ts            # Site configuration
├── lib/                   # Utility functions
│   ├── content/           # Content loading helpers (projects, blogs)
│   ├── search.ts          # Search functionality
│   ├── seo.ts             # SEO metadata helpers
│   ├── design-tokens.ts   # Design system tokens
│   └── utils.ts           # General utilities
├── types/                 # TypeScript type definitions
├── public/                # Static assets
│   ├── images/            # Images (portrait, UIC, logos)
│   └── resume/            # Resume PDF
└── docs/                  # Documentation and reference files
```

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

## Overview

Project case study content here...
```

The case study should follow this structure:
- Overview
- Problem & Context
- Constraints
- Approach & Design Decisions
- Implementation Highlights
- Results & Evaluation
- Tradeoffs & Limitations
- What I Learned
- Next Steps (optional)

## Content Management

### Projects
Projects are stored as MDX files in `content/projects/`. Each file contains frontmatter metadata and case study content.

### Blogs
Blog posts are stored as MDX files in `content/blogs/`. Each file contains frontmatter metadata and blog content.

### Experience & Education
- Experience: Edit `data/experience.ts` to add or update work experience entries
- Coursework: Edit `data/coursework.ts` (grouped by theme)
- Skills: Edit `data/skills.ts` (categorized with project links)

Note: Coursework and skills are displayed on the `/experience` page, not a separate `/coursework` route.

### Site Configuration
Edit `data/site.ts` for site-wide settings, contact links, and metadata.

## Design System

The site uses a custom design system defined in:
- `lib/design-tokens.ts` - Design token definitions (colors, typography, spacing, motion)
- `tailwind.config.ts` - Tailwind configuration (v4 uses CSS-first config)
- `app/globals.css` - Global styles, Tailwind imports, and base typography
- `docs/design-guidelines.md` - Comprehensive design principles and guidelines

Key design tokens:
- Colors: Warm off-white background (#F9F6F1), muted navy accents (#1E3A5F)
- Typography: IBM Plex Sans (body), IBM Plex Mono (code)
- Spacing: Generous vertical spacing, max-width containers (72ch prose width)
- Motion: Minimal, 150-250ms transitions with ease-out easing

## Documentation

- `docs/design-guidelines.md` - Comprehensive visual design system and guidelines
- `docs/index.md` - Detailed codebase structure and file reference
- `docs/architecture-plan.md` - Architecture decisions and implementation plan
- `docs/todo.md` - Current TODO list and completed features
- `docs/positioning.md` - Content strategy and positioning
- `copy/` - Content copy and structure guidelines for each page

## Features

- **Projects**: Case studies with MDX content, tags, and stack filtering
- **Blog**: Blog posts with MDX content, tags, and related links
- **Search**: Global search across projects, blogs, and experience with tag filtering
- **Experience & Education**: Combined page showing work experience, coursework, and skills
- **Design System**: Comprehensive design tokens and consistent visual language
- **Admin Components**: Login modal and provider for future admin functionality

## Deployment

This project is configured for deployment on Vercel. The build process:
1. Generates static pages for all routes
2. Processes MDX files at build time
3. Optimizes images and assets
4. Builds search index for client-side search

## License

Private project - All rights reserved.
