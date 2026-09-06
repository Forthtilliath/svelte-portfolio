import { SITE_URL } from '$lib/site';
import type { RequestHandler } from './$types';

export const prerender = true;

const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export const GET: RequestHandler = () =>
	new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=86400'
		}
	});
