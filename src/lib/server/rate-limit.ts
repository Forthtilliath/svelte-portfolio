const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;

const hits = new Map<string, number[]>();

/**
 * In-memory sliding-window limiter. Note: on serverless (Vercel), state
 * doesn't survive cold starts and isn't shared across instances — this is
 * a best-effort deterrent against casual spam, not a hard guarantee.
 */
export function isRateLimited(key: string): boolean {
	const now = Date.now();
	const recentHits = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);

	if (recentHits.length >= MAX_REQUESTS) {
		return true;
	}

	recentHits.push(now);
	hits.set(key, recentHits);
	return false;
}
