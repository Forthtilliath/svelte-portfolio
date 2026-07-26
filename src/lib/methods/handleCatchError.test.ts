import { afterEach, describe, expect, it, vi } from 'vitest';
import { handleCatchError, handleCatchErrorWithCallback } from './handleCatchError';

describe('handleCatchError', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('logs the error message when given an Error instance', () => {
		const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

		handleCatchError(new Error('boom'));

		expect(spy).toHaveBeenCalledWith('boom');
	});

	it('logs the default message when given a non-Error value', () => {
		const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

		handleCatchError('not an error');

		expect(spy).toHaveBeenCalledWith('Unknown error');
	});

	it('logs a custom default message when given a non-Error value', () => {
		const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

		handleCatchError('not an error', 'custom fallback');

		expect(spy).toHaveBeenCalledWith('custom fallback');
	});
});

describe('handleCatchErrorWithCallback', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('calls the callback with the error message when given an Error instance', () => {
		vi.spyOn(console, 'error').mockImplementation(() => {});
		const callback = vi.fn((message: string) => message.toUpperCase());

		const result = handleCatchErrorWithCallback(new Error('boom'))(callback);

		expect(callback).toHaveBeenCalledWith('boom');
		expect(result).toBe('BOOM');
	});

	it('calls the callback with the default message when given a non-Error value', () => {
		vi.spyOn(console, 'error').mockImplementation(() => {});
		const callback = vi.fn((message: string) => message);

		const result = handleCatchErrorWithCallback('nope')(callback);

		expect(callback).toHaveBeenCalledWith('Unknown error');
		expect(result).toBe('Unknown error');
	});

	it('calls the callback with a custom default message', () => {
		vi.spyOn(console, 'error').mockImplementation(() => {});
		const callback = vi.fn((message: string) => message);

		const result = handleCatchErrorWithCallback('nope')(callback, 'custom fallback');

		expect(callback).toHaveBeenCalledWith('custom fallback');
		expect(result).toBe('custom fallback');
	});
});
