<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#4285F4', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 32 32" class={className}>
	<rect width="32" height="32" rx="7" fill={color} />
	<circle cx="16" cy="16" r="7" fill="#fff" />
	<circle cx="16" cy="16" r="3" fill={color} />
</svg>
