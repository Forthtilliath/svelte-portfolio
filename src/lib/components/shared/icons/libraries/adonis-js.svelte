<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#5A45FF', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 32 32" class={className}>
	<rect width="32" height="32" rx="7" fill={color} />
	<path d="M16 7 L25 25 H20.8 L16 15.2 L11.2 25 H7 Z" fill="#fff" />
</svg>
