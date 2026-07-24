# Mise à jour du projet (juillet 2026)

Le projet n'avait pas été touché depuis ~2 ans. Cette page résume la mise à jour complète effectuée sur la branche `chore/dependencies-upgrade-2026`, les vulnérabilités corrigées, et ce qu'il reste à améliorer.

## Résumé sécurité

- **Avant** : `bun audit` remontait **71 vulnérabilités** (2 critiques, 31 hautes, 30 modérées, 8 faibles) — c'est très probablement l'origine des notifications GitHub.
- **Après** : **8 vulnérabilités** restantes (0 critique, 4 hautes, 3 modérées, 1 faible), toutes situées dans des dépendances transitives profondes d'outils de dev (`eslint`, `vite`, `vitest`, `svelte-check`, `sass`) ou dans un adaptateur `class-validator` de `sveltekit-superforms` qu'on n'utilise pas (on utilise l'adaptateur `zod4`). Aucune n'est corrigeable aujourd'hui : ce sont les dernières versions disponibles en amont, il faut attendre une release upstream. À revérifier périodiquement via `bun audit`.
- Vulnérabilités critiques corrigées qui touchaient du code de **production** (pas seulement des outils de dev) : `nodemailer` (envoi d'email du formulaire de contact), `sveltekit-superforms`/`formsnap` (pollution de prototype dans le parsing de formulaire), `devalue`/`cookie` (chaîne `@sveltejs/kit`).

## Ce qui a été mis à jour (versions majeures)

| Paquet | Avant | Après |
|---|---|---|
| Node (requis) | — | 22.16 (testé), `engine-strict=true` |
| Svelte | 4.2 | **5.56** (runes) |
| SvelteKit | 2.5 | 2.70 |
| Vite | 5.3 | **8.1** |
| Vitest | 1.6 | **4.1** |
| Tailwind CSS | 3.4 | **4.3** (config CSS-first via `@config`) |
| TypeScript | 5.5 | **6.0.3** (voir note ci-dessous, pas 7.x) |
| ESLint | 9.8 | **10.7** (config flat, `.eslintrc.cjs` supprimé) |
| bits-ui | 0.21 | **2.18** |
| formsnap | 1.0 | **2.0** |
| svelte-radix | 1.1 | **3.0** |
| zod | 3.23 | **4.4** |
| sveltekit-superforms | 2.16 | 2.30 (adaptateur `zod4`) |
| nodemailer | 6.9 | **9.0** |
| sass | 1.89 | 1.101 |

## Travail de migration effectué

- **Svelte 5** : migration automatique via `svelte-migrate` (script maison pour contourner le CLI interactif non-TTY) sur les 107 fichiers `.svelte`, puis correction manuelle de 3 composants (`flowbite/card.svelte`, `flowbite/frame.svelte`, `shared/shine.svelte`) que l'outil ne pouvait pas migrer automatiquement (mélange `$$props`/props nommées).
- **Bug SSR critique trouvé et corrigé** : ces mêmes composants utilisaient le pattern `createBubbler()` de `svelte/legacy` pour faire remonter les événements — ce helper est un no-op côté serveur dans Svelte 5, donc **toute la page d'accueil plantait en 500 au rendu serveur**. Remplacé par le pattern moderne (les handlers d'événements sont de simples props transmises via `{...rest}`), comme le font déjà les composants shadcn-svelte régénérés. Vérifié en conditions réelles (serveur de dev + navigateur headless) : plus aucune erreur, formulaire de contact fonctionnel avec validation côté client.
- **Tailwind v4** : passage au plugin `@tailwindcss/vite` (suppression de `postcss.config.js`, `autoprefixer`, `postcss-load-config`, devenus inutiles). `app.pcss`/`global.pcss` renommés en `.css` (requis par le plugin) et mis à jour (`@import 'tailwindcss'` + `@config '../tailwind.config.js'` pour garder la config JS existante — container custom, plugin `animStars` — sans réécriture complète en CSS natif pour limiter le risque de régression visuelle).
- **Plugin Tailwind custom (`tailwind-extends/animStars.ts`)** : corrigé pour Tailwind v4 (le helper d'échappement `e()` a disparu de l'API plugin v3-compat ; retiré, plus nécessaire pour nos clés statiques). Code mort supprimé (`generateSpacingsUtility`, jamais appelé).
- **bits-ui v2 / formsnap v2 / composants `ui/*`** : régénérés via la CLI officielle `shadcn-svelte@latest add ...` plutôt que portés à la main (API totalement réécrite en v2 : fini `asChild`/`builder`, place aux snippets `child`/`children` et aux props d'événements natives). Les personnalisations locales perdues au passage ont été réintégrées : variante de bouton `card-link` + prop `external` (ouverture en nouvel onglet), taille `auto` sur les `Toggle`.
- **Pagination** : simplifiée pour bits-ui v2 — `Pagination.Root` gère maintenant la page courante en interne (`bind:page` + `onPageChange`), les gestionnaires `on:click` manuels sur chaque bouton/lien ont été retirés (devenus inutiles, bits-ui v2 gère la navigation lui-même).
- **zod v4 / sveltekit-superforms** : passage des adaptateurs `zod`/`zodClient` à `zod4`/`zod4Client` (adaptateurs dédiés à la nouvelle API zod v4). `required_error` remplacé par `error` (nouvelle API de messages d'erreur zod v4). Testé bout en bout : validation client + serveur fonctionnelle.
- **ESLint 10** : migration de `.eslintrc.cjs` (legacy, supprimé) vers `eslint.config.js` (flat config). Règles `svelte/require-each-key` et `svelte/no-navigation-without-resolve` (nouvelles en v3 du plugin) mises en `warn` plutôt que fixées partout — voir section « à faire » plus bas.
- **TypeScript figé à 6.0.3, pas 7.x** : `@sveltejs/kit` déclare un peer `typescript ^5.3.3 || ^6.0.0` — avec TypeScript 7 installé, la génération des types de route SvelteKit (`PageData`, `PageProps`, etc.) échouait silencieusement (tout devenait `unknown`), cassant le typage de `+page.server.ts` sur tout le projet. À remonter vers 7.x seulement quand SvelteKit l'annoncera officiellement supporté.
- **vitest/vite dupliqués** : un `vite@5.4.19` orphelin traînait dans `node_modules/vitest/node_modules` et `node_modules/vite-node/node_modules` (residu d'installs incrémentaux), en conflit de types avec le `vite@8.1.5` racine. Supprimé, `bun install` ne le recrée pas (non présent dans le lockfile).

## Vérifications effectuées

- `bun run check` (svelte-check + TypeScript) : **0 erreur**, 2 avertissements mineurs pré-existants (voir plus bas).
- `bun run lint` (Prettier + ESLint) : **0 erreur**.
- `bun run build` : build de production OK.
- Test manuel en conditions réelles (serveur de dev + navigateur headless, captures d'écran) : page d'accueil, page CV React, section projets (filtres + pagination), formulaire de contact (soumission vide → messages de validation corrects, remplissage → aucune erreur console).
- `bun run test` : **aucun test n'existe dans le projet** (échoue faute de fichiers de test — pré-existant, pas une régression de cette mise à jour).

## À faire / améliorations possibles

### Sécurité
- **`tls: { rejectUnauthorized: false }`** dans `src/lib/server/setupEmail.ts` désactive la vérification du certificat TLS du serveur SMTP — expose à un risque d'interception (MITM). À supprimer si le certificat Gmail est valide (il l'est), ou à justifier explicitement sinon.
- Le compte d'envoi utilise un mot de passe Gmail classique (`SECRET_EMAIL_PASSWORD`) plutôt qu'un mot de passe d'application ou un service transactionnel dédié (Resend, Postmark, SendGrid). Plus robuste et plus simple à faire tourner/révoquer sans toucher au compte principal.
- Aucun rate-limiting sur l'action `sendMessage` du formulaire de contact — un script pourrait spammer l'envoi d'emails. À considérer si le formulaire devient une cible.
- Pas de pipeline CI (GitHub Actions) : rien ne fait tourner `check`/`lint`/`build`/`bun audit` automatiquement sur les PR. C'est ce genre de pipeline qui aurait évité 2 ans de dérive silencieuse. Recommandé : un workflow simple + Dependabot (ou Renovate) pour les mises à jour de dépendances futures.

### Qualité / dette technique
- **`svelte/require-each-key`** (nouvelle règle ESLint) : volontairement mise en `warn`, pas fixée. Concerne `project-card.svelte`, `frameworks-group.svelte`, `tilt-box.svelte`, `flip-words.svelte`, `pagination.svelte` — ajouter une clé aux blocs `{#each}` améliore les perfs de réconciliation Svelte et évite des bugs subtils de state sur réordonnancement.
- **`svelte/no-navigation-without-resolve`** (nouvelle règle) : idem, en `warn`. SvelteKit 2.x propose maintenant `resolve()` pour des liens internes type-safe (`src/lib/components/layout/footer.svelte`, `src/routes/cv/+layout.svelte`, `ui/button/button.svelte`). Amélioration, pas un bug.
- **`@typescript-eslint/no-explicit-any`** mis en `warn` (était probablement absent de l'ancienne config). Une bonne dizaine d'usages de `any`, certains pré-existants, d'autres introduits pendant la migration Svelte 5 pour contourner des limites d'inférence TypeScript sur des types conditionnels complexes (`field.svelte` notamment). Un passage de typage plus strict serait bénéfique mais n'est pas urgent.
- **`svelte-file-icons`** : dépendance déclarée mais totalement inutilisée dans le code (`grep` ne trouve aucun import). À supprimer.
- **`@types/eslint`** : probablement redondant maintenant qu'ESLint 10 fournit ses propres types ; à vérifier et retirer si confirmé.
- **Aucun test automatisé** : `vitest` est configuré mais zéro fichier de test n'existe. Vu que le projet a un formulaire avec logique de validation (zod) et un composant de pagination avec état, ce sont deux candidats naturels pour un premier test.

### Design / UI
- La CLI `shadcn-svelte` ne supporte plus le style **"new-york"** (déclaré dans `components.json`) — elle est retombée sur le style **"nova"** pour régénérer les composants `ui/*`. Visuellement, rien n'a semblé casser lors de la vérification manuelle (le style de l'app vient surtout des classes Tailwind custom, pas du thème shadcn par défaut), mais une repasse visuelle complète de toutes les pages (notamment les variantes de CV : `/cv/fullstack`, `/cv/sveltekit`, `/cv/restauration`) est recommandée pour confirmer qu'aucun détail n'a bougé.
- Tailwind v4 propose une syntaxe de classes arbitraires simplifiée pour les data-attributes (ex. `data-fs-error:text-red-500` au lieu de `data-[fs-error]:text-red-500`) — purement cosmétique, non-bloquant.
- `tailwind.config.js` reste au format JS v3 chargé via `@config` (mode de compatibilité). Une migration complète vers la syntaxe CSS-first native de Tailwind v4 (`@theme` dans `app.css`) est possible mais demande de repasser à la main sur tout le système de couleurs (variables CSS `hsl(var(--x) / <alpha-value>)`) — un chantier à part, plus risqué visuellement, à faire seulement si vous voulez pousser la modernisation plus loin.

### Autres opportunités (hors dette, vraies améliorations)
- Le `TODO.md` existant liste déjà des idées (formes en background, responsivité du hero, contenu des projets) — toujours valides.
- `@sveltejs/adapter-auto` : le build local affiche "Could not detect a supported production environment" — normal en local, mais bon réflexe de vérifier que la plateforme de déploiement cible (Vercel/Netlify/autre) est toujours correctement détectée en prod après cette mise à jour majeure.
- Le README est encore le README par défaut de `create-svelte` — pourrait être personnalisé pour décrire le projet.
