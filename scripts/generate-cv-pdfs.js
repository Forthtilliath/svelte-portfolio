// Régénère les 4 PDF de static/cv/*.pdf à partir des pages /cv/<template>
// live (celles servies par le bouton de téléchargement, btn-print.svelte).
//
// Playwright n'est volontairement pas une dépendance du repo (~300 Mo de
// binaires navigateur pour un usage ponctuel) : installe-le à la demande
// juste avant de lancer ce script, puis lance-le pendant que le serveur de
// dev tourne :
//
//   bun add -d playwright --no-save
//   bunx playwright install chromium   # une seule fois, ou si le cache est vide
//   bun run dev                        # dans un autre terminal
//   bun run cv:pdf
//
// CV_BASE_URL permet de cibler un autre port/host si besoin, ex. :
//   CV_BASE_URL=http://localhost:5174 bun run cv:pdf

import { chromium } from 'playwright';

const BASE_URL = process.env.CV_BASE_URL ?? 'http://localhost:5173';
const TEMPLATES = ['fullstack', 'react', 'sveltekit', 'restauration'];

async function main() {
	const browser = await chromium.launch();
	try {
		const page = await browser.newPage();
		for (const name of TEMPLATES) {
			const url = `${BASE_URL}/cv/${name}`;
			process.stdout.write(`→ ${url}\n`);
			await page.goto(url, { waitUntil: 'networkidle' });
			await page.emulateMedia({ media: 'print' });
			const outPath = `static/cv/${name}.pdf`;
			await page.pdf({ path: outPath, format: 'A4', printBackground: true });
			process.stdout.write(`  ✓ ${outPath}\n`);
		}
	} finally {
		await browser.close();
	}
}

main().catch((err) => {
	console.error('\nÉchec de la génération des PDF CV.');
	console.error(`Vérifie que le serveur de dev tourne sur ${BASE_URL} (bun run dev)`);
	console.error('et que Playwright est installé (bun add -d playwright --no-save).\n');
	console.error(err);
	process.exit(1);
});
