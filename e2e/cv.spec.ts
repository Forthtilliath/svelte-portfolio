import { expect, test } from '@playwright/test';

const TEMPLATES = ['fullstack', 'react', 'sveltekit', 'restauration'] as const;

test.describe('CV pages', () => {
	test('/cv redirects to the full-stack CV', async ({ page }) => {
		const response = await page.goto('/cv');
		expect(response?.status()).toBe(200);
		await expect(page).toHaveURL(/\/cv\/fullstack$/);
	});

	for (const template of TEMPLATES) {
		test(`/cv/${template} renders with print and text-version actions`, async ({ page }) => {
			await page.goto(`/cv/${template}`);

			await expect(page).toHaveTitle(/CV de Vincent LISITA/);
			await expect(page.locator(`.${template}`).first()).toBeVisible();
			await expect(page.locator('a.btn-print')).toHaveAttribute('href', `/cv/${template}.pdf`);
		});

		test(`/cv/${template}/texte renders the ATS-friendly version`, async ({ page }) => {
			const response = await page.goto(`/cv/${template}/texte`);
			expect(response?.status()).toBe(200);
			await expect(page.locator('body')).not.toBeEmpty();
		});
	}

	test('CV switcher links between the four templates', async ({ page }) => {
		await page.goto('/cv/fullstack');
		const nav = page.getByRole('navigation', { name: 'Menu de navigation entre les CV' });

		await nav.getByRole('link', { name: 'Développeur SvelteKit' }).click();
		await expect(page).toHaveURL(/\/cv\/sveltekit$/);
	});
});
