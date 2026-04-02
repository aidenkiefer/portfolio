# Chatbot RAG Caching Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add end-to-end caching for chatbot RAG retrieval results to reduce latency by 50-80% and cost by 40-70%

**Architecture:** Cache final post-rerank chunks in Vercel KV, keyed by normalized query + page context + content/model/config versions, with 48h TTL and jitter

**Tech Stack:** Vercel KV (Redis), Node.js crypto, TypeScript

---

## Task 1: Create cache utilities module

**Files:**
- Create: `lib/chatbot/cache.ts`

**Step 1: Create cache.ts with imports and types**

Create `lib/chatbot/cache.ts`:

```typescript
import { kv } from '@vercel/kv';
import { createHash } from 'crypto';
import type { RetrievedChunk } from './rag-types';
import { getEmbeddingModel } from './embed';
import { RETRIEVAL_CONFIG } from './retrieve';

/**
 * Cache utilities for RAG retrieval results
 * Caches post-rerank chunks to eliminate expensive pipeline steps
 */
```

**Step 2: Add query normalization function**

Add to `lib/chatbot/cache.ts`:

```typescript
/**
 * Normalizes query for consistent cache keys
 * Expected hit rate improvement: 10-25% vs basic normalization
 */
export function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .normalize('NFKC')              // Unicode normalization
    .replace(/[^\w\s]/g, '')        // Remove punctuation
    .replace(/\s+/g, ' ')           // Collapse whitespace
    .trim();
}
```

**Step 3: Add cache key builder**

Add to `lib/chatbot/cache.ts`:

```typescript
/**
 * Builds cache key with version hashes
 * Format: rag:v1:{env}:{contentVersion}:{retrievalConfigHash}:{modelHash}:{queryHash}
 */
export function buildCacheKey(query: string, pathname?: string): string {
  // Environment (prevents staging/preview polluting production)
  const env = process.env.VERCEL_ENV || 'development';

  // Content version with fallback safety
  let contentVersion = process.env.CONTENT_VERSION || 'v1';
  if (!contentVersion || contentVersion === 'undefined') {
    console.warn('[RAG Cache] contentVersion missing, using fallback');
    contentVersion = 'fallback-v1';
  }

  // Retrieval config hash (invalidates on tuning)
  const retrievalConfigHash = createHash('md5')
    .update(JSON.stringify(RETRIEVAL_CONFIG))
    .digest('hex')
    .slice(0, 6);

  // Model + prompt version hash
  const promptVersion = process.env.PROMPT_VERSION || 'v1';
  const modelHash = createHash('md5')
    .update(getEmbeddingModel())
    .update(process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-20241022')
    .update(promptVersion)
    .digest('hex')
    .slice(0, 8);

  // Query + pathname hash with strong normalization
  const queryHash = createHash('md5')
    .update(normalizeQuery(query))
    .update(pathname || '')
    .digest('hex')
    .slice(0, 12);

  return `rag:v1:${env}:${contentVersion}:${retrievalConfigHash}:${modelHash}:${queryHash}`;
}
```

**Step 4: Add cache get function with validation**

Add to `lib/chatbot/cache.ts`:

```typescript
/**
 * Retrieves chunks from cache with validation
 * Fails open - returns null on any error
 */
export async function getFromCache(key: string): Promise<RetrievedChunk[] | null> {
  try {
    const cached = await kv.get(key);
    if (!cached) return null;

    const parsed = JSON.parse(cached as string);

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

    return parsed as RetrievedChunk[];
  } catch (error) {
    console.error('[RAG Cache] Read failed, bypassing cache:', error);
    return null; // Fail open
  }
}
```

**Step 5: Add cache set function with TTL jitter**

Add to `lib/chatbot/cache.ts`:

```typescript
/**
 * Stores chunks in cache with jittered TTL
 * Non-fatal - logs errors but doesn't throw
 */
export async function setCache(
  key: string,
  value: RetrievedChunk[],
  baseTTL: number = 48 * 3600 // 48 hours default
): Promise<void> {
  try {
    // Add jitter to prevent cache stampede
    const jitter = 0.9 + Math.random() * 0.2; // ±10%
    const ttl = Math.floor(baseTTL * jitter); // 43.2h - 52.8h range

    await kv.set(key, JSON.stringify(value), { ex: ttl });
  } catch (error) {
    console.error('[RAG Cache] Write failed, continuing:', error);
    // Non-fatal - don't throw
  }
}
```

**Step 6: Add emergency cache flush utility**

Add to `lib/chatbot/cache.ts`:

