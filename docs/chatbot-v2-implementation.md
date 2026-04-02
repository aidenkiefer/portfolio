# Chatbot v2 Implementation Documentation

## Caching (Post-v2)

**Added:** 2026-02-13
**Status:** Implemented
**Design:** `docs/plans/2026-02-13-chatbot-caching-design.md`

### What's Cached

Final retrieval results (post-rerank chunks) cached in Upstash Redis with 48h TTL.

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
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` - Upstash Redis credentials

### Invalidation

See `docs/chatbot-cache-invalidation.md` for full guide.

**Quick invalidation:** Update `CONTENT_VERSION` in Vercel env vars, redeploy.

### Error Handling

Fail-open strategy:
- Redis unavailable → bypass cache, run pipeline
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
