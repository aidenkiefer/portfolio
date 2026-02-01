/**
 * Client-side session storage utilities for the chatbot.
 * Manages sessionId persistence in browser sessionStorage.
 */

const SESSION_KEY = 'chatbot_session_id';

/**
 * Generates a UUID v4 string.
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Gets the current sessionId from sessionStorage or creates a new one.
 * Should only be called in client components (not server components).
 */
export function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') {
    throw new Error('getOrCreateSessionId can only be called on the client');
  }

  const existing = sessionStorage.getItem(SESSION_KEY);
  if (existing) {
    return existing;
  }

  const newSessionId = generateUUID();
  sessionStorage.setItem(SESSION_KEY, newSessionId);
  return newSessionId;
}

/**
 * Updates the sessionId in sessionStorage.
 * Use this when the API returns a new sessionId for the first message.
 */
export function setSessionId(sessionId: string): void {
  if (typeof window === 'undefined') {
    throw new Error('setSessionId can only be called on the client');
  }
  sessionStorage.setItem(SESSION_KEY, sessionId);
}

/**
 * Clears the sessionId from sessionStorage (for logout or reset).
 */
export function clearSessionId(): void {
  if (typeof window === 'undefined') {
    throw new Error('clearSessionId can only be called on the client');
  }
  sessionStorage.removeItem(SESSION_KEY);
}
