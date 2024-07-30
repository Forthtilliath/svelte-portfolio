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
		image: projectImages.sveltePortfolio,
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
		// image: '/images/advent-of-svelte.png',
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
		image: projectImages.sveltePortfolio,
		tags: ['Next.js', 'Typescript', 'i18n'],
		url: 'https://next-riot.vercel.app/',
		repo: ENDPOINT_GITHUB + '/next-riot-api'
	},
	{
		name: { fr: 'Lecteur audio', en: 'Player audio' },
		description: {
			fr: 'Lecteur audio',
			en: 'Player audio'
		},
		// image: '/images/player.png',
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
	}
];

export default projects;
