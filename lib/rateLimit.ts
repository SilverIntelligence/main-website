/**
 * Simple in-memory token bucket rate limiter
 * For production, consider Redis or similar persistent store
 */

interface TokenBucket {
  tokens: number;
  lastRefill: number;
}

const buckets = new Map<string, TokenBucket>();

const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5', 10);
const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10);

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (e.g., IP address)
 * @returns true if request is allowed, false if rate limited
 */
export function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  let bucket = buckets.get(identifier);

  if (!bucket) {
    bucket = {
      tokens: MAX_REQUESTS - 1,
      lastRefill: now,
    };
    buckets.set(identifier, bucket);
    return true;
  }

  // Refill tokens based on time passed
  const timePassed = now - bucket.lastRefill;
  const tokensToAdd = Math.floor(timePassed / WINDOW_MS) * MAX_REQUESTS;

  if (tokensToAdd > 0) {
    bucket.tokens = Math.min(MAX_REQUESTS, bucket.tokens + tokensToAdd);
    bucket.lastRefill = now;
  }

  // Check if we have tokens available
  if (bucket.tokens > 0) {
    bucket.tokens -= 1;
    return true;
  }

  return false;
}

/**
 * Clean up old buckets (run periodically)
 */
export function cleanupBuckets(): void {
  const now = Date.now();
  const threshold = WINDOW_MS * 2; // Clean up buckets inactive for 2x window

  for (const [identifier, bucket] of buckets.entries()) {
    if (now - bucket.lastRefill > threshold) {
      buckets.delete(identifier);
    }
  }
}

// Clean up every 5 minutes
if (typeof window === 'undefined') {
  setInterval(cleanupBuckets, 5 * 60 * 1000);
}
