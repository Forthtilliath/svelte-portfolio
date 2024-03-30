<script lang="ts">
	import tilt from 'svelte-tilt';
	import type { Skill } from './skills';
	import Shine from '$lib/components/shared/shine.svelte';
	import SkillIcon from '$lib/components/shared/skill-icon.svelte';

	export let list: Skill[];
	export let title: string;

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
			{#each list as skill}
				<SkillIcon {...skill} {...config} />
			{/each}
		</div>
	</div>
</Shine>
