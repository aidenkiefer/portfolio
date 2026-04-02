# Portfolio (aidenkiefer.com) — Project memory

**Mission:** Personal portfolio and services site for SWE/SWE-adjacent roles: showcase projects and blog (MDX), experience and skills, productized services, contact and resume, optional AI chatbot with RAG on site content.

## How to work

- **Bounded runs:** Every task is a ticket (`docs/workflow/ticket-template.md`). Edit only Allowed Files listed in the ticket.
- **Targeted reads:** Max 8 file reads, 6 grep/glob, 12 tool calls per ticket. Stop and ask before exceeding.
- **Root `CLAUDE.md`:** Non-negotiable execution rules for this repo (implementation-only mode, no shell by default, skills only when ticket mandates). Always respect it; this file adds workflow pointers only.
- **Specs once:** Read spec once per session → Spec Summary (10–20 lines) → run tickets from the summary.
- **Lazy-load skills:** Ticket names the skill pack (0–2 core, 0–2 domain). Do not load the full skill registry unless the ticket requires it.

## Hard constraints

- **Root CLAUDE.md overrides:** Implementation agent role; no shell/commands unless ticket overrides; no GitHub git operations; read/edit only ticket-listed files; skills only when ticket has “Mandatory skill usage.”
- Edit only files in the Allowed Files list. Stop and ask if you need an unlisted file.
- Do not run build, dev, test, or lint to verify unless the ticket explicitly allows it.

## Project map

- **Workflow:** `docs/workflow/` — workflow.md, execution-rules.md, ticket-template.md, skill-map.md, task-type-reference-map.md, context-flow.md
- **Specs:** `docs/plans/specs/` (read-only; summarize once per session)
- **Tickets:** `docs/plans/tickets/` (and nested `chatbot/`, `chatbot-v2/`, `services/`, `services-pages/`, `service-pages-enrichment/`)
- **Progress:** `docs/plans/PROGRESS.md`
- **Design system:** `docs/design-guidelines.md`, `docs/design-refinement.md`, `lib/design-tokens.ts`, `app/globals.css`
- **Codebase map:** `docs/index.md`
- **Chatbot ops + architecture (human):** `docs/chatbot-feature.md`, `app/api/chat/route.ts`
- **External skills library (optional):** `~/projects/skills/` when using workflow-core skill names from the task-type map
