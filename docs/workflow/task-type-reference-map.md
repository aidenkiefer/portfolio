# Task Type → Reference Documents Map

**Purpose:** Consolidated mapping of task types to their required reference documents, domain skills, agent types, and constraints. Use this to determine which context docs to load and which skills to invoke for any given code task.

**For:** Agents executing tickets; humans writing specs and tickets.

**Note:** Portfolio paths are filled below. `[PROJECT-SPECIFIC]` holds this repo’s extensions (services, chatbot). Re-run workflow-core **Mode B** sync when templates change.

---

## How to Use This Map

1. **Identify your task type** from the tables below
2. **Load Required References** first; load Optional References only if relevant or budget allows
3. **Prefer Small (S) docs over Large (L)** when budget is tight — load HIGH-priority docs before MEDIUM/LOW
4. **Apply the listed skills** from the "Skills" column
5. **Stay within File Scope** — ticket Allowed Files narrow this further
6. **If the ticket specifies an Agent type**, use that agent's reference bundle from the sub-agent routing table

### Reading the table

| Column | Meaning |
|---|---|
| **Task Type** | Category of work being done |
| **Examples** | Concrete examples of this task type |
| **Required References** | Must-read docs for this task (load first) |
| **Optional References** | Read when relevant or within budget |
| **File Scope** | Typical code location (ticket Allowed Files is binding) |
| **Agent type** | Suggested sub-agent routing label |
| **Skills** | Recommended skills to invoke (from `~/projects/skills/`) |
| **Constraints** | Key rules that apply to this task type |
| **Priority** | Highest-priority doc to load first: HIGH / MEDIUM / LOW |
| **Size** | Typical primary doc size: S / M / L |

### Priority and size definitions

- **HIGH:** Must-read first; primary source of truth for the task.
- **MEDIUM:** Read when relevant or after HIGH; supports primary.
- **LOW:** Load only if budget allows or for examples/parity.
- **S (Small):** < ~150 lines / < ~500 tokens.
- **M (Medium):** ~150–500 lines.
- **L (Large):** > ~500 lines.

---

## Verified Skills (from `~/projects/skills/`)

Use these confirmed skill names in tickets and this map. Do not invent skill names — verify existence under `~/projects/skills/` (or the mirrored `.claude/skills/` tree in this repo) before adding.

### Core workflow process skills (Layer 1 — see `skill-map.md`)
`brainstorming` · `writing-plans` · `executing-plans` · `test-driven-development` · `systematic-debugging` · `verification-before-completion` · `requesting-code-review` · `receiving-code-review` · `using-git-worktrees` · `finishing-a-development-branch` · `dispatching-parallel-agents` · `subagent-driven-development` · `writing-skills`

### Domain skills (use in task rows below)
`frontend-design` · `ui-ux-pro-max` · `web-artifacts-builder` · `backend-dev-guidelines` · `webapp-testing` · `react-best-practices`

*Project-specific domain skills (verify presence in `~/projects/skills/` before using):*
`copywriting` · `content-creator` · `shopify-development` · `brand-guidelines` · `mcp-builder`

---

## Sub-Agent Routing

When a ticket sets `Agent type: <type>`, use this table to load the right reference bundle and skills.

| Agent Type | Load these references | Load these skills |
|---|---|---|
| `frontend-agent` | `docs/design-guidelines.md`, `docs/design-refinement.md` | `frontend-design`, `brainstorming` |
| `backend-agent` | `docs/index.md`, relevant service or API doc | `backend-dev-guidelines` |
| `copywriting-agent` | `docs/design-guidelines.md`, relevant spec in `docs/plans/specs/` | `brainstorming`, `copywriting` |
| `debugging-agent` | `docs/index.md`, relevant troubleshooting doc | `systematic-debugging` |
| `docs-agent` | `docs/index.md`, `docs/workflow/workflow.md` | `writing-plans` |
| `security-agent` | `docs/index.md`, auth or security doc | `systematic-debugging` |
| `data-agent` | Schema doc, `docs/index.md` | `backend-dev-guidelines`, `test-driven-development` |
| `testing-agent` | Testing guide or guidelines doc | `test-driven-development`, `webapp-testing` |
| `chatbot-agent` | `docs/chatbot-feature.md`, `docs/plans/specs/chatbot-feature-spec.md` | `rag-engineer`, `backend-dev-guidelines`, `systematic-debugging` |

---

## Task Type Reference Map

