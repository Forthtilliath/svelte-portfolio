<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { buttonVariants, type Props, type Events } from '.';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let rounded: $$Props['rounded'] = 'default';
	export let builders: $$Props['builders'] = [];
	export let external: $$Props['external'] = false;
	export { className as class };

	let externalProps: Record<string, unknown> = {};
	$: externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, rounded, className }))}
	type="button"
	{...externalProps}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
