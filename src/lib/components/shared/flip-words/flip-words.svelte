<script lang="ts">
	import { transposeWords } from './transposeWords';
	import FlipDice from './flip-dice.svelte';
	import type { Flip } from 'forth-flip-words';
	import { cn } from '$lib/utils';

	export let words: [string, string, string, string];
	export let size: string;
	export let options: Flip.Options = {
		delay: '0s',
		classNames: {
			wrapper: '',
			face: ''
		}
	};

	$: transposedWords = transposeWords(words);
	$: className = options?.classNames?.wrapper;
</script>

<!--
@component
This component is a wrapper around the `FlipDice` component.
You can display 4 words with a letter per dice.

```tsx
<FlipWords
	words={['react', 'nextjs', 'solidjs', 'svelte']}
	size="100px"
	options={{
		translateY: '-4px',
		delayFn: (i) => `${(i * 0.2).toFixed(1)}s`,
		colors: ['#149eca', '#000000', '#3a5577', '#f96743'],
		duration: '12s'
	}}
/>
```
-->
<div class={cn("flip-wrapper", className)}>
	{#each transposedWords as letters, nth}
		<FlipDice {letters} {size} {nth} {...options} />
	{/each}
</div>

<style lang="scss">
	.flip-wrapper {
		display: flex;
		gap: 10px;
	}
</style>
