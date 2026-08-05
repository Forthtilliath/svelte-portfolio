<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';
	import { interests } from './cv-content';
</script>

<SidebarCard aria-label="centres d'intérêt">
	<header class="card-title">
		<span>Centres d'intérêt</span>
	</header>
	<ul class="card-content" role="list">
		{#each interests as item (item.text)}
			<li>{item.emoji} {item.text}</li>
		{/each}
	</ul>
</SidebarCard>
