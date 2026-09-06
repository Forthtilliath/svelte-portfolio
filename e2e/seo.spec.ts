import { expect, test } from '@playwright/test';

test.describe('SEO endpoints', () => {
	test('robots.txt is served and points at the sitemap', async ({ request }) => {
		const res = await request.get('/robots.txt');
		expect(res.status()).toBe(200);
		expect(res.headers()['content-type']).toContain('text/plain');

		const body = await res.text();
		expect(body).toContain('User-agent: *');
		expect(body).toMatch(/Sitemap:\s*https?:\/\/\S+\/sitemap\.xml/);
	});

	test('sitemap.xml lists the home page and every CV route', async ({ request }) => {
		const res = await request.get('/sitemap.xml');
		expect(res.status()).toBe(200);
		expect(res.headers()['content-type']).toContain('xml');

		const body = await res.text();
		expect(body).toContain('<urlset');
		for (const path of [
			'/',
			'/cv/fullstack',
			'/cv/react',
			'/cv/sveltekit',
			'/cv/restauration',
			'/cv/fullstack/texte'
		]) {
			expect(body).toContain(`<loc>https://vincent-lisita.vercel.app${path}</loc>`);
		}
	});

	test('the home page declares Open Graph and Twitter card metadata', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Vincent/);
		await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /og-image/);
		await expect(page.locator('meta[property="twitter:card"]')).toHaveAttribute(
			'content',
			'summary_large_image'
		);
	});
});
