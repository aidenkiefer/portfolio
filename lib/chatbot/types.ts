/**
 * Request and response types for the chatbot API.
 */

export interface ChatRequest {
  message: string;
  sessionId?: string;
  pathname?: string; // Current route (e.g., "/services/chatbots")
  pageTitle?: string; // Page title for context
}

export type ErrorType =
  | 'CONFIG_ERROR'
  | 'RETRIEVAL_ERROR'
  | 'LLM_ERROR'
  | 'RATE_LIMITED'
  | 'UNKNOWN_ERROR';

export interface ChatResponse {
  ok?: boolean; // True on success, false on error
  answer?: string; // Markdown-formatted answer
  citations?: string[]; // Array of URLs for sources
  recommended_services?: string; // Optional recommended service
  cta?: string; // Optional call-to-action
  sessionId?: string;
  errorType?: ErrorType; // Type of error when ok=false
  error?: string; // Human-readable error message
}

// Legacy response type for backward compatibility during migration
export interface LegacyChatResponse {
  assistantMessage: string;
  sessionId: string;
}

export interface ChatErrorResponse {
  error: string;
}
