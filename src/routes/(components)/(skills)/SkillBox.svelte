<script lang="ts">
	import type { Skill } from './skills';

	export let list: Skill[];

	// https://reactsvgicons.com/
	const config = {
		size: 48
	};
</script>

<div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-8">
	{#each list as { name, icon, color }}
		<div class="h-28 w-28">
			<div class="flex h-28 w-28 flex-col items-center justify-center gap-3">
				<svelte:component this={icon} {...config} {color} />
				<p class="text-center text-sm text-slate-400">{name}</p>
			</div>
		</div>
	{/each}
</div>
