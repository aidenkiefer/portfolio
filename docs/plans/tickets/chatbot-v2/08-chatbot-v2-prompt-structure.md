# 08 — Chatbot v2: Prompt structure (RESPONSE SHAPE, WHEN CONTEXT WEAK, VOICE)

## Task

Add to SYSTEM_PROMPT in lib/chatbot/prompts.ts: RESPONSE SHAPE (direct answer, bullets, recommendation, next step), WHEN CONTEXT IS WEAK (transparent, one question, 2–3 options), VOICE (friendly, direct, no fluff, no repeated apologies). Add or tighten PAGE AWARENESS. Do not change LLM signature or API.

## Mandatory skill usage

- **prompt-engineer**, **prompt-engineering-patterns**, **llm-application-dev-prompt-optimize**, **copywriting** (docs/skills-catalog.md).
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Sections 2.5, 6)
- docs/chatbot-expansion.md (Section 3.2)
- lib/chatbot/prompts.ts
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- lib/chatbot/prompts.ts
- lib/chatbot/llm.ts (only if one-line reference to new sections needed)

## Hard Limits

- Do not run shell commands or verification (CLAUDE.md). Do not change API or retrieval. If blocked, stop and ask to extend Allowed Files.

## Instructions

1. Add RESPONSE SHAPE: direct answer, 3–6 bullets, recommendation, one question or CTA.
2. Add WHEN CONTEXT IS WEAK: transparent, one question, 2–3 options.
3. Add VOICE: friendly, direct, professional; no fluff; no repeated apologies.
4. Add or clarify PAGE AWARENESS: use PAGE CONTEXT to tailor emphasis and next steps.

## Done Criteria

- SYSTEM_PROMPT includes the three sections and PAGE AWARENESS. Only listed files modified; summary in 5 bullets or fewer.
