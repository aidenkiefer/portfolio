-- Chatbot RAG Schema Setup
-- Run this SQL in your Supabase project to enable vector storage for the chatbot.
-- Safe to re-run: uses IF NOT EXISTS and DROP POLICY IF EXISTS where needed.
-- Requires: public.chat_sessions and public.chat_messages already exist (from docs/chatbot-feature.md Step 2).

-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Tables live in public schema (same as chat_sessions / chat_messages)
CREATE TABLE IF NOT EXISTS public.site_documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  title TEXT NOT NULL,
  section TEXT,
  content TEXT NOT NULL,
  tags TEXT[],
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.site_embeddings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  document_id UUID NOT NULL REFERENCES public.site_documents(id) ON DELETE CASCADE,
  embedding VECTOR(1536) NOT NULL,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance (IF NOT EXISTS so script is re-runnable)
CREATE INDEX IF NOT EXISTS idx_site_documents_url ON public.site_documents(url);
CREATE INDEX IF NOT EXISTS idx_site_documents_updated_at ON public.site_documents(updated_at);
CREATE INDEX IF NOT EXISTS idx_site_embeddings_document_id ON public.site_embeddings(document_id);

-- Vector similarity search (cosine distance). Building ivfflat needs more than default maintenance_work_mem.
SET maintenance_work_mem = '128MB';
CREATE INDEX IF NOT EXISTS idx_site_embeddings_embedding_cosine
  ON public.site_embeddings USING ivfflat (embedding vector_cosine_ops);
RESET maintenance_work_mem;

-- RLS
ALTER TABLE public.site_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_embeddings ENABLE ROW LEVEL SECURITY;

-- Anon: read-only for retrieval from the chat API
DROP POLICY IF EXISTS "Allow anon read access to site_documents" ON public.site_documents;
CREATE POLICY "Allow anon read access to site_documents"
  ON public.site_documents FOR SELECT TO anon USING (true);

DROP POLICY IF EXISTS "Allow anon read access to site_embeddings" ON public.site_embeddings;
CREATE POLICY "Allow anon read access to site_embeddings"
  ON public.site_embeddings FOR SELECT TO anon USING (true);

-- Service role: full access for the indexing script
DROP POLICY IF EXISTS "Allow service role full access to site_documents" ON public.site_documents;
CREATE POLICY "Allow service role full access to site_documents"
  ON public.site_documents FOR ALL TO service_role USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow service role full access to site_embeddings" ON public.site_embeddings;
CREATE POLICY "Allow service role full access to site_embeddings"
  ON public.site_embeddings FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Function for semantic similarity search (used by lib/chatbot/retrieve.ts via supabase.rpc('match_documents', ...))
CREATE OR REPLACE FUNCTION public.match_documents(
  query_embedding VECTOR(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 10
)
RETURNS TABLE (
  id UUID,
  url TEXT,
  title TEXT,
  section TEXT,
  content TEXT,
  tags TEXT[],
  updated_at TIMESTAMPTZ,
  similarity FLOAT
)
LANGUAGE SQL
STABLE
AS $$
  SELECT
    d.id,
    d.url,
    d.title,
    d.section,
    d.content,
    d.tags,
    d.updated_at,
    1 - (e.embedding <=> query_embedding) AS similarity
  FROM public.site_embeddings e
  JOIN public.site_documents d ON e.document_id = d.id
  WHERE 1 - (e.embedding <=> query_embedding) > match_threshold
  ORDER BY e.embedding <=> query_embedding
  LIMIT match_count;
$$;