### 1. Copy Writing & Content

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Marketing Copy** | Landing pages, hero sections, product descriptions | `docs/design-guidelines.md`, relevant spec in `docs/plans/specs/` | `docs/UPDATE_SUMMARY.md`, relevant spec | Marketing / content pages | `copywriting-agent` | `brainstorming`, `copywriting` | Follow brand voice; check for prohibited claims | HIGH | M |
| **Long-form Content** | Blog posts, articles, guides, newsletters | `docs/design-guidelines.md`, relevant spec in `docs/plans/specs/` | `docs/UPDATE_SUMMARY.md` | Blog / articles directory | `copywriting-agent` | `copywriting`, `content-creator` | Follow brand voice; verify factual claims | HIGH | M |
| **Product Copy** | Descriptions, feature callouts, benefit claims | `docs/design-guidelines.md`, relevant spec in `docs/plans/specs/` | `data/services.ts`, `docs/plans/specs/` | Product pages | `copywriting-agent` | `copywriting` | Use approved language; follow claim guidelines | HIGH | M |
| **Support / FAQ** | FAQ pages, help center, onboarding copy | `docs/design-guidelines.md`, relevant spec in `docs/plans/specs/` | `docs/UPDATE_SUMMARY.md` | FAQ / support pages | `copywriting-agent` | `copywriting` | Clear and concise; no prohibited claims | MEDIUM | M |

---

### 2. UI Components & Page Design

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Page Design** | New pages, landing pages, full-page layouts | `docs/design-guidelines.md` | `docs/design-refinement.md`, relevant spec | Page components (`app/**/page.tsx`) | `frontend-agent` | `brainstorming`, `frontend-design` | Use design tokens; follow layout system | HIGH | M |
| **UI Components** | Buttons, cards, modals, forms, dropdowns | `docs/design-guidelines.md` | `docs/design-refinement.md` | Component library | `frontend-agent` | `frontend-design` | Use design tokens; no hardcoded colors/spacing | HIGH | M |
| **Design Parity** | Match app UI to reference design, static site, or Figma | `docs/design-guidelines.md`, reference files (read-only) | Relevant spec | App components | `frontend-agent` | `frontend-design` | Do not edit reference files; replicate patterns only | HIGH | M |
| **Responsive / Mobile** | Mobile layouts, breakpoints, touch targets | `docs/design-guidelines.md` | Mobile optimization doc | All UI files | `frontend-agent` | `frontend-design`, `ui-ux-pro-max` | Mobile-first; 44px min touch targets | HIGH | M |
| **Animations** | Entry animations, hover effects, transitions | `docs/design-guidelines.md` | Animation guidelines | UI components | `frontend-agent` | `frontend-design` | Respect `prefers-reduced-motion`; use transform/opacity | MEDIUM | M |
| **MDX / Content Rendering** | Rich text, code blocks, math, diagrams | `docs/index.md` | MDX plugin config | Content rendering components | `frontend-agent` | `frontend-design`, `react-best-practices` | Test rendering edge cases; sanitize inputs | MEDIUM | M |

---

### 3. Backend & API Development

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **API Routes** | REST endpoints, webhooks, handlers, serverless functions | `docs/index.md` | Relevant service doc, spec | `api/` or `app/api/` directory | `backend-agent` | `backend-dev-guidelines` | Follow error handling patterns; log errors; validate inputs | HIGH | L |
| **Service Layer** | Business logic, data access services, integrations | `docs/index.md` | Relevant service doc, spec | `services/` or `lib/` directory | `backend-agent` | `backend-dev-guidelines` | No direct DB in UI; all writes through service layer | HIGH | L |
| **Data Fetching** | Server-side fetching, caching, loaders, SWR | `docs/index.md` | Relevant spec | Pages, loaders, hooks | `backend-agent` | `backend-dev-guidelines`, `react-best-practices` | Cache appropriately; handle loading and error states | MEDIUM | L |
| **Third-party Integration** | External APIs, webhooks, OAuth, SDK wrappers | `docs/index.md`, integration-specific doc | Relevant spec | `lib/` or `services/` | `backend-agent` | `backend-dev-guidelines` | Handle rate limits, retries, errors; never log secrets | HIGH | M |
| **Auth & Sessions** | OAuth flows, session management, token storage | `docs/index.md`, auth doc | Security guidelines | Auth files, middleware | `backend-agent` | `backend-dev-guidelines`, `systematic-debugging` | Secure token storage; handle expiry; redirect correctly | HIGH | L |

---

