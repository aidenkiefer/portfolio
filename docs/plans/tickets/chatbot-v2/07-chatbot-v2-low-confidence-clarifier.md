# 07 — Chatbot v2: Low-confidence clarifier

## Task

Replace getLowConfidenceFallback with getLowConfidenceResponse(userQuery, pageContext optional). Return same shape as LLM: answer, citations empty, cta. Answer: intro, one question, 2 to 3 bullets (paths), CTA. Page-aware: pathname informs options (chatbots vs seo vs automation). No LLM; deterministic. Route calls getLowConfidenceResponse when !hasHighConfidence; returns full response shape.

## Mandatory skill usage

- **llm-application-dev-ai-assistant**, **ui-ux-designer** (docs/skills-catalog.md).
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Sections 2.1, 2.2, 5)
- docs/chatbot-expansion.md (Section 2.1)
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- lib/chatbot/retrieve.ts
- app/api/chat/route.ts

## Hard Limits

- Do not call LLM for clarifier. Do not run shell commands or verification (CLAUDE.md). If blocked, stop and ask to extend Allowed Files.

## Instructions

1. In retrieve.ts: getLowConfidenceResponse builds answer from pathname; returns answer, citations empty, cta.
2. Route: use getLowConfidenceResponse when low confidence; return answer, citations, recommended_services, cta, sessionId.

## Done Criteria

- getLowConfidenceResponse exists and is page-aware; API uses it and returns full shape. Only listed files modified; summary in 5 bullets or fewer.
