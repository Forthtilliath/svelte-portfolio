<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let name: string;
	export let color: string | undefined = undefined;
	export let size: number | undefined = undefined;
	let className: string | undefined = undefined;
	export { className as class };
</script>

<div class="flex flex-col items-center justify-center gap-3 p-4">
	<svelte:component this={icon} {size} {color} class={className} />
	<p class="text-center text-sm text-slate-200 max-sm:hidden">{name}</p>
</div>