### 4. Data & Schema

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Schema / Migration** | New tables, columns, relations, indexes | Schema or data model doc | Migration guide, spec | Schema files (`schema.prisma`, SQL, etc.) | `data-agent` | `test-driven-development` | Review migration plan; test rollback; no destructive ops without approval | HIGH | M |
| **Seed Data** | Initial data, fixtures, test data | Schema doc | Spec | Seed files | `data-agent` | — | Idempotent; safe for re-runs | MEDIUM | S |
| **Data Access Patterns** | Queries, filters, aggregations, pagination | Schema doc, `docs/index.md` | Performance guide | `services/` or `lib/` | `data-agent` | `backend-dev-guidelines` | Index appropriately; avoid N+1 queries | HIGH | M |
| **Event-Sourced Writes** | Append events to event log; derive state | Architecture doc, event schema doc | Spec | Event services, state derivation | `data-agent` | `backend-dev-guidelines` | Immutable events; never mutate or delete event history; derive state | HIGH | M |

---

### 5. Testing & Quality

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Unit Tests** | Component tests, utility tests, service tests | Testing guidelines or guide | Relevant implementation file | `__tests__/` or co-located test files | `testing-agent` | `test-driven-development` | Test edge cases; maintain coverage threshold | HIGH | M |
| **Integration / E2E Tests** | User flows, API integration, critical paths | Testing guidelines, `docs/index.md` | E2E guide | Test files | `testing-agent` | `test-driven-development`, `webapp-testing` | Test critical paths; use stable selectors | MEDIUM | M |
| **Security Tests** | Auth, input validation, CORS, rate limiting | Testing guidelines, `docs/index.md` | Security doc | Test files | `security-agent` | `test-driven-development` | Test security boundaries; validate inputs | HIGH | M |

---

### 6. Deployment & Infrastructure

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Deployment** | Deploy to production, staging, env var config | Deployment guide, deployment checklist | `docs/index.md` | Deployment config, CI | `debugging-agent` | `verification-before-completion` | Verify env vars; test critical paths after deploy | HIGH | M |
| **Local Setup** | Dev environment, service connections, env config | Local setup guide, env vars doc | `docs/index.md` | `.env`, config files | `debugging-agent` | — | Follow setup steps; verify connections | MEDIUM | M |
| **Build Config** | Build files, workspace config, bundler, monorepo | `docs/index.md` | Quick start guide | Build config files | `debugging-agent` | — | Verify outputs; check all environments | MEDIUM | S |

---

### 7. Performance & Optimization

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Image / Asset Optimization** | Format conversion, lazy loading, compression | Performance guide, `docs/design-guidelines.md` | Spec | UI files | `frontend-agent` | `frontend-design`, `react-best-practices` | Respect aspect ratios; use native lazy loading or framework equivalent | HIGH | M |
| **Core Web Vitals** | LCP, CLS, FID/INP improvements | Performance guide | `docs/index.md` | All | `frontend-agent` | `react-best-practices` | Measure before/after; target specific metric | MEDIUM | M |
| **Bundle Optimization** | Code splitting, tree shaking, lazy loading | Performance guide | — | Build config, components | `frontend-agent` | `react-best-practices` | Use dynamic imports; analyze bundle size | MEDIUM | M |

---

### 8. CSS & Styling

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **CSS Refactor** | Inline→class, cleanup, token adoption | `docs/design-guidelines.md` | Refactor plan, spec | Style files, components | `frontend-agent` | `frontend-design` | Maintain visual parity; use design tokens | HIGH | M |
| **Design Tokens** | Color variables, typography scale, spacing system | `docs/design-guidelines.md` | — | Token / theme files | `frontend-agent` | `frontend-design` | Consistent naming; no hardcoded values | HIGH | M |
| **Responsive Design** | Mobile layouts, breakpoints, grid systems | `docs/design-guidelines.md` | Mobile optimization doc | Style / component files | `frontend-agent` | `frontend-design`, `ui-ux-pro-max` | Mobile-first; min touch targets | HIGH | M |

---

### 9. Workflow & Planning

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Spec Writing** | Feature specs, design docs, planning docs | `docs/workflow/ticket-template.md`, `docs/workflow/execution-rules.md` | Relevant architecture doc | `docs/plans/specs/` | `docs-agent` | `writing-plans`, `brainstorming` | Keep specs focused; list all reference docs; set clear success criteria | HIGH | S |
| **Ticket Writing** | Create bounded tickets from specs | `docs/workflow/ticket-template.md` | Relevant spec | `docs/plans/tickets/` | `docs-agent` | `writing-plans` | Set Allowed Files, budgets, done criteria; name skill pack | HIGH | S |
| **Context Audit** | Review docs for accuracy and consistency | `docs/workflow/context-audit.md` | — | `docs/` | `docs-agent` | — | Follow audit checklist; document findings; create tickets for issues | MEDIUM | M |
| **Session Hydration** | Read spec → Spec Summary → batch tickets | Current sprint spec | — | N/A | — | — | See `workflow.md` for hydration steps | HIGH | S |

