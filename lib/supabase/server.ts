import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Database types matching the chatbot feature spec
export interface ChatSession {
  id: string;
  created_at: string;
  metadata?: Record<string, unknown>;
}

export interface ChatMessage {
  id: string;
  session_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      chat_sessions: {
        Row: ChatSession;
        Insert: { metadata?: Record<string, unknown> };
        Update: Partial<ChatSession>;
        Relationships: unknown[];
      };
      chat_messages: {
        Row: ChatMessage;
        Insert: { session_id: string; role: 'user' | 'assistant'; content: string };
        Update: Partial<Omit<ChatMessage, 'id' | 'session_id'>>;
        Relationships: unknown[];
      };
    };
    Views: Record<string, { Row: Record<string, unknown>; Relationships: unknown[] }>;
    Functions: Record<string, { Args: Record<string, unknown>; Returns: unknown }>;
  };
}

/**
 * Creates a server-side Supabase client for chatbot database operations.
 * Uses NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY from env.
 * This client should only be used from server contexts (API routes, Server Components).
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase environment variables. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env.local'
    );
  }

  return createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey);
}
