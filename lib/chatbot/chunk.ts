// Content chunking for RAG implementation
import type { DocumentChunk, ContentSource } from './rag-types';

/**
 * Estimates token count using a simple approximation (1 token ≈ 4 characters)
 * This is rough but sufficient for chunking purposes
 */
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

/**
 * Splits text into sentences for better chunk boundaries
 */
function splitIntoSentences(text: string): string[] {
  // Simple sentence splitting on period, exclamation, question mark followed by space or newline
  return text
    .split(/(?<=[.!?])\s+/)
    .filter(sentence => sentence.trim().length > 0);
}

/**
 * Chunks content into pieces of ~400-800 tokens with 10-20% overlap
 * Preserves section headers and tries to break at sentence boundaries
 */
export function chunkContent(source: ContentSource): DocumentChunk[] {
  const chunks: DocumentChunk[] = [];
  const targetMinTokens = 400;
  const targetMaxTokens = 800;
  const overlapRatio = 0.15; // 15% overlap

  if (source.sections && source.sections.length > 0) {
    // Process each section separately to preserve section context
    for (const section of source.sections) {
      const sectionChunks = chunkText(
        section.content,
        source.url,
        source.title,
        section.title,
        targetMinTokens,
        targetMaxTokens,
        overlapRatio
      );
      chunks.push(...sectionChunks);
    }
  } else {
    // Process the entire content as one piece
    const contentChunks = chunkText(
      source.content,
      source.url,
      source.title,
      '',
      targetMinTokens,
      targetMaxTokens,
      overlapRatio
    );
    chunks.push(...contentChunks);
  }

  return chunks;
}

/**
 * Internal function to chunk a single piece of text
 */
function chunkText(
  text: string,
  url: string,
  title: string,
  section: string,
  targetMinTokens: number,
  targetMaxTokens: number,
  overlapRatio: number
): DocumentChunk[] {
  const chunks: DocumentChunk[] = [];
  const sentences = splitIntoSentences(text.trim());

  if (sentences.length === 0) return chunks;

  let currentChunk = '';
  let currentTokens = 0;

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    const sentenceTokens = estimateTokens(sentence);

    // If adding this sentence would exceed max tokens, finalize current chunk
    if (currentTokens + sentenceTokens > targetMaxTokens && currentTokens >= targetMinTokens) {
      // Add section header to chunk content if present
      const chunkContent = section
        ? `## ${section}\n\n${currentChunk.trim()}`
        : currentChunk.trim();

      chunks.push({
        url,
        title,
        section,
        content: chunkContent,
        tokens: currentTokens
      });

      // Start new chunk with overlap
      const overlapTokens = Math.floor(currentTokens * overlapRatio);
      const overlapSentences = getLastSentencesWithTokenLimit(currentChunk, overlapTokens);

      currentChunk = overlapSentences + ' ' + sentence;
      currentTokens = estimateTokens(currentChunk);
    } else {
      // Add sentence to current chunk
      currentChunk += (currentChunk ? ' ' : '') + sentence;
      currentTokens += sentenceTokens;
    }
  }

  // Add final chunk if it has content
  if (currentChunk.trim()) {
    const chunkContent = section
      ? `## ${section}\n\n${currentChunk.trim()}`
      : currentChunk.trim();

    chunks.push({
      url,
      title,
      section,
      content: chunkContent,
      tokens: currentTokens
    });
  }

  return chunks;
}

/**
 * Gets the last few sentences from text that fit within the token limit
 */
function getLastSentencesWithTokenLimit(text: string, maxTokens: number): string {
  const sentences = splitIntoSentences(text);
  let result = '';
  let tokens = 0;

  // Work backwards through sentences
  for (let i = sentences.length - 1; i >= 0; i--) {
    const sentence = sentences[i];
    const sentenceTokens = estimateTokens(sentence);

    if (tokens + sentenceTokens <= maxTokens) {
      result = sentence + (result ? ' ' + result : '');
      tokens += sentenceTokens;
    } else {
      break;
    }
  }

  return result;
}