<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/styles/cv/index.scss';
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Vincent LISITA" />
	<meta name="darkreader-lock" />
</svelte:head>

<slot />
<aside class="menu">
	<menu role="navigation" aria-label="Menu de navigation entre les CV">
		<li>
			<a
				href="/cv/fullstack"
				class:active={$page.url.pathname === '/cv/fullstack'}
				data-sveltekit-preload-data="off"
				>Développeur Full-stack
			</a>
		</li>
		<li>
			<a
				href="/cv/react"
				class:active={$page.url.pathname === '/cv/react'}
				data-sveltekit-preload-data="off"
				>Développeur React
			</a>
		</li>
		<li>
			<a
				href="/cv/sveltekit"
				class:active={$page.url.pathname === '/cv/sveltekit'}
				data-sveltekit-preload-data="off"
				>Développeur SvelteKit
			</a>
		</li>
		<li>
			<a
				href="/cv/restauration"
				class:active={$page.url.pathname === '/cv/restauration'}
				data-sveltekit-preload-data="off"
				>Restauration
			</a>
		</li>
	</menu>
</aside>

<style lang="scss">
	@use 'sass:color';

	@media print {
		.menu,
		.menu * {
			display: none !important;
		}
	}

	.menu {
		position: fixed;
		top: 2rem;
		left: 2rem;
		background-color: var(--color-white);
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		z-index: 10;
		font-size: 1rem;
		overflow: hidden;

		a {
			padding: 0.5rem;
			display: block;
			border-radius: 5px;

			border: var(--color-white) 1px solid;

			&:hover {
				background-color: var(--color-black);
				color: var(--color-white);
			}
			&.active {
				background-color: var(--color-gray);
				color: var(--color-white);
			}
		}
	}
</style>
