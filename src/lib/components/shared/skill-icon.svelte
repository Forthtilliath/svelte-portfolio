<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let name: string;
	export let color: string | undefined = undefined;
  export let size: number | undefined = undefined;
</script>

<div class="flex h-28 w-28 flex-col items-center justify-center gap-3">
	<svelte:component this={icon} {size} {color} />
	<p class="text-center text-sm text-slate-200">{name}</p>
</div>
