## 06 — Chatbot: System prompt and LLM config

## Task

- **Define and implement the system prompt** for the chatbot so responses are on-brand, helpful, and relevant to the portfolio and services. Use **docs/content/ai-chatbot.md** and the rest of the service offering (tone, pricing, use cases) to inform the prompt.
- Store the system prompt in a maintainable place (e.g. `lib/chatbot/prompts.ts` or a constant in the API route). Optionally add a short “context” block (e.g. bullet points about services, pricing, contact) that can be updated without changing code later.
- Ensure the API route (from ticket 02) uses this prompt when calling the LLM. If both OpenAI and Anthropic are supported, use the same logical prompt for both (model-specific formatting if needed).

## Mandatory skill usage

- **llm-application-dev-prompt-optimize**, **prompt-engineer**, **prompt-engineering-patterns** (docs/skills-catalog.md): Effective system prompts for LLMs; chain-of-thought and production prompt strategies; on-brand, controllable responses.
- **copywriting**, **content-marketer** (docs/skills-catalog.md): Tone is calm, confident, practical; prompt supports conversion and clarity; aligns with service page messaging.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/content/ai-chatbot.md
- docs/plans/claude-workflow-opt.md
- app/api/chat/route.ts (or lib/chatbot/llm.ts) from ticket 02
- data/services or similar if it exists for service list/pricing

## Allowed Files (ONLY these)

- lib/chatbot/prompts.ts (create) — or lib/chatbot/config.ts
- app/api/chat/route.ts (modify to use the new prompt)
- lib/chatbot/llm.ts (modify if it holds prompt logic)

> If service/pricing data lives in a specific file, ask to extend Allowed Files to read it for context.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not hardcode sensitive data; keep pricing and offerings in prompt or config only.
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Draft a system prompt that: identifies the bot as a helpful assistant for your portfolio; describes your services (chatbots, performance, SEO, automation, etc.), tone (confident, clear, practical), and that you’re a freelance engineer for startups/SMBs. Include guidance to suggest a call or contact form when the visitor seems interested.
2. Add optional structured context (e.g. “Services: …”, “Pricing: starting at …”) so it can be updated easily.
3. Wire the prompt into the LLM call in the API route (and into any LLM helper from ticket 02).
4. Ensure the prompt does not expose internal details or make promises you don’t offer (e.g. “one-day prototype” is fine if that’s in the content doc).

## Done Criteria

- A single, maintainable system prompt (and optional context) is used by the chat API.
- Responses are on-brand and aligned with docs/content/ai-chatbot.md and service messaging.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
