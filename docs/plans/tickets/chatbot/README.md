# Chatbot feature — tickets

Execute these tickets **in order** (01 → 09 for Phase 1; 10 → 12 for Phase 2). The user completes framework setup (Supabase project, tables, env) per **docs/chatbot-feature.md** before or in parallel with early tickets; tickets assume env vars and tables exist when the API and Supabase client are implemented.

- **CLAUDE.md** — execution rules (implementation only; no shell commands, no verification, no GitHub).
- **Spec (Phase 1):** docs/plans/specs/chatbot-feature-spec.md
- **Spec (Phase 2):** docs/plans/specs/chatbot-rag-ux-spec.md (RAG, structured API, conversation UX)
- **Workflow:** docs/plans/claude-workflow-opt.md (one ticket at a time, Allowed Files, no QA in tickets).
- **User runbook:** docs/chatbot-feature.md
- **Design:** docs/design-guidelines.md, docs/design-refinement.md, lib/design-tokens.ts
- **Skills:** docs/skills-catalog.md (skills mandated in tickets must come from here).

| # | Ticket | Scope |
|---|--------|--------|
| 01 | 01-chatbot-supabase-client.md | Supabase client lib and env types |
| 02 | 02-chatbot-api-route.md | POST /api/chat route (session, messages, LLM) |
| 03 | 03-chatbot-ui-component.md | Chat widget (button, drawer, messages, input) |
| 04 | 04-chatbot-session-context.md | Client sessionId persistence (sessionStorage) |
| 05 | 05-chatbot-embed-services.md | Embed widget on service pages |
| 06 | 06-chatbot-system-prompt.md | System prompt and LLM config |
| 07 | 07-chatbot-rate-limit-errors.md | Rate limiting and error handling |
| 08 | 08-chatbot-polish.md | Loading, errors, accessibility, design tokens |
| 09 | 09-chatbot-docs-summary.md | Add implementation summary to chatbot-feature.md and update config todos |
| 10 | 10-chatbot-rag-index-vector.md | RAG index script and vector store (site_documents, site_embeddings) |
| 11 | 11-chatbot-structured-api-citations.md | Structured API response (answer, citations, recommended_services?, cta?) |
| 12 | 12-chatbot-conversation-ux.md | Greeting, quick-start buttons, markdown, citations, reset, disclosure |
| 13 | 13-chatbot-minimize-into-bubble-animation.md | Minimize panel into bubble; 5 open/close animation options (least→most flashy); implement recommended one; reduced motion |
