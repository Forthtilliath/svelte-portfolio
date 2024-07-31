<script lang="ts">
	import Shine from '$lib/components/shared/shine.svelte';
	import SkillIcon from '$lib/components/shared/skill-icon.svelte';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import { skills } from '$lib/components/layout/skills';

	export let value: string[] | undefined = undefined;

	const config = {
		// size: 48
	};
</script>

<ToggleGroup.Root type="multiple" class="h-auto gap-3 sm:gap-5" size="auto" bind:value>
	{#each skills.frameworks as framework}
		<ToggleGroup.Item
			value={framework.name}
			aria-label={`Toggle ${framework.name}`}
			class="h-14 w-14 border p-0 hover:border-white sm:h-28 sm:w-28"
		>
			<Shine>
				<SkillIcon {...framework} {...config} class="h-6 w-6 sm:h-12 sm:w-12" />
			</Shine>
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
