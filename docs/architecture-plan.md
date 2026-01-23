# Personal Portfolio Website — Architecture Plan (Next.js + TS + MDX)

Owner: Aiden Kiefer
Goal: Recruiter-friendly personal site for SWE/SWE-adjacent roles in Chicago
Primary content pillars: Projects, Experience, Coursework/Skills, Strengths (“How I Think”), Resume

---

## 1) Tech Stack (recommended)
- Framework: Next.js (App Router) + TypeScript
- Styling: TailwindCSS
- UI: Custom components + lucide-react icons
- Content:
  - MDX for long-form pages (project case studies, “How I Think”)
  - JSON/TS data modules for structured content (experience, coursework, skills)
- Code highlighting: Shiki via `rehype-pretty-code`
- Analytics (optional later): Plausible or PostHog
- Hosting: Vercel

**Why this stack**
- App Router: best SEO + routing + easy metadata
- MDX: lets us write project pages as “case studies” and embed custom React components
- Custom components: Built without shadcn/ui, using design tokens for consistency

---

## 2) Information Architecture (Routes)
Top nav:
- Home: /
- Projects: /projects
- Project detail: /projects/[slug]
- Blog: /blog
- Blog detail: /blog/[slug]
- Experience: /experience (includes coursework and skills)
- How I Think: /strengths
- Resume: /resume
- Contact: /contact
- Search: /search

**Note:** Coursework and skills are integrated into the `/experience` page rather than having a separate route.

---

## 3) App Router File Tree (Implemented)
app/
  layout.tsx
  globals.css
  page.tsx                     # Home
  projects/
    page.tsx                   # Projects listing + filters
    [slug]/
      page.tsx                 # Project detail (MDX)
  experience/
    page.tsx                   # Experience + Coursework + Skills (combined)
  blog/
    page.tsx                   # Blog listing
    [slug]/
      page.tsx                 # Blog detail (MDX)
  strengths/
    page.tsx                   # “How I Think” page (MDX or TS content)
  resume/
    page.tsx                   # Embedded PDF + download
  contact/
    page.tsx                   # Contact links + CTA
  search/
    page.tsx                   # Global search page
    layout.tsx                 # Search layout
    loading.tsx                # Search loading state
  api/
    search/
      route.ts                 # Search API endpoint

components/
  layout/
    Navbar.tsx
    Footer.tsx
    Container.tsx
    NavLink.tsx
  projects/
    ProjectCard.tsx
    ProjectMeta.tsx
    ProjectNavigation.tsx
  blog/
    BlogList.tsx
    ContactCTA.tsx
    EditButton.tsx
    RelatedLinks.tsx
  admin/
    AdminLoginModal.tsx
    AdminProvider.tsx
  common/
    BadgeRow.tsx
    SectionHeading.tsx
    SearchableBadge.tsx
    ChipIcon.tsx
    ChipMark.tsx
  motion/
    NodeGraph.tsx
  mdx/
    MDXComponents.tsx          # custom components allowed inside MDX

content/
  projects/
    data-duel.mdx
    divvy-van.mdx
    id3-decision-tree.mdx
    n2-water-ecommerce-storefront.mdx
    personal-portfolio-website.mdx
    relational-database-design-normalization.mdx
    restaurant-decision-tree.mdx
    systems-programming-labs.mdx
    tender-heart-vintage.mdx
    thrive-vineyard-website.mdx
    tracking-shifts-climate-change-bird-migration.mdx
    data-wrangling-analysis-toolkit.mdx
  blogs/
    blog-1.mdx
    blog-2.mdx
    blog-3.mdx
    blog-4.mdx
    blog-5.mdx

data/
  experience.ts                # structured experience entries
  coursework.ts                # curated list of courses grouped by theme
  skills.ts                    # skills by category + “proof links” mapping
  site.ts                      # site config, links, SEO defaults

lib/
  content/
    mdx.ts                     # MDX loader/serializer helper
    projects.ts                # read projects, parse frontmatter, build index
    blogs.ts                   # read blogs, parse frontmatter, build index
  search.ts                    # search functionality and indexing
  utils.ts                     # helper utilities
  seo.ts                       # metadata helpers
  design-tokens.ts             # design system tokens

