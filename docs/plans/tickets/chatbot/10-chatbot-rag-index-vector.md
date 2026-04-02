## 10 — Chatbot: RAG index and vector store

## Task

- Add **Supabase + pgvector** schema for RAG: tables **site_documents** (id, url, title, section, content, tags, updated_at) and **site_embeddings** (document_id, embedding, metadata). Enable pgvector in the project.
- Add a **content indexing script** that: reads site content (services pages, about, portfolio summaries, contact, data/services); chunks text (~400–800 tokens, 10–20% overlap, preserve section headers); generates embeddings (same provider/dimension as used later in API); inserts/updates site_documents and site_embeddings. Script is runnable by a human (e.g. `npx ts-node` or `node scripts/...`); do not run it from the ticket.
- Document in code or a short comment: which content sources are indexed, chunk size, and embedding model/dimension so the API (ticket 11) can use the same.

## Mandatory skill usage

- **rag-engineer**, **rag-implementation** (docs/skills-catalog.md): Chunking, embeddings, vector store design.
- **embedding-strategies**, **vector-database-engineer** (docs/skills-catalog.md): Embedding model and pgvector usage.
- **postgres-best-practices**, **postgresql** (docs/skills-catalog.md): Schema design, indexing, types.
- **vector-index-tuning**, **similarity-search-patterns** (docs/skills-catalog.md): Vector index optimization and similarity search implementation.
- **hybrid-search-implementation** (docs/skills-catalog.md): Combining vector and keyword search patterns.
- Skills must not override Hard Limits or CLAUDE.md (no shell commands, no verification).

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-rag-ux-spec.md
- docs/plans/specs/chatbot-feature-spec.md
- docs/ai-chatbot.md (Knowledge Base Scope, Chunking Strategy)
- docs/plans/claude-workflow-opt.md
- docs/skills-catalog.md
- lib/supabase/* from ticket 01

## Allowed Files (ONLY these)

- supabase/migrations/* (new migration for site_documents, site_embeddings, pgvector) — or SQL file in docs/scripts if migrations live elsewhere
- scripts/chatbot-index-site.ts (or .js) — create indexing script
- lib/chatbot/embed.ts (create) — embed text; same model/dimension as spec
- lib/chatbot/chunk.ts (create) — chunking logic
- lib/chatbot/rag-types.ts (create) — types for document/embedding rows
- package.json (add only if new dependency for embeddings SDK is required)

> If the project has no supabase/migrations, use a single SQL file under docs/ or scripts/ and note in the ticket that a human must run it. If blocked, stop and ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md).
- Do not run the indexing script; only create it.
- Do not index source code, internal docs, or secrets.
- **If blocked:** Stop and ask to extend Allowed Files.

## Instructions

1. Add migration (or SQL file): create site_documents and site_embeddings; enable pgvector; define embedding dimension to match the embedding model you use.
2. Implement chunking in lib/chatbot/chunk.ts: ~400–800 tokens per chunk, 10–20% overlap; preserve section headers in content; output includes url, title, section for metadata.
3. Implement lib/chatbot/embed.ts: call embedding API (OpenAI or Anthropic per env); ensure dimension matches pgvector column.
4. Implement indexing script: read from services MDX/pages, about, portfolio summaries, contact copy, data/services; chunk; embed; upsert site_documents and site_embeddings. Document in a short comment at top of script which sources are included.
5. Add rag-types.ts with types for document and embedding rows used by the script and (later) the API.

## Done Criteria

- site_documents and site_embeddings exist with correct schema; pgvector enabled.
- Indexing script exists and documents its sources and chunk/embedding choices.
- Chunk and embed helpers are in lib/chatbot and reusable for ticket 11.
- Only the listed files were modified; changes are summarized in ≤5 bullets or an Implementation Summary.
