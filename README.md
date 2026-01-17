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
│   ├── experience/       # Experience page
│   ├── coursework/       # Coursework & Skills page
│   ├── strengths/        # About / How I Think page
│   ├── resume/           # Resume page
│   └── contact/          # Contact page
├── components/            # React components
│   ├── layout/           # Layout components (Navbar, Footer, Container)
│   ├── common/           # Shared components (BadgeRow, SectionHeading)
│   ├── projects/         # Project-specific components
│   ├── mdx/              # MDX custom components
│   └── Logo.tsx          # Personal logo SVG component
├── content/              # Content files
│   └── projects/        # MDX project case studies
├── copy/                 # Content copy and guidelines
├── data/                 # Structured data (TypeScript modules)
│   ├── experience.ts    # Work experience entries
│   ├── coursework.ts   # Coursework grouped by theme
│   ├── skills.ts        # Technical skills by category
│   └── site.ts          # Site configuration
├── lib/                  # Utility functions
│   ├── content/         # Content loading helpers
│   ├── seo.ts           # SEO metadata helpers
│   └── utils.ts         # General utilities
├── types/                # TypeScript type definitions
├── public/               # Static assets
│   ├── images/          # Images (portrait, UIC, etc.)
│   └── resume/          # Resume PDF
└── docs/                 # Documentation and reference files
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

### Experience
Edit `data/experience.ts` to add or update work experience entries.

### Coursework & Skills
- Coursework: Edit `data/coursework.ts` (grouped by theme)
- Skills: Edit `data/skills.ts` (categorized with project links)

### Site Configuration
Edit `data/site.ts` for site-wide settings, contact links, and metadata.

## Design System

The site uses a custom design system defined in:
- `tailwind.config.ts` - Tailwind configuration with custom colors, fonts, and spacing
- `app/globals.css` - Global styles and base typography
- `docs/design-guidelines.md` - Design principles and guidelines

Key design tokens:
- Colors: Warm off-white background, muted navy accents
- Typography: IBM Plex Sans (body), IBM Plex Mono (code)
- Spacing: Generous vertical spacing, max-width containers

## Documentation

- `docs/design-guidelines.md` - Visual design system and guidelines
- `docs/positioning.md` - Content strategy and positioning
- `copy/` - Content copy and structure guidelines for each page
- `index.md` - Detailed codebase structure and file reference

## Deployment

This project is configured for deployment on Vercel. The build process:
1. Generates static pages for all routes
2. Processes MDX files at build time
3. Optimizes images and assets

## License

Private project - All rights reserved.
