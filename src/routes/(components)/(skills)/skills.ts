import type { ComponentType } from 'svelte';

// https://icon-icons.com/
// https://seeklogo.com/

import React from '$lib/components/shared/icons/react.svelte';
import SolidJS from '$lib/components/shared/icons/solid-js.svelte';
import Svelte from '$lib/components/shared/icons/svelte.svelte';
import NextJS from '$lib/components/shared/icons/next-js.svelte';

import CSSModules from '$lib/components/shared/icons/css-modules.svelte';
import SCSS from '$lib/components/shared/icons/sass.svelte';
import TailwindCSS from '$lib/components/shared/icons/tailwind-css.svelte';
import StyledComponents from '$lib/components/shared/icons/styled-components.svelte';

import I18n from '$lib/components/shared/icons/i18n.svelte';
import ChartJs from '$lib/components/shared/icons/chart-js.svelte';
import Zod from '$lib/components/shared/icons/zod.svelte';
import ReactQuery from '$lib/components/shared/icons/react-query.svelte';
import Shadcn from '$lib/components/shared/icons/shadcn.svelte';
import Zustand from '$lib/components/shared/icons/zustand.svelte';
import Vitest from '$lib/components/shared/icons/vitest.svelte';

import Typescript from '$lib/components/shared/icons/typescript.svelte';
import GraphQl from '$lib/components/shared/icons/graph-ql.svelte';
import Sql from '$lib/components/shared/icons/sql.svelte';

import Git from '$lib/components/shared/icons/git.svelte';
import Github from '$lib/components/shared/icons/github.svelte';
import VsCode from '$lib/components/shared/icons/vs-code.svelte';
import Prisma from '$lib/components/shared/icons/prisma.svelte';
import MongoDB from '$lib/components/shared/icons/mongo-db.svelte';
import Vite from '$lib/components/shared/icons/vite.svelte';
import Pnpm from '$lib/components/shared/icons/pnpm.svelte';

export type Skill = {
	name: string;
	icon: ComponentType;
	color?: string;
};

const skills: Record<string, Skill[]> = {
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
};

export default skills;
