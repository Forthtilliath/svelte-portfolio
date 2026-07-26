import { describe, expect, it } from 'vitest';
import { contactFormSchema } from './form.svelte';

describe('contactFormSchema', () => {
	it('accepts a valid submission', () => {
		const result = contactFormSchema.safeParse({
			name: 'Vincent',
			email: 'vincent@example.com',
			message: 'Hello, I would like to get in touch with you.'
		});

		expect(result.success).toBe(true);
	});

	it('rejects a name shorter than 3 characters', () => {
		const result = contactFormSchema.safeParse({
			name: 'Vi',
			email: 'vincent@example.com',
			message: 'Hello, I would like to get in touch with you.'
		});

		expect(result.success).toBe(false);
	});

	it('rejects a name longer than 50 characters', () => {
		const result = contactFormSchema.safeParse({
			name: 'V'.repeat(51),
			email: 'vincent@example.com',
			message: 'Hello, I would like to get in touch with you.'
		});

		expect(result.success).toBe(false);
	});

	it('rejects an invalid email', () => {
		const result = contactFormSchema.safeParse({
			name: 'Vincent',
			email: 'not-an-email',
			message: 'Hello, I would like to get in touch with you.'
		});

		expect(result.success).toBe(false);
	});

	it('rejects a message shorter than 10 characters', () => {
		const result = contactFormSchema.safeParse({
			name: 'Vincent',
			email: 'vincent@example.com',
			message: 'too short'
		});

		expect(result.success).toBe(false);
	});

	it('rejects missing fields', () => {
		const result = contactFormSchema.safeParse({});

		expect(result.success).toBe(false);
	});
});
