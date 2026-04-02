# Chatbot RAG Caching Design

**Date:** 2026-02-13
**Status:** Approved for implementation
**Strategy:** Simple end-to-end caching (Option B)

---

## Context

After implementing chatbot v2 (multi-query retrieval, two-stage reranking, hybrid search), the RAG pipeline is robust but expensive and slow. Each request executes:

1. Query transformation (LLM generates 3-5 alternate queries)
2. Embeddings (3-5 calls to OpenAI embedding API)
3. Vector + keyword search (Supabase queries)
4. Reranking (LLM scores chunks 0-100)
5. Final selection

**Problem:** High latency (~2-3s) and cost (~$0.005/query)
**Traffic pattern:** Service-oriented chatbot with moderately repetitive queries (pricing, timelines, capabilities, tech stack)
**Solution:** Cache final retrieval results (post-rerank chunks)

---

## Design Decision: Simple End-to-End Caching

**Why not multi-layer caching?**
- Adds complexity (multiple cache layers, dependency ordering, partial invalidation bugs)
- Justified only at millions of requests/day or strict latency SLAs
- We're not there yet

**Why not embedding-only caching?**
- Embedding cost is not our bottleneck
- Expensive steps are: query transform LLM + rerank LLM
- Embedding-only doesn't eliminate those

**Why end-to-end?**
- Highest ROI relative to complexity
- Removes entire pipeline in one step (transform + embeddings + retrieval + rerank)
- Clean invalidation via content versioning
- Fits our traffic pattern (moderately repetitive queries)

**Expected impact:**
- Cache hit rate: 30-60%
- Latency reduction: 50-80% (from ~2-3s to ~300-600ms)
- Cost reduction: 40-70%

---

## Architecture

### What We Cache

**Cache layer:** Final retrieval result (post-rerank chunks)
**Data structure:** `RetrievedChunk[]` array with:
- `document` (id, url, title, section, content, tags, updated_at)
- `similarity` (vector search score)
- `rerankScore` (LLM relevance score 0-100)

**Why this layer:**
- Eliminates: query transform + 3-5 embeddings + vector search + keyword search + rerank
- Preserves: LLM answer generation (uses cached chunks but fresh conversation history)
- Clean separation: retrieval is deterministic per query+route, answers are session-specific

**What we DON'T cache:**
- LLM-generated answers (depend on conversation history, vary per session)
- User messages or session data

### Cache Storage

**Provider:** Vercel KV (Redis)
**Why:** Serverless-friendly, no connection pooling, built into Vercel, auto-configured

---

## Cache Key Structure

### Format

```
rag:v1:{env}:{contentVersion}:{retrievalConfigHash}:{modelHash}:{queryHash}
```

### Components

1. **`rag:v1`** - Namespace + schema version (bump if cache data format changes)

2. **`env`** - Deployment environment:
   ```typescript
   const env = process.env.VERCEL_ENV || 'development';
   // 'production' | 'preview' | 'development'
   ```
   Prevents staging/preview traffic polluting production cache

3. **`contentVersion`** - Content freshness marker:
   ```typescript
   const contentVersion = process.env.CONTENT_VERSION || 'v1';
   ```
   **Fallback safety:** If missing or undefined, use `'v1'` and log warning
   **Invalidation:** Bump env var when site_documents change (v1 → v2)

4. **`retrievalConfigHash`** - Captures retrieval tuning:
   ```typescript
   const retrievalConfigHash = createHash('md5')
     .update(JSON.stringify(RETRIEVAL_CONFIG))
     .digest('hex')
     .slice(0, 6);
   ```
   Invalidates cache when tuning `candidateTopK`, `finalTopK`, `rerankThreshold`, etc.

5. **`modelHash`** - Model + prompt version:
   ```typescript
   const modelHash = createHash('md5')
     .update(getEmbeddingModel()) // 'text-embedding-3-small'
     .update(process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-20241022')
     .update(PROMPT_VERSION || 'v1')
     .digest('hex')
     .slice(0, 8);
   ```

6. **`queryHash`** - Normalized query + route:
   ```typescript
   function normalizeQuery(q: string): string {
     return q
       .toLowerCase()
       .normalize('NFKC')              // Unicode normalization
       .replace(/[^\w\s]/g, '')        // Remove punctuation
       .replace(/\s+/g, ' ')           // Collapse whitespace
       .trim();
   }

   const queryHash = createHash('md5')
     .update(normalizeQuery(query))
     .update(pathname || '')
     .digest('hex')
     .slice(0, 12);
   ```

