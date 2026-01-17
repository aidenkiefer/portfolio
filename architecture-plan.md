# Personal Portfolio Website — Architecture Plan (Next.js + TS + MDX)

Owner: Aiden Kiefer
Goal: Recruiter-friendly personal site for SWE/SWE-adjacent roles in Chicago
Primary content pillars: Projects, Experience, Coursework/Skills, Strengths (“How I Think”), Resume

---

## 1) Tech Stack (recommended)
- Framework: Next.js (App Router) + TypeScript
- Styling: TailwindCSS
- UI: shadcn/ui (Radix primitives) + lucide-react icons
- Content:
  - MDX for long-form pages (project case studies, “How I Think”)
  - JSON/TS data modules for structured content (experience, coursework, skills)
- Code highlighting: Shiki via `rehype-pretty-code`
- Analytics (optional later): Plausible or PostHog
- Hosting: Vercel

**Why this stack**
- App Router: best SEO + routing + easy metadata
- MDX: lets us write project pages as “case studies” and embed custom React components
- shadcn/ui: clean + professional, faster than building from scratch

---

## 2) Information Architecture (Routes)
Top nav:
- Home: /
- Projects: /projects
- Project detail: /projects/[slug]
- Experience: /experience
- Coursework & Skills: /coursework
- How I Think: /strengths
- Resume: /resume
- Contact: /contact

---

## 3) App Router File Tree (target)
app/
  layout.tsx
  globals.css
  page.tsx                     # Home
  projects/
    page.tsx                   # Projects listing + filters
    [slug]/
      page.tsx                 # Project detail (MDX)
  experience/
    page.tsx                   # Experience timeline/cards
  coursework/
    page.tsx                   # Curated coursework + skills mapping
  strengths/
    page.tsx                   # “How I Think” page (MDX or TS content)
  resume/
    page.tsx                   # Embedded PDF + download
  contact/
    page.tsx                   # Contact links + CTA
  api/
    og/
      route.ts                 # Optional: dynamic OpenGraph images per page

components/
  layout/
    Navbar.tsx
    Footer.tsx
    Container.tsx
  ui/                          # shadcn components live here
  projects/
    ProjectCard.tsx
    ProjectFilters.tsx
    ProjectMeta.tsx
  mdx/
    MDXComponents.tsx          # custom components allowed inside MDX
    CodeBlock.tsx              # if needed beyond rehype-pretty-code
  common/
    BadgeRow.tsx
    Callout.tsx
    SectionHeading.tsx

content/
  projects/
    climate-change-bird-migration.mdx
    id3-decision-tree.mdx
    hospital-database-model.mdx
    allergyassist-codeday.mdx
  pages/
    strengths.mdx              # optional if you want this MDX-authored

data/
  experience.ts                # structured experience entries
  coursework.ts                # curated list of courses grouped by theme
  skills.ts                    # skills by category + “proof links” mapping
  site.ts                      # site config, links, SEO defaults

lib/
  content/
    mdx.ts                     # MDX loader/serializer helper
    projects.ts                # read projects, parse frontmatter, build index
  utils.ts                     # helper utilities
  seo.ts                       # metadata helpers

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
1. Create Next.js app (App Router + TS)
2. Install Tailwind + shadcn/ui
3. Create layout: Navbar + Footer + Container
4. Implement routes (pages) with placeholders
5. Implement Projects:
   - MDX loader
   - project index builder
   - /projects grid
   - /projects/[slug] detail rendering
6. Resume page:
   - embed PDF from `/public/resume/...`
   - download link
7. Add Coursework & Experience from `data/*` modules
8. Add Strengths page content (MDX or TS)

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
