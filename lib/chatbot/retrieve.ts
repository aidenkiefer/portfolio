import { createClient } from '@supabase/supabase-js';
import { embedText } from './embed';
import { transformQueryForRetrieval } from './queryTransform';
import { rerankChunks, type RankedChunk } from './rerank';
import type { RetrievedChunk, SiteDocument } from './rag-types';
import { buildCacheKey, getFromCache, setCache } from './cache';

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
 * Two-stage retrieval: high-recall candidates -> rerank -> final selection
 */
export const RETRIEVAL_CONFIG = {
  // Stage 1: Multi-query candidate retrieval
  candidateThreshold: 0.25, // Lower threshold for high recall
  perQueryCount: 10, // Results per transformed query
  candidateTopK: 30, // Max candidates to rerank

  // Stage 2: Reranking and final selection
  finalTopK: 8, // Final chunks after reranking
  rerankThreshold: 70, // Minimum rerank score for high confidence

  // Confidence checks
  similarityThreshold: 0.43, // Fallback similarity threshold
  minChunksSelected: 3, // Minimum chunks for confidence (unless top score very high)

  maxContextTokens: 3000 // Approximate max tokens for context
} as const;

/**
 * Expands chunks with neighboring chunks from the same document
 * Requires chunk_index in site_embeddings.metadata
 *
 * @param chunks - Selected chunks to expand
 * @param supabase - Supabase client
 * @returns Chunks with expanded content where neighbors are available
 */
async function expandWithNeighbors(
  chunks: RankedChunk[],
  supabase: any
): Promise<RankedChunk[]> {
  // Note: This requires chunk_index in metadata. If not available, returns chunks unchanged.
  // For now, return chunks as-is since chunk_index isn't in the current schema.
  // When chunk_index is added to metadata, this function will fetch ±1 neighbors and merge content.

  // TODO: Implement when chunk_index is available in site_embeddings.metadata
  // For each chunk:
  //   1. Get chunk_index from metadata
  //   2. Fetch chunks with same document_id and chunk_index ± 1
  //   3. Merge content (preserve section boundaries)
  //   4. Cap by maxContextTokens

  return chunks;
}

/**
 * Retrieves relevant content chunks for a user query using multi-query semantic search
 *
 * @param query - User's question or message
 * @param pageContext - Optional page context for query transformation
 * @returns Array of relevant chunks with similarity scores, or empty array if low confidence
 */
