<script lang="ts">
	import type { ComponentProps, Snippet } from 'svelte';
	import Frame from './frame.svelte';
	import { cn } from '$lib/utils';
	import { Skeleton } from '../ui/skeleton';
	import { defaultProject } from '$lib/assets/projects';

	type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	// propagate props type from underlying Frame
	interface Props extends ComponentProps<typeof Frame> {
		href?: string | null | undefined;
		horizontal?: boolean;
		reverse?: boolean;
		img?: string;
		padding?: SizeType | 'none';
		size?: SizeType | 'none';
		skeleton?: boolean;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		href = undefined,
		horizontal = false,
		reverse = false,
		img = undefined,
		padding = 'lg',
		size = 'sm',
		skeleton = false,
		class: className = undefined,
		children,
		...rest
	}: Props = $props();

	const paddings: Record<SizeType | 'none', string> = {
		none: '',
		xs: 'p-2',
		sm: 'p-4',
		md: 'p-4 sm:p-5',
		lg: 'p-4 sm:p-6',
		xl: 'p-4 sm:p-8'
	};

	const sizes: Record<SizeType | 'none', string> = {
		none: '',
		xs: 'max-w-xs',
		sm: 'max-w-sm',
		md: 'max-w-xl',
		lg: 'max-w-2xl',
		xl: 'max-w-screen-xl'
	};

	let innerPadding = $derived(cn('space-y-2', paddings[padding]));

	let cardClass = $derived(
		cn(
			'flex',
			sizes[size],
			reverse ? 'flex-col-reverse' : 'flex-col',
			horizontal && (reverse ? 'md:flex-row-reverse' : 'md:flex-row'),
			href && 'hover:bg-gray-100 dark:hover:bg-white/5 dark:hover:outline-2',
			// !img && innerPadding,
			className
		)
	);

	let imgClass = $derived(
		cn(
			'h-auto aspect-video object-cover w-full',
			reverse ? 'rounded-b-lg' : 'rounded-t-lg',
			horizontal && 'md:rounded-none',
			horizontal && (reverse ? 'md:rounded-e-lg' : 'md:rounded-s-lg')
		)
	);
</script>

<Frame
	tag={href ? 'a' : 'div'}
	color="blue"
	rounded
	shadow
	border
	{href}
	{...rest}
	class={cardClass}
>
	{#if skeleton}
		<Skeleton class={imgClass} />
	{:else if img}
		<img class={imgClass} src={img} alt="Project Overview" />
	{:else}
		<img class={imgClass} src={defaultProject} alt="Project Overview" />
	{/if}
	<div class={cn('border-t-app-blue border-t', innerPadding)}>
		{@render children?.()}
	</div>
</Frame>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let href: string | null | undefined = undefined;
@prop export let horizontal: boolean = false;
@prop export let reverse: boolean = false;
@prop export let img: string | undefined = undefined;
@prop export let padding: SizeType | 'none' = 'lg';
@prop export let size: SizeType | 'none' = 'sm';
-->
