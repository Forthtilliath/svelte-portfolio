import { SITE_URL } from '$lib/site';
import type { RequestHandler } from './$types';

export const prerender = true;

const CV_TEMPLATES = ['fullstack', 'react', 'sveltekit', 'restauration'];

const pages: { path: string; priority: string }[] = [
	{ path: '/', priority: '1.0' },
	...CV_TEMPLATES.flatMap((template) => [
		{ path: `/cv/${template}`, priority: '0.8' },
		{ path: `/cv/${template}/texte`, priority: '0.5' }
	])
];

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		({ path, priority }) =>
			`\t<url>\n\t\t<loc>${SITE_URL}${path}</loc>\n\t\t<changefreq>monthly</changefreq>\n\t\t<priority>${priority}</priority>\n\t</url>`
	)
	.join('\n')}
</urlset>
`;

export const GET: RequestHandler = () =>
	new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=86400'
		}
	});
