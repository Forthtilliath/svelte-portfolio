<script lang="ts">
	export let size = 24;
	export let color: string | [string, string] = ['#dd4c35', '#ffffff'];
	let className: string | undefined = undefined;
	export { className as class };

	$: sizePx = `${size}px`;
	$: [color1, color2] = Array.isArray(color) ? color : [color, color];
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 32 32" class={className}>
	<path
		d="M29.472,14.753,17.247,2.528a1.8,1.8,0,0,0-2.55,0L12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314,2.528,14.7a1.8,1.8,0,0,0,0,2.551L14.753,29.472a1.8,1.8,0,0,0,2.55,0L29.472,17.3a1.8,1.8,0,0,0,0-2.551"
		fill={color1}
	/>
	<path
		d="M12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314"
		fill={color2}
	/>
</svg>
