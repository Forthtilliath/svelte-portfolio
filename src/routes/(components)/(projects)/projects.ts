import type { Technology } from '../(skills)/skills';
import * as projectImages from '$lib/assets/projects';

export type Project = {
	name: string;
	description: string;
	image?: string;
	tags: Technology[];
	url?: string | undefined;
	repo: string;
};

const ENDPOINT_GITHUB = 'https://github.com/Forthtilliath';

const projects: Project[] = [
	{
		name: 'TEST',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante id leo suscipit pharetra. Sed nunc quam, faucibus in congue vel, pellentesque eu augue. Phasellus nec velit mauris. Curabitur dapibus ex sapien, id interdum orci dictum sed. Duis ullamcorper tortor enim, vel pharetra felis sagittis nec. Nam sodales vitae arcu sed suscipit. Nullam nunc risus, egestas ut eleifend sed, condimentum quis est. Curabitur id odio in nulla hendrerit tempus. Nam consequat, neque nec aliquet commodo, nibh nisi vehicula nunc, a malesuada ante lectus auctor ligula. Nunc at tellus ac quam congue rhoncus eu et nibh. Nam interdum gravida hendrerit.',
		image: projectImages.sveltePortfolio,
		tags: ['Svelte', 'Tailwind', 'Typescript', 'i18n', 'Shadcn/ui', 'Zod'],
		repo: ENDPOINT_GITHUB + '/svelte-portfolio'
	},
	{
		name: 'Portfolio',
		description: 'Portfolio of my works and projects',
		image: projectImages.sveltePortfolio,
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
		image: projectImages.sveltePortfolio,
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
