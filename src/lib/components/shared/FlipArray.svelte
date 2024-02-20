<script lang="ts">
	import FlipLetter from './FlipLetters.svelte';

	export let words: string[];

	function transposeWords(arr: string[]): string[][] {
		const largerWord = arr.reduce((max, word) => Math.max(max, word.length), 0);
		const wordsWithSameLength = arr.map((word) => word + ' '.repeat(largerWord - word.length));
		return wordsWithSameLength[0].split('').map((_, i) => wordsWithSameLength.map((row) => row[i]));
	}

	$: transposedWords = transposeWords(words);
</script>

<div class="flip-wrapper">
	{#each transposedWords as letters, i}
		<FlipLetter {letters} size="100px" translateY="-4px" delay={`${i * 0.2}s`} />
	{/each}
</div>

<style lang="scss">
	.flip-wrapper {
		display: flex;
    gap: 10px;
	}
</style>
