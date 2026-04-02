# Portfolio (aidenkiefer.com) — Progress

Tracks versions, milestones, and completed work. Update when shipping features or closing ticket batches. Many dates below are **inferred** from docs and repo layout; verify when precision matters.

---

## Version scheme

| Level | Meaning | Example |
|-------|---------|---------|
| **Major (X.0.0)** | New major surface or architectural shift | v2.0.0 = Chatbot v2 shipped end-to-end |
| **Minor (1.X.0)** | Feature tracks: services, chatbot, large content systems | v1.3.0 = AI chatbot + RAG live |
| **Patch (1.0.X)** | Fixes, polish, single-ticket doc or UI tweaks | v1.2.1 = CSS parse error fix |

---

## Status lifecycle (milestone order)

Not started → Concept → Spec → Tickets → In progress → Done

---

## Milestones and sprints

| Version | Milestone / sprint | Status | Completed | Remaining | Spec / plan | Summary / notes |
|---------|---------------------|--------|-----------|-----------|-------------|-----------------|
| **v1.0.0** | Core portfolio site (Next.js App Router, MDX projects/blog, experience, contact, search, resume, strengths, design system) | Done | date unknown | 0 | `docs/index.md`, `CLAUDE.md` | Base routes; `lib/design-tokens.ts`, IBM Plex, warm palette; Vercel deploy. |
| **v1.1.0** | Resume / coursework / strengths / site data alignment | Done | date unknown | 0 | `docs/UPDATE_SUMMARY.md` | Real data in `data/experience.ts`, `data/skills.ts`, `data/coursework.ts`, `data/site.ts`; home + strengths + resume updates. |
| **v1.2.0** | Services landing + service subpages | Done | date unknown | 0 | `docs/plans/specs/services-landing-spec.md`, `docs/plans/specs/services-pages-spec.md` | `/services` and `/services/*` pages (see `app/services/`); ties to `data/services.ts` and service specs. |
| **v1.3.0** | AI chatbot with RAG (Supabase sessions, API, service-page widget) | Done | date unknown | 0 | `docs/plans/specs/chatbot-feature-spec.md`, `docs/chatbot-feature.md` | `app/api/chat/route.ts`; human runbook in `docs/chatbot-feature.md`; tickets under `docs/plans/tickets/chatbot/`. |
| **v1.4.0** | Chatbot v2 (logging, retrieval, UX, eval) | Not started → In progress (specs + tickets) | — | See chatbot-v2 tickets | `docs/plans/specs/chatbot-v2-spec.md`, `docs/plans/tickets/chatbot-v2/` | Planning and ticket breakdown present; completion not inferred. |
| **v1.5.0** | Service pages content enrichment | Planned | — | Enrichment tickets | `docs/plans/specs/service-pages-enrichment-spec.md`, `docs/plans/tickets/service-pages-enrichment/` | Spec and ticket set; implementation scope to confirm per page. |

---

## Patch-level completed work (non-sprint)

| Version | Patch work item | Completed | Area | Notes / reference |
|---------|-----------------|-----------|------|---------------------|
| **v1.2.1** | CSS parse error fix (ticketed) | date unknown | CSS / build | `docs/plans/specs/css-parse-error-spec.md`, `docs/plans/tickets/fix-css-parse-error.md` |
| **v1.3.1** | Chatbot docs (issues, expansion, cache notes) | date unknown | Docs | `docs/chatbot-issues-and-fixes.md`, `docs/chatbot-expansion.md`, `docs/chatbot-cache-invalidation.md` |
| **v1.3.2** | Chatbot v2 planning artifacts | 2026-02 (design/plan dates in filenames) | Docs / plans | `docs/plans/2026-02-13-chatbot-caching-design.md`, `docs/plans/2026-02-13-chatbot-minimize-animation-design.md`, etc. |
| **v1.0.1** | Workflow + agent docs bootstrap | 2026-04-02 | Meta | `docs/workflow/*`, `AGENTS.md`, `.claude/CLAUDE.md`, this file — Mode A from `workflow-core` |

---

## Planned / in-progress (backlog)

| Type | Item | Source / reference | Notes |
|------|------|--------------------|-------|
| **Future phase** | Chatbot v2 full implementation | `docs/plans/specs/chatbot-v2-spec.md`, `docs/plans/tickets/chatbot-v2/README.md` | Tickets 01–11 define slices; status per ticket not batch-verified. |
| **Partial / planned** | Service page enrichment rollout | `docs/service-pages-enrichment.md`, `docs/plans/tickets/service-pages-enrichment/` | Align content MDX with enrichment spec. |
| **Not started** | Uber SPM resume mining | `docs/plans/uber-spm-resume-mining.md` | Standalone plan doc. |
| **Not started** | Role prep | `docs/plans/role-prep.md` | Standalone plan doc. |
| **Deferred / meta** | Claude workflow optimization notes | `docs/plans/claude-workflow-opt.md` | Historical / meta; partially superseded by `docs/workflow/`. |
| **Fix / patch** | Any open chatbot-v2 or enrichment ticket | `docs/plans/tickets/` | Use ticket READMEs as source of truth for “done.” |

---

## How to update this doc

1. **Milestone done:** Set Status **Done**, add **Completed** date, link spec + summary if any.
2. **Small ship:** Add a row under **Patch-level completed work** or a bullet in the nearest milestone notes.
3. **New initiative:** Add a milestone row or backlog row with spec + ticket folder paths.
4. After **workflow-core Mode B**, refresh **Last setup** in `docs/workflow/README.md` if templates changed.

---

## Index — specs (`docs/plans/specs/`)

| Spec | Description |
|------|-------------|
| `chatbot-feature-spec.md` | Chatbot feature scope and behavior |
| `chatbot-rag-ux-spec.md` | RAG UX |
| `chatbot-v2-spec.md` | Chatbot v2 / retrieval / observability direction |
| `services-landing-spec.md` | Services landing page |
| `services-pages-spec.md` | Service subpages |
| `service-pages-enrichment-spec.md` | Enrichment of service page content |
| `css-parse-error-spec.md` | CSS parse error fix |

## Index — key plan / ops docs (`docs/`)

| Doc | Scope |
|-----|--------|
| `chatbot-feature.md` | Operator setup, current chatbot behavior |
| `chatbot-v2-implementation.md` | v2 implementation notes |
| `chatbot-v2-eval-metrics.md` | Eval metrics |
| `ai-chatbot.md` | Additional chatbot context |
| `skills-catalog.md` | Skills catalog reference |
| `UPDATE_SUMMARY.md` | Content/data alignment summary |

## Index — ticket folders (`docs/plans/tickets/`)

| Folder | Scope |
|--------|--------|
| `chatbot/` | Initial chatbot implementation tickets |
| `chatbot-v2/` | v2 slices |
| `services/` | Early services tickets |
| `services-pages/` | Service page build-out |
| `service-pages-enrichment/` | Enrichment tickets |
| `fix-css-parse-error.md` | CSS fix (single ticket file) |

---

*Retrospective entries inferred from documentation and file layout; “Done” for v1.4.0 / enrichment not claimed without ticket review.*
