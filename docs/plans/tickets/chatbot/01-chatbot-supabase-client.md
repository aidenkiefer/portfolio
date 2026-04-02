## 01 — Chatbot: Supabase client and env types

## Task

- Add **@supabase/supabase-js** as a dependency and create a server-side Supabase client helper for the chatbot feature.
- Add TypeScript types or env validation for `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and (for later tickets) `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`.

**Assumption:** The user has created a Supabase project and added the URL and anon key to `.env.local` per **docs/chatbot-feature.md**. This ticket only implements the code that *uses* those env vars.

## Mandatory skill usage

- **postgres-best-practices** (docs/skills-catalog.md): Supabase/Postgres client usage, types for chat_sessions and chat_messages matching the spec data model; server-side client pattern.
- **brainstorming** (docs/skills-catalog.md): Clarify where the client is used (API only vs client+API) before implementing.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/chatbot-feature.md
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- package.json (add dependency only)
- lib/supabase/server.ts (create) — or lib/chatbot/supabase.ts
- types/env.d.ts or existing env types file (create or extend for chatbot env vars)

> If the project already has a Supabase or env pattern elsewhere, stop and ask to extend the Allowed Files list rather than duplicating.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not commit or read `.env.local`; only document expected variable names.
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Add `@supabase/supabase-js` to `package.json` dependencies.
2. Create a server-side Supabase client helper (e.g. `createClient()` using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`). Use the client only from server/API context (no client component import of this helper if it uses secrets).
3. Add or extend env types for: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY` (all optional in types so build succeeds without them; runtime checks in API route).
4. Export the client factory and any shared types for `chat_sessions` / `chat_messages` (e.g. minimal interfaces matching the spec’s data model).

## Done Criteria

- `@supabase/supabase-js` is in package.json.
- A server-side Supabase client helper exists and is importable from API routes.
- Env types or comments document the four env vars above.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
