import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// E2E runs against a standalone Node build: it's deterministic, production-like,
// and — unlike the Vercel adapter's symlinked function output — builds on any OS.
const adapter = process.env.E2E ? node() : vercel({ runtime: 'nodejs24.x' });

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],
	kit: {
		adapter
	}
};

export default config;
