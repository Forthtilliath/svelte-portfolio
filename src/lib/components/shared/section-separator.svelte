<script lang="ts">
	import { cn } from '$lib/utils';

	type $$Props = {
		className?: string;
		/** Height of the section */
		height?: string;
		/** Image to display in background */
		img: string;
		/** Value between 0 and 100 */
		filter?: number;
	};

	export let className: string = '';
	export let height = '100px';
	export let img: string;
	export let filter = 70;
</script>

<section class={cn(className)} style="--height: {height}; --img: url({img});">
	{#if filter}
		<div class="inner" style="--opacity: {filter / 100};" />
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
