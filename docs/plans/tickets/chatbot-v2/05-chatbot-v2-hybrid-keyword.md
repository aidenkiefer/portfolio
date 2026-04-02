# 05 — Chatbot v2: Hybrid retrieval (keyword + vector)

## Task

Add keyword search alongside vector search. Union results, dedupe, then pass to rerank. Schema: tsvector + GIN + match_documents_keyword RPC (provide SQL in docs/scripts for manual run). In retrieve.ts call both vector and keyword; union and dedupe by document id; log keyword count and union size.

## Mandatory skill usage

- **postgres-best-practices**, **postgresql**, **hybrid-search-implementation**, **rag-engineer** (docs/skills-catalog.md).
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Sections 2.2, 2.6, 4)
- docs/chatbot-expansion.md (Section 1.3)
- docs/scripts/chatbot-rag-schema.sql
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- docs/scripts/chatbot-rag-keyword.sql (create)
- lib/chatbot/retrieve.ts

## Hard Limits

- Do not run shell commands or SQL; only provide SQL file. Do not change API response shape. If blocked, stop and ask to extend Allowed Files.

## Instructions

1. Create SQL file: tsvector column on site_documents, GIN index, match_documents_keyword function. Document manual run in Supabase.
2. In retrieve.ts: call match_documents_keyword; union with vector candidates; dedupe by document id; pass to rerank. Log keyword count and union size.

## Done Criteria

- SQL file exists; retrieve runs vector and keyword, unions and dedupes, then reranks. Only listed files modified; summary in 5 bullets or fewer.
