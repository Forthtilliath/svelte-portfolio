<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';

	export let template: 'dev' | 'resto';
</script>

<SidebarCard aria-label="compétences">
	<header class="card-title">
		<span>Compétences</span>
	</header>

	{#if template === 'dev'}
		<ul class="card-content" role="list">
			<!-- Frameworks Frontend -->
			<li>JavaScript 🔸 TypeScript</li>
			<li>React 🔸 SolidJS 🔸 Svelte v4 & v5</li>
			<!-- Frameworks Fullstack -->
			<li>Next.js 🔸 Sveltekit</li>
			<!-- Styling -->
			<li>SASS 🔸 Tailwind CSS v3 & v4</li>
			<!-- UI & Components -->
			<li>Shadcn UI 🔸 Storybook</li>
			<!-- Tests -->
			<li>Vitest 🔸 Cypress</li>
			<!-- Backend -->
			<li>Prisma 🔸 Supabase</li>
			<li>Node.js 🔸 Express</li>
			<!-- Utils -->
			<li>Zod 🔸 Zustand 🔸 Stripe 🔸 i18next</li>
			<!-- Version Control -->
			<li>Git 🔸 GitHub</li>
		</ul>
	{:else if template === 'resto'}
		<ul class="card-content" role="list">
			<li>Respect des règles d'hygiène</li>
			<li>Respect des règles de sécurité</li>
			<li>Esprit d'équipe</li>
			<li>Sens de l'organisation</li>
			<li>Sens de l'hospitalité</li>
			<li>Polyvalent</li>
			<li>Endurant</li>
			<li>Adaptabilité</li>
		</ul>
	{/if}
</SidebarCard>

<style lang="scss">
	.card-title {
		// margin-top: 1.5rem;
		margin-left: 1rem;

		text-transform: uppercase;
		text-align: right;
		font-family: var(--font-header);
		font-size: var(--sidebar-title-fontsize);
		font-weight: 600;

		// background
		position: relative;
		z-index: 1;

		&::before {
			position: absolute;
			content: '';
			border-top: 5px solid var(--sidebar-line-color);
			top: 40%;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			z-index: -1;
		}

		span {
			/* to hide the lines from behind the text, you have to set the background color the same as the container */
			background: var(--sidebar-bg);
			padding-inline: 1rem;
		}
	}

	.card-content {
		padding-top: var(--sidebar-content-spacing);
		li {
			text-align: end;
			font-size: 1.2em;
			margin-inline: 1rem;
			line-height: 1.5em;
		}
	}
</style>
