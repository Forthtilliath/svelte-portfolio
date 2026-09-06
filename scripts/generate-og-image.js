// Régénère static/og-image.png (1200x630) à partir de scripts/og-image.template.html.
// Image de partage utilisée par les balises Open Graph / Twitter Card du layout portfolio.
//
// Comme pour cv:pdf, Playwright n'est pas une dépendance du repo. Installe-le
// à la demande puis lance le script (aucun serveur de dev requis, le gabarit
// est un fichier HTML autonome) :
//
//   bun add -d playwright --no-save
//   bunx playwright install chromium   # une seule fois, ou si le cache est vide
//   bun run og:image

import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';

const TEMPLATE_URL = new URL('./og-image.template.html', import.meta.url);
const OUT_PATH = fileURLToPath(new URL('../static/og-image.png', import.meta.url));

async function main() {
	const browser = await chromium.launch();
	try {
		const page = await browser.newPage({
			viewport: { width: 1200, height: 630 },
			deviceScaleFactor: 1
		});
		await page.goto(TEMPLATE_URL.href, { waitUntil: 'networkidle' });
		await page.evaluate(() => document.fonts.ready);
		await page.screenshot({ path: OUT_PATH, clip: { x: 0, y: 0, width: 1200, height: 630 } });
		process.stdout.write(`  ✓ ${OUT_PATH}\n`);
	} finally {
		await browser.close();
	}
}

main().catch((err) => {
	console.error('\nÉchec de la génération de og-image.png.');
	console.error('Vérifie que Playwright est installé (bun add -d playwright --no-save).\n');
	console.error(err);
	process.exit(1);
});
