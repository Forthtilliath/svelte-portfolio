<script lang="ts">
	export let filename: string;
</script>

<a
	class="btn-print"
	href="/cv/{filename}.pdf"
	target="_blank"
	rel="noopener noreferrer"
	download="cv-vincent-lisita-{filename}.pdf"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		shape-rendering="geometricPrecision"
		text-rendering="geometricPrecision"
		image-rendering="optimizeQuality"
		fill-rule="evenodd"
		clip-rule="evenodd"
		viewBox="0 0 421 511.605"
	>
		<path
			fill="#E44B4D"
			d="M95.705.014h199.094L421 136.548v317.555c0 31.54-25.961 57.502-57.502 57.502H95.705c-31.55 0-57.502-25.873-57.502-57.502V57.515C38.203 25.886 64.076.014 95.705.014z"
		/>
		<path
			fill="#CD4445"
			d="M341.028 133.408h-.019L421 188.771v-52.066h-54.357c-9.458-.15-17.998-1.274-25.615-3.297z"
		/>
		<path
			fill="#FBCFD0"
			d="M294.8 0L421 136.533v.172h-54.357c-45.068-.718-69.33-23.397-71.843-61.384V0z"
		/>
		<path
			fill="#CD4445"
			fill-rule="nonzero"
			d="M0 431.901V253.404l.028-1.261c.668-16.446 14.333-29.706 30.936-29.706h7.238v50.589h342.975c12.862 0 23.373 10.51 23.373 23.371v135.504c0 12.83-10.543 23.373-23.373 23.373H23.373C10.541 455.274 0 444.75 0 431.901z"
		/>
		<path
			fill="#963232"
			fill-rule="nonzero"
			d="M143.448 240.364a8.496 8.496 0 01-8.496-8.497 8.496 8.496 0 018.496-8.497h163.176a8.496 8.496 0 018.496 8.497 8.496 8.496 0 01-8.496 8.497H143.448zm0-59.176a8.496 8.496 0 010-16.993h172.304a8.496 8.496 0 110 16.993H143.448z"
		/>
		<path
			fill="#fff"
			fill-rule="nonzero"
			d="M11.329 276.171v154.728c0 7.793 6.38 14.178 14.179 14.178h354.667c7.799 0 14.178-6.379 14.178-14.178V297.405c0-7.798-6.388-14.178-14.178-14.178H37.892c-12.618-.096-19.586-1.638-26.563-7.056z"
		/>
		<path
			fill="#1A1A1A"
			fill-rule="nonzero"
			d="M136.343 381.787h-17.035v19.785H93.103v-81.894h41.274c18.782 0 28.171 10.09 28.171 30.269 0 11.094-2.445 19.306-7.336 24.634-1.835 2.008-4.367 3.712-7.6 5.11-3.233 1.396-6.988 2.096-11.269 2.096zm-17.035-41.144v20.179h6.029c3.145 0 5.438-.327 6.878-.982 1.443-.656 2.162-2.162 2.162-4.522v-9.171c0-2.359-.719-3.866-2.162-4.521-1.44-.655-3.733-.983-6.878-.983h-6.029zm53.069 60.929v-81.894h36.689c14.762 0 24.895 3.145 30.399 9.435 5.502 6.289 8.255 16.794 8.255 31.512 0 14.72-2.753 25.223-8.255 31.513-5.504 6.29-15.637 9.434-30.399 9.434h-36.689zm37.083-60.929h-10.878v39.965h10.878c3.581 0 6.178-.416 7.794-1.244 1.616-.831 2.426-2.732 2.426-5.701v-26.075c0-2.969-.81-4.87-2.426-5.699-1.616-.83-4.213-1.246-7.794-1.246zm97.879 30.53h-22.277v30.399h-26.206v-81.894h53.724l-3.276 20.965h-24.242v11.008h22.277v19.522z"
		/>
	</svg>
</a>

<style lang="scss">
	.btn-print {
		all: unset;
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 4rem;
		height: 4rem;
		cursor: pointer;
		opacity: 0.8;

		&:hover {
			opacity: 1;
		}

		@media print {
			display: none;
		}

		svg {
			width: 100%;
			height: 100%;
		}
	}
</style>
