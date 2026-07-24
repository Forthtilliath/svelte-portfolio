<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		className?: string;
		children?: import('svelte').Snippet;
	}

	let { className = '', children }: Props = $props();
</script>

<h1 class={cn('text-app-blue mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
	{@render children?.()}
</h1>