export async function retrieveRelevantChunks(
  query: string,
  pageContext?: { pathname?: string }
): Promise<RetrievedChunk[]> {
  const startTime = performance.now();

  try {
    // Check cache first
    const cacheKey = buildCacheKey(query, pageContext?.pathname);
    const cached = await getFromCache(cacheKey);

    if (cached) {
      const latency = Math.round(performance.now() - startTime);
      console.log('[Chat API] Cache HIT - skipping retrieval pipeline', {
        query,
        latency: `${latency}ms`,
        chunkCount: cached.length
      });
      return cached;
    }

    console.log('[Chat API] Cache MISS - running retrieval pipeline', { query });

    // Step 1: Transform query into multiple retrieval queries
    const transformResult = await transformQueryForRetrieval({
      userQuery: query,
      pageContext
    });

    console.log('[Chat API] Query transform:', {
      original: query,
      transformed: transformResult.queries,
      strategy: transformResult.strategyUsed
    });

    const supabase = getSupabaseClient();
    const allResults: Array<{ doc: any; similarity: number }> = [];
    let keywordCount = 0;

    // Step 2: Retrieve for each transformed query (vector search)
    for (const transformedQuery of transformResult.queries) {
      const queryEmbedding = await embedText(transformedQuery);

      const { data: results, error } = await supabase.rpc(
        'match_documents',
        {
          query_embedding: queryEmbedding,
          match_threshold: RETRIEVAL_CONFIG.candidateThreshold,
          match_count: RETRIEVAL_CONFIG.perQueryCount
        }
      );

      if (!error && results && results.length > 0) {
        for (const result of results) {
          allResults.push({ doc: result, similarity: result.similarity });
        }
      }
    }

    // Step 2b: Hybrid retrieval - add keyword search results
    try {
      const { data: keywordResults, error: keywordError } = await supabase.rpc(
        'match_documents_keyword',
        {
          query_text: query, // Use original query for keyword search
          match_threshold: 0.1, // Lower threshold for keyword relevance
          match_count: RETRIEVAL_CONFIG.perQueryCount
        }
      );

      if (!keywordError && keywordResults && keywordResults.length > 0) {
        keywordCount = keywordResults.length;
        for (const result of keywordResults) {
          allResults.push({ doc: result, similarity: result.similarity || 0.5 });
        }
      }
    } catch (keywordErr) {
      // Keyword search RPC may not exist yet (requires manual SQL setup)
      // Continue with vector results only
      console.log('[Chat API] Keyword search not available (expected if SQL not yet run)');
    }

    if (allResults.length === 0) {
      console.log('[Chat API] No relevant chunks found across all queries');
      return [];
    }

    // Step 3: Deduplicate by document ID, keeping highest similarity
    const deduped = new Map<string, { doc: any; similarity: number }>();
    for (const item of allResults) {
      const docId = item.doc.id;
      const existing = deduped.get(docId);
      if (!existing || item.similarity > existing.similarity) {
        deduped.set(docId, item);
      }
    }

    // Step 4: Sort by similarity descending and take top candidateTopK
    const candidates = Array.from(deduped.values())
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, RETRIEVAL_CONFIG.candidateTopK);

    console.log('[Chat API] Candidates before rerank:', {
      vectorResults: allResults.length - keywordCount,
      keywordResults: keywordCount,
      totalCandidates: allResults.length,
      uniqueDocs: deduped.size,
      candidateCount: candidates.length,
      topScores: candidates.slice(0, 3).map(r => r.similarity)
    });

    // Step 5: Transform to RetrievedChunk format for reranking
    const candidateChunks: RetrievedChunk[] = candidates.map(item => ({
      document: {
        id: item.doc.id,
        url: item.doc.url,
        title: item.doc.title,
        section: item.doc.section,
        content: item.doc.content,
        tags: item.doc.tags,
        updated_at: item.doc.updated_at
      },
      similarity: item.similarity
    }));

    // Step 6: Rerank candidates using LLM
    const reranked = await rerankChunks(query, candidateChunks, pageContext);

    // Step 7: Take top finalTopK after reranking
    const finalChunks = reranked.slice(0, RETRIEVAL_CONFIG.finalTopK);

    console.log('[Chat API] Final chunks after rerank:', {
      candidateCount: candidates.length,
      rerankCount: reranked.length,
      finalCount: finalChunks.length,
      topRerankScores: finalChunks.slice(0, 3).map(r => r.rerankScore)
    });

    // Step 8: Neighbor expansion (optional - requires chunk_index in metadata)
    const expandedChunks = await expandWithNeighbors(finalChunks, supabase);

    // Cache the result before returning
    await setCache(cacheKey, expandedChunks);

    const latency = Math.round(performance.now() - startTime);
    console.log('[Chat API] Retrieval pipeline complete', {
      latency: `${latency}ms`,
      chunkCount: expandedChunks.length
    });

    return expandedChunks;

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
 * Uses rerank score (if available) or similarity score as fallback
 *
 * @param chunks - Retrieved chunks with similarity and optional rerank scores
 * @returns true if confidence is sufficient for answering
 */
export function hasHighConfidence(chunks: (RetrievedChunk | RankedChunk)[]): boolean {
  if (chunks.length === 0) {
    return false;
  }

  // Try to use rerank score if available
  const rankedChunks = chunks as RankedChunk[];
  const bestRerankScore = Math.max(...rankedChunks.map(chunk => chunk.rerankScore || 0));

  if (bestRerankScore > 0) {
    // Use rerank-based confidence
    // High confidence if: best score >= threshold AND enough chunks, OR top score very high
    const hasEnoughChunks = chunks.length >= RETRIEVAL_CONFIG.minChunksSelected;
    const veryHighScore = bestRerankScore >= 90;
    return (bestRerankScore >= RETRIEVAL_CONFIG.rerankThreshold && hasEnoughChunks) || veryHighScore;
  }

  // Fallback to similarity-based confidence
  const bestSimilarity = Math.max(...chunks.map(chunk => chunk.similarity));
  return bestSimilarity >= RETRIEVAL_CONFIG.similarityThreshold;
}

/**
 * Gets a page-aware clarifying response for low confidence scenarios
 *
 * @param userQuery - The user's original query
 * @param pageContext - Optional page context
 * @returns Structured response with clarifying question and options
 */
export function getLowConfidenceResponse(
  userQuery: string,
  pageContext?: { pathname?: string }
): { answer: string; citations: string[]; cta?: string } {
  const pathname = pageContext?.pathname || '';

  // Determine page-specific options
  let intro = "I'm not finding exactly what you're looking for in our content.";
  let question = "To help better, which of these fits your situation?";
  let options: string[] = [];
  let cta = "Let me know which option fits, and I can give you more specific guidance.";

  if (pathname.includes('/services/chatbots') || pathname.includes('/chatbot')) {
    options = [
      "**Lead generation** - I want a chatbot to capture and qualify leads",
      "**Customer support** - I need help answering common customer questions",
      "**Sales assistance** - I want to guide users toward the right product/service"
    ];
  } else if (pathname.includes('/services/seo') || pathname.includes('/seo')) {
    options = [
      "**Local SEO** - I want to rank better in my city/region",
      "**Technical SEO** - I need help with site speed, structure, or technical issues",
      "**Content strategy** - I want to know what content to create for rankings"
    ];
  } else if (pathname.includes('/services/automation')) {
    options = [
      "**Workflow automation** - I want to automate repetitive business tasks",
      "**Data integration** - I need to connect different tools or systems",
      "**Custom scripts** - I have a specific process that needs automation"
    ];
  } else if (pathname.includes('/services')) {
    options = [
      "**AI/Chatbots** - Conversational AI for leads or support",
      "**SEO/Speed** - Search rankings and site performance",
      "**Automation** - Workflow automation and integrations"
    ];
  } else {
    // Generic fallback
    options = [
      "**Tell me your business type** (e.g., SaaS, local service, ecommerce)",
      "**Describe your main goal** (e.g., more leads, better SEO, save time)",
      "**Ask about a specific service** (AI chatbot, SEO, automation, or speed optimization)"
    ];
  }

  // Build formatted answer
  const formattedOptions = options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n');
  const answer = `${intro}\n\n${question}\n\n${formattedOptions}\n\n${cta}`;

  return {
    answer,
    citations: [],
    cta: "Choose the option that fits your needs"
  };
}

/**
 * Gets the fallback message for low confidence scenarios (deprecated)
 * @deprecated Use getLowConfidenceResponse instead
 */
export function getLowConfidenceFallback(): string {
  return "I'm not fully sure based on the info on this site. Want to tell me your business type and goals? I can help you find the best service approach.";
}