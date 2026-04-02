# Chatbot Feature: Setup & Current State

This document is **for you**. It describes how to set up the chatbot, what is implemented, and where to adjust things for future improvements. Reference: **docs/plans/specs/chatbot-feature-spec.md** and **docs/plans/tickets/chatbot/**.

**Division of work:**

- **You:** Create Supabase project, run the SQL below, add env vars, and (optionally) configure RLS. For RAG: run the RAG schema, add the service role key, and run the indexer.
- **Implementation:** API route, chat widget, session handling, system prompt, rate limiting, RAG retrieval, citations, and response formatting are in place.

---

## Overview of the feature

The portfolio has an **AI chatbot** on all service pages (`/services`, `/services/chatbots`, etc.): a floating button that opens a chat drawer. Visitors ask questions; the bot replies using an LLM (OpenAI or Anthropic) with **RAG**: retrieved context from indexed site content (services, about, portfolio, contact, and a “goals → services” recommendations doc). Sessions and messages are stored in Supabase. No login required. Responses use consistent formatting (paragraph breaks, list items on their own lines), and citations link to source pages when RAG context is used.

---

## Prerequisites

- A Supabase account ([supabase.com](https://supabase.com))
- An API key from either **OpenAI** or **Anthropic** (the implementation supports both; you only need one)

---

## Step 1: Create a Supabase project

1. Go to [app.supabase.com](https://app.supabase.com) and sign in.
2. Click **New project**.
3. Choose an organization (or create one), name the project (e.g. `portfolio-chatbot`), set a database password, and pick a region.
4. Wait for the project to be ready.

---

## Step 2: Create the database tables

In the Supabase dashboard, open **SQL Editor** and run the following SQL. This creates the tables used by the chat API.

```sql
-- Chat sessions: one row per conversation (identified by client sessionId).
create table if not exists public.chat_sessions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  metadata jsonb
);

-- Chat messages: one row per user or assistant message.
create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.chat_sessions(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamptz not null default now()
);

-- Optional: index for loading messages by session (faster for long threads).
create index if not exists idx_chat_messages_session_id
  on public.chat_messages(session_id);
```

---

## Step 3: Get your Supabase URL and anon key

1. In the Supabase project, go to **Settings** → **API**.
2. Copy:
   - **Project URL**
   - **anon public** key (under "Project API keys")

You will add these to `.env.local` in Step 5.

---

## Step 4: Get an LLM API key

Choose **one** of:

- **OpenAI:** [platform.openai.com/api-keys](https://platform.openai.com/api-keys) → Create a key.
- **Anthropic:** [console.anthropic.com](https://console.anthropic.com) → API keys → Create key.

The implementation uses **Anthropic** if `ANTHROPIC_API_KEY` is set, otherwise **OpenAI** if `OPENAI_API_KEY` is set. You only need to set one.

---

## Step 5: Add env vars to the project

In the **root** of this repo, create or edit `.env.local` (do not commit this file). Add:

```bash
# Supabase (from Step 3)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# LLM: set one of these (from Step 4)
ANTHROPIC_API_KEY=your-anthropic-key
# or
OPENAI_API_KEY=your-openai-key
```

Replace the placeholder values with your actual URL and keys.

---

## Step 6: Row Level Security (RLS) — required if RLS is enabled

The chat API uses the **anon** key to insert into `chat_sessions` and `chat_messages`. If RLS is enabled on these tables (Supabase can enable it by default in some projects), the anon role must have explicit policies or inserts will fail with **"Failed to create session"**.

**If you see that error in Vercel logs**, run this in the Supabase **SQL Editor** to allow anon to insert and select (needed for the chatbot):

```sql
-- Allow anon to insert and select chat_sessions (for creating/loading sessions)
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon insert and select chat_sessions"
  ON public.chat_sessions FOR ALL TO anon
  USING (true) WITH CHECK (true);

-- Allow anon to insert and select chat_messages (for saving messages)
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon insert and select chat_messages"
  ON public.chat_messages FOR ALL TO anon
  USING (true) WITH CHECK (true);
```

If the policies already exist (e.g. you created them with different names), you may get "policy already exists" — you can drop and recreate, or skip. If RLS is **disabled** on these tables, you don't need these policies; the runbook previously suggested leaving RLS off for v1.

---

## RAG: Indexing your content (Phase 2)

After tickets 10–12, the chatbot uses **RAG** (retrieval over your site content). You need to create the vector tables and run the indexer once (and again whenever you change services, about, portfolio, or contact content).

### Step R1: Apply the RAG schema in Supabase

1. In the Supabase dashboard, open **SQL Editor**.
2. Open **docs/scripts/chatbot-rag-schema.sql** in this repo and copy its full contents.
3. Paste into the SQL Editor and run it. This creates `site_documents`, `site_embeddings`, enables **pgvector**, and adds the `match_documents` function.

### Step R2: Add the service role key (for the indexer only)

The indexing script writes to Supabase with the **service role** key (not the anon key):

1. In Supabase, go to **Settings** → **API**.
2. Under "Project API keys", copy the **service_role** key (secret — do not commit or expose in the browser).
3. Add to `.env.local`:

```bash
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Step R3: Ensure OpenAI is configured for embeddings

The indexer and the chat API use **OpenAI** for embeddings (`text-embedding-3-small`). In `.env.local`:

```bash
OPENAI_API_KEY=your-openai-api-key
```

(You can use Anthropic for the LLM and still need `OPENAI_API_KEY` for embeddings.)

### Step R4: Run the indexing script

From the repo root, with `.env.local` loaded (e.g. in the same terminal you use for `npm run dev`):

```bash
npx ts-node scripts/chatbot-index-site.ts
```

Or use the npm script:

```bash
npm run chatbot:index
```

**Indexed content sources (see `scripts/chatbot-index-site.ts`):**
- Services pages: `/services/*` (TSX text extraction)
- Services data: `data/services.ts` (categories, services, packages)
- **Service recommendations by goal:** goal-oriented text (e.g. “increase online sales”, “grow business”, “e-commerce / T-shirts”) so RAG can answer “best service for increasing sales” and similar questions
- About: homepage content from `app/page.tsx`
- Portfolio: project summaries from `content/projects/*.mdx`
- Contact: `app/contact/page.tsx`

The script chunks (~400–800 tokens, 15% overlap), generates embeddings (OpenAI `text-embedding-3-small`), and upserts into `site_documents` and `site_embeddings`. The chat API uses `match_documents` (cosine similarity) with a configurable threshold.

**When to re-run:** After you change copy on services, about, portfolio, or contact; update `data/services.ts`; or add or change the goals/recommendations content in the indexer. Run `npm run chatbot:index` again to refresh the index.

### Debug RAG: check data and similarity scores in Supabase

Run these in the Supabase **SQL Editor** to verify the index and see typical score ranges:

```sql
-- 1. Verify rows exist
SELECT 'site_documents' AS tbl, COUNT(*) AS n FROM public.site_documents
UNION ALL
SELECT 'site_embeddings', COUNT(*) FROM public.site_embeddings;

-- 2. See similarity scores when using one existing embedding as the "query"
--    (first row will be ~1.0 self-match; others show typical score range)
SELECT url, title, ROUND((1 - (e.embedding <=> (SELECT embedding FROM public.site_embeddings LIMIT 1)))::numeric, 3) AS similarity
FROM public.site_embeddings e
JOIN public.site_documents d ON e.document_id = d.id
ORDER BY e.embedding <=> (SELECT embedding FROM public.site_embeddings LIMIT 1)
LIMIT 10;

-- 3. Test the same RPC the API uses: match_documents with threshold 0 to see all scores
SELECT id, url, title, section, ROUND(similarity::numeric, 3) AS similarity
FROM public.match_documents(
  (SELECT embedding FROM public.site_embeddings LIMIT 1),
  0,
  10
);
```

**Tuning retrieval:** `lib/chatbot/retrieve.ts` defines `RETRIEVAL_CONFIG.similarityThreshold` (currently **0.43**). Queries whose best match is below this get no RAG context and the bot replies with a low-confidence fallback (“I’m not fully sure based on the info on this site…”). Set the threshold slightly below the lowest score you consider relevant; lower = more recall (more answers, risk of irrelevant context), higher = stricter (fewer fallbacks, risk of missing good matches). The API logs `[Chat API] Retrieved chunks` with `count` and `scores` when chunks are returned, and `[Chat API] Best available similarity scores (below threshold)` when none pass—use these to tune.

---

## Framework config todos

Use this checklist to track what you've done and what the implementation expects:

- [ ] **Supabase project created** (Step 1)
- [ ] **Tables created** — `chat_sessions`, `chat_messages` (Step 2)
- [ ] **Supabase URL and anon key** added to `.env.local` (Step 3 + 5) — **Required by implementation**
- [ ] **LLM API key** added to `.env.local` — either `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` (Step 4 + 5) — **Required by implementation** (Anthropic is preferred if both are set)
- [ ] **(Optional) RLS** configured in Supabase (Step 6) — Not required by implementation; configure if needed for access control
- [ ] **(Optional) Rate limit tuning** — Edit `lib/chatbot/rateLimit.ts` constants if you want different limits (default: 20 messages per hour per session/IP)
- [ ] **RAG (Phase 2):** RAG schema applied in Supabase (Step R1), `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` (Step R2), `OPENAI_API_KEY` set (Step R3), indexer run once (Step R4) — **Required for RAG answers and citations**

---

## Implementation Summary (Current State)

**Overview:**
The chatbot is implemented end-to-end. It appears as a floating button on all `/services/*` pages; clicking opens a chat drawer. Visitors ask questions; the API stores messages in Supabase, runs **RAG** (retrieves relevant chunks from indexed site content via `match_documents`), calls the LLM with system prompt + RAG context + history, and returns the assistant reply with optional **citations** (source URLs). If no chunks pass the similarity threshold, the bot uses a low-confidence fallback and suggests sharing goals. Responses are formatted with paragraph breaks and list items on their own lines; the UI renders newlines as line breaks. Sessions are identified by a UUID in sessionStorage.

---

### Files (Current)

**Chatbot UI:**
- `components/chatbot/ChatWidget.tsx` — Floating button, drawer, message list (markdown + newlines), input, send, citations, reset

**API and Backend:**
- `app/api/chat/route.ts` — POST /api/chat: validation, session create/verify, persist messages, RAG retrieval, LLM call with context, citations, low-confidence fallback
- `lib/chatbot/llm.ts` — LLM abstraction (Anthropic or OpenAI) with conversation history
- `lib/chatbot/prompts.ts` — System prompt: about, services, packages, tone, **formatting** (newlines, lists), **goals → services** (increase sales, grow business)
- `lib/chatbot/retrieve.ts` — RAG: `retrieveRelevantChunks`, `formatContextForLLM`, `extractCitations`, `hasHighConfidence`, `getLowConfidenceFallback`; config: `similarityThreshold` 0.43, `topK` 8
- `lib/chatbot/embed.ts` — OpenAI embeddings for query and indexer
- `lib/chatbot/chunk.ts` — Chunking for indexer (~400–800 tokens, overlap)
- `lib/chatbot/rag-types.ts` — Types for RAG (RetrievedChunk, SiteDocument, etc.)
- `lib/chatbot/types.ts` — ChatRequest, ChatResponse
- `lib/chatbot/sessionStorage.ts` — sessionId persistence (client)
- `lib/chatbot/rateLimit.ts` — In-memory rate limit (20/hour per sessionId or IP)

**Database and Config:**
- `lib/supabase/server.ts` — Supabase client and types (chat + RAG tables)
- `types/env.d.ts` — Env var types
- `docs/scripts/chatbot-rag-schema.sql` — RAG schema: `site_documents`, `site_embeddings`, `match_documents`, RLS

**Indexer:**
- `scripts/chatbot-index-site.ts` — Reads services pages, `data/services`, goals/recommendations, about, portfolio, contact; chunks; embeds; upserts to Supabase

**Layout:**
- `app/services/layout.tsx` — Renders `<ChatWidget />` on all `/services/*` routes

**Dependencies:** `@supabase/supabase-js`, `@anthropic-ai/sdk`, `openai`, `dotenv`, `gray-matter`, `ts-node` (dev)

---

### How It Works (Current Flow)

1. **Widget:** `app/services/layout.tsx` renders `<ChatWidget />` on `/services/*`. On mount, widget gets or creates sessionId from sessionStorage.
2. **User sends message:** POST `/api/chat` with `{ message, sessionId }`.
3. **API:**
   - Validates input; rate limit (429 if exceeded).
   - Creates or verifies session in `chat_sessions`; inserts user message into `chat_messages`.
   - **RAG:** Embeds the user message, calls `match_documents(query_embedding, threshold=0.43, count=8)`. If any chunks are returned, formats them as context and extracts citation URLs; otherwise uses low-confidence fallback.
   - Builds LLM messages: system prompt (+ RAG context when available) + last 20 conversation messages.
   - Calls LLM; inserts assistant message; returns `{ assistantMessage, sessionId, citations }`.
4. **Widget:** Appends assistant message (markdown + newlines rendered), shows citations when present.

---

### System Prompt and Formatting

**Location:** `lib/chatbot/prompts.ts`

**Editing:** Edit the `SYSTEM_PROMPT` constant. It currently includes:
- About (who you are, target clients)
- Services list with pricing (AI, performance, automation) and service packages
- **Formatting:** Use paragraph breaks, list items on their own lines, newlines for scannability
- **When visitors want to increase sales or grow business:** Recommend chatbots, personalization, SEO, Startup AI Jumpstart; for e-commerce/sell online, same plus content workflows and speed
- Tone and style (concise, professional, friendly); suggest booking a consultation when interest is shown

The prompt is used by `lib/chatbot/llm.ts`. The chat UI (`ChatWidget.tsx`) renders assistant messages with simple markdown (bold, italic, code, links) and converts newlines to `<br>` so formatting is preserved.

---

### Rate Limiting and Error Handling

**Rate Limiting:**
- Implemented in `lib/chatbot/rateLimit.ts`
- In-memory store tracks request counts per sessionId (or IP if no sessionId)
- Default: 20 requests per 1-hour window
- Returns 429 "Too many messages" if exceeded
- Configurable: edit `MAX_REQUESTS_PER_WINDOW` and `WINDOW_MS` constants in `lib/chatbot/rateLimit.ts`

**Error Handling:**
- **400:** Invalid JSON body, empty message, message too long (>2000 chars), invalid sessionId format, or session not found
- **429:** Rate limit exceeded
- **500:** Database or LLM errors; returns generic message "Unable to process request. Please try again later."
- No stack traces, secrets, or PII are exposed to the client
- Console logs include only error messages (not message content or sessionId)

---

### Environment Variables Required

**Local (`.env.local`):**

- **`NEXT_PUBLIC_SUPABASE_URL`** — Supabase project URL
- **`NEXT_PUBLIC_SUPABASE_ANON_KEY`** — Supabase anon key (chat API uses this for sessions/messages)
- **`SUPABASE_SERVICE_ROLE_KEY`** — Required for RAG: the API uses it to call `match_documents`; the indexer uses it to write to `site_documents` / `site_embeddings`
- **`OPENAI_API_KEY`** — Used for embeddings (indexer and RAG retrieval); required for RAG
- **`ANTHROPIC_API_KEY`** (preferred) or **`OPENAI_API_KEY`** — LLM for chat; Anthropic used if set, else OpenAI

For **Vercel** (or other host), set the same variables in the project environment. If any required env var is missing, the API can return 500 (e.g. “Failed to create session” or retrieval errors).

---

### Design and Accessibility

- **Design:** Uses `lib/design-tokens.ts` for colors, typography, spacing, and motion
- **Typography:** IBM Plex Sans (matches portfolio)
- **Colors:** Warm off-white background, muted navy accent, restrained palette
- **Motion:** Minimal (drawer slide only; 300ms transition)
- **Accessibility:**
  - Floating button and drawer have aria-labels
  - Drawer is `<aside role="dialog">`
  - Input and send button have aria-labels
  - Loading indicator has `role="status"` and `aria-live="polite"`
  - Focus management: input auto-focuses on drawer open
  - Keyboard support: Enter to send, Tab navigation
- **Disclaimer:** "AI assistant. Responses may be incomplete." displayed in drawer footer

---

### Future Improvements / Adjustment Points

- **Add or edit indexed content:** Extend `scripts/chatbot-index-site.ts` (e.g. new content sources, or more “goals → services” text). Re-run `npm run chatbot:index` after changes.
- **Tune RAG threshold:** If the bot often says “not fully sure” for good questions, check Vercel logs for “Best available similarity scores” and lower `similarityThreshold` in `lib/chatbot/retrieve.ts` slightly below that range. If responses feel off-topic, raise the threshold.
- **Add or change services/copy:** Update `lib/chatbot/prompts.ts` and/or `data/services.ts`; if you change data or pages the indexer reads, re-run the indexer.
- **Tune rate limits:** Edit `lib/chatbot/rateLimit.ts` (default 20 messages/hour per session or IP).
- **RLS:** Configure Row Level Security in Supabase if you want stricter access control (see Step 6).
- **Extend widget to other routes:** Render `<ChatWidget />` from a global layout or other pages (e.g. `app/layout.tsx` or `/contact`).
- **Admin UI:** Dashboard to view `chat_sessions` and `chat_messages` for analytics or follow-up.
