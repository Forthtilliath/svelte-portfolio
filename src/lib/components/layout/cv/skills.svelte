<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';

	interface Props {
		template: 'dev' | 'resto';
	}

	let { template }: Props = $props();
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
