# 06 — Chatbot v2: Neighbor expansion

## Task

After rerank, expand each selected chunk with same-document neighbors (adjacent chunk_index). Merge into expanded blocks; cap context by maxContextTokens. Document chunk_index in schema or metadata if indexer must set it. formatContextForLLM uses expanded blocks; optionally skip neighbor if different section.

## Mandatory skill usage

- **rag-engineer**, **rag-implementation**, **context-window-management** (docs/skills-catalog.md).
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Sections 2.2, 4)
- docs/chatbot-expansion.md (Section 1.4)
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- lib/chatbot/retrieve.ts
- lib/chatbot/rag-types.ts
- docs/scripts (schema note only if chunk_index added)
- scripts/chatbot-index-site.ts (minimal, only if indexer must set chunk_index)

## Hard Limits

- Do not run shell commands or verification (CLAUDE.md). Do not change API response shape. If blocked, stop and ask to extend Allowed Files.

## Instructions

1. Ensure chunk_index or ordering available from retrieval; document assumption if not in schema.
2. After finalTopK: fetch neighbors by document_id and chunk_index; build expanded blocks; pass to formatContextForLLM with token cap.
3. Update formatContextForLLM to accept expanded blocks and cap length.

## Done Criteria

- Selected chunks expanded with neighbors where available; context capped. Only listed files modified; summary in 5 bullets or fewer.
