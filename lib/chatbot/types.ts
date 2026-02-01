/**
 * Request and response types for the chatbot API.
 */

export interface ChatRequest {
  message: string;
  sessionId?: string;
}

export interface ChatResponse {
  answer: string; // Markdown-formatted answer
  citations: string[]; // Array of URLs for sources
  recommended_services?: string; // Optional recommended service
  cta?: string; // Optional call-to-action
  sessionId: string;
}

// Legacy response type for backward compatibility during migration
export interface LegacyChatResponse {
  assistantMessage: string;
  sessionId: string;
}

export interface ChatErrorResponse {
  error: string;
}
