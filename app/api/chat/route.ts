import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { callLLMWithContext } from '@/lib/chatbot/llm';
import { isRateLimited } from '@/lib/chatbot/rateLimit';
import {
  retrieveRelevantChunks,
  formatContextForLLM,
  extractCitations,
  hasHighConfidence,
  getLowConfidenceResponse
} from '@/lib/chatbot/retrieve';
import type { ChatRequest, ChatResponse, ChatErrorResponse, ErrorType } from '@/lib/chatbot/types';

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
  // Generate request ID for tracing
  const requestId = crypto.randomUUID();
  let sessionId: string | undefined;

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
    sessionId = body.sessionId;
    if (sessionId && !isValidUUID(sessionId)) {
      return NextResponse.json(
        { error: 'Invalid session ID format' } as ChatErrorResponse,
        { status: 400 }
      );
    }

    // Validate pathname if provided (must be a path, not a full URL)
    const pathname = body.pathname;
    if (pathname && (typeof pathname !== 'string' || !pathname.startsWith('/') || pathname.includes('://') || pathname.length > 200)) {
      return NextResponse.json(
        { error: 'Invalid pathname format' } as ChatErrorResponse,
        { status: 400 }
      );
    }

    const pageTitle = body.pageTitle;

    // Rate limiting: check by sessionId (if present) or IP from headers (Vercel sets x-forwarded-for / x-real-ip)
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') ?? 'unknown';
    const rateLimitKey = sessionId || ip;
    if (isRateLimited(rateLimitKey)) {
      console.log(`[Chat API] [${requestId}] Rate limited: ${rateLimitKey}`);
      return NextResponse.json(
        {
          ok: false,
          errorType: 'RATE_LIMITED' as ErrorType,
          error: 'Too many messages. Please try again later.',
          sessionId
        } as ChatResponse,
        { status: 429 }
      );
    }

    const supabase = createClient() as any;

    // Create or verify session
    if (sessionId) {
      const { data: existingSession, error: sessionError } = await supabase
        .from('chat_sessions')
        .select('id')
        .eq('id', sessionId)
        .single();

      // If session doesn't exist (stale ID, cleared DB, or different env), create a new one
      if (sessionError || !existingSession) {
        sessionId = undefined;
      }
    }

    if (!sessionId) {
      const { data: newSession, error: createError } = await supabase
        .from('chat_sessions')
        .insert({ metadata: {} })
        .select('id')
        .single();

      if (createError || !newSession) {
        const detail = createError ? `${createError.message} (code: ${createError.code})` : 'no data returned';
        console.error('[Chat API] Failed to create session:', detail);
        throw new Error('Failed to create session');
      }

      sessionId = newSession.id;
    }

    if (!sessionId) {
      throw new Error('Session ID required');
    }

    console.log(`[Chat API] [${requestId}] Session resolved: ${sessionId ? 'existing/created' : 'error'}`);

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
    console.log(`[Chat API] [${requestId}] Retrieval start`);
    const retrievalStart = performance.now();
    let relevantChunks;
    try {
      relevantChunks = await retrieveRelevantChunks(
        trimmedMessage,
        pathname ? { pathname } : undefined
      );
    } catch (retrievalError) {
      console.error(`[Chat API] [${requestId}] Retrieval error:`, retrievalError);
      return NextResponse.json({
        ok: false,
        errorType: 'RETRIEVAL_ERROR' as ErrorType,
        error: "I'm having trouble searching the site information right now. Please try again in a moment.",
        sessionId
      } as ChatResponse);
    }
    const retrievalMs = Math.round(performance.now() - retrievalStart);
    console.log(`[Chat API] [${requestId}] Retrieval end: ${relevantChunks.length} chunks, ${retrievalMs}ms`);

    // Check confidence level
    if (!hasHighConfidence(relevantChunks)) {
      console.log(`[Chat API] [${requestId}] Low confidence path`);
      // Low confidence: return page-aware clarifying response
      const clarifierResponse = getLowConfidenceResponse(
        trimmedMessage,
        pathname ? { pathname } : undefined
      );

      // Save clarifier assistant message
      const { error: assistantMessageError } = await supabase
        .from('chat_messages')
        .insert({
          session_id: sessionId,
          role: 'assistant',
          content: clarifierResponse.answer,
        });

      if (assistantMessageError) {
        throw new Error('Failed to save assistant message');
      }

      return NextResponse.json({
        answer: clarifierResponse.answer,
        citations: clarifierResponse.citations,
        cta: clarifierResponse.cta,
        sessionId,
      } as ChatResponse);
    }

    // High confidence: format context and call LLM with structured output
    const context = formatContextForLLM(relevantChunks);
    const availableCitations = extractCitations(relevantChunks);

    const history = (messageHistory ?? []) as Array<{ role: string; content: string }>;
    console.log(`[Chat API] [${requestId}] LLM call start`);
    const llmStart = performance.now();
    let structuredResponse;
    try {
      structuredResponse = await callLLMWithContext(
        history.map((msg: { role: string; content: string }) => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
        })),
        context,
        availableCitations,
        pathname ? { pathname, pageTitle } : undefined
      );
    } catch (llmError) {
      const llmMs = Math.round(performance.now() - llmStart);
      console.error(`[Chat API] [${requestId}] LLM error after ${llmMs}ms:`, llmError);

      // Check if it's a config error (missing API keys)
      const errorMessage = llmError instanceof Error ? llmError.message : '';
      const isConfigError = errorMessage.includes('API key') || errorMessage.includes('configured');

      return NextResponse.json({
        ok: false,
        errorType: (isConfigError ? 'CONFIG_ERROR' : 'LLM_ERROR') as ErrorType,
        error: isConfigError
          ? "The chatbot is not properly configured. Please contact support."
          : "I'm having trouble generating a response right now. Please try again in a moment.",
        sessionId
      } as ChatResponse);
    }
    const llmMs = Math.round(performance.now() - llmStart);
    console.log(`[Chat API] [${requestId}] LLM call end: ${llmMs}ms`);

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
    // Log error for debugging (check Vercel Function Logs or terminal). Do not log message content or PII.
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[Chat API] [${requestId}] Error:`, message);

    return NextResponse.json({
      ok: false,
      errorType: 'UNKNOWN_ERROR' as ErrorType,
      error: 'Unable to process request. Please try again later.',
      sessionId
    } as ChatResponse);
  }
}
