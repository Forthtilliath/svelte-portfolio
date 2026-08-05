<script lang="ts">
	import { aboutMe } from './cv-content';

	interface Props {
		template: 'react' | 'sveltekit' | 'fullstack' | 'resto';
	}

	let { template }: Props = $props();
</script>

<h3 class="aboutme-title">À propos de moi</h3>

<p class="aboutme-content {template}" aria-label="à propos de moi">
	{aboutMe[template]}
</p>

<style lang="scss">
	.aboutme-title {
		text-transform: uppercase;
		text-decoration: underline;
		text-align: center;
		font-family: var(--font-header);
		font-size: 2.4em;
	}

	.aboutme-content {
		font-size: 1.6em;
		text-align: center;

		&.react {
			line-height: 1.4em;
		}
		&.sveltekit {
			line-height: 1.4em;
		}
		&.resto {
			margin-top: 0.25rem;
			line-height: 1.6em;
		}
	}
</style>
