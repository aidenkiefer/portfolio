# 09 — Chatbot v2: Structured output and citation enforcement

## Task

Validate parsed LLM JSON (answer string, citations array). Filter citations to allowed list only. One repair attempt on invalid parse or validation before raw-text fallback. Add validateStructuredResponse(obj, allowedCitations); in callLLMWithContext after parse validate and filter; if invalid run one repair; else fall back to raw text and empty citations.

## Mandatory skill usage

- **llm-app-patterns**, **error-handling-patterns**, **api-security-best-practices** (docs/skills-catalog.md).
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Sections 2.4, 7)
- docs/chatbot-expansion.md (Sections 4.1, 4.2)
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- lib/chatbot/llm.ts
- lib/chatbot/types.ts (if adding validation type)

## Hard Limits

- Do not run shell commands or verification (CLAUDE.md). Do not change API request/response shape. If blocked, stop and ask to extend Allowed Files.

## Instructions

1. Implement validateStructuredResponse; filter citations to allowedCitations.
2. After JSON.parse in both provider paths, validate; if invalid run one repair; validate again; else fall back to raw text and empty citations.
3. Return only filtered citations.

## Done Criteria

- Validation and citation filter in place; one repair attempt; only listed files modified; summary in 5 bullets or fewer.
