import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { SYSTEM_PROMPT } from './prompts';

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface StructuredChatResponse {
  answer: string;
  citations: string[];
  recommended_services?: string;
  cta?: string;
}

/**
 * Validates a structured response object
 *
 * @param obj - Object to validate
 * @param allowedCitations - List of URLs that are allowed as citations
 * @returns Validated and filtered response, or null if invalid
 */
function validateStructuredResponse(
  obj: any,
  allowedCitations: string[]
): StructuredChatResponse | null {
  // Must have answer as a non-empty string
  if (!obj || typeof obj.answer !== 'string' || obj.answer.trim().length === 0) {
    return null;
  }

  // Citations must be an array (or absent)
  if (obj.citations && !Array.isArray(obj.citations)) {
    return null;
  }

  // Filter citations to only those in the allowed list
  const filteredCitations = obj.citations
    ? obj.citations
        .filter((cite: any) => typeof cite === 'string' && allowedCitations.includes(cite))
    : [];

  return {
    answer: obj.answer.trim(),
    citations: filteredCitations,
    recommended_services: typeof obj.recommended_services === 'string' ? obj.recommended_services : undefined,
    cta: typeof obj.cta === 'string' ? obj.cta : undefined
  };
}

/**
 * Calls the configured LLM with conversation history.
 * Uses Anthropic if ANTHROPIC_API_KEY is set, otherwise OpenAI with OPENAI_API_KEY.
 *
 * @param messages - Conversation history (user and assistant messages)
 * @returns Assistant's response text
 * @throws Error if no API key is configured or LLM call fails
 */
export async function callLLM(messages: ConversationMessage[]): Promise<string> {
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (anthropicKey) {
    return callAnthropic(messages, anthropicKey);
  } else if (openaiKey) {
    return callOpenAI(messages, openaiKey);
  } else {
    throw new Error('No LLM API key configured. Set ANTHROPIC_API_KEY or OPENAI_API_KEY in .env.local');
  }
}

async function callAnthropic(messages: ConversationMessage[], apiKey: string): Promise<string> {
  const client = new Anthropic({ apiKey });

  const response = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    })),
  });

  const content = response.content[0];
  if (content.type === 'text') {
    return content.text;
  }

  throw new Error('Unexpected response format from Anthropic');
}

async function callOpenAI(messages: ConversationMessage[], apiKey: string): Promise<string> {
  const client = new OpenAI({ apiKey });

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 1024,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
    ],
  });

  const messageContent = response.choices[0]?.message?.content;
  if (!messageContent) {
    throw new Error('No response from OpenAI');
  }

  return messageContent;
}

/**
 * Calls the LLM with structured output format and RAG context
 *
 * @param messages - Conversation history
 * @param context - Retrieved context from RAG
 * @param citations - URLs that can be cited
 * @param pageContext - Optional page context (pathname and title)
 * @returns Structured response with answer, citations, and optional recommendations
 */
export async function callLLMWithContext(
  messages: ConversationMessage[],
  context: string,
  citations: string[],
  pageContext?: { pathname?: string; pageTitle?: string }
): Promise<StructuredChatResponse> {
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (anthropicKey) {
    return callAnthropicWithContext(messages, context, citations, anthropicKey, pageContext);
  } else if (openaiKey) {
    return callOpenAIWithContext(messages, context, citations, openaiKey, pageContext);
  } else {
    throw new Error('No LLM API key configured. Set ANTHROPIC_API_KEY or OPENAI_API_KEY in .env.local');
  }
}

