const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;

const hits = new Map<string, number[]>();
let lastSweep = 0;

/**
 * Drop every key whose timestamps have all aged out of the window, so the
 * map can't grow unbounded on a long-lived instance (local dev, persistent
 * edge). Runs at most once per window to stay cheap.
 */
function sweep(now: number) {
	if (now - lastSweep < WINDOW_MS) {
		return;
	}
	lastSweep = now;

	for (const [key, timestamps] of hits) {
		const recent = timestamps.filter((timestamp) => now - timestamp < WINDOW_MS);
		if (recent.length === 0) {
			hits.delete(key);
		} else {
			hits.set(key, recent);
		}
	}
}

/**
 * In-memory sliding-window limiter. Note: on serverless (Vercel), state
 * doesn't survive cold starts and isn't shared across instances — this is
 * a best-effort deterrent against casual spam, not a hard guarantee.
 */
export function isRateLimited(key: string): boolean {
	const now = Date.now();
	sweep(now);

	const recentHits = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);

	if (recentHits.length >= MAX_REQUESTS) {
		hits.set(key, recentHits);
		return true;
	}

	recentHits.push(now);
	hits.set(key, recentHits);
	return false;
}