```typescript
/**
 * Emergency cache flush utility
 * Use cases: bug in caching logic, model/prompt change without version bump
 */
export async function flushCache(pattern: string = 'rag:v1:*'): Promise<number> {
  let cursor = 0;
  let deletedCount = 0;

  try {
    do {
      const result = await kv.scan(cursor, { match: pattern, count: 100 });
      cursor = result[0];
      const keys = result[1];

      if (keys.length > 0) {
        await Promise.all(keys.map(key => kv.del(key)));
        deletedCount += keys.length;
      }
    } while (cursor !== 0);

    console.log(`[RAG Cache] Flushed ${deletedCount} keys matching pattern: ${pattern}`);
    return deletedCount;
  } catch (error) {
    console.error('[RAG Cache] Flush failed:', error);
    return deletedCount;
  }
}
```

**Step 7: Commit**

```bash
git add lib/chatbot/cache.ts
git commit -m "feat(chatbot): add RAG caching utilities

- Add cache key builder with version hashing
- Add query normalization (10-25% hit rate improvement)
- Add cache get/set with validation and error handling
- Add emergency flush utility
- Implement TTL jitter to prevent cache stampede
- Fail-open strategy for cache errors"
```

---

## Task 2: Export RETRIEVAL_CONFIG for cache hashing

**Files:**
- Modify: `lib/chatbot/retrieve.ts:20-35`

**Step 1: Make RETRIEVAL_CONFIG exportable**

In `lib/chatbot/retrieve.ts`, change:

```typescript
const RETRIEVAL_CONFIG = {
```

To:

```typescript
export const RETRIEVAL_CONFIG = {
```

This allows `cache.ts` to import and hash the config.

**Step 2: Commit**

```bash
git add lib/chatbot/retrieve.ts
git commit -m "refactor(chatbot): export RETRIEVAL_CONFIG for cache keying"
```

---

## Task 3: Integrate caching into retrieve.ts

**Files:**
- Modify: `lib/chatbot/retrieve.ts:70-199`

**Step 1: Add cache imports at top of file**

In `lib/chatbot/retrieve.ts`, after existing imports, add:

```typescript
import { buildCacheKey, getFromCache, setCache } from './cache';
```

**Step 2: Wrap retrieveRelevantChunks with caching**

Replace the entire `retrieveRelevantChunks` function (lines ~70-199) with:

