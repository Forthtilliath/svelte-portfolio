/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	test: {
		globals: true,
		// Pure-logic suite only (methods, filters, rate-limit). Component tests
		// would need a browser-like env (jsdom) added back with a dedicated glob.
		environment: 'node'
	}
});
