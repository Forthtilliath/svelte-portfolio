<script lang="ts">
	import Fr from '$lib/components/shared/icons/flags/fr.svelte';
	import Gb from '$lib/components/shared/icons/flags/gb.svelte';
	import { t, locale } from '$lib/translations';
</script>

<header
	class="bg-app-black/80 fixed top-0 z-20 flex w-full items-center p-4 shadow-sm shadow-white backdrop-blur-sm"
>
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between">
		<a
			href="#hero"
			class="hover:text-app-blue h-9 text-xl font-extrabold text-white transition-colors"
		>
			{$t('header.title')}
		</a>

		<menu class="hidden flex-1 list-none items-center justify-end gap-x-8 md:flex">
			<li class="font-poppins hover:text-app-blue cursor-pointer text-base font-medium transition">
				<a href="#about">{$t('header.about')}</a>
			</li>
			<li class="font-poppins hover:text-app-blue cursor-pointer text-base font-medium transition">
				<a href="#skills">{$t('header.skills')}</a>
			</li>
			<li class="font-poppins hover:text-app-blue cursor-pointer text-base font-medium transition">
				<a href="#projects">{$t('header.projects')}</a>
			</li>
			<li class="font-poppins hover:text-app-blue cursor-pointer text-base font-medium transition">
				<a href="#contact">{$t('header.contact')}</a>
			</li>
			<li class="font-poppins flex cursor-pointer text-base font-medium transition">
				{#if $locale === 'en'}
					<button class="transition-transform hover:scale-125" onclick={() => ($locale = 'fr')}>
						<Fr size={36} />
						<span class="sr-only">{$t('header.language', { lang: 'french' })}</span>
					</button>
				{:else}
					<button class="transition-transform hover:scale-125" onclick={() => ($locale = 'en')}>
						<Gb size={36} />
						<span class="sr-only">{$t('header.language', { lang: 'anglais' })}</span>
					</button>
				{/if}
			</li>
		</menu>
	</div>
</header>
