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
		name: { fr: 'Green Bank', en: 'Green Bank' },
		description: {
			fr: 'Tournoi Hackathon 2023',
			en: 'Hackathon Tournament 2023'
		},
		image: projectImages.vanillaGreenBank,
		tags: ['Next.js', 'Tailwind', 'Typescript', 'Zod'],
		url: 'https://green-bank-swart.vercel.app/simulator',
		repo: ENDPOINT_GITHUB + '/green-bank'
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
		name: { fr: 'Dolla', en: 'Dolla' },
		description: {
			fr: 'Single Page Application',
			en: 'Single Page Application'
		},
		image: projectImages.reactDolla,
		tags: ['React', 'Styled Components', 'Typescript'],
		url: 'https://react-ts-dolla.vercel.app/',
		repo: ENDPOINT_GITHUB + '/react-ts-dolla'
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
		image: projectImages.sveltekitCodeshare,
		tags: ['Svelte', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/svelte-codeshare'
	},
	{
		name: { fr: 'LOL Random Arena', en: 'LOL Random Arena' },
		description: {
			fr: 'Application qui aide les joueurs à générer des equipes et des combats aleatoires.',
			en: 'App to help players to generate teams & champions inside arena mode.'
		},
		image: projectImages.sveltekitLolArena,
		tags: ['Svelte', 'Typescript', 'Shadcn/ui', 'Tailwind', 'Zod'],
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
		tags: ['SolidJS', 'CSS Modules', 'SCSS', 'Typescript'],
		url: 'https://forth-spotube.netlify.app/',
		repo: ENDPOINT_GITHUB + '/solidjs-ts-lecteur'
	},
	{
		name: { fr: 'Navigation Page', en: 'Page Navigation' },
		description: {
			fr: 'Système de navigation dynamique avec Preact et Tailwind CSS.',
			en: 'Dynamic Navigation System with Preact and Tailwind CSS'
		},
		image: projectImages.preactPageNavigation,
		tags: ['React', 'Tailwind', 'Typescript'],
		url: 'https://forth-spotube.netlify.app/',
		repo: ENDPOINT_GITHUB + '/preact-page-navigation'
	},
	{
		name: { fr: 'Organisateur Playgrounds', en: 'Playgrounds Organizer' },
		description: {
			fr: 'Organisateur afin de regrouper les différents playgrounds fait sur codepen, codesandbox, stackblitz...',
			en: 'Organizer to group together the different playgrounds made on codepen, codesandbox, stackblitz...'
		},
		image: projectImages.solidjsPlaygroundsOrganizer,
		tags: ['SolidJS', 'Tailwind', 'Typescript', 'Zod'],
		url: 'https://playgrounds-organizer.vercel.app/',
		repo: ENDPOINT_GITHUB + '/playgrounds-organizer'
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
		name: { fr: 'Portfolio', en: 'Portfolio' },
		description: {
			fr: 'Portfolio présentant mes projets et mes compétences',
			en: 'Portfolio of my works and projects'
		},
		image: projectImages.sveltekitPortfolio,
		tags: ['Svelte', 'Tailwind', 'Typescript', 'i18n', 'Shadcn/ui', 'Zod'],
		url: 'https://vincent-lisita.vercel.app/',
		repo: ENDPOINT_GITHUB + '/svelte-portfolio'
	}
];

export default projects;
