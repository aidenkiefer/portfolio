/**
 * Environment variable types for the portfolio project.
 * These variables should be defined in .env.local (not committed to source control).
 */

declare namespace NodeJS {
  interface ProcessEnv {
    // Supabase configuration (chatbot feature)
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;

    // LLM provider API keys (chatbot feature - at least one required)
    OPENAI_API_KEY?: string;
    ANTHROPIC_API_KEY?: string;
  }
}
