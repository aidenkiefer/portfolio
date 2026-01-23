# Codebase Index

This document provides a comprehensive reference to the codebase structure, file organization, and key components.

## Directory Structure

### `/app` - Next.js App Router Pages

Next.js 16 App Router pages and layouts. Each route corresponds to a page directory.

```
app/
├── layout.tsx                    # Root layout (fonts, metadata, global structure)
├── page.tsx                      # Homepage (/)
├── globals.css                   # Global styles and Tailwind imports
├── not-found.tsx                 # 404 page
├── projects/
│   ├── page.tsx                  # Projects listing page (/projects)
│   └── [slug]/
│       └── page.tsx              # Project detail page (/projects/[slug])
├── blog/
│   ├── page.tsx                  # Blog listing page (/blog)
│   └── [slug]/
│       └── page.tsx              # Blog detail page (/blog/[slug])
├── experience/
│   └── page.tsx                  # Experience & Education page (/experience)
├── strengths/
│   └── page.tsx                  # About / How I Think page (/strengths)
├── resume/
│   └── page.tsx                  # Resume page (/resume)
├── contact/
│   └── page.tsx                  # Contact page (/contact)
├── search/
│   ├── page.tsx                  # Global search page (/search)
│   ├── layout.tsx                # Search layout
│   └── loading.tsx               # Search loading state
└── api/
    └── search/
        └── route.ts              # Search API endpoint
```

**Key Files:**
- `layout.tsx`: Root layout with IBM Plex fonts, metadata, Navbar, Footer
- `page.tsx`: Homepage with hero, about, featured projects, and CTAs
- `globals.css`: Tailwind base styles, custom CSS variables, typography

### `/components` - React Components

Reusable React components organized by purpose.

```
components/
├── Logo.tsx                      # Personal logo SVG component
├── layout/
│   ├── Navbar.tsx                # Site navigation with logo
│   ├── Footer.tsx                # Site footer with links
│   ├── Container.tsx             # Content container wrapper
│   └── NavLink.tsx                # Navigation link component
├── common/
│   ├── BadgeRow.tsx              # Badge/tag display component
│   ├── SectionHeading.tsx        # Consistent section headings
│   ├── SearchableBadge.tsx       # Clickable badge with search link
│   ├── ChipIcon.tsx              # Chip icon component
│   └── ChipMark.tsx              # Chip mark/logo component
├── projects/
│   ├── ProjectCard.tsx            # Project card for listings
│   ├── ProjectMeta.tsx           # Project metadata display
│   └── ProjectNavigation.tsx      # Navigation between projects
├── blog/
│   ├── BlogList.tsx               # Blog listing component
│   ├── ContactCTA.tsx            # Contact call-to-action component
│   ├── EditButton.tsx            # Edit button for admin
│   └── RelatedLinks.tsx           # Related links component
├── admin/
│   ├── AdminLoginModal.tsx       # Admin login modal
│   └── AdminProvider.tsx         # Admin context provider
├── motion/
│   └── NodeGraph.tsx              # Node graph animation component
└── mdx/
    └── MDXComponents.tsx          # Custom MDX component mappings
```

**Component Details:**
- `Logo.tsx`: SVG logo component using `currentColor` for theming
- `Navbar.tsx`: Sticky navigation with logo, name, and menu items
- `ProjectCard.tsx`: Displays project title, summary, stack, and tags
- `MDXComponents.tsx`: Custom React components for MDX rendering

### `/content` - Content Files

MDX project case studies and static assets.

```
content/
├── projects/
│   ├── data-duel.mdx
│   ├── divvy-van.mdx
│   ├── id3-decision-tree.mdx
│   ├── n2-water-ecommerce-storefront.mdx
│   ├── personal-portfolio-website.mdx
│   ├── relational-database-design-normalization.mdx
│   ├── restaurant-decision-tree.mdx
│   ├── systems-programming-labs.mdx
│   ├── tender-heart-vintage.mdx
│   ├── thrive-vineyard-website.mdx
│   ├── tracking-shifts-climate-change-bird-migration.mdx
│   └── data-wrangling-analysis-toolkit.mdx
└── blogs/
    ├── blog-1.mdx
    ├── blog-2.mdx
    ├── blog-3.mdx
    ├── blog-4.mdx
    └── blog-5.mdx
```

