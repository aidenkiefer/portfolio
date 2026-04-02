## 09 — Chatbot: Implementation summary and config todos

## Task

- **Add a detailed implementation summary** to **docs/chatbot-feature.md** in a new section (e.g. “Implementation Summary” or “What Was Built”). Describe: which files were created or modified; how the widget is embedded; how the API and Supabase are used; where the system prompt lives; how rate limiting and errors work; and any env vars or config the user must have in place.
- **Update the “Framework config todos” (or equivalent) section** in **docs/chatbot-feature.md** to reflect the current state: what the user has already done (e.g. Supabase project, tables, env) and what, if anything, remains (e.g. “Optional: RLS policies,” “Optional: add OpenAI key if you prefer OpenAI over Anthropic”). If the user’s runbook already has a checklist, mark items as “done by implementation” or “your responsibility” and add any new items that emerged during implementation (e.g. a new env var, or a note about rate limit constants).

## Mandatory skill usage

- **code-documentation-doc-generate** or **documentation-templates** (docs/skills-catalog.md): Clear, structured summary and checklist.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/chatbot-feature.md (to be updated)
- docs/plans/specs/chatbot-feature-spec.md
- All chatbot tickets 01–08 (for accurate summary of what was built)
- app/api/chat/route.ts, components/chatbot/*, lib/chatbot/*, app/services/layout.tsx

## Allowed Files (ONLY these)

- docs/chatbot-feature.md

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not remove or overwrite the user’s setup steps (e.g. “Create Supabase project,” “Run SQL”); only add or update the implementation summary and config todos sections.
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Read **docs/chatbot-feature.md** and the codebase (API route, chatbot components, lib/chatbot, services layout) to produce an accurate summary.
2. Add a new section **Implementation Summary** (or similar) that includes:
   - Overview (what was built in one short paragraph)
   - Files created (list paths)
   - Files modified (list paths)
   - How it works (widget → API → Supabase/LLM in a few bullets)
   - Where the system prompt lives and how to edit it
   - Rate limiting and error handling (where and how)
   - Env vars required (list and purpose)
3. Update **Framework config todos** (or the checklist section): mark user steps that are “done when you’ve completed the runbook”; add any new items (e.g. “Set OPENAI_API_KEY or ANTHROPIC_API_KEY” if not already listed); note optional items (RLS, rate limit tuning).
4. Keep the existing “Steps for you” (or similar) content intact; only add the implementation summary and refresh the todos.

## Done Criteria

- docs/chatbot-feature.md contains a detailed implementation summary section.
- The framework config todos (or checklist) in that doc are updated to match the current implementation and your setup steps.
- Only docs/chatbot-feature.md was modified; changes are summarized in ≤5 bullets or an Implementation Summary.
