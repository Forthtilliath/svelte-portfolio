<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';
	import { personality } from './cv-content';
</script>

<SidebarCard aria-label="personnalité">
	<header class="card-title">
		<span>Personnalité</span>
	</header>
	<ul class="card-content" role="list">
		{#each personality as trait (trait)}
			<li>{trait}</li>
		{/each}
	</ul>
</SidebarCard>
