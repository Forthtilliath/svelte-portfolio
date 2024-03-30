<script lang="ts">
	import Shine from '$lib/components/shared/shine.svelte';
	import SkillIcon from '$lib/components/shared/skill-icon.svelte';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import skills from '../(skills)/skills';

	let value: string[] | undefined = undefined;

	const config = {
		size: 48
	};
</script>

<ToggleGroup.Root type="multiple" class="h-auto" size="auto" bind:value>
	{#each skills.frameworks as framework}
		<ToggleGroup.Item value={framework.name} aria-label={`Toggle ${framework.name}`}>
			<Shine>
				<SkillIcon {...framework} {...config} />
			</Shine>
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
