<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';
	import { informations } from './cv-content';
</script>

<SidebarCard aria-label="informations">
	<header class="card-title">
		<span>Informations</span>
	</header>
	<ul class="card-content" role="list">
		{#each informations as item (item.text)}
			<li>
				{#if item.href}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- mailto: link, not a SvelteKit route -->
					<a href={item.href}>{item.text}</a>
				{:else}
					{item.text}
				{/if}
			</li>
		{/each}
	</ul>
</SidebarCard>
