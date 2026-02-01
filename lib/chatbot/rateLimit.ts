/**
 * Simple in-memory rate limiter for chat API.
 * Tracks request counts per sessionId (and optionally per IP) with a sliding window.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// Configuration
const MAX_REQUESTS_PER_WINDOW = 20;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

// In-memory store (resets on server restart)
const store = new Map<string, RateLimitEntry>();

/**
 * Checks if a request should be rate-limited.
 * @param key - The identifier (sessionId or IP address)
 * @returns true if the request should be blocked, false otherwise
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry) {
    // First request from this key
    store.set(key, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return false;
  }

  // Check if window has expired
  if (now >= entry.resetAt) {
    // Reset the window
    store.set(key, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return false;
  }

  // Increment count
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true; // Rate limited
  }

  entry.count++;
  return false;
}

/**
 * Cleanup expired entries periodically to avoid memory leak.
 * Call this on a timer or during rate limit checks.
 */
export function cleanupExpiredEntries(): void {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (now >= entry.resetAt) {
      store.delete(key);
    }
  }
}

// Run cleanup every 10 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupExpiredEntries, 10 * 60 * 1000);
}
