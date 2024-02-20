<script lang="ts">
	import { transposeWords } from './transposeWords';
	import FlipLetter from './FlipLetters.svelte';
	import type { Flip } from 'forth-flip-words';

	export let words: string[];
	export let size: string;
	export let options: Flip.Options = {}

	$: transposedWords = transposeWords(words);
</script>

<div class="flip-wrapper">
	{#each transposedWords as letters, nth}
		<FlipLetter {letters} {size} {nth} {...options} />
	{/each}
</div>

<style lang="scss">
	.flip-wrapper {
		display: flex;
		gap: 10px;
	}
</style>
