import type { Technology } from '../(skills)/skills';

export type Project = {
	name: string;
	description: string;
	image?: string;
	tags: Technology[];
	url?: string | undefined;
	repo: string;
};

const ENDPOINT_GITHUB = 'https://github.com/Forthtilliath';
const ENDPOINT_LOCAL_IMAGES = '/src/lib/assets/projects';

const projects: Project[] = [
	{
		name: 'Portfolio',
		description: 'Portfolio of my works and projects',
		image: ENDPOINT_LOCAL_IMAGES + '/svelte-portfolio.png',
		tags: ['Svelte', 'Tailwind', 'Typescript', 'i18n', 'Shadcn/ui', 'Zod'],
		url: 'https://vincent-lisita.vercel.app/',
		repo: ENDPOINT_GITHUB + '/svelte-portfolio'
	},
	{
		name: 'Advent of Svelte',
		description: 'Advent of Svelte',
		// image: '/images/advent-of-svelte.png',
		tags: ['Svelte', 'Tailwind', 'Typescript', 'Shadcn/ui', 'Zod'],
		url: 'https://advent-of-svelte.vercel.app/',
		repo: ENDPOINT_GITHUB + '/advent-of-svelte'
	},
	{
		name: 'Riot app',
		description: 'Riot app',
		// image: '/images/riot.png',
		tags: ['Next.js', 'Typescript', 'i18n'],
		url: 'https://riot-app.vercel.app/',
		repo: ENDPOINT_GITHUB + '/next-riot-api'
	},
	{
		name: 'Lecteur audio',
		description: 'Lecteur audio',
		// image: '/images/player.png',
		tags: ['Solid', 'CSS Modules', 'SCSS', 'Typescript'],
		url: 'https://forth-spotube.netlify.app/',
		repo: ENDPOINT_GITHUB + '/solidjs-ts-lecteur'
	}
];

export default projects;
