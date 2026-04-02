# Chatbot RAG & UX Spec (Phase 2)

This spec extends the chatbot defined in **docs/plans/specs/chatbot-feature-spec.md** with three workstreams: (1) RAG indexing and vector store, (2) structured API response with citations, (3) conversation UX (greeting, quick-start buttons, markdown, citations, reset). Tickets 10–12 implement these. **CLAUDE.md** and **docs/plans/claude-workflow-opt.md** apply: implementation only, no verification steps in tickets.

---

## 1. Scope

**In scope:**

- **RAG:** Content indexing script; vector DB (Supabase + pgvector); chunk site content, embed, store; at request time embed query, retrieve top-k chunks, pass to LLM as context.
- **Structured API:** POST /api/chat returns `answer`, `citations[]`, optional `recommended_services`, optional `cta`; LLM instructed to answer from retrieved context and output structure.
- **Conversation UX:** First assistant greeting on drawer open; quick-start/suggested prompt buttons; markdown rendering for assistant messages; citation links when present; reset conversation; disclosure text.

**Out of scope (this spec):** Admin UI, auth, multilingual, streaming.

---

## 2. Data model (vector store)

- **site_documents:** id, url, title, section, content (text), tags (array or text), updated_at. Source: services pages, about/strengths, portfolio summaries, contact, data/services.
- **site_embeddings:** document_id (FK), embedding (vector; dimension per embedding model), metadata (optional). pgvector extension.

Content to index: services overview + each service page, about page, portfolio case-study summaries, contact page copy, pricing/process from data/services. Exclude source code, internal docs, secrets.

Chunking: ~400–800 tokens per chunk, 10–20% overlap; preserve section headers in content; store url, title, section in metadata for citations.

---

## 3. API extension

- **Request:** Unchanged from v1: `message`, `sessionId?`.
- **Response:** Extend to `{ answer, citations[], recommended_services?, cta?, sessionId }`. `answer` is markdown; `citations` are URLs (e.g. `/services/chatbots`); `recommended_services` and `cta` optional strings for conversion.
- **Flow:** Validate → create/load session → save user message → embed user message → retrieve top 6–10 chunks from site_embeddings → build LLM prompt with system + retrieved context + conversation history → call LLM with structured-output instruction → parse answer, citations, recommended_services, cta → save assistant message (store full answer in chat_messages) → return structured response.
- **Low confidence:** If retrieval scores below a threshold, respond with a single fallback message (e.g. “I’m not fully sure based on the info on this site. Want to tell me your business type and goals?”) and empty citations.

---

## 4. Conversation UX

- **First message:** When drawer opens and there are no messages, show one assistant message: “Hey! I’m Aiden’s site assistant. Ask me anything about his services, pricing, timelines, or what would work best for your business.”
- **Quick-start buttons:** Up to 6 clickable prompts, e.g. “Which service is best if I want more leads?”, “Can you explain the AI chatbot service?”, “How fast can these be delivered?”, “What’s the pricing and process?”, “What tech stack do you use?”, “How do I get started?”. On click, send as user message.
- **Markdown:** Render assistant `answer` as markdown in the message bubble.
- **Citations:** If `citations` is non-empty, show links below the message (e.g. “Sources: /services/chatbots, /services”).
- **Reset:** Button or control to clear messages and start a new conversation (new sessionId; optional clear sessionStorage key and reload or in-memory clear only).
- **Disclosure:** “This demo is powered by AI and may make mistakes. For specific details, contact Aiden directly.” (footer or near input.)

---

## 5. Dependencies

- Embedding model: same provider as LLM (OpenAI or Anthropic) or configurable; dimension must match pgvector column.
- pgvector extension enabled in Supabase.

---

## 6. Reference docs

- CLAUDE.md
- docs/plans/claude-workflow-opt.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/ai-chatbot.md (product context; Step-by-Step Implementation Plan, Knowledge Base Scope, Chunking Strategy)
- docs/skills-catalog.md

---

## 7. Ticket order

Execute **10** → **11** → **12**. Ticket 10 (index + vector schema) must be done before 11 (API retrieval). Ticket 11 (structured API) must be done before 12 (frontend consumes new response shape).
