<script lang="ts">
	import Fr from '$lib/components/shared/icons/flags/FR.svelte';
	import Gb from '$lib/components/shared/icons/flags/GB.svelte';
	import { t, locale } from '$lib/translations';
</script>

<header
	class="fixed top-0 z-20 flex w-full items-center bg-app-black/80 p-4 shadow-sm shadow-white backdrop-blur-sm"
>
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between">
		<a href="#hero" class="text-xl font-extrabold text-white transition-colors hover:text-app-blue">
			{$t('header.title')}
		</a>

		<menu class="hidden flex-1 list-none items-center justify-end gap-x-8 sm:flex">
			<li class="font-poppins cursor-pointer text-base font-medium transition hover:text-app-blue">
				<a href="#about">{$t('header.about')}</a>
			</li>
			<li class="font-poppins cursor-pointer text-base font-medium transition hover:text-app-blue">
				<a href="#skills">{$t('header.skills')}</a>
			</li>
			<li class="font-poppins cursor-pointer text-base font-medium transition hover:text-app-blue">
				<a href="#projects">{$t('header.projects')}</a>
			</li>
			<li class="font-poppins cursor-pointer text-base font-medium transition hover:text-app-blue">
				<a href="#contact">{$t('header.contact')}</a>
			</li>
			<li class="font-poppins flex cursor-pointer text-base font-medium transition">
				{#if $locale === 'en'}
					<button class="hover:scale-125 transition-transform" on:click={() => ($locale = 'fr')}>
						<Fr size={36} />
						<span class="sr-only">{$t('header.language', { lang: 'french' })}</span>
					</button>
				{:else}
					<button class="hover:scale-125 transition-transform" on:click={() => ($locale = 'en')}>
						<Gb size={36} />
						<span class="sr-only">{$t('header.language', { lang: 'anglais' })}</span>
					</button>
				{/if}
			</li>
		</menu>
	</div>
</header>
