<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import Frame from './frame.svelte';
	import { cn } from '$lib/utils';

	type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export let href: string | null | undefined = undefined;
	export let horizontal: boolean = false;
	export let reverse: boolean = false;
	export let img: string | undefined = undefined;
	export let padding: SizeType | 'none' = 'lg';
	export let size: SizeType | 'none' = 'sm';

	// propagate props type from underlying Frame
	interface $$Props extends ComponentProps<Frame> {
		horizontal?: boolean;
		reverse?: boolean;
		img?: string;
		padding?: SizeType | 'none';
		size?: SizeType | 'none';
	}

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

	let innerPadding: string;
	$: innerPadding = cn('space-y-2', paddings[padding]);

	let cardClass: string;
	$: cardClass = cn(
		'flex w-full',
		sizes[size],
		reverse ? 'flex-col-reverse' : 'flex-col',
		horizontal && (reverse ? 'md:flex-row-reverse' : 'md:flex-row'),
		href && 'hover:bg-gray-100 dark:hover:bg-gray-700',
		!img && innerPadding,
		$$props.class
	);

	let imgClass: string;
	$: imgClass = cn(
		reverse ? 'rounded-b-lg' : 'rounded-t-lg',
		horizontal && 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none',
		horizontal && (reverse ? 'md:rounded-e-lg' : 'md:rounded-s-lg')
	);
</script>

<Frame
	tag={href ? 'a' : 'div'}
	color="blue"
	rounded
	shadow
	border
	on:click
	on:focusin
	on:focusout
	on:mouseenter
	on:mouseleave
	{href}
	{...$$restProps}
	class={cardClass}
>
	{#if img}
		<img class={imgClass} src={img} alt="" />
		<div class={cn('border-t border-t-app-blue', innerPadding)}>
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
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