**Strong normalization benefits:**
- Treats "How much does it cost?" and "how much does it cost" as same query
- Expected hit rate improvement: **10-25%** vs basic normalization

### TTL with Jitter

```typescript
const baseTTL = 48 * 3600; // 48 hours
const jitter = 0.9 + Math.random() * 0.2; // ±10%
const ttl = Math.floor(baseTTL * jitter); // 43.2h - 52.8h range
```

**Why jitter:** Prevents cache stampede when many keys expire simultaneously

---

## Integration Points

### Primary Integration: `lib/chatbot/retrieve.ts`

Modify `retrieveRelevantChunks()`:

```typescript
export async function retrieveRelevantChunks(
  query: string,
  pageContext?: { pathname?: string }
): Promise<RetrievedChunk[]> {
  const startTime = performance.now();

  // 1. Build cache key
  const cacheKey = buildCacheKey(query, pageContext?.pathname);

  // 2. Try cache first
  const cached = await getFromCache(cacheKey);
  if (cached) {
    const latencyMs = Math.round(performance.now() - startTime);
    console.log(`[RAG Cache] HIT | query="${query.slice(0, 30)}..." | latency=${latencyMs}ms`);
    return cached;
  }

  // 3. Cache miss - run full pipeline
  console.log(`[RAG Cache] MISS | query="${query.slice(0, 30)}..."`);

  try {
    // Existing pipeline: transform → embed → search → rerank → select
    const finalChunks = /* ... existing logic ... */;

    // 4. Cache the result
    await setCache(cacheKey, finalChunks);

    const latencyMs = Math.round(performance.now() - startTime);
    console.log(`[RAG Cache] Pipeline complete | latency=${latencyMs}ms | chunks=${finalChunks.length}`);

    return finalChunks;

  } catch (error) {
    console.error('Error in retrieveRelevantChunks:', error);
    return [];
  }
}
```

### New Files

1. **`lib/chatbot/cache.ts`** - Cache utilities:
   - `buildCacheKey(query, pathname)` - generates cache key with all hashes
   - `getFromCache(key)` - fetches from KV with error handling
   - `setCache(key, value, ttl?)` - stores with jittered TTL
   - `normalizeQuery(query)` - strong normalization
   - `flushCache(pattern?)` - emergency cache clear (admin utility)

2. **`lib/chatbot/config.ts`** (optional) - Centralize config:
   - Export `RETRIEVAL_CONFIG`
   - Export `PROMPT_VERSION` constant

### No Changes Needed

- `app/api/chat/route.ts` - uses `retrieveRelevantChunks()` as-is
- Frontend components - no changes
- LLM/prompts - no changes

### Environment Variables

```bash
# .env.local
CONTENT_VERSION=v1          # Bump when site_documents change
KV_REST_API_URL=...         # Vercel KV (auto-set in Vercel)
KV_REST_API_TOKEN=...       # Vercel KV (auto-set in Vercel)
PROMPT_VERSION=v1           # Bump when SYSTEM_PROMPT changes
```

---

## Error Handling & Fallback Strategy

**Core principle:** Cache failures never break user experience (fail open, not closed)

### Error Scenarios

1. **KV unavailable** (network issue, quota, service down):
   - Catch error, log warning, return `null` from `getFromCache()`
   - Pipeline runs normally without cache
   - Cache write failures logged but non-fatal

2. **Corrupted cache data** (schema change, JSON parse error):
   - Validate cached data structure before returning
   - If malformed: log warning, return `null`, run pipeline
   - Sanity checks: array length, required fields (`document`, `similarity`)

3. **contentVersion missing**:
   - Fall back to `'v1'`
   - Log warning (indicates env var issue)
   - Never cache with `undefined`/`null` version

4. **Cache stampede** (many requests miss simultaneously):
   - Mitigated by TTL jitter
   - Optional future enhancement: request coalescing
   - Not implementing initially (observe first)

### Fallback Flow

```
Request → Try cache → Error? → Log & bypass → Run pipeline → Try write → Write error? → Log & continue → Return result
```

### Implementation

