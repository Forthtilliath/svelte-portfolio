<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#61DAFB', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 32 32" class={className}>
	<circle cx="16" cy="16" r="2.2" fill={color} />
	<g fill="none" stroke={color} stroke-width="1.4">
		<ellipse cx="16" cy="16" rx="11" ry="4.3" />
		<ellipse cx="16" cy="16" rx="11" ry="4.3" transform="rotate(60 16 16)" />
		<ellipse cx="16" cy="16" rx="11" ry="4.3" transform="rotate(120 16 16)" />
	</g>
</svg>