public/
  resume/
    Aiden-Kiefer-Resume.pdf
  images/
    headshot.jpg               # optional
    projects/
      climate-hero.png
      id3-hero.png
      ...

types/
  content.ts                   # TypeScript types for Project, Experience, Course

---

## 4) Content Model

### 4.1 Project MDX frontmatter
Each `content/projects/*.mdx` contains frontmatter like:

---
title: "Climate Change & Bird Migration"
slug: "climate-change-bird-migration"
date: "2025-08-04"
featured: true
tags: ["Data Science", "ML", "Python"]
stack: ["Python", "pandas", "scikit-learn"]
repoUrl: "https://github.com/<user>/<repo>"
liveUrl: ""
summary: "Regression models to learn climate trends and forecast migration impacts through 2050."
highlights:
  - "Trained on 1961–2005, validated on 2005–2024, forecasted to 2050"
  - "Used eBird + NOAA data, built evaluation pipeline"
---

MDX body is the case study:
- Problem / Context
- Approach / Design
- Key Decisions / Tradeoffs
- Results
- What I’d Improve
- Links + references

### 4.2 Experience data module
`data/experience.ts` exports an array of:
- company, role, location, dates
- bullets (impact-focused)
- tech stack
- links

### 4.3 Coursework data module
`data/coursework.ts` exports curated groups:
- Core CS
- Systems
- Data/ML
- Software & UI
- Math support

Each course entry:
- code (CS 401), name, 1–2 “skills learned”
- link to projects that demonstrate it (by project slug)

### 4.4 Skills data module (proof-driven)
`data/skills.ts` groups:
- Languages
- Systems
- Web
- Data/ML
- Tools

Each skill optionally links to:
- projects and/or experience entries that prove it

---

## 5) Rendering Strategy

### 5.1 Projects listing
- At build time, scan MDX files → create `ProjectIndex[]`
- UI supports filters by tag + search
- “Featured” projects shown on Home

### 5.2 Project detail
- `app/projects/[slug]/page.tsx` loads the MDX content for that slug
- Uses `MDXRemote` or Next’s MDX integration
- Uses `rehype-pretty-code` for syntax highlighting

### 5.3 SEO & metadata
- Per-page metadata via Next `generateMetadata()`
- Titles like: `Project Title | Aiden Kiefer`
- OpenGraph: default site image + optional per-project OG endpoint

---

## 6) UI/UX Guidelines (recruiter-friendly)
- Simple nav + clear CTAs: “Resume”, “Projects”, “Contact”
- Projects: skimmable cards; each detail page has a quick summary + “Highlights”
- Avoid walls of text; use sections and callouts
- Keep motion subtle (Framer optional later)

---

## 7) “Phase 1” Implementation Checklist (build the bones)
1. ✅ Next.js app (App Router + TS)
2. ✅ TailwindCSS v4 with custom design tokens
3. ✅ Layout: Navbar + Footer + Container
4. ✅ All routes implemented (homepage, projects, blog, experience, strengths, resume, contact, search)
5. ✅ Projects system with MDX loader, index builder, grid, and detail pages
6. ✅ Blog system with MDX loader, listing, and detail pages
7. ✅ Resume page with embedded PDF
8. ✅ Coursework & Experience integrated into `/experience` page
9. ✅ Search functionality with API route
10. ✅ Design system with tokens

### 🔄 In Progress / Future
- Admin authentication and protected routes
- Phase 2: Private knowledge base (`/me/*` routes)

---

## 8) Stretch Goals (Phase 2+)
- Interactive code embeds:
  - Option A: Sandpack for React snippets
  - Option B: “Open in StackBlitz/CodeSandbox” buttons per project
- Dynamic OG images for sharing
- Analytics + event tracking
- Dark mode toggle

---

## 9) Notes about content tone
- Projects and experience should emphasize:
  - design decisions
  - tradeoffs
  - outcomes/impact
  - learning and iteration
- Keep everything aligned to SWE/SWE-adjacent roles in Chicago
