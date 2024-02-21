<script lang="ts">
	import { t } from '$lib/translations';
</script>

<header
	class="fixed top-0 z-20 flex w-full items-center bg-app-black/80 p-4 shadow-sm shadow-white backdrop-blur-sm"
>
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between">
		<a href="#hero" class="text-lg font-semibold text-white transition hover:text-app-blue">
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
		</menu>
	</div>
</header>
