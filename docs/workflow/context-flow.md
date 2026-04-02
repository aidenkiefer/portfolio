# Context Flow Through Agent Workflow — Portfolio (aidenkiefer.com)

**Purpose:** Explain how context documents and guidelines flow through the complete lifecycle of agent work in this project — from startup to ticket execution.

---

## 1. Startup Context (What Agents Receive)

When an agent starts a session in this project, it receives:

### Core project files

- **Root `CLAUDE.md`** — Primary Cursor rules: implementation-only agent, strict Allowed Files, typically no shell/skills unless ticket overrides, no git/GitHub.
- **`.claude/CLAUDE.md`** — Shorter memory + pointers to workflow, specs/tickets paths, design and chatbot docs.

### Workflow documentation (`docs/workflow/`)

- **`workflow.md`** — Entrypoint: specs vs tickets, session ritual, pointers to other docs
- **`execution-rules.md`** — Runtime rules: budgets, constraints, what not to do, where things are
- **`ticket-template.md`** — Bounded job structure for every task
- **`skill-map.md`** — Layer 1 workflow process skills; ticket names the pack
- **`task-type-reference-map.md`** — Domain context: task type → refs, agent type, domain skills (includes `chatbot-agent`)

### What is NOT loaded at startup

- **Full specs** — Read only when a ticket explicitly requires them (session hydration)
- **Design guidelines** — Loaded for UI/copy work (`docs/design-guidelines.md`, `docs/design-refinement.md`)
- **Chatbot docs** — Loaded for `app/api/chat` or RAG work (`docs/chatbot-feature.md`, specs under `docs/plans/specs/`)
- **Full skill registry** — Only skills named in the ticket are loaded

---

## 2. Session Hydration Pattern

See `docs/workflow/workflow.md` → "Session start ritual" for full steps.

**Summary:** When batching 3–8 related tickets on a sprint:
1. Read the relevant spec(s) **once**
2. Produce a Spec Summary (10–20 lines: constraints, invariants, key quotes)
3. Reuse the summary for all tickets in the batch
4. Do not re-read full specs per ticket; re-anchor to quotes only when necessary

---

## 3. Ticket-Driven Context Loading

### Context priority and size

1. **Required References first** — Must-read docs named in the ticket
2. **Small (S) before Large (L)**
3. **HIGH priority before MEDIUM/LOW**
4. **Optional References only if relevant**
5. **Large docs (L) on demand** — e.g. `docs/chatbot-feature.md` + a full v2 spec together

### Sub-agent routing (this repo)

| Agent Type | Load these references | Load these skills |
|---|---|---|
| `frontend-agent` | `docs/design-guidelines.md`, `docs/design-refinement.md` | `frontend-design`, `brainstorming` |
| `backend-agent` | `docs/index.md`, relevant spec or `docs/chatbot-feature.md` | `backend-dev-guidelines` |
| `copywriting-agent` | `docs/design-guidelines.md`, relevant spec in `docs/plans/specs/` | `brainstorming`, `copywriting` |
| `debugging-agent` | `docs/index.md`, failing area docs | `systematic-debugging` |
| `docs-agent` | `docs/index.md`, `docs/workflow/workflow.md` | `writing-plans` |
| `chatbot-agent` | `docs/chatbot-feature.md`, `docs/plans/specs/chatbot-feature-spec.md` | `rag-engineer`, `backend-dev-guidelines`, `systematic-debugging` |

If no agent type is specified, infer from task type using `task-type-reference-map.md`.

---

## 4. Reference Document Mapping by Task Type

### UI / marketing pages (services, layout, components)

```
Ticket or spec
  ↓
docs/design-guidelines.md     (tokens, typography, color, motion)
  ↓
docs/design-refinement.md     (separators, cards, hero refinements)
  ↓
docs/plans/specs/*-spec.md    (when implementing a specced feature)
```

### Chatbot / API / RAG

```
Ticket or spec
  ↓
docs/chatbot-feature.md       (setup, behavior, env, Supabase)
  ↓
docs/plans/specs/chatbot-*.md (feature or v2 scope)
  ↓
app/api/chat/route.ts         (implementation; if ticket allows)
```

### MDX / blog / projects content

```
Ticket or spec
  ↓
docs/design-guidelines.md     (tone alignment with site)
  ↓
content/projects/*.mdx or content/blogs/*.mdx
```

---

## 5. Layer 3 project-specific context

See `docs/workflow/task-type-reference-map.md` → **[PROJECT-SPECIFIC] Task Types — Portfolio** for services pages, chatbot, MDX, and `data/*.ts` rows.

---

## 6. Context Audit

Run a quarterly context audit using `docs/workflow/context-audit.md`.

After each audit, log results to `docs/workflow/audits/audit-results-[YYYY-MM].md`.

---

## 7. Best Practices

### For spec writers

1. List reference docs explicitly (design guidelines, `docs/index.md` sections, chatbot doc if relevant).
2. Keep specs focused — one feature or bounded change per spec.
3. Point to ticket folders under `docs/plans/tickets/`.

### For ticket writers

1. Minimize Allowed Files; respect root `CLAUDE.md` prohibitions unless intentionally overridden.
2. Name skills explicitly when domain work needs them (RAG, frontend-design, etc.).
3. Set realistic budgets; note when verification is human-only.

### For agents

1. Read the spec once for a batch → Spec Summary → tickets.
2. Respect Allowed Files and root `CLAUDE.md`.
3. Load only named skills.

---

## 8. Summary

Context is **bounded, lazy-loaded, and ticket-driven**: minimal startup (CLAUDE + workflow pointers), optional hydration for multi-ticket work, then ticket-scoped reads and skills. This stays aligned with a strict implementation-agent policy while still documenting where richer workflow lives (`docs/workflow/`).
