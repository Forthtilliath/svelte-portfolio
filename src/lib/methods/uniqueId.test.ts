import { describe, expect, it } from 'vitest';
import { uniqueId } from './uniqueId';

describe('uniqueId', () => {
	it('increments sequentially for the same prefix', () => {
		const prefix = `test-${crypto.randomUUID()}-`;

		expect(uniqueId(prefix)).toBe(`${prefix}1`);
		expect(uniqueId(prefix)).toBe(`${prefix}2`);
		expect(uniqueId(prefix)).toBe(`${prefix}3`);
	});

	it('tracks each prefix independently', () => {
		const prefixA = `a-${crypto.randomUUID()}-`;
		const prefixB = `b-${crypto.randomUUID()}-`;

		expect(uniqueId(prefixA)).toBe(`${prefixA}1`);
		expect(uniqueId(prefixB)).toBe(`${prefixB}1`);
		expect(uniqueId(prefixA)).toBe(`${prefixA}2`);
	});

	it('defaults to an empty prefix', () => {
		expect(uniqueId()).toMatch(/^\d+$/);
	});
});
