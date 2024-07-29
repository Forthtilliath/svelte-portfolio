<script lang="ts">
	import Cv from '../shared/icons/networks/cv.svelte';
	
	import logo from '$lib/assets/logo.png';

	import { t } from '$lib/translations';
</script>

<footer>
	<div class="bg-gray-100">
		<div class="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
			<a
				class="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
				href="/"
			>
				<img src={logo} alt="Logo" class="h-8 w-8" />
				<span class="ml-3 text-xl">{$t('meta.title')}</span>
			</a>
			<p class="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
				© 2024 —
				<a
					href="https://github.com/Forthtilliath"
					rel="noopener noreferrer"
					class="ml-1 text-gray-600"
					target="_blank">@forthtilliath</a
				>
			</p>
			<span class="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
				<a class="ml-3 text-gray-500" href="https://cv-vincent-lisita.vercel.app/">
					<Cv />
					<span class="sr-only">Curriculum Vitae</span>
				</a>
				<a class="ml-3 text-gray-500" href="https://cv-vincent-lisita.vercel.app/">
					<Cv />
					<span class="sr-only">Curriculum Vitae</span>
				</a>
				<a class="ml-3 text-gray-500" href="https://cv-vincent-lisita.vercel.app/">
					<Cv />
					<span class="sr-only">Curriculum Vitae</span>
				</a>
			</span>
		</div>
	</div>
</footer>
