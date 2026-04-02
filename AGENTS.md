# Portfolio (aidenkiefer.com)

Personal portfolio and services site: Next.js App Router, MDX content, data-driven pages, Vercel deploy; AI chatbot with RAG documented in `docs/chatbot-feature.md`.

## How to work

- **Bounded runs:** Every task is a ticket. Edit only Allowed Files listed in the ticket.
- **Targeted reads:** Max 8 file reads, 6 grep/glob, 12 tool calls per ticket. Stop and ask if you need more.
- **Repo rules:** See root `CLAUDE.md` for this repository’s non-negotiable agent behavior (implementation-only defaults, scope, skills).
- **Specs once:** Read spec once per session → Spec Summary → run tickets from summary.
- **Lazy-load skills:** Ticket names the skill pack. Do not load the full skill registry.

## Hard constraints

- Follow root `CLAUDE.md`: no scope creep beyond ticket; no git/GitHub commands; skills only when mandatory in ticket; typically no shell unless ticket overrides.

## Where to look

- **Workflow:** `docs/workflow/workflow.md`
- **Specs:** `docs/plans/specs/`
- **Tickets:** `docs/plans/tickets/`
- **Progress:** `docs/plans/PROGRESS.md`
- **Design / UX refs:** `docs/design-guidelines.md`, `docs/design-refinement.md`
- **Structure:** `docs/index.md`
