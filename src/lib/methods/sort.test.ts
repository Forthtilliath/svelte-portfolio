import { describe, expect, it } from 'vitest';
import { sortStrings, sortStringsByKey } from './sort';

describe('sortStrings', () => {
	it('sorts strings alphabetically', () => {
		expect(['banana', 'apple', 'cherry'].sort(sortStrings)).toEqual(['apple', 'banana', 'cherry']);
	});

	it('is locale-aware for accented characters', () => {
		expect(['élan', 'abricot'].sort(sortStrings)).toEqual(['abricot', 'élan']);
	});
});

describe('sortStringsByKey', () => {
	it('sorts objects by a given string key', () => {
		const items = [{ name: 'Zoé' }, { name: 'Alice' }, { name: 'Marc' }];

		expect(items.sort(sortStringsByKey('name'))).toEqual([
			{ name: 'Alice' },
			{ name: 'Marc' },
			{ name: 'Zoé' }
		]);
	});
});
