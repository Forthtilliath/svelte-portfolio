<script lang="ts">
	import Cv from '$lib/components/shared/icons/networks/cv.svelte';
	import Github from '$lib/components/shared/icons/networks/github.svelte';
	import Linkedin from '$lib/components/shared/icons/networks/linkedin.svelte';

	import logo from '$lib/assets/logo.png';

	import { t } from '$lib/translations';
</script>

<footer>
	<div class="bg-gray-100 dark:bg-app-black">
		<div class="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
			<a
				class="title-font flex items-center justify-center font-medium text-gray-900 dark:text-slate-50 md:justify-start"
				href="/"
			>
				<img src={logo} alt="Logo" class="h-8 w-8" />
				<span class="ml-3 text-xl">{$t('meta.title')}</span>
			</a>
			<p class="mt-4 text-sm text-gray-500 dark:text-slate-400 sm:ml-6 sm:mt-0">
				© 2024 —
				<a
					href="https://github.com/Forthtilliath"
					rel="noopener noreferrer"
					class="ml-1 text-gray-600 dark:text-slate-300 hover:underline"
					target="_blank">@forthtilliath</a
				>
			</p>
			<span class="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
				<a class="ml-3 text-gray-500 w-9 flex items-center justify-center" href="https://cv-vincent-lisita.vercel.app/">
					<Cv color="rgb(20 158 202)" size={29.25} />
					<span class="sr-only">Curriculum Vitae</span>
				</a>
				<a class="ml-3 text-gray-500" href="https://github.com/Forthtilliath">
					<Github size={36} />
					<span class="sr-only">Github</span>
				</a>
				<a class="ml-3 text-gray-500" href="https://cv-vincent-lisita.vercel.app/">
					<Linkedin size={36} />
					<span class="sr-only">Curriculum Vitae</span>
				</a>
			</span>
		</div>
	</div>
</footer>
