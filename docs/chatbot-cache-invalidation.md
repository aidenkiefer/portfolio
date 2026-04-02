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