**Note:** Images are stored in `/public/images` for static serving.

### `/data` - Structured Data

TypeScript modules containing structured content data.

```
data/
├── site.ts                       # Site configuration (name, links, metadata)
├── experience.ts                 # Work experience entries array
├── coursework.ts                 # Coursework grouped by theme
└── skills.ts                     # Technical skills by category
```

**Data Structures:**
- `experience.ts`: Array of `Experience` objects with company, role, dates, bullets, tech stack
- `coursework.ts`: Array of `CourseworkGroup` objects with themed course lists
- `skills.ts`: Array of `Skill` objects with category and project links
- `site.ts`: `SiteConfig` object with site metadata and social links

### `/lib` - Utility Functions

Helper functions and utilities.

```
lib/
├── content/
│   ├── mdx.ts                    # MDX content loading helper
│   ├── projects.ts               # Project file reading and parsing
│   └── blogs.ts                  # Blog file reading and parsing
├── search.ts                     # Search functionality and indexing
├── seo.ts                        # SEO metadata generation
├── design-tokens.ts              # Design system tokens
└── utils.ts                      # General utilities (cn helper)
```

**Key Functions:**
- `lib/content/projects.ts`: `getAllProjects()`, `getProjectBySlug()`, `getFeaturedProjects()`
- `lib/content/blogs.ts`: `getAllBlogs()`, `getBlogBySlug()`, `getFeaturedBlogs()`
- `lib/search.ts`: `searchContent()`, `getAllTags()` - search across projects, blogs, experience
- `lib/seo.ts`: `generateMetadata()` helper for consistent page metadata
- `lib/design-tokens.ts`: Design token definitions and CSS variable helpers
- `lib/utils.ts`: `cn()` utility for conditional class names

### `/types` - TypeScript Definitions

TypeScript type definitions for content models.

```
types/
└── content.ts                    # Project, Experience, Course, Skill, SiteConfig types
```

**Type Definitions:**
- `Project`: MDX project with frontmatter and content
- `Experience`: Work experience entry
- `Course`: Individual course with skills and project links
- `CourseworkGroup`: Themed group of courses
- `Skill`: Technical skill with category
- `SiteConfig`: Site-wide configuration

### `/public` - Static Assets

Publicly accessible static files.

```
public/
├── images/
│   ├── portrait.avif            # Portrait image (AVIF format)
│   ├── portrait.jpg             # Portrait image (JPG fallback)
│   └── UIC.avif                 # UIC campus image
└── resume/
    └── Resume.pdf               # Resume PDF file
```

### `/copy` - Content Guidelines

Content copy and structure guidelines for each page.

```
copy/
├── homepage.md                   # Homepage content structure
├── projects.md                   # Projects page guidelines
├── case-studies.md               # Case study template and content
├── experience.md                 # Experience page guidelines
├── coursework.md                 # Coursework page guidelines
├── about.md                      # About/How I Think page guidelines
└── contact.md                    # Contact page guidelines
```

### `/docs` - Documentation

Reference documentation and summaries.

```
docs/
├── design-guidelines.md          # Visual design system and principles
├── positioning.md                # Content strategy and positioning
├── resume-summary.md             # Resume content summary
├── coursework-audit-summary.md   # Coursework audit summary
├── strengths-summary.md          # Clifton Strengths analysis
└── UPDATE_SUMMARY.md             # Development history summary
```

## Key Configuration Files

### Root Level