```typescript
/**
 * Retrieves relevant content chunks for a user query using multi-query semantic search
 * with caching to reduce latency and cost
 *
 * @param query - User's question or message
 * @param pageContext - Optional page context for query transformation
 * @returns Array of relevant chunks with similarity scores, or empty array if low confidence
 */
export async function retrieveRelevantChunks(
  query: string,
  pageContext?: { pathname?: string }
): Promise<RetrievedChunk[]> {
  const startTime = performance.now();

  // Build cache key
  const cacheKey = buildCacheKey(query, pageContext?.pathname);

  // Try cache first
  const cached = await getFromCache(cacheKey);
  if (cached) {
    const latencyMs = Math.round(performance.now() - startTime);
    console.log(`[RAG Cache] HIT | query="${query.slice(0, 30)}..." | latency=${latencyMs}ms`);
    return cached;
  }

  // Cache miss - run full pipeline
  console.log(`[RAG Cache] MISS | query="${query.slice(0, 30)}..."`);

  try {
    // Step 1: Transform query into multiple retrieval queries
    const transformResult = await transformQueryForRetrieval({
      userQuery: query,
      pageContext
    });

    console.log('[Chat API] Query transform:', {
      original: query,
      transformed: transformResult.queries,
      strategy: transformResult.strategyUsed
    });

    const supabase = getSupabaseClient();
    const allResults: Array<{ doc: any; similarity: number }> = [];
    let keywordCount = 0;

    // Step 2: Retrieve for each transformed query (vector search)
    for (const transformedQuery of transformResult.queries) {
      const queryEmbedding = await embedText(transformedQuery);

      const { data: results, error } = await supabase.rpc(
        'match_documents',
        {
          query_embedding: queryEmbedding,
          match_threshold: RETRIEVAL_CONFIG.candidateThreshold,
          match_count: RETRIEVAL_CONFIG.perQueryCount
        }
      );

      if (!error && results && results.length > 0) {
        for (const result of results) {
          allResults.push({ doc: result, similarity: result.similarity });
        }
      }
    }

    // Step 2b: Hybrid retrieval - add keyword search results
    try {
      const { data: keywordResults, error: keywordError } = await supabase.rpc(
        'match_documents_keyword',
        {
          query_text: query, // Use original query for keyword search
          match_threshold: 0.1, // Lower threshold for keyword relevance
          match_count: RETRIEVAL_CONFIG.perQueryCount
        }
      );

      if (!keywordError && keywordResults && keywordResults.length > 0) {
        keywordCount = keywordResults.length;
        for (const result of keywordResults) {
          allResults.push({ doc: result, similarity: result.similarity || 0.5 });
        }
      }
    } catch (keywordErr) {
      // Keyword search RPC may not exist yet (requires manual SQL setup)
      // Continue with vector results only
      console.log('[Chat API] Keyword search not available (expected if SQL not yet run)');
    }

    if (allResults.length === 0) {
      console.log('[Chat API] No relevant chunks found across all queries');
      return [];
    }

    // Step 3: Deduplicate by document ID, keeping highest similarity
    const deduped = new Map<string, { doc: any; similarity: number }>();
    for (const item of allResults) {
      const docId = item.doc.id;
      const existing = deduped.get(docId);
      if (!existing || item.similarity > existing.similarity) {
        deduped.set(docId, item);
      }
    }

    // Step 4: Sort by similarity descending and take top candidateTopK
    const candidates = Array.from(deduped.values())
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, RETRIEVAL_CONFIG.candidateTopK);

    console.log('[Chat API] Candidates before rerank:', {
      vectorResults: allResults.length - keywordCount,
      keywordResults: keywordCount,
      totalCandidates: allResults.length,
      uniqueDocs: deduped.size,
      candidateCount: candidates.length,
      topScores: candidates.slice(0, 3).map(r => r.similarity)
    });

    // Step 5: Transform to RetrievedChunk format for reranking
    const candidateChunks: RetrievedChunk[] = candidates.map(item => ({
      document: {
        id: item.doc.id,
        url: item.doc.url,
        title: item.doc.title,
        section: item.doc.section,
        content: item.doc.content,
        tags: item.doc.tags,
        updated_at: item.doc.updated_at
      },
      similarity: item.similarity
    }));

    // Step 6: Rerank candidates using LLM
    const reranked = await rerankChunks(query, candidateChunks, pageContext);

    // Step 7: Take top finalTopK after reranking
    const finalChunks = reranked.slice(0, RETRIEVAL_CONFIG.finalTopK);

    console.log('[Chat API] Final chunks after rerank:', {
      candidateCount: candidates.length,
      rerankCount: reranked.length,
      finalCount: finalChunks.length,
      topRerankScores: finalChunks.slice(0, 3).map(r => r.rerankScore)
    });

    // Step 8: Neighbor expansion (optional - requires chunk_index in metadata)
    const expandedChunks = await expandWithNeighbors(finalChunks, supabase);

    // Cache the result before returning
    await setCache(cacheKey, expandedChunks);

    const latencyMs = Math.round(performance.now() - startTime);
    console.log(`[RAG Cache] Pipeline complete | latency=${latencyMs}ms | chunks=${expandedChunks.length}`);

    return expandedChunks;

  } catch (error) {
    console.error('Error in retrieveRelevantChunks:', error);
    return [];
  }
}
```

**Step 3: Commit**

```bash
git add lib/chatbot/retrieve.ts
git commit -m "feat(chatbot): integrate caching into RAG pipeline

- Wrap retrieveRelevantChunks with cache check
- Cache final post-rerank chunks before returning
- Log cache hits/misses with latency metrics
- Preserve all existing pipeline logic"
```

---

## Task 4: Add environment variables

**Files:**
- Modify: `.env.local` (if exists, otherwise create)
- Modify: `.env.example` (if exists)

**Step 1: Add to .env.local**