---

### 10. Troubleshooting & Debugging

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Build Errors** | Compilation failures, type errors, config issues | `docs/index.md` | Build config | Build config, relevant files | `debugging-agent` | `systematic-debugging` | Identify root cause before fixing; don't suppress errors | HIGH | L |
| **Runtime Errors** | Crashes, unexpected behavior, data issues | `docs/index.md` | Relevant service or API doc | Error location | `debugging-agent` | `systematic-debugging` | Reproduce before fixing; check logs first | HIGH | L |
| **Integration Issues** | API failures, auth problems, connectivity | `docs/index.md`, integration-specific doc | Env vars doc | Integration files | `debugging-agent` | `systematic-debugging` | Check env vars, credentials, and API status first | HIGH | M |
| **Performance Issues** | Slow pages, high memory, slow queries | Performance guide, `docs/index.md` | Profiling tools | Relevant area | `debugging-agent` | `systematic-debugging`, `react-best-practices` | Profile before optimizing; establish baseline | MEDIUM | M |

---

### 11. Refactoring & Code Quality

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Component Refactor** | Extract components, simplify logic, reduce duplication | `docs/design-guidelines.md`, `docs/index.md` | Relevant spec | Component files | `frontend-agent` | `frontend-design` | Maintain behavior; no visual regressions | MEDIUM | M |
| **Type Safety** | Add types, fix `any`, enable strict mode | `docs/index.md` | — | Source files | `backend-agent` | — | No `any` escapes; test after | MEDIUM | M |
| **Accessibility** | ARIA labels, keyboard nav, color contrast | `docs/design-guidelines.md` | Accessibility guidelines | UI components | `frontend-agent` | `frontend-design`, `ui-ux-pro-max` | WCAG AA minimum; test with keyboard | HIGH | M |
| **Code Cleanup** | Remove dead code, unused imports, stale comments | — | — | Relevant files | `backend-agent` | — | Don't change behavior; small targeted changes | LOW | S |

---

### 12. Git & Version Control

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Committing Changes** | Stage and commit completed work | — | — | Staged files | — | `finishing-a-development-branch` | Commit only what was asked; write clear messages | HIGH | S |
| **Pull Requests** | Create, update, review PRs | — | — | PR | — | `requesting-code-review` | Summarize changes; link to tickets; list breaking changes | HIGH | S |
| **Branch / Worktree Management** | Create, isolate, merge, clean up branches | — | — | Git | — | `using-git-worktrees` | Use worktrees for isolated feature work | MEDIUM | S |

---

### 13. Documentation

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Developer Docs** | README, setup guides, architecture docs | `docs/index.md` | `docs/INDEX.md` | `docs/` | `docs-agent` | `writing-plans` | Keep accurate; add to INDEX.md when created | HIGH | M |
| **API Docs** | Endpoint docs, schema docs, integration guides | `docs/index.md` | Relevant service doc | `docs/api/` or equivalent | `docs-agent` | — | Include request/response examples; document errors | HIGH | M |
| **Content / Note Templates** | MDX templates, note structures, content schemas | Architecture doc, content template | — | `content/`, `docs/` | `docs-agent` | `writing-plans` | Follow template structure; validate frontmatter | MEDIUM | S |

---

### 14. Security

| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **Auth Hardening** | Token storage, session management, OAuth security | `docs/index.md`, auth doc | Security guidelines | Auth files | `security-agent` | `systematic-debugging` | Secure storage; handle expiry; no tokens in logs | HIGH | L |
| **Input Validation** | Form validation, API input sanitization, Zod schemas | `docs/index.md` | Security guidelines | API routes, forms | `security-agent` | `backend-dev-guidelines` | Validate at boundaries; sanitize before storage | HIGH | M |
| **API Protection** | Rate limiting, CORS, auth middleware | `docs/index.md` | Security guidelines | API routes, middleware | `security-agent` | `backend-dev-guidelines` | Authenticate all sensitive routes; fail closed | HIGH | M |
| **Secret Management** | Env vars, API keys, credential rotation | Env vars doc, `docs/index.md` | — | `.env`, config | `security-agent` | — | No secrets in code; use env vars; rotate regularly | HIGH | S |

