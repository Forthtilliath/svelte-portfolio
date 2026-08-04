<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#000020', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 32 32" class={className}>
	<rect width="32" height="32" rx="7" fill={color} />
	<path d="M8 23 16 8l8 15h-4.2l-3.8-7.3L12.2 23z" fill="#fff" />
</svg>
