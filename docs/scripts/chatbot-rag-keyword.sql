-- Hybrid Retrieval: Add keyword search to RAG system
-- Run this SQL manually in Supabase SQL Editor

-- 1. Add tsvector column for full-text search
ALTER TABLE site_documents
ADD COLUMN IF NOT EXISTS search_vector tsvector;

-- 2. Create index for full-text search (GIN index)
CREATE INDEX IF NOT EXISTS site_documents_search_vector_idx
ON site_documents USING GIN(search_vector);

-- 3. Populate search_vector from title, section, content, and tags
UPDATE site_documents
SET search_vector =
  setweight(to_tsvector('english', COALESCE(title, '')), 'A') ||
  setweight(to_tsvector('english', COALESCE(section, '')), 'B') ||
  setweight(to_tsvector('english', COALESCE(content, '')), 'C') ||
  setweight(to_tsvector('english', COALESCE(array_to_string(tags, ' '), '')), 'D');

-- 4. Create trigger to automatically update search_vector on insert/update
CREATE OR REPLACE FUNCTION site_documents_search_vector_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.section, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.content, '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(array_to_string(NEW.tags, ' '), '')), 'D');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER site_documents_search_vector_trigger
BEFORE INSERT OR UPDATE ON site_documents
FOR EACH ROW
EXECUTE FUNCTION site_documents_search_vector_update();

-- 5. Create RPC function for keyword search
CREATE OR REPLACE FUNCTION match_documents_keyword(
  query_text TEXT,
  match_threshold FLOAT DEFAULT 0.1,
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
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    d.id,
    d.url,
    d.title,
    d.section,
    d.content,
    d.tags,
    d.updated_at,
    ts_rank(d.search_vector, websearch_to_tsquery('english', query_text)) AS similarity
  FROM site_documents d
  WHERE d.search_vector @@ websearch_to_tsquery('english', query_text)
    AND ts_rank(d.search_vector, websearch_to_tsquery('english', query_text)) >= match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$ LANGUAGE plpgsql;

-- Verify setup
SELECT COUNT(*) as total_docs,
       COUNT(search_vector) as docs_with_search_vector
FROM site_documents;
