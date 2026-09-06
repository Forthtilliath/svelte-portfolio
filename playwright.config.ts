import { defineConfig, devices } from '@playwright/test';

const PORT = 4173;

export default defineConfig({
	testDir: 'e2e',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
	timeout: 30_000,
	expect: { timeout: 10_000 },
	use: {
		baseURL: `http://localhost:${PORT}`,
		trace: 'on-first-retry',
		// The site negotiates its locale from Accept-Language and is French-first;
		// pin the browser locale so the suite asserts against a stable language.
		locale: 'fr-FR',
		timezoneId: 'Europe/Paris'
	},
	webServer: {
		// Production build served by adapter-node (see svelte.config.js): deterministic,
		// no dev-server hydration lag, and it builds on any OS.
		command: 'bun run build && node build/index.js',
		port: PORT,
		reuseExistingServer: !process.env.CI,
		timeout: 180_000,
		env: {
			E2E: 'true',
			PORT: String(PORT),
			ORIGIN: `http://localhost:${PORT}`,
			// `$env/static/private` must resolve; no mail is actually sent by the E2E run.
			SECRET_EMAIL_ACCOUNT: 'e2e@example.com',
			SECRET_EMAIL_PASSWORD: 'e2e-placeholder'
		}
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
			testIgnore: /.*\.mobile\.spec\.ts/
		},
		{
			name: 'mobile-chrome',
			use: { ...devices['Pixel 7'] },
			testMatch: /.*\.mobile\.spec\.ts/
		}
	]
});
