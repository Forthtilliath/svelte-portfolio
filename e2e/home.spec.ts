import { expect, test } from '@playwright/test';
import { gotoHydrated } from './helpers';

test.describe('home page', () => {
	test('renders the hero and every main section anchor', async ({ page }) => {
		await gotoHydrated(page);

		await expect(page).toHaveTitle(/Vincent LISITA/);
		await expect(page.locator('#hero')).toBeVisible();

		for (const id of ['#about', '#skills', '#projects', '#contact']) {
			await expect(page.locator(id)).toHaveCount(1);
		}
	});

	test('exposes a skip-to-content link', async ({ page }) => {
		await gotoHydrated(page);
		await expect(page.getByRole('link', { name: 'Aller au contenu' })).toHaveAttribute(
			'href',
			'#main-content'
		);
	});

	test('serves the document in French by default', async ({ page }) => {
		await gotoHydrated(page);
		await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
		await expect(page.getByRole('link', { name: 'À Propos' })).toBeVisible();
	});

	test('switches the whole UI to English and remembers it across a reload', async ({ page }) => {
		await gotoHydrated(page);

		await page.getByRole('button', { name: 'Change la langue en anglais' }).click();

		await expect(page.getByRole('link', { name: 'About', exact: true })).toBeVisible();

		await page.reload();
		await expect(page.locator('html')).toHaveAttribute('lang', 'en');
		await expect(page.getByRole('link', { name: 'About', exact: true })).toBeVisible();
	});

	test('anchor navigation jumps to the targeted section', async ({ page }) => {
		await gotoHydrated(page);
		await page.getByRole('link', { name: 'Me Contacter' }).click();
		await expect(page).toHaveURL(/#contact$/);
		await expect(page.locator('#contact')).toBeInViewport();
	});
});
