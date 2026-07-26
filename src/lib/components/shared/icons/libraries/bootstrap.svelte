<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#7952B3', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 32 32" class={className}>
	<rect width="32" height="32" rx="7" fill={color} />
	<text
		x="16"
		y="22"
		font-size="17"
		font-weight="700"
		font-family="Georgia, 'Times New Roman', serif"
		text-anchor="middle"
		fill="#fff">B</text
	>
</svg>
