<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	interface Props {
		children?: import('svelte').Snippet;
		loading?: import('svelte').Snippet;
		loadingText?: import('svelte').Snippet;
	}

	let { children, loading, loadingText }: Props = $props();

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	{@render children?.()}
{:else}
	{#if loading}{@render loading()}{:else}
		<div class="absolute inset-0 grid place-content-center" transition:fade>
			<h1 class="text-xl">
				{#if loadingText}{@render loadingText()}{:else}Loading...{/if}
			</h1>
			<div class="loader"></div>
		</div>
	{/if}
{/if}

<!-- @component
Add a spinner to your app with this component until the page is fully loaded.

@example
```svelte
<WithLoader>
  <MySlider />
</WithLoader>
```
-->

<style>
	/* spinner from https://projects.lukehaas.me/css-loaders/ */
	.loader {
		font-size: 10px;
		margin: 3rem auto 0;
		width: 1em;
		height: 1em;
		border-radius: 50%;
		position: relative;
		text-indent: -9999em;
		animation: load 1.3s infinite linear;
		transform: translateZ(0);
	}
	@keyframes load {
		0%,
		100% {
			box-shadow:
				0 -3em 0 0.2em,
				2em -2em 0 0em,
				3em 0 0 -1em,
				2em 2em 0 -1em,
				0 3em 0 -1em,
				-2em 2em 0 -1em,
				-3em 0 0 -1em,
				-2em -2em 0 0;
		}
		12.5% {
			box-shadow:
				0 -3em 0 0,
				2em -2em 0 0.2em,
				3em 0 0 0,
				2em 2em 0 -1em,
				0 3em 0 -1em,
				-2em 2em 0 -1em,
				-3em 0 0 -1em,
				-2em -2em 0 -1em;
		}
		25% {
			box-shadow:
				0 -3em 0 -0.5em,
				2em -2em 0 0,
				3em 0 0 0.2em,
				2em 2em 0 0,
				0 3em 0 -1em,
				-2em 2em 0 -1em,
				-3em 0 0 -1em,
				-2em -2em 0 -1em;
		}
		37.5% {
			box-shadow:
				0 -3em 0 -1em,
				2em -2em 0 -1em,
				3em 0em 0 0,
				2em 2em 0 0.2em,
				0 3em 0 0em,
				-2em 2em 0 -1em,
				-3em 0em 0 -1em,
				-2em -2em 0 -1em;
		}
		50% {
			box-shadow:
				0 -3em 0 -1em,
				2em -2em 0 -1em,
				3em 0 0 -1em,
				2em 2em 0 0em,
				0 3em 0 0.2em,
				-2em 2em 0 0,
				-3em 0em 0 -1em,
				-2em -2em 0 -1em;
		}
		62.5% {
			box-shadow:
				0 -3em 0 -1em,
				2em -2em 0 -1em,
				3em 0 0 -1em,
				2em 2em 0 -1em,
				0 3em 0 0,
				-2em 2em 0 0.2em,
				-3em 0 0 0,
				-2em -2em 0 -1em;
		}
		75% {
			box-shadow:
				0em -3em 0 -1em,
				2em -2em 0 -1em,
				3em 0em 0 -1em,
				2em 2em 0 -1em,
				0 3em 0 -1em,
				-2em 2em 0 0,
				-3em 0em 0 0.2em,
				-2em -2em 0 0;
		}
		87.5% {
			box-shadow:
				0em -3em 0 0,
				2em -2em 0 -1em,
				3em 0 0 -1em,
				2em 2em 0 -1em,
				0 3em 0 -1em,
				-2em 2em 0 0,
				-3em 0em 0 0,
				-2em -2em 0 0.2em;
		}
	}
</style>
