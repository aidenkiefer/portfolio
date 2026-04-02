# Chatbot: Issues Encountered and Fixes

This document summarizes issues that came up during chatbot implementation and deployment, the fixes applied, and open questions.

---

## 1. Vercel build: `Property 'ip' does not exist on type 'NextRequest'`

**Symptom:** Build failed with TypeScript error in `app/api/chat/route.ts`: `request.ip` does not exist.

**Cause:** In the Next.js App Router, `NextRequest` has no `ip` property. The client IP must be read from headers.

**Fix:** Derive IP from `x-forwarded-for` or `x-real-ip` (set by Vercel/proxies) and use that for rate limiting:

```ts
const forwarded = request.headers.get('x-forwarded-for');
const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') ?? 'unknown';
const rateLimitKey = sessionId || ip;
```

---

## 2. Vercel build: TypeScript errors (Supabase client typing)

**Symptom:** Build failed with multiple errors: `Argument of type '{ metadata: {} }' is not assignable to parameter of type 'never'`, `Property 'id' does not exist on type 'never'`, etc.

**Cause:** The custom `Database` type in `lib/supabase/server.ts` did not fully satisfy the Supabase client’s `GenericSchema` (e.g. missing `Views`/`Functions`), so the schema was inferred as `never`.

**Fix:**  
- Use `const supabase = createClient() as any` in the route so the client is not strictly typed for those calls.  
- Add a guard so `sessionId` is defined after create/verify (e.g. `if (!sessionId) throw new Error('Session ID required')`).  
- Type the message history as `Array<{ role: string; content: string }>` (e.g. `(messageHistory ?? []) as Array<...>`) so `callLLMWithContext` receives a known shape.

---

## 3. Vercel build: `supabaseUrl is required` during "Collecting page data"

**Symptom:** Build failed at "Collecting page data for /api/chat" with "supabaseUrl is required".

**Cause:** `lib/chatbot/retrieve.ts` created the Supabase client at **module load** (`const supabase = createClient(...)`). During build, Next.js loads the route and its imports; env vars are not available, so `createClient` threw.

**Fix:** Create the client only when needed (at request time). Replaced the top-level client with a helper `getSupabaseClient()` that reads env and calls `createClient` inside `retrieveRelevantChunks`, so the client is only created when the API runs in a real request.

---

## 4. Chat API returns 500 (generic)

**Symptom:** Browser showed 500 from `/api/chat`; no detail in the UI.

**Cause:** Any uncaught error in the route (missing env, Supabase/OpenAI error, etc.) is caught and returned as a generic 500. The real error was only in server logs.

