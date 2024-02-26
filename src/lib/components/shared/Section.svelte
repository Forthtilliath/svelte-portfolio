<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string = '';
	export let id: string;
</script>

<section class={cn('container', className)} {id}>
	<slot />
</section>

<style>
	section {
		padding: 1rem;
		min-height: 100dvh;
	}
</style>
