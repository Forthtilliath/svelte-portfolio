<script lang="ts">
	import Shine from '$lib/components/shared/shine.svelte';
	import SkillIcon from '$lib/components/shared/skill-icon.svelte';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import { skills } from '$lib/components/layout/skills';

	interface Props {
		value?: string | undefined;
	}

	let { value = $bindable('') }: Props = $props();

	const config = {
		// size: 48
	};
</script>

<ToggleGroup.Root type="single" class="h-auto gap-3 sm:gap-5" size="auto" spacing={1} bind:value>
	{#each skills.frameworks as framework (framework.name)}
		<ToggleGroup.Item
			value={framework.name}
			aria-label={`Toggle ${framework.name}`}
			class="size-14 border p-0 hover:border-white sm:size-28"
		>
			<Shine>
				<SkillIcon {...framework} {...config} class="size-6 sm:size-12" />
			</Shine>
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
