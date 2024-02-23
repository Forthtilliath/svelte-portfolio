<script lang="ts">
	export let size = 24;
	export let color: [string, string] = ['#000000', '#fff'];

	$: sizePx = `${size}px`;
	$: [color1, color2] = Array.isArray(color) ? color : [color, color];
</script>

<svg style:width={sizePx} style:height={sizePx} viewBox="0 0 256 256">
	<defs>
		<circle id="next-path-1" cx="128" cy="128" r="128" />
		<linearGradient
			x1="55.6325605%"
			y1="56.3850422%"
			x2="83.2279093%"
			y2="96.0801119%"
			id="next-gradient-3"
		>
			<stop stop-color={color2} offset="0%" />
			<stop stop-color={color2} stop-opacity="0" offset="100%" />
		</linearGradient>
		<linearGradient x1="50%" y1="0%" x2="49.9534722%" y2="73.4375%" id="next-gradient-4">
			<stop stop-color={color2} offset="0%" />
			<stop stop-color={color2} stop-opacity="0" offset="100%" />
		</linearGradient>
	</defs>
	<g>
		<mask id="next-mask-2" fill="white">
			<use xlink:href="#next-path-1" />
		</mask>
		<g mask="url(#next-mask-2)">
			<circle fill={color1} cx="128" cy="128" r="128" />
			<path
				d="M212.6336,224.028444 L98.3352889,76.8 L76.8,76.8 L76.8,179.157333 L94.0282311,179.157333 L94.0282311,98.6788978 L199.109689,234.446222 C203.851378,231.273244 208.368356,227.790222 212.6336,224.028444 Z"
				fill="url(#next-gradient-3)"
			/>
			<rect
				fill="url(#next-gradient-4)"
				x="163.555556"
				y="76.8"
				width="17.0666667"
				height="102.4"
			/>
		</g>
	</g>
</svg>
