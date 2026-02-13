import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';

export interface QueryTransformResult {
  queries: string[];
  strategyUsed: string;
}

/**
 * Transforms a user query into multiple alternate retrieval queries
 * using LLM-based multi-query rewriting to improve recall.
 *
 * @param input - User query and optional context
 * @returns Array of transformed queries (3-5) and strategy used
 */
export async function transformQueryForRetrieval(input: {
  userQuery: string;
  pageContext?: { pathname?: string };
  conversationSummary?: string;
}): Promise<QueryTransformResult> {
  try {
    const anthropicKey = process.env.ANTHROPIC_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (!anthropicKey && !openaiKey) {
      // No API key available, return original query
      return {
        queries: [input.userQuery],
        strategyUsed: 'none'
      };
    }

    const transformedQueries = anthropicKey
      ? await callAnthropicTransform(input, anthropicKey)
      : await callOpenAITransform(input, openaiKey!);

    // Validate and clean queries
    if (!Array.isArray(transformedQueries) || transformedQueries.length === 0) {
      return {
        queries: [input.userQuery],
        strategyUsed: 'none'
      };
    }

    const cleaned = transformedQueries
      .filter((q): q is string => typeof q === 'string' && q.trim().length > 0)
      .map(q => q.trim())
      // Dedupe
      .filter((q, index, arr) => arr.indexOf(q) === index)
      // Limit to 5 max
      .slice(0, 5);

    if (cleaned.length === 0) {
      return {
        queries: [input.userQuery],
        strategyUsed: 'none'
      };
    }

    return {
      queries: cleaned,
      strategyUsed: 'multi_query'
    };

  } catch (error) {
    console.error('Error in transformQueryForRetrieval:', error);
    return {
      queries: [input.userQuery],
      strategyUsed: 'none'
    };
  }
}

async function callAnthropicTransform(
  input: { userQuery: string; pageContext?: { pathname?: string }; conversationSummary?: string },
  apiKey: string
): Promise<string[]> {
  const client = new Anthropic({ apiKey });

  const contextNote = input.pageContext?.pathname
    ? `\nCurrent page route: ${input.pageContext.pathname}`
    : '';

  const systemPrompt = `You are a search query expansion assistant. Given a user's question, generate 3-5 alternate short retrieval queries that would find relevant information.

Focus on:
- Concrete nouns and service names
- Goal keywords and outcomes
- Different phrasings of the same intent

Return ONLY a JSON object with this exact format:
{ "queries": ["query 1", "query 2", "query 3"] }`;

  const userPrompt = `User question: "${input.userQuery}"${contextNote}

Generate 3-5 alternate retrieval queries as JSON.`;

  const response = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 300,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }]
  });

  const content = response.content[0];
  if (content.type === 'text') {
    try {
      const parsed = JSON.parse(content.text);
      return parsed.queries || [];
    } catch {
      return [];
    }
  }

  return [];
}

async function callOpenAITransform(
  input: { userQuery: string; pageContext?: { pathname?: string }; conversationSummary?: string },
  apiKey: string
): Promise<string[]> {
  const client = new OpenAI({ apiKey });

  const contextNote = input.pageContext?.pathname
    ? `\nCurrent page route: ${input.pageContext.pathname}`
    : '';

  const systemPrompt = `You are a search query expansion assistant. Given a user's question, generate 3-5 alternate short retrieval queries that would find relevant information.

Focus on:
- Concrete nouns and service names
- Goal keywords and outcomes
- Different phrasings of the same intent

Return ONLY a JSON object with this exact format:
{ "queries": ["query 1", "query 2", "query 3"] }`;

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 300,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `User question: "${input.userQuery}"${contextNote}\n\nGenerate 3-5 alternate retrieval queries as JSON.` }
    ]
  });

  const messageContent = response.choices[0]?.message?.content;
  if (messageContent) {
    try {
      const parsed = JSON.parse(messageContent);
      return parsed.queries || [];
    } catch {
      return [];
    }
  }

  return [];
}
