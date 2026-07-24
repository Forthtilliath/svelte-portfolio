<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		className?: string;
		id: string;
		children?: import('svelte').Snippet;
	}

	let { className = '', id, children }: Props = $props();
</script>

<section class={cn('container min-h-[calc(100dvh-4rem)] py-12', className)} {id}>
	{@render children?.()}
</section>
