import { expect, test } from '@playwright/test';
import { gotoHydrated } from './helpers';

test.describe('contact form', () => {
	test('renders the labelled fields and the submit button', async ({ page }) => {
		await gotoHydrated(page);

		await expect(page.getByLabel('Votre nom')).toBeVisible();
		await expect(page.getByLabel('Votre email')).toBeVisible();
		await expect(page.getByLabel('Votre message')).toBeVisible();
		await expect(page.getByRole('button', { name: 'Envoyer' })).toBeVisible();
	});

	test('blocks submission and shows client-side errors for invalid input', async ({ page }) => {
		await gotoHydrated(page);

		await page.getByLabel('Votre nom').fill('Vi');
		await page.getByLabel('Votre email').fill('not-an-email');
		await page.getByLabel('Votre message').fill('short');
		await page.getByRole('button', { name: 'Envoyer' }).click();

		await expect(page.getByText(/at least 3 characters/i)).toBeVisible();
		await expect(page.getByLabel('Votre email')).toHaveAttribute('aria-invalid', 'true');
		await expect(page.getByLabel('Votre message')).toHaveAttribute('aria-invalid', 'true');
		// the form must not have been submitted
		await expect(page.getByText(/Message envoyé/i)).toHaveCount(0);
	});

	test('accepts well-formed input without raising a validation error', async ({ page }) => {
		await gotoHydrated(page);

		await page.getByLabel('Votre nom').fill('Vincent Test');
		await page.getByLabel('Votre email').fill('vincent.test@example.com');
		await page
			.getByLabel('Votre message')
			.fill('Bonjour, ceci est un message de test suffisamment long.');
		await page.getByLabel('Votre email').blur();

		await expect(page.getByText(/at least 3 characters/i)).toHaveCount(0);
		await expect(page.getByText(/invalid email/i)).toHaveCount(0);
	});
});
