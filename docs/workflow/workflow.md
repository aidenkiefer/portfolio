# Agent workflow — Portfolio (aidenkiefer.com)

**Use this as the entrypoint for agentic work in this repo.**

---

## How we work

Bounded, cost-efficient: minimal persistent context, specs read once per session, every task is a ticket with Allowed Files and budgets.

- **Execution rules:** [execution-rules.md](./execution-rules.md) — session strategy, budgets, constraints, where things are
- **Ticket template:** [ticket-template.md](./ticket-template.md) — use for every agent task
- **Skill map:** [skill-map.md](./skill-map.md) — workflow process skills (Layer 1); ticket names the pack
- **Task-type reference map:** [task-type-reference-map.md](./task-type-reference-map.md) — which docs and domain skills to load for each code task type
- **Context flow:** [context-flow.md](./context-flow.md) — how context flows through this project's workflow lifecycle (educational)
- **Context audit:** [context-audit.md](./context-audit.md) — quarterly guide for keeping reference docs accurate
- **Release feed:** [release-feed.md](./release-feed.md) — refresh `data/release-feed.ts` from `workflow-core/project-progress/` for the Experience page

**Specs** live in `docs/plans/specs/` (read-only; summarize once per session). **Tickets** live in `docs/plans/tickets/` (including nested folders per initiative). Do not re-attach full specs every turn; use a Spec Summary when batching 3–8 tickets.

**Non-negotiable repo rules** also live in root `CLAUDE.md` (Cursor) and `.claude/CLAUDE.md` (Claude Code). When they conflict with generic workflow advice, follow those files.

Human-only philosophy: `docs/workflow/philosophy.md` (do not load into agent context).

---

## Session start ritual

Use when batching 3–8 related tickets that share the same spec(s). Skip for single one-off tasks.

### When to use

- You are working through a sprint or multi-ticket chunk of related work
- Multiple tickets reference the same spec or design doc
- You want to amortize the cost of reading a large spec across several tickets

### When to skip

- Single one-off task with clear Allowed Files and no spec context needed
- The ticket provides its own 1–2 read-only references
- A short manual context note at the start of the message covers it

---

### Steps

**1. Project memory is already loaded.**
Root `CLAUDE.md` and/or `.claude/CLAUDE.md` define mission and hard constraints. Do not load more global instructions unless the ticket requires it.

**2. Read the spec(s) for the next chunk of work — once.**
Typically from `docs/plans/specs/` or the current sprint doc in `docs/plans/`.
Read each spec **once**. Do not re-read it for every ticket.

**3. Produce a Spec Summary (10–20 lines).**
Extract:
- Constraints and invariants (design system, data shapes, API contracts)
- Success metrics or definition of done for the chunk
- Key reference quotes — snippets to re-anchor on if needed

**4. Confirm scope.**
- Current sprint or phase
- Allowed Files defaults and budget defaults: max 8 file reads, 6 grep/glob, 12 tool calls (from ticket-template.md)

**5. Run tickets from the summary.**
- Use Spec Summary + each ticket (Task, Allowed Files, Read-only references, Budget, Done criteria)
- Do not re-attach full spec(s) to every message
- If a ticket needs a detail not in the summary, re-anchor to one small quote rather than reloading the whole doc

**6. At context boundary.**
- Use /clear (or new thread) when switching to unrelated work
- Optionally save a short session summary (decisions, modified files) to `docs/plans/summaries/`
