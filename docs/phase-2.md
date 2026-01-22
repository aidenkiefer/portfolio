# Private Knowledge Base + Personal Tools — Plan (for Cursor)

This doc describes an expansion of the portfolio site into two “modes”:

1) **Public Mode (Recruiter-facing)** — portfolio, projects, case studies, blog, resume, contact  
2) **Private Mode (Aiden-only)** — personal notes/docs (math/algorithms/syntax), internal tools (tasks/todo, reminders, calendar views), and a searchable knowledge base

The goal is to keep the public site clean and professional, while giving me a centralized “second brain” that’s fast to access and pleasant to maintain.

---

## 1. Concept Summary

### Public Side (already implemented / in progress)
- Projects + case studies
- Experience
- Coursework
- Strengths/About
- Blog (MDX)
- Contact

### Private Side (new)
Aiden-only area that houses:
- **Personal Notes / Docs / Study Material**
  - math principles (LaTeX)
  - algorithms + data structures notes
  - systems notes (OS, concurrency, memory)
  - database notes (ERDs, normalization, SQL patterns)
  - “cheat sheets” (syntax, commands, patterns)
- **Personal Tools**
  - advanced todo/task system
  - reminders
  - calendar views / planning pages
  - lightweight journaling / weekly review (optional)
- **Search**
  - global search across notes + project writeups + bookmarks
  - tags + categories (reusing the site’s tag system)

Key idea: treat the private side as a **productivity system** built on top of the same design language and content tooling as the portfolio.

---

## 2. Information Architecture

### Routes
Public:
- `/` `/projects` `/projects/[slug]` `/experience` `/coursework` `/strengths` `/blog` `/blog/[slug]` `/contact`

Private (gated):
- `/me` (private home dashboard)
- `/me/notes`
- `/me/notes/[...slug]`
- `/me/tasks`
- `/me/calendar`
- `/me/reminders`
- `/me/search`

### Private Notes Structure (content-first)
Use a folder hierarchy that maps to URLs:

`content/notes/`
- `math/`
  - `calculus/`
  - `linear-algebra/`
  - `probability/`
- `algorithms/`
  - `sorting-searching/`
  - `graphs/`
  - `dynamic-programming/`
- `systems/`
  - `memory/`
  - `processes-threads/`
  - `concurrency/`
- `databases/`
  - `sql-patterns/`
  - `normalization/`
  - `indexing/`
- `career/`
  - `interview-notes/`
  - `resume-notes/`

Each note is MDX with frontmatter:
- `title`
- `slug`
- `dateUpdated`
- `tags` (Stack + Concept tags, same system as projects)
- `visibility: "private"` (or implicit via folder)

---

## 3. LaTeX / Math Support (for notes)

### Preferred approach
- Notes are written in **MDX**
- Enable math rendering with **KaTeX**:
  - `remark-math` + `rehype-katex`
  - allow `$...$` (inline) and `$$...$$` (block)
- Include KaTeX CSS globally

This allows me to write math quickly inside notes:
- inline: `$E = mc^2$`
- block:
  $$
  \hat{y} = \sigma(Wx + b)
  $$

Guideline: keep notes “web-native” (MDX + KaTeX) and only embed PDFs when a note is truly a full document.

---

## 4. Private Access Control (keep it simple)

### Goals
- Private pages must not be indexable
- Private content must not be publicly accessible by URL guessing
- Minimal friction for me to log in

### Options (choose based on deployment comfort)

**Option A: Password gate (simplest)**
- Single password (env var) for `/me/*`
- Works for personal usage, low overhead
- Not as secure as OAuth, but fine if notes avoid sensitive info

**Option B: Auth (recommended long-term)**
- NextAuth (Auth.js) with GitHub provider
- Allow-list only my GitHub account
- Route protection via middleware for `/me/*`

Default recommendation: start with **Option A** to ship quickly, migrate to **Option B** when stable.

Also:
- add `robots.txt` + `X-Robots-Tag: noindex` headers for `/me/*`
- ensure build doesn’t statically expose private MDX content in public routes

---

## 5. Notes + Tools Data Model

### Notes
- Stored as MDX in repo
- Benefits:
  - version-controlled
  - fast
  - no DB required
  - easy to edit in Cursor/VSCode
- Tradeoff:
  - no “live editing” UI unless we add it later

### Tasks / Reminders / Calendar
Two-phase plan:

**Phase 1 (fast / local / repo-based)**
- Store tasks in a simple JSON/MD file:
  - `data/tasks.json`
  - `data/reminders.json`
- Render them with filters, tags, status, priority
- Add quick-edit flows later

**Phase 2 (real persistence)**
- Add a DB (SQLite or Postgres via Prisma)
- Add authenticated CRUD UI:
  - create/edit tasks
  - recurring reminders
  - simple calendar events
- Optional: integrate with Google Calendar later (only if worth it)

---

## 6. Search Plan (Notes + Projects + Blog)

### Phase 1 (static + client-side)
- Build an index at build time:
  - title, slug, tags, headings, excerpt, body text
- Use a lightweight search library (e.g., `flexsearch` or `minisearch`)
- Provide `/me/search` UI:
  - query input
  - filters by category (notes/projects/blog)
  - filter by tags (concept + stack)
  - “recently updated”

### Phase 2 (semantic search / advanced)
- Optional: integrate embeddings later
- Optional: experiment with “Memvid” style memory for personal KB (future)

Important: keep Phase 1 simple and fast; only do semantic search if it adds real value.

---

## 7. Reuse Existing Design Language

Private area should look like the same product, not a separate app:
- same palette (muted navy + brick red)
- same typography (IBM Plex Sans + monospace)
- same layout system
- reuse project tag components and card patterns

Private UI components to reuse:
- Card
- Chip/tag
- Section headers
- Sidebar / table of contents
- Search bar
- “Quick actions” buttons

---

## 8. Dashboard Concept (`/me`)

Private home page should prioritize “at-a-glance” usefulness:
- Search bar (global)
- Recently updated notes
- Top pinned notes
- Tasks summary (Today / This Week)
- Quick links: add note, open tasks, open calendar
- Optional: “Focus” mode / weekly review

---

## 9. Content Guidelines (for my notes)

- Notes should be **practical and quick to scan**
- Prefer:
  - short sections
  - examples
  - code blocks
  - small LaTeX expressions
- Keep deep derivations in a separate “full writeup” note or embedded PDF
- Use tags aggressively so search + browsing stays clean

---

## 10. Implementation Checklist (Cursor)

1) Add `/me/*` route group
2) Add access control (Option A password gate first)
3) Add Notes system:
   - MDX loader for `content/notes/**`
   - note index page + note detail page
   - category sidebar + table of contents
4) Add KaTeX support in MDX
5) Add Search (Phase 1 static index)
6) Add Tasks page using JSON (Phase 1)
7) Add Dashboard page with “recent + pinned + tasks summary”
8) Add noindex controls for private routes

---

## 11. Future Ideas (only if useful later)

- “Snippet library” page for reusable code patterns
- “Interview prep” note series (DSA/system design/behavioral)
- Notebook integration:
  - embed Colab notebooks as read-only
  - export to markdown and store locally for offline
- Personal analytics:
  - streaks for studying
  - weekly progress snapshots
- Semantic search experiments once the KB is large enough

---

## Final Intent

Public site is the resume/portfolio.
Private site is the workspace.

Both should share the same design language and content tooling, and private features should be built incrementally so they never block portfolio improvements.
