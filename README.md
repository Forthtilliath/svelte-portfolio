# Portfolio — Vincent LISITA

Portfolio personnel de Vincent LISITA, développeur front-end. Présente ses compétences, ses projets, et propose plusieurs versions de CV ciblées par stack technique.

**🔗 Live:** [vincent-lisita.vercel.app](https://vincent-lisita.vercel.app/)

## Stack technique

- [SvelteKit](https://kit.svelte.dev/) + [Svelte 5](https://svelte.dev/) (runes)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [bits-ui](https://bits-ui.com/) + [formsnap](https://formsnap.dev/) (composants shadcn-svelte)
- [Zod](https://zod.dev/) + [sveltekit-superforms](https://superforms.rocks/) — formulaire de contact validé côté client et serveur
- [sveltekit-i18n](https://github.com/sveltekit-i18n/lib) — site bilingue FR/EN
- [Nodemailer](https://nodemailer.com/) — envoi d'email du formulaire de contact
- Déployé sur [Vercel](https://vercel.com/)

## Fonctionnalités

- Section projets filtrable par framework, avec pagination
- Plusieurs versions de CV imprimables, ciblées par technologie (`/cv/react`, `/cv/sveltekit`, `/cv/fullstack`, `/cv/restauration`)
- Formulaire de contact avec validation en temps réel et envoi d'email
- Interface bilingue français / anglais

## Développement

Ce projet utilise [Bun](https://bun.sh/) comme gestionnaire de paquets.

```bash
# installer les dépendances
bun install

# copier le fichier d'environnement et renseigner les identifiants SMTP
cp .env.example .env

# lancer le serveur de développement
bun run dev
```

### Variables d'environnement

| Variable                | Description                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| `SECRET_EMAIL_ACCOUNT`  | Adresse email utilisée pour l'envoi via le formulaire de contact |
| `SECRET_EMAIL_PASSWORD` | Mot de passe d'application associé                               |

### Scripts disponibles

| Commande          | Description                           |
| ----------------- | ------------------------------------- |
| `bun run dev`     | Serveur de développement              |
| `bun run build`   | Build de production                   |
| `bun run preview` | Prévisualise le build de production   |
| `bun run check`   | Vérification des types (svelte-check) |
| `bun run lint`    | Lint (Prettier + ESLint)              |
| `bun run format`  | Formate le code (Prettier)            |
| `bun run test`    | Lance les tests (Vitest)              |

## Licence

Distribué sous licence [MIT](./LICENSE).
