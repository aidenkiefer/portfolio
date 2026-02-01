// Types for RAG implementation

export interface SiteDocument {
  id: string;
  url: string;
  title: string;
  section: string | null;
  content: string;
  tags: string[] | null;
  updated_at: string;
}

export interface SiteEmbedding {
  id: string;
  document_id: string;
  embedding: number[];
  metadata: Record<string, any> | null;
  created_at: string;
}

export interface DocumentChunk {
  url: string;
  title: string;
  section: string;
  content: string;
  tokens?: number;
}

export interface RetrievedChunk {
  document: SiteDocument;
  similarity: number;
}

export interface ContentSource {
  url: string;
  title: string;
  content: string;
  sections?: { title: string; content: string }[];
}