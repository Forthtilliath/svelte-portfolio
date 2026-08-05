<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';
	import { languages } from './cv-content';
</script>

<SidebarCard aria-label="langues">
	<header class="card-title">
		<span>Langues</span>
	</header>
	<ul class="card-content" role="list">
		{#each languages as lang (lang.name)}
			<li>{lang.name} - {lang.level}</li>
		{/each}
	</ul>
</SidebarCard>
