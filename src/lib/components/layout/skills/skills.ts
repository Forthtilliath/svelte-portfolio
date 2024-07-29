import type { ComponentType } from 'svelte';

// https://icon-icons.com/
// https://seeklogo.com/

import React from '$lib/components/shared/icons/libraries/react.svelte';
import SolidJS from '$lib/components/shared/icons/libraries/solid-js.svelte';
import Svelte from '$lib/components/shared/icons/libraries/svelte.svelte';
import NextJS from '$lib/components/shared/icons/libraries/next-js.svelte';

import CSSModules from '$lib/components/shared/icons/libraries/css-modules.svelte';
import SCSS from '$lib/components/shared/icons/libraries/sass.svelte';
import TailwindCSS from '$lib/components/shared/icons/libraries/tailwind-css.svelte';
import StyledComponents from '$lib/components/shared/icons/libraries/styled-components.svelte';

import I18n from '$lib/components/shared/icons/libraries/i18n.svelte';
import ChartJs from '$lib/components/shared/icons/libraries/chart-js.svelte';
import Zod from '$lib/components/shared/icons/libraries/zod.svelte';
import ReactQuery from '$lib/components/shared/icons/libraries/react-query.svelte';
import Shadcn from '$lib/components/shared/icons/libraries/shadcn.svelte';
import Zustand from '$lib/components/shared/icons/libraries/zustand.svelte';
import Vitest from '$lib/components/shared/icons/libraries/vitest.svelte';

import Typescript from '$lib/components/shared/icons/libraries/typescript.svelte';
import GraphQl from '$lib/components/shared/icons/libraries/graph-ql.svelte';
import Sql from '$lib/components/shared/icons/libraries/sql.svelte';

import Git from '$lib/components/shared/icons/libraries/git.svelte';
import Github from '$lib/components/shared/icons/libraries/github.svelte';
import VsCode from '$lib/components/shared/icons/libraries/vs-code.svelte';
import Prisma from '$lib/components/shared/icons/libraries/prisma.svelte';
import MongoDB from '$lib/components/shared/icons/libraries/mongo-db.svelte';
import Vite from '$lib/components/shared/icons/libraries/vite.svelte';
import Pnpm from '$lib/components/shared/icons/libraries/pnpm.svelte';

export type Skill = {
	name: string;
	icon: ComponentType;
	color?: string;
};

export type Technology = (typeof skills)[keyof typeof skills][number]['name'];
export type Framework = typeof skills.frameworks[number]['name'];

const skills = {
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
		},
		{
			name: 'Zustand',
			icon: Zustand,
			color: 'white'
		},
		{
			name: 'Vitest',
			icon: Vitest
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
		},
		{
			name: 'Pnpm',
			icon: Pnpm
		},
		{
			name: 'Vite',
			icon: Vite
		}
	]
} as const satisfies Record<string, Skill[]>;

export default skills;
