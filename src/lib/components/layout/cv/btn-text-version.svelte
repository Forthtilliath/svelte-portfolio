<script lang="ts">
	interface Props {
		href: string;
	}

	let { href }: Props = $props();
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href is already built with resolve() by the caller -->
<a class="btn-text-version" {href} data-sveltekit-preload-data="off">Version texte (ATS)</a>

<style lang="scss">
	.btn-text-version {
		position: absolute;
		top: 5.5rem;
		right: 1rem;
		font-size: 0.75rem;
		color: var(--color-white);
		background: rgba(0, 0, 0, 0.55);
		padding: 0.35rem 0.6rem;
		border-radius: 4px;
		text-decoration: underline;
		opacity: 0.8;

		&:hover {
			opacity: 1;
		}

		@media print {
			display: none;
		}
	}
</style>
