<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { children, ...rest }: Props = $props();
</script>

<article class="sidebar-card" {...rest}>
	{@render children?.()}
</article>

<style lang="scss">
	.sidebar-card {
		margin-top: var(--sidebar-spacing);
	}
</style>