---

## Reference Document Sizes Appendix

Use this to prioritize loading order (load S before M before L when budget is tight):

| Size | Typical examples |
|------|-----------------|
| **S** (< 150 lines) | `docs/workflow/ticket-template.md`, short specs, ticket READMEs |
| **M** (150–500 lines) | `docs/design-guidelines.md`, `docs/index.md` (partial), service specs |
| **L** (> 500 lines) | `docs/chatbot-feature.md` + chatbot specs together, large plan folders |

*This repo uses `docs/index.md` as the primary structure map; there is no separate `ARCHITECTURE.md`.*

---

## Quick Reference: Most Common Task Types

1. **React component or page** → `frontend-agent`, load `docs/design-guidelines.md`, skills: `frontend-design`, `brainstorming`
2. **API route or service** → `backend-agent`, load `docs/index.md`, skills: `backend-dev-guidelines`
3. **Bug or unexpected behavior** → `debugging-agent`, load `docs/index.md`, skills: `systematic-debugging`
4. **Marketing or product copy** → `copywriting-agent`, load `docs/design-guidelines.md`, skills: `copywriting`, `brainstorming`
5. **Write a spec or ticket** → `docs-agent`, load `ticket-template.md`, skills: `writing-plans`, `brainstorming`
6. **Data schema or migration** → `data-agent`, load schema doc, skills: `test-driven-development`
7. **Run a context audit** → `docs-agent`, load `context-audit.md`
8. **Commit or create PR** → skills: `finishing-a-development-branch`, `requesting-code-review`
9. **New multi-step feature** → skills: `brainstorming` first, then `writing-plans`, then `executing-plans`
10. **Third-party integration** → `backend-agent`, load `docs/index.md` + integration doc, skills: `backend-dev-guidelines`

---

## [PROJECT-SPECIFIC] Task Types — Portfolio (aidenkiefer.com)

<!-- PRESERVE: This repo — Next.js portfolio, services pages, MDX, chatbot+RAG -->
| Task Type | Examples | Required References | Optional References | File Scope | Agent type | Skills | Constraints | Priority | Size |
|---|---|---|---|---|---|---|---|---|---|
| **MDX content** | Project case studies (`content/projects/*.mdx`), blog (`content/blogs/*.mdx`) | `docs/design-guidelines.md` | Relevant spec, `docs/UPDATE_SUMMARY.md` | `content/` | `copywriting-agent` | `writing-plans`, `copywriting` | Valid frontmatter; consistent tone with positioning | HIGH | S |
| **Structured site data** | Experience, coursework, skills, services, site meta | `docs/index.md` | `docs/design-guidelines.md` | `data/*.ts` | `backend-agent` | — | Types and exports must stay consistent with consumers | MEDIUM | S |
| **Services marketing pages** | `/services`, `/services/chatbots`, etc. | `docs/plans/specs/services-pages-spec.md` or per-service spec, `docs/design-guidelines.md`, `docs/design-refinement.md` | `data/services.ts` | `app/services/**` | `frontend-agent` | `frontend-design`, `copywriting`, `brainstorming` | Match design tokens; follow service specs | HIGH | M |
| **Chatbot + RAG** | API route, retrieval, prompts, citations, rate limits | `docs/chatbot-feature.md`, `docs/plans/specs/chatbot-feature-spec.md` | `docs/plans/specs/chatbot-v2-spec.md`, `docs/scripts/*.sql` | `app/api/chat/`, chat UI components, `lib/**` chat/RAG | `chatbot-agent` | `rag-engineer`, `backend-dev-guidelines`, `systematic-debugging` | Secrets in env only; respect rate limits; root `CLAUDE.md` may restrict commands | HIGH | L |
| **Global search (client)** | Search index, UI | `docs/index.md` | — | `app/search/`, search lib | `frontend-agent` | `react-best-practices` | Client-side search over curated index; keep performant | MEDIUM | M |
| **Release feed (Experience)** | Curate shipping narrative from workflow-core PROGRESS files | `docs/workflow/release-feed.md` | `~/projects/workflow-core/project-progress/*.md` | `data/release-feed.ts`, `components/experience/ReleaseFeedBoard.tsx` | `docs-agent` | `writing-plans`, `copywriting` | Public-safe copy only; group patches; fill `sourceNote` | HIGH | S |

<!-- /PRESERVE -->