async function callAnthropicWithContext(
  messages: ConversationMessage[],
  context: string,
  citations: string[],
  apiKey: string,
  pageContext?: { pathname?: string; pageTitle?: string }
): Promise<StructuredChatResponse> {
  const client = new Anthropic({ apiKey });

  let pageContextBlock = '';
  if (pageContext?.pathname) {
    pageContextBlock = `\n\nPAGE CONTEXT:
Current route: ${pageContext.pathname}${pageContext.pageTitle ? `\nPage title: ${pageContext.pageTitle}` : ''}
Use this context to tailor your answer's emphasis and next steps to the user's current page.`;
  }

  const systemPromptWithContext = `${SYSTEM_PROMPT}${pageContextBlock}

CONTEXT INFORMATION:
${context}

RESPONSE FORMAT:
You must respond with a JSON object containing exactly these fields:
- "answer": Your response in markdown format, based on the context provided
- "citations": Array of URLs from the context that support your answer (use URLs from: ${citations.join(', ')})
- "recommended_services": (optional) If relevant, mention one specific service that would help (string)
- "cta": (optional) A brief call-to-action if appropriate (string)

Only cite URLs that are actually relevant to your answer. If no context is relevant, use an empty citations array.`;

  const response = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    system: systemPromptWithContext,
    messages: messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    })),
  });

  const content = response.content[0];
  if (content.type === 'text') {
    let parsed: any;
    try {
      parsed = JSON.parse(content.text);
    } catch (error) {
      // JSON parsing failed - fall back to raw text
      return {
        answer: content.text,
        citations: []
      };
    }

    // Validate and filter parsed response
    const validated = validateStructuredResponse(parsed, citations);
    if (validated) {
      return validated;
    }

    // Validation failed - attempt one repair
    try {
      const repairResponse = await client.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: systemPromptWithContext + `\n\nIMPORTANT: Your previous response had invalid JSON structure. Please respond with valid JSON containing: { "answer": "...", "citations": [...], "recommended_services": "...", "cta": "..." }`,
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
      });

      const repairContent = repairResponse.content[0];
      if (repairContent.type === 'text') {
        const repaired = JSON.parse(repairContent.text);
        const revalidated = validateStructuredResponse(repaired, citations);
        if (revalidated) {
          return revalidated;
        }
      }
    } catch (repairError) {
      // Repair attempt failed
    }

    // Both parse and repair failed - fall back to raw text
    return {
      answer: content.text,
      citations: []
    };
  }

  throw new Error('Unexpected response format from Anthropic');
}

async function callOpenAIWithContext(
  messages: ConversationMessage[],
  context: string,
  citations: string[],
  apiKey: string,
  pageContext?: { pathname?: string; pageTitle?: string }
): Promise<StructuredChatResponse> {
  const client = new OpenAI({ apiKey });

  let pageContextBlock = '';
  if (pageContext?.pathname) {
    pageContextBlock = `\n\nPAGE CONTEXT:
Current route: ${pageContext.pathname}${pageContext.pageTitle ? `\nPage title: ${pageContext.pageTitle}` : ''}
Use this context to tailor your answer's emphasis and next steps to the user's current page.`;
  }

  const systemPromptWithContext = `${SYSTEM_PROMPT}${pageContextBlock}

CONTEXT INFORMATION:
${context}

RESPONSE FORMAT:
You must respond with a JSON object containing exactly these fields:
- "answer": Your response in markdown format, based on the context provided
- "citations": Array of URLs from the context that support your answer (use URLs from: ${citations.join(', ')})
- "recommended_services": (optional) If relevant, mention one specific service that would help (string)
- "cta": (optional) A brief call-to-action if appropriate (string)

Only cite URLs that are actually relevant to your answer. If no context is relevant, use an empty citations array.`;

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 1024,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: systemPromptWithContext },
      ...messages.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
    ],
  });

  const messageContent = response.choices[0]?.message?.content;
  if (!messageContent) {
    throw new Error('No response from OpenAI');
  }

  let parsed: any;
  try {
    parsed = JSON.parse(messageContent);
  } catch (error) {
    // JSON parsing failed - fall back to raw text
    return {
      answer: messageContent,
      citations: []
    };
  }

  // Validate and filter parsed response
  const validated = validateStructuredResponse(parsed, citations);
  if (validated) {
    return validated;
  }

  // Validation failed - attempt one repair
  try {
    const repairResponse = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 1024,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: systemPromptWithContext + `\n\nIMPORTANT: Your previous response had invalid JSON structure. Please respond with valid JSON containing: { "answer": "...", "citations": [...], "recommended_services": "...", "cta": "..." }` },
        ...messages.map(msg => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
        })),
      ],
    });

    const repairContent = repairResponse.choices[0]?.message?.content;
    if (repairContent) {
      const repaired = JSON.parse(repairContent);
      const revalidated = validateStructuredResponse(repaired, citations);
      if (revalidated) {
        return revalidated;
      }
    }
  } catch (repairError) {
    // Repair attempt failed
  }

  // Both parse and repair failed - fall back to raw text
  return {
    answer: messageContent,
    citations: []
  };
}
