import { expect, test } from '@playwright/test';
import { gotoHydrated } from './helpers';

test.describe('mobile navigation menu', () => {
	test('the menu toggle opens and closes the panel', async ({ page }) => {
		await gotoHydrated(page);

		const toggle = page.getByRole('button', { name: 'Navigation principale' });
		await expect(toggle).toHaveAttribute('aria-expanded', 'false');

		await toggle.click();
		await expect(toggle).toHaveAttribute('aria-expanded', 'true');
		await expect(page.getByRole('link', { name: 'Projets' })).toBeVisible();

		await toggle.click();
		await expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});

	test('Escape closes an open menu', async ({ page }) => {
		await gotoHydrated(page);
		const toggle = page.getByRole('button', { name: 'Navigation principale' });

		await toggle.click();
		await expect(toggle).toHaveAttribute('aria-expanded', 'true');

		await page.keyboard.press('Escape');
		await expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});

	test('tapping a link closes the menu and navigates to the section', async ({ page }) => {
		await gotoHydrated(page);
		const toggle = page.getByRole('button', { name: 'Navigation principale' });

		await toggle.click();
		await page.getByRole('link', { name: 'Compétences' }).click();

		await expect(toggle).toHaveAttribute('aria-expanded', 'false');
		await expect(page).toHaveURL(/#skills$/);
	});
});
