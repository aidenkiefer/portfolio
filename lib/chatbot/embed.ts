import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';

/**
 * Configuration for embedding models
 * Dimension must match the VECTOR dimension in site_embeddings table
 */
const EMBEDDING_CONFIG = {
  openai: {
    model: 'text-embedding-3-small',
    dimension: 1536
  },
  anthropic: {
    // Note: Anthropic doesn't have native embedding models yet
    // This would use OpenAI as fallback even with Anthropic key
    fallbackToOpenAI: true
  }
} as const;

/**
 * Generates embeddings for text using the configured provider.
 * Uses OpenAI embeddings (same provider as LLM or fallback).
 *
 * @param text - Text to embed
 * @returns Array of numbers representing the embedding vector
 * @throws Error if no API key is configured or embedding call fails
 */
export async function embedText(text: string): Promise<number[]> {
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  // For now, always use OpenAI for embeddings since Anthropic doesn't have embedding models
  // In the future, this could be extended to support other embedding providers
  if (openaiKey) {
    return embedWithOpenAI(text, openaiKey);
  } else {
    throw new Error('No embedding API key configured. Set OPENAI_API_KEY in .env.local');
  }
}

/**
 * Embeds text using OpenAI's embedding API
 */
async function embedWithOpenAI(text: string, apiKey: string): Promise<number[]> {
  const client = new OpenAI({ apiKey });

  try {
    const response = await client.embeddings.create({
      model: EMBEDDING_CONFIG.openai.model,
      input: text.trim(),
      encoding_format: 'float'
    });

    const embedding = response.data[0]?.embedding;
    if (!embedding) {
      throw new Error('No embedding returned from OpenAI');
    }

    // Verify dimension matches our schema
    if (embedding.length !== EMBEDDING_CONFIG.openai.dimension) {
      throw new Error(
        `Embedding dimension mismatch: expected ${EMBEDDING_CONFIG.openai.dimension}, got ${embedding.length}`
      );
    }

    return embedding;
  } catch (error) {
    throw new Error(`Failed to generate embedding: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Gets the embedding dimension for the configured model
 */
export function getEmbeddingDimension(): number {
  return EMBEDDING_CONFIG.openai.dimension;
}

/**
 * Gets the embedding model name being used
 */
export function getEmbeddingModel(): string {
  return EMBEDDING_CONFIG.openai.model;
}