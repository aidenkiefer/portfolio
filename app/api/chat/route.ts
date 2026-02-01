import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { callLLMWithContext } from '@/lib/chatbot/llm';
import { isRateLimited } from '@/lib/chatbot/rateLimit';
import {
  retrieveRelevantChunks,
  formatContextForLLM,
  extractCitations,
  hasHighConfidence,
  getLowConfidenceFallback
} from '@/lib/chatbot/retrieve';
import type { ChatRequest, ChatResponse, ChatErrorResponse } from '@/lib/chatbot/types';

const MAX_MESSAGE_LENGTH = 2000;
const CONVERSATION_HISTORY_LIMIT = 20;

/**
 * Validates that a string is a valid UUID v4.
 */
function isValidUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

/**
 * POST /api/chat
 *
 * Accepts a user message and optional session ID, persists to Supabase,
 * calls the LLM with conversation history, and returns the assistant's response.
 */
export async function POST(request: NextRequest) {
  try {
    // Parse and validate JSON body
    let body: ChatRequest;
    try {
      body = await request.json() as ChatRequest;
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' } as ChatErrorResponse,
        { status: 400 }
      );
    }

    // Validate message
    if (!body.message || typeof body.message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' } as ChatErrorResponse,
        { status: 400 }
      );
    }

    const trimmedMessage = body.message.trim();
    if (trimmedMessage.length === 0) {
      return NextResponse.json(
        { error: 'Message cannot be empty' } as ChatErrorResponse,
        { status: 400 }
      );
    }

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` } as ChatErrorResponse,
        { status: 400 }
      );
    }

    // Validate sessionId if provided
    let sessionId = body.sessionId;
    if (sessionId && !isValidUUID(sessionId)) {
      return NextResponse.json(
        { error: 'Invalid session ID format' } as ChatErrorResponse,
        { status: 400 }
      );
    }

    // Rate limiting: check by sessionId (if present) or IP
    const rateLimitKey = sessionId || request.ip || 'unknown';
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many messages. Please try again later.' } as ChatErrorResponse,
        { status: 429 }
      );
    }

    const supabase = createClient();

    // Create or verify session
    if (sessionId) {
      // Verify session exists
      const { data: existingSession, error: sessionError } = await supabase
        .from('chat_sessions')
        .select('id')
        .eq('id', sessionId)
        .single();

      if (sessionError || !existingSession) {
        return NextResponse.json(
          { error: 'Session not found' } as ChatErrorResponse,
          { status: 400 }
        );
      }
    } else {
      // Create new session
      const { data: newSession, error: createError } = await supabase
        .from('chat_sessions')
        .insert({ metadata: {} })
        .select('id')
        .single();

      if (createError || !newSession) {
        throw new Error('Failed to create session');
      }

      sessionId = newSession.id;
    }

    // Insert user message
    const { error: userMessageError } = await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        role: 'user',
        content: trimmedMessage,
      });

    if (userMessageError) {
      throw new Error('Failed to save user message');
    }

    // Fetch recent conversation history
    const { data: messageHistory, error: historyError } = await supabase
      .from('chat_messages')
      .select('role, content')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .limit(CONVERSATION_HISTORY_LIMIT);

    if (historyError) {
      throw new Error('Failed to fetch conversation history');
    }

    // RAG retrieval: embed user message and retrieve relevant chunks
    const relevantChunks = await retrieveRelevantChunks(trimmedMessage);

    // Check confidence level
    if (!hasHighConfidence(relevantChunks)) {
      // Low confidence: return fallback message
      const fallbackAnswer = getLowConfidenceFallback();

      // Save fallback assistant message
      const { error: assistantMessageError } = await supabase
        .from('chat_messages')
        .insert({
          session_id: sessionId,
          role: 'assistant',
          content: fallbackAnswer,
        });

      if (assistantMessageError) {
        throw new Error('Failed to save assistant message');
      }

      return NextResponse.json({
        answer: fallbackAnswer,
        citations: [],
        sessionId,
      } as ChatResponse);
    }

    // High confidence: format context and call LLM with structured output
    const context = formatContextForLLM(relevantChunks);
    const availableCitations = extractCitations(relevantChunks);

    const structuredResponse = await callLLMWithContext(
      messageHistory.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      context,
      availableCitations
    );

    // Insert assistant message (store the full answer)
    const { error: assistantMessageError } = await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        role: 'assistant',
        content: structuredResponse.answer,
      });

    if (assistantMessageError) {
      throw new Error('Failed to save assistant message');
    }

    return NextResponse.json({
      answer: structuredResponse.answer,
      citations: structuredResponse.citations,
      recommended_services: structuredResponse.recommended_services,
      cta: structuredResponse.cta,
      sessionId,
    } as ChatResponse);

  } catch (error) {
    // Log error for debugging but don't expose details to client
    // Do not log message content or PII
    console.error('Chat API error:', error instanceof Error ? error.message : 'Unknown error');

    return NextResponse.json(
      { error: 'Unable to process request. Please try again later.' } as ChatErrorResponse,
      { status: 500 }
    );
  }
}
