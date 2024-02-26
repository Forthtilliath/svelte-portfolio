import type { ComponentType } from 'svelte';

// https://icon-icons.com/
// https://seeklogo.com/

import React from '$lib/components/shared/icons/React.svelte';
import SolidJS from '$lib/components/shared/icons/SolidJS.svelte';
import Svelte from '$lib/components/shared/icons/Svelte.svelte';
import NextJS from '$lib/components/shared/icons/NextJS.svelte';

import CSSModules from '$lib/components/shared/icons/CSSModules.svelte';
import SCSS from '$lib/components/shared/icons/SASS.svelte';
import TailwindCSS from '$lib/components/shared/icons/TailwindCSS.svelte';
import StyledComponents from '$lib/components/shared/icons/StyledComponents.svelte';

import I18n from '$lib/components/shared/icons/I18n.svelte';
import ChartJs from '$lib/components/shared/icons/ChartJS.svelte';
import Zod from '$lib/components/shared/icons/Zod.svelte';
import ReactQuery from '$lib/components/shared/icons/ReactQuery.svelte';
import Shadcn from '$lib/components/shared/icons/Shadcn.svelte';

import Typescript from '$lib/components/shared/icons/Typescript.svelte';
import GraphQl from '$lib/components/shared/icons/GraphQL.svelte';
import Sql from '$lib/components/shared/icons/SQL.svelte';

import Git from '$lib/components/shared/icons/Git.svelte';
import Github from '$lib/components/shared/icons/Github.svelte';
import VsCode from '$lib/components/shared/icons/VSCode.svelte';
import Prisma from '$lib/components/shared/icons/Prisma.svelte';
import MongoDB from '$lib/components/shared/icons/MongoDB.svelte';

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
			name: 'i18n',
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
			name: 'Chart.js',
			icon: ChartJs
		},
		{
			name: 'React-query',
			icon: ReactQuery
		}
	],
	languages: [
		{
			name: 'Typescript',
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
