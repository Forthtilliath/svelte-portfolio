import { afterEach, describe, expect, it, vi } from 'vitest';
import { isRateLimited } from './rate-limit';

describe('isRateLimited', () => {
	it('allows the first 3 requests for a given key', () => {
		const key = crypto.randomUUID();

		expect(isRateLimited(key)).toBe(false);
		expect(isRateLimited(key)).toBe(false);
		expect(isRateLimited(key)).toBe(false);
	});

	it('blocks the 4th request within the window', () => {
		const key = crypto.randomUUID();

		isRateLimited(key);
		isRateLimited(key);
		isRateLimited(key);

		expect(isRateLimited(key)).toBe(true);
		expect(isRateLimited(key)).toBe(true);
	});

	it('tracks each key independently', () => {
		const keyA = crypto.randomUUID();
		const keyB = crypto.randomUUID();

		isRateLimited(keyA);
		isRateLimited(keyA);
		isRateLimited(keyA);

		expect(isRateLimited(keyA)).toBe(true);
		expect(isRateLimited(keyB)).toBe(false);
	});

	describe('sliding window', () => {
		afterEach(() => {
			vi.useRealTimers();
		});

		it('allows requests again once the window has elapsed', () => {
			const key = crypto.randomUUID();
			vi.useFakeTimers();
			vi.setSystemTime(0);

			isRateLimited(key);
			isRateLimited(key);
			isRateLimited(key);
			expect(isRateLimited(key)).toBe(true);

			vi.setSystemTime(10 * 60 * 1000 + 1);

			expect(isRateLimited(key)).toBe(false);
		});
	});
});
