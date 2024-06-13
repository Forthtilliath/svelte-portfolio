import type { Technology } from '$lib/components/layout/skills';
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
		name: { fr: 'TEST FR', en: 'TEST EN' },
		description: {
			fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante id leo suscipit pharetra. Sed nunc quam, faucibus in congue vel, pellentesque eu augue. Phasellus nec velit mauris. Curabitur dapibus ex sapien, id interdum orci dictum sed. Duis ullamcorper tortor enim, vel pharetra felis sagittis nec. Nam sodales vitae arcu sed suscipit. Nullam nunc risus, egestas ut eleifend sed, condimentum quis est. Curabitur id odio in nulla hendrerit tempus. Nam consequat, neque nec aliquet commodo, nibh nisi vehicula nunc, a malesuada ante lectus auctor ligula. Nunc at tellus ac quam congue rhoncus eu et nibh. Nam interdum gravida hendrerit.',
			en: 'Nec usurpare lustratae dicam sermonibus clarissimorum populorum celeritate nec lustratae exterarum nec conficiendi ponere crebris passibus potuisse exterarum res proeliorum celeritate omnis exterarum quam sed nec imperatorum ante sunt idque.'
		},
		image: projectImages.sveltePortfolio,
		tags: ['Svelte', 'Tailwind', 'Typescript', 'i18n', 'Shadcn/ui', 'Zod'],
		repo: ENDPOINT_GITHUB + '/svelte-portfolio'
	},
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
		tags: ['Solid', 'CSS Modules', 'SCSS', 'Typescript'],
		url: 'https://forth-spotube.netlify.app/',
		repo: ENDPOINT_GITHUB + '/solidjs-ts-lecteur'
	}
];

export default projects;
