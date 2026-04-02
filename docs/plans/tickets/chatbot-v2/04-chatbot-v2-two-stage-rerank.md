# 04 — Chatbot v2: Two-stage retrieval and reranking

## Task

Add two-stage retrieval: (1) high-recall candidates (candidateTopK 30–50, lower threshold), (2) rerank to pick finalTopK (6–10). Update confidence to use rerank score or similarity plus min chunk count.

- Config: candidateTopK, candidateThreshold, finalTopK, similarityThreshold, rerankThreshold, minChunksSelected.
- Create lib/chatbot/rerank.ts: rerankChunks with query, chunks, pageContext optional; returns chunks with rerankScore. Use LLM to rank by query vs title/section/snippet; JSON with index and score 0–100.
- In retrieve.ts: after union/dedupe take candidateTopK; call rerankChunks; take top finalTopK; pass to formatContextForLLM. hasHighConfidence: bestRerankScore >= rerankThreshold OR bestSimilarity >= similarityThreshold, AND chunks.length >= minChunksSelected OR top score very high.
- Log candidate count, post-rerank scores, final count.

## Mandatory skill usage

- **rag-engineer**, **rag-implementation**, **llm-application-dev-prompt-optimize**, **prompt-engineering-patterns** (docs/skills-catalog.md).
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Sections 2.2, 4)
- docs/chatbot-expansion.md (Section 1.2)
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- lib/chatbot/rerank.ts (create)
- lib/chatbot/retrieve.ts
- lib/chatbot/rag-types.ts (add rerankScore if needed)

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md). Do not change API response shape. If blocked, stop and ask to extend Allowed Files.

## Instructions

1. Add config in retrieve.ts: candidateTopK, candidateThreshold, finalTopK, rerankThreshold, minChunksSelected.
2. Create rerank.ts: prompt with query and chunk title/section/snippet; LLM returns JSON ranked list with scores; attach rerankScore to chunks; return sorted by rerankScore.
3. In retrieve: after candidates, call rerankChunks; take top finalTopK; update hasHighConfidence per spec. Log as described.

## Done Criteria

- Reranker exists; retrieve uses it for finalTopK; confidence uses rerank and similarity. Only listed files modified; summary in 5 bullets or fewer.