**Fix:**  
- Standardized server-side logging with a prefix: `console.error('[Chat API]', message)` so Vercel logs (or local terminal) can be searched for `[Chat API]`.  
- Documented that env vars must be set in **Vercel → Settings → Environment Variables** (e.g. `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `OPENAI_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY`) and that `.env.local` is not deployed.

---

## 5. Chat API returns 400 "Session not found"

**Symptom:** Vercel log showed **400 Bad Request**; external call to Supabase `chat_sessions` occurred.

**Cause:** The client sent a `sessionId` (e.g. from `sessionStorage`) that no longer existed in the DB (stale ID, cleared DB, or different environment). The route treated “session not found” as a bad request and returned 400.

**Fix:** When the provided session ID is missing or invalid, treat it as “no session” and **create a new session** instead of returning 400. Flow: verify session; if error or no row, set `sessionId = undefined` and fall through to the existing “create new session” path. Stale IDs from the client no longer cause 400.

---

## 6. React error #418 (hydration) and 500 from `/api/chat`

**Symptom:** Console: "Minified React error #418" (hydration); also 500 from `/api/chat`.

**Cause (418):** Server and client rendered different content (e.g. initial greeting or state that depended on `sessionStorage`), or invalid HTML from markdown (e.g. raw `<`/`>` from LLM output) leading to hydration mismatch.

**Fixes:**  
- **Hydration:** Introduced a `mounted` state; session restore and initial greeting run only in `useEffect` after mount. The message list is rendered only when `mounted` is true so server and first client paint match.  
- **Markdown:** Escape HTML in LLM content before applying simple markdown (`& < > "` → entities), then apply bold/italic/code/links, to avoid invalid nesting and XSS.  
- **suppressHydrationWarning** on the div that uses `dangerouslySetInnerHTML` for assistant messages to avoid hydration noise from small encoding differences.

---

## 7. "Failed to create session" (500)

**Symptom:** Vercel log: `[Chat API] Failed to create session`.

**Cause:** Insert into `chat_sessions` failed. Most likely **Row Level Security (RLS)** is enabled on `chat_sessions` (and possibly `chat_messages`) with no policy allowing the **anon** role to INSERT/SELECT. The API uses the anon key; without a policy, Supabase rejects the insert.

**Fixes applied:**  
1. **Logging:** The route now logs the Supabase error when session creation fails: `console.error('[Chat API] Failed to create session:', createError.message, createError.code)`. After redeploying, check Vercel logs for the exact message (e.g. "new row violates row-level security policy").  
2. **Runbook:** In **docs/chatbot-feature.md** (Step 6), added SQL to enable RLS (if not already) and create policies so **anon** can INSERT and SELECT on `chat_sessions` and `chat_messages`. Run that SQL in the Supabase **SQL Editor** if you see "Failed to create session".

**SQL to run in Supabase (if RLS is blocking):**

```sql
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon insert and select chat_sessions"
  ON public.chat_sessions FOR ALL TO anon
  USING (true) WITH CHECK (true);

ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon insert and select chat_messages"
  ON public.chat_messages FOR ALL TO anon
  USING (true) WITH CHECK (true);
```

If policies with those names already exist, Supabase will report an error; adjust or drop existing policies as needed.

---

## Summary table

| # | Symptom | Root cause | Fix |
|---|--------|------------|-----|
| 1 | Build: `request.ip` missing | NextRequest has no `.ip` | Use `x-forwarded-for` / `x-real-ip` |
| 2 | Build: Supabase types `never` | Database type ≠ GenericSchema | Use `as any` for client; type sessionId/history |
| 3 | Build: supabaseUrl required | Client created at module load in retrieve.ts | Create client inside handler (getSupabaseClient()) |
| 4 | 500 from /api/chat | Uncaught errors, env not in Vercel | Log with `[Chat API]`; document Vercel env vars |
| 5 | 400 Session not found | Stale sessionId in client | Create new session instead of 400 |
| 6 | React 418 + 500 | Hydration mismatch; raw HTML in markdown | mounted state; escape HTML in markdown; suppressHydrationWarning |
| 7 | Failed to create session | RLS blocking anon insert | Add anon policies for chat_sessions/chat_messages; improve error log |

---

## Additional questions to explore

1. **RLS and security:** The current policies allow any anon client to INSERT/SELECT all rows in `chat_sessions` and `chat_messages`. For a public chatbot this is acceptable, but if you later add auth or want to scope by user/session, policies should be tightened (e.g. anon can only insert and select rows tied to their session identifier).

2. **Exact Supabase error for “Failed to create session”:** After the new logging is deployed, reproduce the error and check Vercel logs for the full `[Chat API] Failed to create session: <message> (code: <code>)`. If it is not RLS (e.g. missing table, wrong schema), use that message to fix the underlying issue.

3. **Indexing script and env:** The indexing script loads `.env.local` via `dotenv`; it does not run on Vercel. Confirm that re-indexing after content changes is done locally (or in a CI step) with the correct env.

4. **Rate limiting:** Rate limiting is in-memory per server instance. On Vercel, instances are short-lived and multiple instances can run; limits are not shared globally. If you need stricter or global limits, consider a shared store (e.g. Redis or Vercel KV).

5. **CSS warnings in build:** Build log showed "Unexpected token Semicolon" in generated CSS (e.g. `.\[-\:\\\|\]`). These are warnings only and did not fail the build but could be cleaned up (e.g. Tailwind/class names that generate invalid selectors).

---

## References

- **Setup runbook:** docs/chatbot-feature.md  
- **RAG schema:** docs/scripts/chatbot-rag-schema.sql  
- **Tickets:** docs/plans/tickets/chatbot/README.md  
- **Vercel logs:** Project → Logs or Deployments → [latest] → Functions; search for `[Chat API]`
