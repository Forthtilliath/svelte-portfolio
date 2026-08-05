<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';
	import { knowhows } from './cv-content';
</script>

<SidebarCard aria-label="savoir-faire">
	<header class="card-title">
		<span>Savoir-Faire</span>
	</header>
	<ul class="card-content" role="list">
		{#each knowhows as item (item)}
			<li>{item}</li>
		{/each}
	</ul>
</SidebarCard>
