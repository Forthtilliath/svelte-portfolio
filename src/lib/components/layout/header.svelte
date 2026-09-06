<script lang="ts">
	import Fr from '$lib/components/shared/icons/flags/fr.svelte';
	import Gb from '$lib/components/shared/icons/flags/gb.svelte';
	import { t, locale, setLocale } from '$lib/translations';
</script>

<a
	href="#main-content"
	class="focus:bg-app-black focus:ring-app-blue sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:text-white focus:ring-1"
>
	{$t('header.skipToContent')}
</a>

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

		<nav class="flex-1" aria-label={$t('header.nav')}>
			<menu class="hidden list-none items-center justify-end gap-x-8 md:flex">
				<li
					class="font-poppins hover:text-app-blue cursor-pointer text-base font-medium transition"
				>
					<a href="#about">{$t('header.about')}</a>
				</li>
				<li
					class="font-poppins hover:text-app-blue cursor-pointer text-base font-medium transition"
				>
					<a href="#skills">{$t('header.skills')}</a>
				</li>
				<li
					class="font-poppins hover:text-app-blue cursor-pointer text-base font-medium transition"
				>
					<a href="#projects">{$t('header.projects')}</a>
				</li>
				<li
					class="font-poppins hover:text-app-blue cursor-pointer text-base font-medium transition"
				>
					<a href="#contact">{$t('header.contact')}</a>
				</li>
				<li class="font-poppins flex cursor-pointer text-base font-medium transition">
					{#if $locale === 'en'}
						<button class="transition-transform hover:scale-125" onclick={() => setLocale('fr')}>
							<Fr size={36} />
							<span class="sr-only">{$t('header.language', { lang: $t('header.french') })}</span>
						</button>
					{:else}
						<button class="transition-transform hover:scale-125" onclick={() => setLocale('en')}>
							<Gb size={36} />
							<span class="sr-only">{$t('header.language', { lang: $t('header.english') })}</span>
						</button>
					{/if}
				</li>
			</menu>
		</nav>
	</div>
</header>
