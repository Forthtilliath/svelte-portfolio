import { type Technology } from '$lib/components/layout/skills';
import * as projectImages from '$lib/assets/projects';
import { type Language } from '$lib/translations';

export type Project = {
	name: Record<Language, string>;
	description: Record<Language, string>;
	image?: string;
	tags: Technology[];
	url?: string | undefined;
	repo: string;
};

const ENDPOINT_GITHUB = 'https://github.com/Forthtilliath';

const projects: Project[] = [
	{
		name: { fr: 'Lecteur audio : Spotube', en: 'Player audio: Spotube' },
		description: {
			fr: 'Spotube est une application de streaming musical qui te donne accès à quelques titres.',
			en: 'Spotube is a music streaming app that gives you access to a few tracks.'
		},
		image: projectImages.solidjsSpotube,
		tags: ['SolidJS', 'CSS Modules', 'SCSS', 'Typescript'],
		url: 'https://forth-spotube.netlify.app/',
		repo: ENDPOINT_GITHUB + '/spotube'
	},
	{
		name: { fr: 'LOL Random Arena', en: 'LOL Random Arena' },
		description: {
			fr: 'Application qui aide les joueurs à générer des equipes et des combats aleatoires.',
			en: 'App to help players to generate teams & champions inside arena mode.'
		},
		image: projectImages.sveltekitLolArena,
		tags: ['Sveltekit', 'Typescript', 'Shadcn/ui', 'Tailwind', 'Zod'],
		url: 'https://lol-random-arena.vercel.app/',
		repo: ENDPOINT_GITHUB + '/lol-random-arena'
	},
	{
		name: { fr: 'Restaurant : Oriflamme', en: 'Restaurant: Oriflamme' },
		description: {
			fr: 'La Rotisserie Sandwichs Maison offre une expérience culinaire authentique avec ses viandes grillées artisanales et ses sandwiches gourmands, disponibles sur commande et en livraison à domicile via Les Frères Toques.',
			en: 'The Rotisserie Sandwich House provides an authentic culinary experience with its artisanal grilled meats and gourmet sandwiches, available on order and home delivery through The Brothers Forks.'
		},
		image: projectImages.solidjsOriflamme,
		tags: ['SolidJS', 'Tailwind', 'Typescript'],
		url: 'https://forth-oriflamme.netlify.app/',
		repo: ENDPOINT_GITHUB + '/oriflamme'
	},
	{
		name: { fr: 'Preact TOC', en: 'Preact TOC' },
		description: {
			fr: 'Hook headless pour Preact qui génère un sommaire avec scrollspy, publié sur npm sous @forthtilliath/preact-toc.',
			en: 'Headless Preact hook that generates a scrollspy table of contents, published on npm as @forthtilliath/preact-toc.'
		},
		image: projectImages.preactPageNavigation,
		tags: ['Preact', 'Tailwind', 'Typescript'],
		url: 'https://preact-page-navigation.vercel.app/',
		repo: ENDPOINT_GITHUB + '/preact-toc'
	},
	{
		name: { fr: '7 Wonders : Assistant', en: '7 Wonders: Assistant' },
		description: {
			fr: '7 Wonders: Assistant est une application qui aide les utilisateurs à gérer et à calculer les scores de leurs parties de 7 Wonders.',
			en: '7 Wonders: Assistant is an application that helps users manage and calculate scores for their 7 Wonders games.'
		},
		// image: projectImages.solidjsPlaygroundsOrganizer,
		tags: ['React', 'Tailwind', 'Typescript', 'Zod', 'Zustand', 'Vitest', 'Chart.js'],
		url: 'https://7wonders-assistant.vercel.app/',
		repo: ENDPOINT_GITHUB + '/7wonders-assistant'
	},
	{
		name: { fr: 'Meeplog', en: 'Meeplog' },
		description: {
			fr: 'Blog perso sur les jeux de société (chroniques, retours de partie), développé en full-stack avec AdonisJS : auth, connexion GitHub, articles en markdown.',
			en: 'Personal blog about board games (reviews, session reports), built full-stack with AdonisJS: auth, GitHub login, markdown articles.'
		},
		image: projectImages.meeplog,
		tags: ['AdonisJS', 'Bootstrap', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/meeplog'
	},
	{
		name: { fr: 'Chœur de Rôle', en: 'Chœur de Rôle' },
		description: {
			fr: "Site d'une chorale fictive à Angers : vitrine publique, espace choristes (trombinoscope, carte, répertoire, sondages) et back-office complet. Développé avec Next.js et Supabase (auth, DB, RLS, storage).",
			en: 'Website for a fictional choir in Angers: public showcase, member area (member directory, map, song library, polls) and full admin back-office. Built with Next.js and Supabase (auth, DB, RLS, storage).'
		},
		image: projectImages.nextjsChoeurDeRole,
		tags: ['Next.js', 'Tailwind', 'Typescript', 'Supabase', 'Zod'],
		repo: ENDPOINT_GITHUB + '/choeur-de-role'
	},
	{
		name: { fr: 'DevWind', en: 'DevWind' },
		description: {
			fr: "Extension Chrome pour éditer visuellement les classes Tailwind CSS v4 en direct sur n'importe quel site : picker visuel, panneau de classes par catégorie, synthèse CSS live, contrôle de contraste WCAG.",
			en: 'Chrome extension to visually edit Tailwind CSS v4 classes live on any site: visual picker, categorized class panel, live CSS synthesis, WCAG contrast checking.'
		},
		image: projectImages.devwind,
		tags: ['React', 'Tailwind', 'Typescript', 'Zustand', 'Vite', 'Chrome Extension'],
		repo: ENDPOINT_GITHUB + '/devwind'
	},
	{
		name: { fr: 'Portfolio', en: 'Portfolio' },
		description: {
			fr: 'Portfolio présentant mes projets et mes compétences',
			en: 'Portfolio of my works and projects'
		},
		image: projectImages.sveltekitPortfolio,
		tags: ['Sveltekit', 'Tailwind', 'Typescript', 'i18n', 'Shadcn/ui', 'Zod'],
		url: 'https://vincent-lisita.vercel.app/',
		repo: ENDPOINT_GITHUB + '/vincent-lisita-portfolio'
	}
];

export default projects;
