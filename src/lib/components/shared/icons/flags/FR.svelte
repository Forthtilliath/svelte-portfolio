<script lang="ts">
	export let size = 24;

	$: sizePx = `${size}px`;
	const [color1, color2, color3] = ['#001e96', '#fff', '#ee2436'];
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 64 64" {...$$restProps}>
	<path
		fill={color2}
		d="M56,32A24,24,0,0,1,40,54.62a23.88,23.88,0,0,1-16,0A24,24,0,0,1,24,9.38a23.88,23.88,0,0,1,16,0A24,24,0,0,1,56,32Z"
	/>
	<path fill={color1} d="M24,9.38V54.62A24,24,0,0,1,24,9.38Z" />
	<path fill={color3} d="M56,32A24,24,0,0,1,40,54.62V9.38A24,24,0,0,1,56,32Z" />
</svg>
