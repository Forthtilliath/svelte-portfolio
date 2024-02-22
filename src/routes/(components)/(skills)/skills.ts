import type { ComponentType } from 'svelte';

// https://icon-icons.com/
// https://seeklogo.com/

import React from './(icons)/React.svelte';
import SolidJS from './(icons)/SolidJS.svelte';
import Svelte from './(icons)/Svelte.svelte';
import NextJS from './(icons)/NextJS.svelte';

import CSSModules from './(icons)/CSSModules.svelte';
import SCSS from './(icons)/SASS.svelte';
import TailwindCSS from './(icons)/TailwindCSS.svelte';
import StyledComponents from './(icons)/StyledComponents.svelte';

import I18n from './(icons)/I18n.svelte';
import ChartJs from './(icons)/ChartJS.svelte';
import Zod from './(icons)/Zod.svelte';
import ReactQuery from './(icons)/ReactQuery.svelte';
import Shadcn from './(icons)/Shadcn.svelte';

import Typescript from './(icons)/Typescript.svelte';
import GraphQl from './(icons)/GraphQL.svelte';
import Sql from './(icons)/SQL.svelte';

import Git from './(icons)/Git.svelte';
import Github from './(icons)/Github.svelte';
import VsCode from './(icons)/VSCode.svelte';
import Prisma from './(icons)/Prisma.svelte';
import MongoDB from './(icons)/MongoDB.svelte';

export type Skill = {
	name: string;
	icon: ComponentType;
	color?: string;
};

const skills = {
	// const skills: Record<string, Skill[]> = {
	frameworks: [
		{
			name: 'React',
			icon: React
		},
		{
			name: 'Next.js',
			icon: NextJS
		},
		{
			name: 'Solid',
			icon: SolidJS
		},
		{
			name: 'Svelte',
			icon: Svelte
		}
	],
	css: [
		{
			name: 'CSS Modules',
			icon: CSSModules
		},
		{
			name: 'SCSS',
			icon: SCSS
		},
		{
			name: 'Tailwind',
			icon: TailwindCSS
		},
		{
			name: 'Styled Components',
			icon: StyledComponents
		}
	],
	libraries: [
		{
			name: 'I18n',
			icon: I18n
		},
		{
			name: 'Shadcn/ui',
			icon: Shadcn
		},
		{
			name: 'Zod',
			icon: Zod
		},
		{
			name: 'Chart JS',
			icon: ChartJs
		},
		{
			name: 'React-query',
			icon: ReactQuery
		}
	],
	languages: [
		{
			name: 'TypeScript',
			icon: Typescript
		},
		{
			name: 'GraphQL',
			icon: GraphQl
		},
		{
			name: 'SQL',
			icon: Sql
		}
	],
	tools: [
		{
			name: 'Git',
			icon: Git
		},
		{
			name: 'GitHub',
			icon: Github
		},
		{
			name: 'VS Code',
			icon: VsCode
		},
		{
			name: 'Prisma',
			icon: Prisma
		},
		{
			name: 'MongoDB',
			icon: MongoDB
		}
	]
};

export default skills;
