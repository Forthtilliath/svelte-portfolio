<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		className?: string;
		/** Height of the section */
		height?: string;
		/** Image to display in background */
		img: string;
		/** Value between 0 and 100 */
		filter?: number;
	}

	let { className = '', height = '100px', img, filter = 70 }: Props = $props();
</script>

<section class={cn(className)} style="--height: {height}; --img: url({img});">
	{#if filter}
		<div class="inner" style="--opacity: {filter / 100};"></div>
	{/if}
</section>

<style>
	section {
		height: var(--height);

		background: var(--img);
		background-size: cover;
		background-position: center center;
		background-attachment: fixed;
	}

	.inner {
		background: rgba(0, 0, 0, var(--opacity))
			url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAD0lEQVQIW2NkQABjRmQOAAM+AGkQsDBSAAAAAElFTkSuQmCC)
			repeat;

		min-height: var(--height);
	}
</style>
