<script lang="ts">
	import Fr from '$lib/components/shared/icons/flags/fr.svelte';
	import Gb from '$lib/components/shared/icons/flags/gb.svelte';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';
	import { t, locale, setLocale } from '$lib/translations';

	let mobileOpen = $state(false);
	const close = () => (mobileOpen = false);
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape') mobileOpen = false;
	}}
/>

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

		<nav class="flex items-center md:flex-1" aria-label={$t('header.nav')}>
			<button
				type="button"
				class="hover:text-app-blue text-white transition-colors md:hidden"
				aria-expanded={mobileOpen}
				aria-controls="primary-menu"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<span class="sr-only">{$t('header.nav')}</span>
				{#if mobileOpen}
					<XIcon size={28} />
				{:else}
					<MenuIcon size={28} />
				{/if}
			</button>

			<menu
				id="primary-menu"
				class={[
					'font-poppins m-0 list-none',
					'md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-end md:gap-x-8 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none',
					mobileOpen
						? 'bg-app-black/95 absolute inset-x-0 top-full flex flex-col gap-y-4 border-t border-white/10 p-6 backdrop-blur-sm'
						: 'hidden'
				]}
			>
				<li class="hover:text-app-blue cursor-pointer text-base font-medium transition">
					<a href="#about" onclick={close}>{$t('header.about')}</a>
				</li>
				<li class="hover:text-app-blue cursor-pointer text-base font-medium transition">
					<a href="#skills" onclick={close}>{$t('header.skills')}</a>
				</li>
				<li class="hover:text-app-blue cursor-pointer text-base font-medium transition">
					<a href="#projects" onclick={close}>{$t('header.projects')}</a>
				</li>
				<li class="hover:text-app-blue cursor-pointer text-base font-medium transition">
					<a href="#contact" onclick={close}>{$t('header.contact')}</a>
				</li>
				<li class="flex cursor-pointer text-base font-medium transition">
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
