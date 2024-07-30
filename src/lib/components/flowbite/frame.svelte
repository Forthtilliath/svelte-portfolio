<script lang="ts">
	import tilt from 'svelte-tilt';
	import { cn } from '$lib/utils';
	import type { Action } from 'svelte/action';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	const noop = () => {};

	type FrameColor = keyof typeof bgColors;

	interface $$Props extends HTMLAnchorAttributes {
		tag?: string;
		color?: FrameColor;
		rounded?: boolean;
		border?: boolean;
		shadow?: boolean;
		node?: HTMLElement | undefined;
		use?: Action<HTMLElement, any>;
		options?: object;
		class?: string;
		role?: string;
		tilted?: boolean;
	}

	export let tag: string = $$restProps.href ? 'a' : 'div';
	export let color: FrameColor = 'default';
	export let rounded: boolean = false;
	export let border: boolean = false;
	export let shadow: boolean = false;
	export let tilted: boolean = false;

	// For components development
	export let node: HTMLElement | undefined = undefined;
	// Action function and its params
	export let use: Action<HTMLElement, any> = noop;
	export let options = {};

	export let role: string | undefined = undefined;

	$: color = color ?? 'default'; // for cases when undefined

	// your script goes here
	const bgColors = {
		gray: 'bg-gray-50 dark:bg-gray-800',
		red: 'bg-red-50 dark:bg-gray-800',
		yellow: 'bg-yellow-50 dark:bg-gray-800 ',
		green: 'bg-green-50 dark:bg-gray-800 ',
		indigo: 'bg-indigo-50 dark:bg-gray-800 ',
		purple: 'bg-purple-50 dark:bg-gray-800 ',
		pink: 'bg-pink-50 dark:bg-gray-800 ',
		blue: 'bg-blue-50 dark:bg-gray-800 ',
		light: 'bg-gray-50 dark:bg-gray-700',
		dark: 'bg-gray-50 dark:bg-gray-800',
		default: 'bg-white dark:bg-gray-800',
		dropdown: 'bg-white dark:bg-gray-700',
		navbar: 'bg-white dark:bg-gray-900',
		navbarUl: 'bg-gray-50 dark:bg-gray-800',
		form: 'bg-gray-50 dark:bg-gray-700',
		primary: 'bg-primary-50 dark:bg-gray-800 ',
		orange: 'bg-orange-50 dark:bg-orange-800',
		'app-blue': 'bg-app-blue-dark',
		none: ''
	};

	const textColors = {
		gray: 'text-gray-800 dark:text-gray-300',
		red: 'text-red-800 dark:text-red-400',
		yellow: 'text-yellow-800 dark:text-yellow-300',
		green: 'text-green-800 dark:text-green-400',
		indigo: 'text-indigo-800 dark:text-indigo-400',
		purple: 'text-purple-800 dark:text-purple-400',
		pink: 'text-pink-800 dark:text-pink-400',
		blue: 'text-blue-800 dark:text-blue-400',
		light: 'text-gray-700 dark:text-gray-300',
		dark: 'text-gray-700 dark:text-gray-300',
		default: 'text-gray-500 dark:text-gray-400',
		dropdown: 'text-gray-700 dark:text-gray-200',
		navbar: 'text-gray-700 dark:text-gray-200',
		navbarUl: 'text-gray-700 dark:text-gray-400',
		form: 'text-gray-900 dark:text-white',
		primary: 'text-primary-800 dark:text-primary-400',
		orange: 'text-orange-800 dark:text-orange-400',
		'app-blue': 'text-app-blue',
		none: ''
	};

	const borderColors = {
		gray: 'ring-gray-300 dark:ring-gray-800 divide-gray-300 dark:divide-gray-800',
		red: 'ring-red-300 dark:ring-red-800 divide-red-300 dark:divide-red-800',
		yellow: 'ring-yellow-300 dark:ring-yellow-800 divide-yellow-300 dark:divide-yellow-800',
		green: 'ring-green-300 dark:ring-green-800 divide-green-300 dark:divide-green-800',
		indigo: 'ring-indigo-300 dark:ring-indigo-800 divide-indigo-300 dark:divide-indigo-800',
		purple: 'ring-purple-300 dark:ring-purple-800 divide-purple-300 dark:divide-purple-800',
		pink: 'ring-pink-300 dark:ring-pink-800 divide-pink-300 dark:divide-pink-800',
		blue: 'ring-blue-300 dark:ring-blue-800 divide-blue-300 dark:divide-blue-800',
		light: 'ring-gray-500 divide-gray-500',
		dark: 'ring-gray-500 divide-gray-500',
		default: 'ring-gray-200 dark:ring-gray-700 divide-gray-200 dark:divide-gray-700',
		dropdown: 'ring-gray-100 dark:ring-gray-600 divide-gray-100 dark:divide-gray-600',
		navbar: 'ring-gray-100 dark:ring-gray-700 divide-gray-100 dark:divide-gray-700',
		navbarUl: 'ring-gray-100 dark:ring-gray-700 divide-gray-100 dark:divide-gray-700',
		form: 'ring-gray-300 dark:ring-gray-700 divide-gray-300 dark:divide-gray-700',
		primary:
			'ring-primary-500 dark:ring-primary-200  divide-primary-500 dark:divide-primary-200 ',
		orange: 'ring-orange-300 dark:ring-orange-800 divide-orange-300 dark:divide-orange-800',
		'app-blue': 'ring-app-blue divide-app-blue',
		none: ''
	};

	let divClass: string;
	$: divClass = cn(
		bgColors[color],
		textColors[color],
		rounded && 'rounded-lg',
		border && 'ring-1 hover:ring-2 hover:shadow-md hover:shadow-white/50',
		borderColors[color],
		shadow && 'shadow-md',
		$$props.class
	);

	let tiltAction: Action<HTMLElement, any>;
	$: tiltAction = tilted ? tilt : () => {};
</script>

<svelte:element
	this={tag}
	use:use={options}
	use:tiltAction
	bind:this={node}
	{role}
	{...$$restProps}
	class={divClass}
	on:click
	on:mouseenter
	on:mouseleave
	on:focusin
	on:focusout
>
	<slot />
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
### Props
@prop export let tag: string = $$restProps.href ? 'a' : 'div';
@prop export let color: FrameColor = 'default';
@prop export let rounded: boolean = false;
@prop export let border: boolean = false;
@prop export let shadow: boolean = false;
@prop export let node: HTMLElement | undefined = undefined;
@prop export let use: Action<HTMLElement, any> = noop;
@prop export let options = {};
@prop export let role: string | undefined = undefined;
-->