- `package.json`: Dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.ts`: TailwindCSS configuration with custom theme
- `next.config.mjs`: Next.js configuration with MDX support
- `postcss.config.mjs`: PostCSS configuration
- `design-tokens.ts`: Design token definitions (if used)

### Content Guidelines

- `positioning.md`: Content strategy and positioning principles
- `architecture-plan.md`: Original architecture plan and decisions

## Content Model

### Projects (MDX)

Projects are stored as MDX files with frontmatter:

```yaml
title: string
slug: string
date: string (YYYY-MM-DD)
featured: boolean
tags: string[]
stack: string[]
summary: string
highlights: string[]
repoUrl?: string
liveUrl?: string
```

Case study structure:
1. Overview
2. Problem & Context
3. Constraints
4. Approach & Design Decisions
5. Implementation Highlights
6. Results & Evaluation
7. Tradeoffs & Limitations
8. What I Learned
9. Next Steps (optional)

### Experience

Structured in `data/experience.ts`:
- Company, role, location
- Start/end dates
- Bullet points (impact-focused)
- Tech stack
- Optional links

### Coursework

Structured in `data/coursework.ts`:
- Grouped by theme (Core CS, Systems, Data/ML, etc.)
- Each course: code, name, skills learned
- Optional project links

### Skills

Structured in `data/skills.ts`:
- Categorized (Languages, Systems, Web, Data/ML, Tools)
- Optional project and experience links

## Design System

### Colors

- Background: `#F9F6F1` (warm off-white)
- Text Primary: `#1C1B19`
- Text Secondary: `#5E5A54`
- Border: `#E2DED6`
- Accent Primary: `#1E3A5F` (muted navy)
- Accent Secondary: `#9F2D20` (brick red)

### Typography

- Body: IBM Plex Sans (400, 500, 600)
- Code: IBM Plex Mono (400, 500)
- Base font size: 1rem, line-height: 1.6

### Spacing

- Container max-width: `max-w-3xl`
- Section spacing: `mb-20` (80px)
- Card padding: `p-6` or `p-8`

## Routing

All routes use Next.js App Router:

- `/` - Homepage
- `/projects` - Projects listing with filters
- `/projects/[slug]` - Project case study
- `/blog` - Blog listing
- `/blog/[slug]` - Blog post
- `/experience` - Experience & Education (includes coursework and skills)
- `/strengths` - About / How I Think
- `/resume` - Resume PDF viewer
- `/contact` - Contact information
- `/search` - Global search page with filters

## Build Process

1. **Static Generation**: All pages are statically generated at build time
2. **MDX Processing**: MDX files are processed and converted to React components
3. **Image Optimization**: Next.js Image component optimizes images
4. **Type Safety**: TypeScript ensures type safety across the codebase

## Development Workflow

1. **Content Updates**: Edit MDX files in `content/projects/` or data files in `data/`
2. **Component Changes**: Modify components in `components/`
3. **Styling**: Update Tailwind classes or `globals.css`
4. **New Pages**: Create new route in `app/` directory

## Dependencies

### Core
- `next`: ^16.1.3
- `react`: ^19.2.3
- `typescript`: ^5.9.3

### Styling
- `tailwindcss`: ^4.1.18 (v4 with CSS-first configuration)
- `autoprefixer`: ^10.4.23
- `postcss`: ^8.5.6

### Content
- `@next/mdx`: ^16.1.3
- `@mdx-js/loader`: ^3.1.1
- `@mdx-js/react`: ^3.1.1
- `next-mdx-remote`: ^5.0.0
- `gray-matter`: ^4.0.3
- `rehype-pretty-code`: ^0.14.1
- `remark-gfm`: ^4.0.1

### UI
- `lucide-react`: ^0.562.0
- `class-variance-authority`: ^0.7.1
- `clsx`: ^2.1.1
- `tailwind-merge`: ^3.4.0

## File Naming Conventions

- **Components**: PascalCase (e.g., `ProjectCard.tsx`)
- **Pages**: lowercase with hyphens (e.g., `page.tsx`)
- **MDX Files**: kebab-case (e.g., `id3-decision-tree.mdx`)
- **Data Files**: camelCase (e.g., `experience.ts`)
- **Types**: camelCase (e.g., `content.ts`)

## Notes

- Logo component is located at `components/Logo.tsx`
- Images are stored in `/public/images` for static serving
- MDX files support custom React components via `MDXComponents.tsx`
- All pages use consistent metadata via `lib/seo.ts`
- Design system tokens are defined in `lib/design-tokens.ts`
- Design principles are documented in `docs/design-guidelines.md`
- Search functionality uses client-side filtering via API route
- Coursework and skills are displayed on `/experience` page (not separate route)
- Blog system supports tags, featured posts, and related links
