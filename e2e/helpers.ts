import { expect, type Page } from '@playwright/test';

/**
 * Navigate to a page of the site and wait for it to be ready.
 *
 * The E2E target is a production build (adapter-node), so hydration is quick;
 * asserting the layout mounted before the test touches the page keeps failures
 * pointing at the real cause rather than at a race.
 */
export async function gotoHydrated(page: Page, path = '/'): Promise<void> {
	await page.goto(path);
	await expect(page.locator('#main-content')).toBeVisible();
}
