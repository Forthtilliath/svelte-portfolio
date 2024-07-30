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
		name: { fr: 'Portfolio', en: 'Portfolio' },
		description: {
			fr: 'Portfolio présentant mes projets et mes compétences',
			en: 'Portfolio of my works and projects'
		},
		image: projectImages.sveltekitPortfolio,
		tags: ['Svelte', 'Tailwind', 'Typescript', 'i18n', 'Shadcn/ui', 'Zod'],
		url: 'https://vincent-lisita.vercel.app/',
		repo: ENDPOINT_GITHUB + '/svelte-portfolio'
	},
	{
		name: { fr: 'Advent of Svelte', en: 'Advent of Svelte' },
		description: {
			fr: 'Advent of Svelte',
			en: 'Advent of Svelte'
		},
		image: projectImages.sveltekitAdventOfSvelte,
		tags: ['Svelte', 'Tailwind', 'Typescript', 'Shadcn/ui', 'Zod'],
		url: 'https://advent-of-svelte.vercel.app/',
		repo: ENDPOINT_GITHUB + '/advent-of-svelte'
	},
	{
		name: { fr: 'Riot app', en: 'Riot app' },
		description: {
			fr: "Application Next utilisant l'API de Riot",
			en: 'Next App which use Riot API.'
		},
		image: projectImages.nextjsRiotApi,
		tags: ['Next.js', 'Typescript', 'i18n'],
		url: 'https://next-riot.vercel.app/',
		repo: ENDPOINT_GITHUB + '/next-riot-api'
	},
	{
		name: { fr: 'Lecteur audio : Spotube', en: 'Player audio: Spotube' },
		description: {
			fr: 'Spotube est une application de streaming musical qui te donne accès à quelques titres.',
			en: 'Spotube is a music streaming app that gives you access to a few tracks.'
		},
		image: projectImages.solidjsSpotube,
		tags: ['SolidJS', 'CSS Modules', 'SCSS', 'Typescript'],
		url: 'https://forth-spotube.netlify.app/',
		repo: ENDPOINT_GITHUB + '/solidjs-ts-lecteur'
	},
	{
		name: { fr: 'Code Share', en: 'Code Share' },
		description: {
			fr: "Une plateforme collaborative de partage d'extraits de code. Développé avec SvelteKit et alimenté par PocketBase.",
			en: 'A collaborative platform for sharing code snippets. Built with SvelteKit and powered by PocketBase.'
		},
		image: projectImages.svelteCodeshare,
		tags: ['Svelte', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/svelte-codeshare'
	},
	{
		name: { fr: 'LOL Random Arena', en: 'LOL Random Arena' },
		description: {
			fr: 'Application qui aide les joueurs à générer des equipes et des combats aleatoires.',
			en: 'App to help players to generate teams & champions inside arena mode.'
		},
		image: projectImages.svelteLolArena,
		tags: ['Svelte', 'Typescript', 'Shadcn/ui', 'Tailwind', 'Zod'],
		repo: ENDPOINT_GITHUB + '/lol-random-arena'
	},
	{
		name: { fr: 'Restaurant : Oriflamme', en: 'Restaurant: Oriflamme' },
		description: {
			fr: 'La Rotisserie Sandwichs Maison offre une expérience culinaire authentique avec ses viandes grillées artisanales et ses sandwiches gourmands, disponibles sur commande et en livraison à domicile via Les Frères Toques.',
			en: 'The Rotisserie Sandwich House provides an authentic culinary experience with its artisanal grilled meats and gourmet sandwiches, available on order and home delivery through The Brothers Forks.'
		},
		image: projectImages.solidjsOriflamme,
		tags: ['SolidJS', 'CSS Modules', 'SCSS', 'Typescript'],
		url: 'https://forth-spotube.netlify.app/',
		repo: ENDPOINT_GITHUB + '/solidjs-ts-lecteur'
	}
];

export default projects;
