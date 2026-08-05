<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';
	import { skillsDev, skillsResto } from './cv-content';

	interface Props {
		template: 'dev' | 'resto';
	}

	let { template }: Props = $props();

	let items = $derived(template === 'dev' ? skillsDev : skillsResto);
</script>

<SidebarCard aria-label="compétences">
	<header class="card-title">
		<span>Compétences</span>
	</header>
	<ul class="card-content" role="list">
		{#each items as item (item)}
			<li>{item}</li>
		{/each}
	</ul>
</SidebarCard>