Add these lines to `.env.local` (create file if it doesn't exist):

```bash
# RAG Cache Configuration
CONTENT_VERSION=v1
PROMPT_VERSION=v1

# Vercel KV (auto-set in Vercel deployment, needed for local development)
# Get these from Vercel dashboard > Storage > KV
# KV_REST_API_URL=your-kv-url
# KV_REST_API_TOKEN=your-kv-token
```

**Step 2: Add to .env.example if it exists**

If `.env.example` exists, add the same section:

```bash
# RAG Cache Configuration
CONTENT_VERSION=v1
PROMPT_VERSION=v1

# Vercel KV (auto-configured in Vercel)
# KV_REST_API_URL=
# KV_REST_API_TOKEN=
```

**Step 3: Commit**

```bash
git add .env.local .env.example
git commit -m "chore(chatbot): add cache environment variables

- Add CONTENT_VERSION for cache invalidation
- Add PROMPT_VERSION for model versioning
- Document Vercel KV variables"
```

---

## Task 5: Install Vercel KV package

**Files:**
- Modify: `package.json`

**Step 1: Install @vercel/kv**

Run:

```bash
npm install @vercel/kv
```

**Step 2: Verify installation**

Check that `package.json` includes:

```json
{
  "dependencies": {
    "@vercel/kv": "^x.x.x"
  }
}
```

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "build(chatbot): add @vercel/kv for caching"
```

---

## Task 6: Test caching locally (manual verification)

**Files:**
- None (testing only)

**Step 1: Set up local KV (optional)**

For local testing, you can either:

**Option A:** Use Vercel KV in preview mode (recommended)
- Deploy to Vercel preview environment
- KV will be auto-configured
- Test with actual cache

**Option B:** Skip local KV testing
- Cache functions will fail open (return null)
- Pipeline will run normally without cache
- Verify logs show "Read failed, bypassing cache"

**Step 2: Start dev server**

Run:

```bash
npm run dev
```

Expected: Server starts without errors

**Step 3: Test chatbot**

1. Open `http://localhost:3000`
2. Open chatbot widget
3. Ask: "How much does the AI chatbot cost?"
4. Check browser console or terminal logs

Expected logs:
```
[RAG Cache] MISS | query="How much does the AI chatbot..."
[Chat API] Query transform: ...
[Chat API] Candidates before rerank: ...
[Chat API] Final chunks after rerank: ...
[RAG Cache] Pipeline complete | latency=XXXXms | chunks=X
```

**Step 4: Ask same question again**

Expected logs (if KV is set up):
```
[RAG Cache] HIT | query="How much does the AI chatbot..." | latency=XXms
```

Expected logs (if KV not set up):
```
[RAG Cache] Read failed, bypassing cache: [Error message]
[RAG Cache] MISS | query="How much does the AI chatbot..."
[RAG Cache] Write failed, continuing: [Error message]
```

**Step 5: Verify fail-open behavior**

If KV errors occur, verify:
- ✅ Chatbot still works (returns answers)
- ✅ No user-facing errors
- ✅ Logs show cache bypass messages

No commit needed (testing only).

---

## Task 7: Create cache invalidation documentation

**Files:**
- Create: `docs/chatbot-cache-invalidation.md`

**Step 1: Create invalidation doc**

Create `docs/chatbot-cache-invalidation.md`:

```markdown
# Chatbot RAG Cache Invalidation Guide

## When to Invalidate Cache

Invalidate the cache when:

1. **Content updated** - Site documents (MDX, blog posts, services pages) changed
2. **Embeddings reindexed** - After running `npm run index:embeddings`
3. **Prompt modified** - SYSTEM_PROMPT in `lib/chatbot/prompts.ts` changed
4. **Model changed** - Anthropic or OpenAI model version updated
5. **Retrieval config tuned** - RETRIEVAL_CONFIG in `lib/chatbot/retrieve.ts` modified

## Manual Version Bump (Current Method)

### Step 1: Update environment variable

In Vercel dashboard:
1. Go to Project → Settings → Environment Variables
2. Find `CONTENT_VERSION` (or `PROMPT_VERSION` if prompt changed)
3. Change value: `v1` → `v2`
4. Save

### Step 2: Redeploy (if needed)

If env var doesn't take effect immediately:
```bash
vercel --prod
```

### Step 3: Verify

Check logs for new cache keys:
```
rag:v1:production:v2:...  (was v1)
```

Old keys (with v1) will expire after 48 hours.

## Emergency Cache Flush

If cache is serving stale/incorrect data:

### Option 1: Version bump (recommended)
Follow steps above. Old cache orphaned immediately.

### Option 2: Manual flush (use sparingly)
```typescript
// In Node.js REPL or admin script
import { flushCache } from './lib/chatbot/cache';
await flushCache('rag:v1:*');
```

⚠️ **Warning:** Flushes entire cache, causing temporary latency spike.

## Cache Key Structure

```
rag:v1:{env}:{contentVersion}:{retrievalConfigHash}:{modelHash}:{queryHash}
```

**What invalidates automatically:**
- `retrievalConfigHash` - Changes when RETRIEVAL_CONFIG modified
- `modelHash` - Changes when model or PROMPT_VERSION modified

**What requires manual bump:**
- `contentVersion` - Must bump CONTENT_VERSION env var

## Monitoring Cache Health

Check logs for:
- **Cache hit rate**: Target 30-60% after 1 week
- **Cache errors**: Alert if >5%
- **Latency improvement**: Should drop 50-80%

If hit rate is low:
- Check if `CONTENT_VERSION` bumped too frequently
- Verify query normalization is working
- Consider increasing TTL

## Automation (Future)

Can automate by:
1. Adding post-indexing hook to bump `CONTENT_VERSION`
2. Using CI/CD to update env var on content changes
3. Implementing timestamp-based auto-invalidation (see design doc)
```

**Step 2: Commit**

```bash
git add docs/chatbot-cache-invalidation.md
git commit -m "docs(chatbot): add cache invalidation guide

- Document when to invalidate cache
- Provide step-by-step version bump instructions
- Add emergency flush procedure
- Explain cache key structure"
```

---

## Task 8: Update implementation docs

**Files:**
- Modify: `docs/chatbot-v2-implementation.md` (if exists) OR
- Create: `docs/chatbot-v2-implementation.md` (if doesn't exist)

**Step 1: Add caching section to docs**

If `docs/chatbot-v2-implementation.md` exists, add this section. Otherwise, create the file with full v2 implementation summary including this section:

```markdown
## Caching (Post-v2)

**Added:** 2026-02-13
**Status:** Implemented
**Design:** `docs/plans/2026-02-13-chatbot-caching-design.md`

### What's Cached

Final retrieval results (post-rerank chunks) cached in Vercel KV with 48h TTL.

**Cache key:** `rag:v1:{env}:{contentVersion}:{retrievalConfigHash}:{modelHash}:{queryHash}`

### Benefits

- **Latency:** 50-80% reduction (from ~2-3s to ~300-600ms on cache hit)
- **Cost:** 40-70% reduction (eliminates query transform + embeddings + rerank)
- **Hit rate:** Target 30-60% with strong query normalization

### Key Files

- `lib/chatbot/cache.ts` - Cache utilities (key builder, get/set, flush)
- `lib/chatbot/retrieve.ts` - Integration point (cache check + write)

### Configuration

Environment variables:
- `CONTENT_VERSION` - Bump when content changes (v1 → v2)
- `PROMPT_VERSION` - Bump when prompts change
- `VERCEL_ENV` - Auto-set (production/preview/development)
- `KV_REST_API_URL`, `KV_REST_API_TOKEN` - Auto-set in Vercel

### Invalidation

See `docs/chatbot-cache-invalidation.md` for full guide.

**Quick invalidation:** Update `CONTENT_VERSION` in Vercel env vars, redeploy.

### Error Handling

Fail-open strategy:
- KV unavailable → bypass cache, run pipeline
- Corrupted data → ignore, run pipeline
- Write failures → log but don't throw

Cache failures never break user experience.

### Monitoring

Check logs for:
- `[RAG Cache] HIT` - Cache hit with latency
- `[RAG Cache] MISS` - Cache miss, running pipeline
- `[RAG Cache] Read/Write failed` - Cache errors

Target metrics:
- Hit rate ≥ 30% after 1 week
- P95 latency ≤ 1s (was 2-3s)
- Cache error rate ≤ 5%
```

**Step 2: Commit**

```bash
git add docs/chatbot-v2-implementation.md
git commit -m "docs(chatbot): document caching implementation

- Add caching section to v2 implementation docs
- Document cache key structure and benefits
- Link to design doc and invalidation guide
- Specify monitoring targets"
```

---

## Done Criteria

- ✅ `lib/chatbot/cache.ts` created with all utilities
- ✅ `lib/chatbot/retrieve.ts` integrated with caching
- ✅ Environment variables added to `.env.local`
- ✅ `@vercel/kv` package installed
- ✅ Manual testing verified (fail-open behavior confirmed)
- ✅ Cache invalidation guide created
- ✅ Implementation docs updated
- ✅ All changes committed with conventional commit messages

## Next Steps (Post-Implementation)

1. **Deploy to Vercel preview** - Test with real KV
2. **Monitor cache hit rate** - Check logs after 1 week
3. **Tune if needed**:
   - If hit rate < 20%: Review normalization or TTL
   - If errors > 5%: Investigate KV issues
   - If latency not improved: Verify cache logic
4. **Consider future optimizations**:
   - Query transform caching (if transform is still bottleneck)
   - Skip-rerank logic (if high-confidence vector matches are common)
   - Request coalescing (if traffic grows significantly)

## Rollback Plan

If caching causes issues:

1. **Quick disable**: Set `CONTENT_VERSION=disabled` (keys won't match, cache bypassed)
2. **Code rollback**: Revert commits from this plan
3. **Emergency flush**: Use `flushCache()` utility if needed

Cache is designed to fail open, so pipeline should work even with cache errors.