```typescript
async function getFromCache(key: string): Promise<RetrievedChunk[] | null> {
  try {
    const cached = await kv.get(key);
    if (!cached) return null;

    const parsed = JSON.parse(cached);

    // Validate structure
    if (!Array.isArray(parsed) || parsed.length === 0) {
      console.warn('[RAG Cache] Invalid cached data, ignoring');
      return null;
    }

    // Sanity check required fields
    if (!parsed[0]?.document || typeof parsed[0]?.similarity !== 'number') {
      console.warn('[RAG Cache] Malformed chunks, ignoring');
      return null;
    }

    return parsed;
  } catch (error) {
    console.error('[RAG Cache] Read failed, bypassing cache:', error);
    return null; // Fail open
  }
}

async function setCache(key: string, value: any, ttl: number): Promise<void> {
  try {
    await kv.set(key, JSON.stringify(value), { ex: ttl });
  } catch (error) {
    console.error('[RAG Cache] Write failed, continuing:', error);
    // Non-fatal - don't throw
  }
}
```

---

## Cache Invalidation Strategy

### Primary Mechanism: Manual Version Bump (Recommended)

**Workflow:**
1. Update site content (MDX files, data files)
2. Run embeddings indexer (`npm run index:embeddings`)
3. Bump `CONTENT_VERSION` in Vercel env vars (v1 → v2)
4. Redeploy (or env var takes effect immediately)
5. Old cache keys (with v1) orphaned, new keys (with v2) start fresh

**Pros:**
- Simple, explicit control
- No code complexity
- Works with any deployment workflow

**Cons:**
- Manual step (could forget)
- Can automate with CI/CD hook later

### Alternative: Automated Timestamp-Based (Future)

If you automate embeddings indexing:

```typescript
// After indexer runs:
await kv.set('content:version', Date.now().toString());

// In cache key builder:
const contentVersion = await kv.get('content:version') || 'v1';
```

**Trade-offs:**
- ✅ Automatic invalidation
- ❌ Adds KV dependency to every request
- ❌ Small latency overhead (~10-20ms)
- ❌ Need to cache the version itself

**Decision:** Start with manual, move to automated if indexing becomes frequent

### Cache Cleanup

- **No explicit cleanup needed** - Redis auto-evicts expired keys
- Old version keys expire naturally after TTL (48h)
- If storage becomes concern: periodic purge script

### Emergency Cache Flush

```typescript
// lib/chatbot/cache.ts - admin utility
export async function flushCache(pattern: string = 'rag:v1:*') {
  let cursor = 0;
  let deletedCount = 0;

  do {
    const result = await kv.scan(cursor, { match: pattern, count: 100 });
    cursor = result[0];
    const keys = result[1];

    if (keys.length > 0) {
      await Promise.all(keys.map(key => kv.del(key)));
      deletedCount += keys.length;
    }
  } while (cursor !== 0);

  console.log(`[RAG Cache] Flushed ${deletedCount} keys`);
}
```

**Use cases:**
- Bug in caching logic discovered
- Model/prompt change without version bump
- Testing cache behavior

---

## Monitoring & Observability

### Cache Hit Instrumentation

```typescript
console.log(`[RAG Cache] ${cacheHit ? 'HIT' : 'MISS'} | query="${query.slice(0, 30)}..." | latency=${latencyMs}ms | env=${env}`);
```

**Metrics to track:**
- Cache hit rate (target: 30-60% after 1 week)
- Average retrieval latency (should drop 50-80%)
- Cache error rate (alert if >5%)
- Rerank skip rate (if skip-rerank logic added)

### Recommended Alerts

1. **Cache error rate > 5%** → investigate KV issues
2. **Cache hit rate < 20% after 1 week** → revisit normalization or TTL
3. **Average retrieval latency not improving** → cache not helping, investigate

### Success Criteria

After 1 week in production:
- ✅ Cache hit rate ≥ 30%
- ✅ P95 latency drops ≥ 50%
- ✅ Cost per query drops ≥ 40%
- ✅ Zero user-facing errors from cache failures

---

## Future Optimizations (Out of Scope)

**If logs show query transform is still a bottleneck after caching:**
- Add second cache layer for transformed queries
- Key: `transform:v1:${hash(query + pageContext)}`
- TTL: 7 days (longer, more deterministic)

**If skip-rerank logic is added:**
- Instrument rerank skip rate
- Track if cached results have higher/lower rerank scores

**If traffic grows significantly:**
- Request coalescing (multiple concurrent identical requests share pipeline)
- Dedicated cache warming (pre-populate common queries)
- Multi-region cache replication

---

## Implementation Plan

See `docs/plans/2026-02-13-chatbot-caching-plan.md` (generated by writing-plans skill)

---

## References

- ChatGPT caching analysis (user conversation)
- docs/chatbot-expansion.md (Section: "Should you add caching?")
- docs/plans/specs/chatbot-v2-spec.md
- Vercel KV documentation
