<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string = '';
</script>

<section class={cn('container', className)}>
	<slot />
</section>

<style>
	section {
		padding: 1rem;
		height: 100dvh;
	}
</style>
