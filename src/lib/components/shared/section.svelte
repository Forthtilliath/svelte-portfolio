<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string = '';
	export let id: string;
</script>

<section class={cn('container p-4 pb-12 min-h-[calc(100dvh-4rem)]', className)} {id}>
	<slot />
</section>