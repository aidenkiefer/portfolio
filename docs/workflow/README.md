# Workflow docs

Agentic workflow for this repo, synchronized from `~/projects/workflow-core` using `workflow-core/update-workflow.md` (Mode A/B).

## Last setup / sync

**Date:** 2026-04-02  
**Mode:** A (initial setup) — Phases 1–2 applied for this portfolio repo.

**Created or populated:**

- `workflow.md`, `execution-rules.md`, `ticket-template.md`, `skill-map.md`, `task-type-reference-map.md`, `context-flow.md`, `context-audit.md`, `philosophy.md`, `release-feed.md`, `project-case-studies.md`
- `audits/.gitkeep`
- Root `AGENTS.md`, `.claude/CLAUDE.md`, `.claude/rules/00-core.mdc`
- `docs/plans/PROGRESS.md` (retrospective)

**Intentionally not overwritten:**

- Root `CLAUDE.md` (pre-existing; remains the strict implementation-agent source of truth)

**Manual review recommended:**

- Reconcile root `CLAUDE.md` (no `PROGRESS.md` updates by default) with `execution-rules.md` §7 if you want mandatory progress logging for all runs.

## Ongoing sync

When `workflow-core` changes, run **Mode B** from `workflow-core/update-workflow.md` and merge updates; preserve sections marked `<!-- PRESERVE -->` or `[PROJECT-SPECIFIC]`.
