# Chatbot Feature Spec

This spec defines the **AI chatbot feature** for the portfolio site: an embedded chat widget on service pages that lets visitors ask questions, get answers from an LLM, and optionally leave contact info. Implementation is split between **you** (framework setup: Supabase project, tables, API keys, env) and **Claude** (code: API routes, UI component, embed). Your steps are in **docs/chatbot-feature.md**; Claude executes the tickets in **docs/plans/tickets/chatbot/**.

---

## 1. Purpose & Goal

- **What:** A live AI chatbot widget embedded on service pages (and optionally site-wide later) that:
  - Answers visitor questions about services, pricing, process, and the portfolio in a helpful, on-brand tone
  - Demonstrates the “AI Customer Service Chatbots” offering in practice
  - Can capture lead info (e.g. email) when the visitor opts in or when the conversation suggests interest
- **Why:** Increase engagement, qualify leads, and show the chatbot service in action without requiring the user to “book a consult” first.
- **Who:** Anonymous site visitors (no login required). Sessions are identified by a client-generated `sessionId` (e.g. UUID in `sessionStorage`).

---

## 2. Scope

**In scope:**

- Chat widget UI: floating button, open/close drawer, message list, input, loading and error states
- Next.js API route(s) for chat: accept user message + optional session id; call LLM; optionally persist session/messages in Supabase; return assistant reply
- Supabase: store chat sessions and messages (you create project and tables; Claude implements client and usage)
- LLM integration: one provider (OpenAI or Anthropic) configurable via env; system prompt tuned for portfolio/services
- Embedding the widget on all service pages (e.g. via `app/services/layout.tsx` or a wrapper that renders only when pathname is under `/services`)
- Session persistence: client holds `sessionId` (e.g. in `sessionStorage`); API creates or reuses session in DB
- Basic rate limiting or abuse protection (e.g. per-session or per-IP limits) to avoid cost blow-up

**Out of scope (for initial release):**

- User authentication (visitors are anonymous)
- Full RAG over all site content (v1 can use a fixed system prompt + optional short context; RAG can be a later ticket)
- Multilingual chatbot UI or model
- Chat history visible to the visitor across devices (session is device/browser-scoped)
- Admin UI to view or export chats (can be added later)

---

## 3. Assumptions

- You will create a Supabase project, run the table migrations from **docs/chatbot-feature.md**, and add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and either `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` to `.env.local`.
- The widget is shown only on routes under `/services` (including `/services`, `/services/chatbots`, etc.). It can be extended to other routes later.
- One LLM provider is sufficient for v1; the implementation will support either OpenAI or Anthropic based on which env var is set.
- Messages are stored in Supabase for potential future use (analytics, lead follow-up, training); retention and RLS are your responsibility in Supabase.
- No PII is logged in application logs; only session IDs and minimal metadata as needed.

---

## 4. Architecture

### 4.1 High-level flow

1. Visitor opens a service page → layout renders the chat widget (floating button).
2. Visitor clicks the button → chat drawer opens. Client generates or reads `sessionId` from `sessionStorage`.
3. Visitor sends a message → client POSTs `{ message, sessionId? }` to `/api/chat` (or `/api/chatbot`).
4. API: create or load session in Supabase; append user message to `chat_messages`; call LLM with system prompt + conversation history; append assistant message; return `{ assistantMessage, sessionId }`.
5. Client appends the assistant message to the UI and stores `sessionId` if new.

### 4.2 Components

| Layer        | Responsibility |
|-------------|----------------|
| **Frontend** | Chat widget (floating button + drawer), message list, input, loading/error states. Uses `lib/design-tokens.ts` and existing design guidelines. Client-only; sessionId in sessionStorage. |
| **API**      | `POST /api/chat`: validate body, create/fetch session, save user message, call LLM, save assistant message, return response. Optional: rate limit by sessionId or IP. |
| **Supabase** | `chat_sessions` (id, created_at, metadata), `chat_messages` (id, session_id, role, content, created_at). You create project and tables; Claude uses `@supabase/supabase-js`. |
| **LLM**      | OpenAI or Anthropic API; system prompt describes the portfolio, services, and tone. Chosen by env (e.g. `OPENAI_API_KEY` vs `ANTHROPIC_API_KEY`). |

### 4.3 Data model (Supabase)

- **chat_sessions**
  - `id` (uuid, primary key, default gen_random_uuid())
  - `created_at` (timestamptz, default now())
  - `metadata` (jsonb, optional — e.g. page path, user agent, or future lead email)

- **chat_messages**
  - `id` (uuid, primary key, default gen_random_uuid())
  - `session_id` (uuid, foreign key → chat_sessions.id)
  - `role` (text: 'user' | 'assistant')
  - `content` (text)
  - `created_at` (timestamptz, default now())

You run the SQL in **docs/chatbot-feature.md** to create these tables. RLS can be configured so only the anon key can insert/select (no direct user auth).

---

## 5. API contract

### POST /api/chat

**Request body (JSON):**

- `message` (string, required): The user’s message.
- `sessionId` (string, optional): Existing session UUID. If omitted, the API creates a new session and returns its id.

**Response (JSON):**

- `assistantMessage` (string): The model’s reply.
- `sessionId` (string): Session UUID to use for subsequent messages (new or existing).

**Errors:**

- 400: Missing or invalid body (e.g. empty message).
- 429: Rate limit exceeded (if implemented).
- 500: LLM or DB error; return a generic message to the client.

---

## 6. UI requirements

- **Floating button:** Fixed position (e.g. bottom-right), uses accent primary or a neutral from design tokens. Accessible label (e.g. “Open chat”).
- **Drawer:** Slides in from the side (e.g. right); contains header (“Chat” or “Questions?”), scrollable message list, input at bottom. Close button.
- **Messages:** User messages aligned one way, assistant the other; clear role distinction; timestamps optional for v1.
- **Input:** Text field + send button; disable while request in flight; no submit on empty.
- **Loading:** Show a loading indicator (e.g. “Thinking…”) while waiting for the API.
- **Errors:** Show a short, friendly message and allow retry.
- **Design:** Follow **docs/design-guidelines.md** and **docs/design-refinement.md**; use `lib/design-tokens.ts`. Restrained, calm; no heavy gradients or flashy motion.

---

## 7. Security & reliability

- **Rate limiting:** Limit requests per `sessionId` (and optionally per IP) to avoid abuse and cost. Exact limits are configurable (e.g. 20 messages per session per hour).
- **Input:** Sanitize or truncate user message length (e.g. max 2000 chars).
- **Secrets:** LLM and Supabase keys only in server-side env; never exposed to the client except Supabase anon key if used from client (anon key is safe for RLS-protected access).
- **Logging:** Do not log message content or PII; log only session id, route, and status codes as needed.

---

## 8. Dependencies (to add)

- **@supabase/supabase-js** — Supabase client for server (and optionally client if session creation is done from client; otherwise API-only).
- **openai** and/or **@anthropic-ai/sdk** — LLM provider. Implementation can branch on env (e.g. prefer Anthropic if `ANTHROPIC_API_KEY` is set, else OpenAI).

Claude will add these in the implementation tickets where needed.

---

## 9. Success criteria

- On any `/services/*` page, a chat button is visible; clicking it opens a drawer with a message list and input.
- Sending a message yields an assistant reply that is on-brand and relevant to services/portfolio.
- Sessions and messages are stored in Supabase; the same `sessionId` continues the conversation.
- **No QA/verification in tickets** (per **docs/plans/claude-workflow-opt.md** Rule 7): tickets do not ask Claude to run build, test, or verification commands; the human runs those. Done criteria are human-verifiable outcomes only (e.g. "Component X exists", "Route returns JSON Y").
- **CLAUDE.md** applies: Claude is an implementation agent only; it does not run shell commands, stage/commit/push, or verify. If a ticket lists Mandatory skill usage, Claude may use those skills from **docs/skills-catalog.md**; skills must not override CLAUDE.md prohibitions.
- **docs/chatbot-feature.md** contains your setup steps and a “Framework config todos” section; after implementation, Claude adds an implementation summary and updates that checklist (ticket 09).

---

## 10. Reference docs

- **CLAUDE.md** — execution rules for Claude (implementation only; no verification, no GitHub).
- **docs/plans/claude-workflow-opt.md** — workflow: one ticket at a time, Allowed Files, no QA in tickets.
- docs/chatbot-feature.md (your setup runbook)
- docs/content/ai-chatbot.md (service offering copy; informs system prompt tone)
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/skills-catalog.md (skills that may be mandated in tickets)
- lib/design-tokens.ts

---

## 11. Ticket execution order

Execute tickets in **docs/plans/tickets/chatbot/** in numerical order (01 → 09). Ticket 09 is the final documentation ticket (add implementation summary to **docs/chatbot-feature.md** and update framework config todos). See **docs/plans/tickets/chatbot/README.md** for the full table.
