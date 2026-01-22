# TODO

## Authentication & Access Control

- [ ] Implement + Test admin login to reach the other side of the site

## Content & Pages

- [ ] Combine/optimize existing pages (the goal is to have a homepage, resume page, projects, blog, and experience/about me)
- [ ] Write copy

## Experience & Education

- [ ] Optimize layout of experience/education sections
- [ ] Functionality for tags in experience page

## Phase 2: Private Knowledge Base + Personal Tools

### Access Control & Infrastructure

- [ ] Add `/me/*` route group
- [ ] Add access control (Option A: password gate first, Option B: NextAuth with GitHub later)
- [ ] Add noindex controls for private routes (`robots.txt` + `X-Robots-Tag: noindex` headers)
- [ ] Ensure build doesn't statically expose private MDX content in public routes

### Notes System

- [ ] Create `content/notes/` folder structure (math, algorithms, systems, databases, career)
- [ ] Add MDX loader for `content/notes/**`
- [ ] Create note index page (`/me/notes`)
- [ ] Create note detail page (`/me/notes/[...slug]`)
- [ ] Add category sidebar + table of contents for notes
- [ ] Add KaTeX support in MDX (remark-math + rehype-katex for LaTeX rendering)

### Search System

- [ ] Build static search index at build time (title, slug, tags, headings, excerpt, body text)
- [ ] Integrate lightweight search library (flexsearch or minisearch)
- [ ] Create `/me/search` UI with:
  - Query input
  - Filters by category (notes/projects/blog)
  - Filter by tags (concept + stack)
  - "Recently updated" filter

### Personal Tools

- [ ] Create Tasks page using JSON (Phase 1: `data/tasks.json`)
- [ ] Add task filters, tags, status, priority
- [ ] Create Reminders page using JSON (Phase 1: `data/reminders.json`)
- [ ] Create Calendar page (`/me/calendar`)
- [ ] Add quick-edit flows for tasks (later)

### Dashboard

- [ ] Create private home dashboard (`/me`)
- [ ] Add global search bar
- [ ] Display recently updated notes
- [ ] Display top pinned notes
- [ ] Add tasks summary (Today / This Week)
- [ ] Add quick links: add note, open tasks, open calendar
- [ ] Optional: "Focus" mode / weekly review

### Design & Reusability

- [ ] Reuse existing design language for private area (same palette, typography, layout)
- [ ] Reuse project tag components and card patterns
- [ ] Create private UI components (Card, Chip/tag, Section headers, Sidebar, Search bar, Quick actions)

### Future Enhancements (Phase 2 - Real Persistence)

- [ ] Add database (SQLite or Postgres via Prisma)
- [ ] Add authenticated CRUD UI for tasks
- [ ] Add recurring reminders functionality
- [ ] Add simple calendar events
- [ ] Optional: integrate with Google Calendar
- [ ] Optional: semantic search / embeddings integration
- [ ] Optional: "Snippet library" page for reusable code patterns
- [ ] Optional: "Interview prep" note series
- [ ] Optional: Notebook integration (Colab notebooks as read-only)
- [ ] Optional: Personal analytics (streaks, weekly progress snapshots)
