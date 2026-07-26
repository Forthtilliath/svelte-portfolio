<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any -- see Skill['icon'] in skills.ts
		icon: Component<any>;
		name: string;
		color?: string | undefined;
		size?: number | undefined;
		class?: string | undefined;
	}

	let {
		icon,
		name,
		color = undefined,
		size = undefined,
		class: className = undefined
	}: Props = $props();

	const SvelteComponent = $derived(icon);
</script>

<div class="flex flex-col items-center justify-center gap-3 p-4">
	<SvelteComponent {size} {color} class={className} />
	<p class="text-center text-sm text-slate-200 max-sm:hidden">{name}</p>
</div>
