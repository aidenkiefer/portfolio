# Context Audit Guide

**Purpose:** Systematically verify that reference documents are accurate, consistent, complete, and up-to-date. Run quarterly or after major structural changes.

**For:** Humans and `docs-agent` executing audit tickets.

---

## When to Run an Audit

- **Quarterly:** Every 3 months as ongoing maintenance
- **After major changes:** New routes, chatbot/RAG changes, renamed files, new service pages
- **Before a major sprint:** e.g. chatbot v2 or large content migrations
- **When agents cite wrong paths or stale info:** Reactive trigger

---

## Audit Scope

### Standard workflow docs (always audit)

| Doc | Location |
|-----|----------|
| Project memory | `.claude/CLAUDE.md`, root `CLAUDE.md` |
| Workflow entrypoint | `docs/workflow/workflow.md` |
| Execution rules | `docs/workflow/execution-rules.md` |
| Ticket template | `docs/workflow/ticket-template.md` |
| Skill map | `docs/workflow/skill-map.md` |
| Task-type reference map | `docs/workflow/task-type-reference-map.md` |
| Context flow | `docs/workflow/context-flow.md` |

### [PROJECT-SPECIFIC] Project reference docs (this repo)

| Doc | Location |
|-----|----------|
| Codebase / structure map | `docs/index.md` |
| Design system | `docs/design-guidelines.md`, `docs/design-refinement.md` |
| Progress log | `docs/plans/PROGRESS.md` |
| Chatbot runbook | `docs/chatbot-feature.md` |
| Content / positioning (examples) | `docs/UPDATE_SUMMARY.md`, `docs/resume-summary.md` |
| Key specs (spot-check) | `docs/plans/specs/chatbot-feature-spec.md`, `docs/plans/specs/services-pages-spec.md`, `docs/plans/specs/chatbot-v2-spec.md` |
| Design tokens / globals | `lib/design-tokens.ts`, `app/globals.css` |

---

## Audit Criteria

For each document, assess on five dimensions:

| Dimension | Questions to ask |
|-----------|------------------|
| **Accuracy** | Do paths, routes, and stack (Next.js, MDX, Tailwind) match the repo? |
| **Consistency** | Do `docs/index.md`, `CLAUDE.md`, and workflow docs agree on routes and folders? |
| **Completeness** | Are new `app/services/*` pages, API routes, and content dirs documented? |
| **Clarity** | Can an agent find specs vs tickets vs workflow from cold start? |
| **Relevance** | Is obsolete plan content clearly marked or archived? |

---

## Audit Process

### Step 1: Define scope

List 10–25 documents. Prioritize: heavily used in tickets, recently changed, or referenced in `task-type-reference-map.md`.

### Step 2: Read and assess each document

Compare claims to the codebase (spot-check paths under `app/`, `content/`, `data/`, `app/api/`).

### Step 3: Check cross-references

Verify linked paths exist (note: index is `docs/index.md`, not `INDEX.md`).

### Step 4: Identify issues and classify

Use the issue types from the workflow-core template (outdated, missing, inconsistency, broken link, obsolete, low clarity).

### Step 5: Prioritize and ticket

High/Medium issues → tickets. Low → note in audit results.

### Step 6: Write audit results

Save to `docs/workflow/audits/audit-results-[YYYY-MM].md`.

---

## Audit Checklist Template

```markdown
### [Document Name]

- **Location:** [path]
- **Last updated:** [date or "unknown"]
- **Status:** ✅ Sufficient / ⚠️ Needs Update / ❌ Missing or Broken

**Accuracy:** [Notes]
**Consistency:** [Notes]
**Completeness:** [Notes]
**Clarity:** [Notes]
**Relevance:** [Notes]

**Issues found:**
- [Issue — priority]

**Recommended actions:**
- [Action]
```

---

## Audit Results Template

```markdown
# Context Audit Results — [Month YYYY]

**Date:** [YYYY-MM-DD]
**Auditor:** [Human / agent name]
**Scope:** [N] documents

## Summary

- ✅ Sufficient: [N] docs ([X]%)
- ⚠️ Needs Update: [N] docs ([X]%)
- ❌ Missing or Broken: [N] docs ([X]%)

## High-Priority Actions (complete this sprint)

1. [Action]

## Medium-Priority Actions (complete this quarter)

1. [Action]

## Low-Priority Actions (ongoing)

1. [Action]

## Detailed Findings

[Per-doc sections]

## Audit Strengths

[What's working well]

## Audit Opportunities

[Systemic improvements]
```

---

## Maintenance Schedule

| Cadence | Trigger | Scope |
|---------|---------|-------|
| **Quarterly** | Calendar | Core workflow + `docs/index.md` + design docs |
| **Post-major-change** | New chatbot behavior, new service routes, refactor | Affected docs + cross-refs |
| **Pre-sprint** | Before chatbot v2 or large content push | Specs and tickets for that sprint |

---

## Success Criteria

- [ ] High-priority issues ticketed
- [ ] Medium-priority issues documented for the quarter
- [ ] At least one doc updated per audit session when issues were found
- [ ] Results saved under `docs/workflow/audits/`
- [ ] `task-type-reference-map.md` updated if doc paths changed
