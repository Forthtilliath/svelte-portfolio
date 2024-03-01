<script lang="ts">
	import tilt from 'svelte-tilt';
	import type { Skill } from './skills';
	import Shine from '$lib/components/shared/Shine.svelte';

	export let list: Skill[];
	export let title: string;

	// https://reactsvgicons.com/
	const config = {
		size: 48
	};
</script>

<Shine lightColor="#149eca" depth={2}>
	<div class="rounded-lg border-2 bg-black/20 p-4 hover:cursor-pointer" use:tilt>
		<h2
			class="scroll-m-20 border-b text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			{title}
		</h2>
		<div class="grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] gap-4">
			{#each list as { name, icon, color }}
				<div class="flex h-28 w-28 flex-col items-center justify-center gap-3">
					<svelte:component this={icon} {...config} {color} />
					<p class="text-center text-sm text-slate-200">{name}</p>
				</div>
			{/each}
		</div>
	</div>
</Shine>
