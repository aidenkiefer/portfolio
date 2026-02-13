import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import type { RetrievedChunk } from './rag-types';

export interface RankedChunk extends RetrievedChunk {
  rerankScore?: number;
}

/**
 * Reranks retrieved chunks using LLM to assess relevance to the user query
 *
 * @param query - User's original query
 * @param chunks - Candidate chunks to rerank
 * @param pageContext - Optional page context
 * @returns Chunks sorted by rerank score (0-100)
 */
export async function rerankChunks(
  query: string,
  chunks: RetrievedChunk[],
  pageContext?: { pathname?: string }
): Promise<RankedChunk[]> {
  if (chunks.length === 0) {
    return [];
  }

  try {
    const anthropicKey = process.env.ANTHROPIC_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (!anthropicKey && !openaiKey) {
      // No API key, return chunks unchanged with default scores
      return chunks.map((chunk, index) => ({
        ...chunk,
        rerankScore: 100 - index * 5 // Simple fallback scoring
      }));
    }

    const ranked = anthropicKey
      ? await callAnthropicRerank(query, chunks, pageContext, anthropicKey)
      : await callOpenAIRerank(query, chunks, pageContext, openaiKey!);

    // Sort by rerank score descending
    return ranked.sort((a, b) => (b.rerankScore || 0) - (a.rerankScore || 0));

  } catch (error) {
    console.error('Error in rerankChunks:', error);
    // Fallback: return chunks with similarity-based scores
    return chunks.map(chunk => ({
      ...chunk,
      rerankScore: chunk.similarity * 100
    }));
  }
}

async function callAnthropicRerank(
  query: string,
  chunks: RetrievedChunk[],
  pageContext: { pathname?: string } | undefined,
  apiKey: string
): Promise<RankedChunk[]> {
  const client = new Anthropic({ apiKey });

  const pageNote = pageContext?.pathname ? `\nUser is on: ${pageContext.pathname}` : '';

  // Create compact representations of chunks
  const chunkSummaries = chunks.map((chunk, index) => {
    const source = chunk.document.section
      ? `${chunk.document.title} - ${chunk.document.section}`
      : chunk.document.title;
    const snippet = chunk.document.content.slice(0, 200);
    return `[${index}] ${source}\n${snippet}...`;
  }).join('\n\n');

  const systemPrompt = `You are a relevance ranking assistant. Given a user query and a list of document chunks, rank each chunk by relevance to the query.

Return a JSON object with this exact format:
{ "rankings": [{"index": 0, "score": 85}, {"index": 1, "score": 72}, ...] }

Score from 0-100:
- 90-100: Directly answers the query
- 70-89: Highly relevant context
- 50-69: Somewhat relevant
- 30-49: Tangentially related
- 0-29: Not relevant

Rank ALL chunks provided.`;

  const userPrompt = `Query: "${query}"${pageNote}

Chunks to rank:
${chunkSummaries}

Return JSON rankings.`;

  const response = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 500,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }]
  });

  const content = response.content[0];
  if (content.type === 'text') {
    try {
      const parsed = JSON.parse(content.text);
      const rankings = parsed.rankings || [];

      // Create a map of index -> score
      const scoreMap = new Map<number, number>();
      for (const rank of rankings) {
        if (typeof rank.index === 'number' && typeof rank.score === 'number') {
          scoreMap.set(rank.index, rank.score);
        }
      }

      // Attach scores to chunks
      return chunks.map((chunk, index) => ({
        ...chunk,
        rerankScore: scoreMap.get(index) || 0
      }));

    } catch {
      // Fallback if parsing fails
      return chunks.map((chunk, index) => ({
        ...chunk,
        rerankScore: 50 - index * 2
      }));
    }
  }

  return chunks.map(chunk => ({ ...chunk, rerankScore: 50 }));
}

async function callOpenAIRerank(
  query: string,
  chunks: RetrievedChunk[],
  pageContext: { pathname?: string } | undefined,
  apiKey: string
): Promise<RankedChunk[]> {
  const client = new OpenAI({ apiKey });

  const pageNote = pageContext?.pathname ? `\nUser is on: ${pageContext.pathname}` : '';

  // Create compact representations of chunks
  const chunkSummaries = chunks.map((chunk, index) => {
    const source = chunk.document.section
      ? `${chunk.document.title} - ${chunk.document.section}`
      : chunk.document.title;
    const snippet = chunk.document.content.slice(0, 200);
    return `[${index}] ${source}\n${snippet}...`;
  }).join('\n\n');

  const systemPrompt = `You are a relevance ranking assistant. Given a user query and a list of document chunks, rank each chunk by relevance to the query.

Return a JSON object with this exact format:
{ "rankings": [{"index": 0, "score": 85}, {"index": 1, "score": 72}, ...] }

Score from 0-100:
- 90-100: Directly answers the query
- 70-89: Highly relevant context
- 50-69: Somewhat relevant
- 30-49: Tangentially related
- 0-29: Not relevant

Rank ALL chunks provided.`;

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 500,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Query: "${query}"${pageNote}\n\nChunks to rank:\n${chunkSummaries}\n\nReturn JSON rankings.` }
    ]
  });

  const messageContent = response.choices[0]?.message?.content;
  if (messageContent) {
    try {
      const parsed = JSON.parse(messageContent);
      const rankings = parsed.rankings || [];

      // Create a map of index -> score
      const scoreMap = new Map<number, number>();
      for (const rank of rankings) {
        if (typeof rank.index === 'number' && typeof rank.score === 'number') {
          scoreMap.set(rank.index, rank.score);
        }
      }

      // Attach scores to chunks
      return chunks.map((chunk, index) => ({
        ...chunk,
        rerankScore: scoreMap.get(index) || 0
      }));

    } catch {
      // Fallback if parsing fails
      return chunks.map((chunk, index) => ({
        ...chunk,
        rerankScore: 50 - index * 2
      }));
    }
  }

  return chunks.map(chunk => ({ ...chunk, rerankScore: 50 }));
}
