import { createClient } from '@supabase/supabase-js';
import { embedText } from './embed';
import type { RetrievedChunk, SiteDocument } from './rag-types';

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }
  return createClient(url, key);
}

/**
 * Configuration for retrieval
 */
const RETRIEVAL_CONFIG = {
  topK: 8, // Number of chunks to retrieve
  similarityThreshold: 0.7, // Minimum similarity score (0-1)
  maxContextTokens: 3000 // Approximate max tokens for context
} as const;

/**
 * Retrieves relevant content chunks for a user query using semantic search
 *
 * @param query - User's question or message
 * @returns Array of relevant chunks with similarity scores, or empty array if low confidence
 */
export async function retrieveRelevantChunks(query: string): Promise<RetrievedChunk[]> {
  try {
    // Generate embedding for the user query
    const queryEmbedding = await embedText(query);

    // Query the database for similar embeddings using cosine similarity
    const supabase = getSupabaseClient();
    const { data: results, error } = await supabase.rpc(
      'match_documents',
      {
        query_embedding: queryEmbedding,
        match_threshold: RETRIEVAL_CONFIG.similarityThreshold,
        match_count: RETRIEVAL_CONFIG.topK
      }
    );

    if (error) {
      console.error('Error retrieving similar chunks:', error);
      return [];
    }

    if (!results || results.length === 0) {
      console.log('No relevant chunks found for query');
      return [];
    }

    // Transform results into RetrievedChunk format
    const chunks: RetrievedChunk[] = results.map((result: any) => ({
      document: {
        id: result.id,
        url: result.url,
        title: result.title,
        section: result.section,
        content: result.content,
        tags: result.tags,
        updated_at: result.updated_at
      },
      similarity: result.similarity
    }));

    console.log(`Retrieved ${chunks.length} relevant chunks for query`);
    return chunks;

  } catch (error) {
    console.error('Error in retrieveRelevantChunks:', error);
    return [];
  }
}

/**
 * Formats retrieved chunks into context for the LLM prompt
 *
 * @param chunks - Retrieved chunks from semantic search
 * @returns Formatted context string
 */
export function formatContextForLLM(chunks: RetrievedChunk[]): string {
  if (chunks.length === 0) {
    return '';
  }

  const contextParts = chunks.map((chunk, index) => {
    const source = chunk.document.section
      ? `${chunk.document.title} - ${chunk.document.section}`
      : chunk.document.title;

    return `[${index + 1}] Source: ${source} (${chunk.document.url})\n${chunk.document.content}`;
  });

  return contextParts.join('\n\n---\n\n');
}

/**
 * Extracts citation URLs from retrieved chunks
 *
 * @param chunks - Retrieved chunks that were used as context
 * @returns Array of unique URLs for citations
 */
export function extractCitations(chunks: RetrievedChunk[]): string[] {
  const urls = chunks.map(chunk => chunk.document.url);
  // Remove duplicates and return
  return [...new Set(urls)];
}

/**
 * Checks if the retrieval confidence is above threshold
 *
 * @param chunks - Retrieved chunks with similarity scores
 * @returns true if confidence is sufficient for answering
 */
export function hasHighConfidence(chunks: RetrievedChunk[]): boolean {
  if (chunks.length === 0) {
    return false;
  }

  // Check if the best match is above threshold
  const bestScore = Math.max(...chunks.map(chunk => chunk.similarity));
  return bestScore >= RETRIEVAL_CONFIG.similarityThreshold;
}

/**
 * Gets the fallback message for low confidence scenarios
 */
export function getLowConfidenceFallback(): string {
  return "I'm not fully sure based on the info on this site. Want to tell me your business type and goals? I can help you find the best service approach.";
}