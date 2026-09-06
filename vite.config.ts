/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	test: {
		projects: [
			{
				// Pure-logic suite: methods, filters, schemas, rate-limit, server helpers.
				// Runs in Node, no DOM.
				extends: true,
				test: {
					name: 'server',
					environment: 'node',
					globals: true,
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			},
			{
				// Component suite: anything named `*.svelte.test.ts`. Runs in jsdom with
				// @testing-library/svelte so we can mount real components.
				extends: true,
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					globals: true,
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			}
		]
	}
});
