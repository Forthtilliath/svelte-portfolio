<script lang="ts">
	export let size = 24;
	export let color:[string, string] = ['#000000', '#f2f2f2'];
	let className: string | undefined = undefined;
	export { className as class };

	$: sizePx = `${size}px`;
	$: [color1, color2] = Array.isArray(color) ? color : [color, color];
</script>

<svg width={sizePx} height={sizePx} style:background={color2} viewBox="0 0 1606 1606" class={className}>
	<g transform="translate(0,1606) scale(0.1,-0.1)" fill={color1} stroke="none">
		<path
			d="M0 8030 l0 -8030 8030 0 8030 0 0 8030 0 8030 -8030 0 -8030 0 0 -8030z m10770 3547 c70 -26 151 -102 187 -176 24 -49 28 -68 28 -146 0 -63 -6 -105 -19 -140 -17 -45 -307 -339 -2985 -3018 -2514 -2516 -2974 -2972 -3021 -2995 -48 -24 -67 -27 -150 -27 -83 0 -102 3 -151 28 -63 30 -136 103 -168 164 -27 55 -41 146 -31 210 20 123 -166 -69 3008 3106 2415 2415 2966 2962 3009 2983 95 47 187 50 293 11z m632 -3380 c62 -30 135 -103 167 -164 46 -91 45 -220 -3 -317 -20 -41 -335 -360 -1608 -1632 -1539 -1538 -1585 -1582 -1643 -1604 -176 -65 -371 13 -452 179 -24 49 -28 68 -28 146 0 167 -157 -5 1619 1773 869 871 1596 1592 1614 1604 90 56 236 63 334 15z"
		/>
	</g>
</svg>
