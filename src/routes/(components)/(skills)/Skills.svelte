<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import { t } from '$lib/translations';

	import skills from './skills';
	import SkillBox from './SkillBox.svelte';
	$: ({ css, frameworks, languages, tools, libraries } = skills);
</script>

<Section className="flex items-center justify-center flex-col" id="skills">
	<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
		{$t('skills.title')}
	</h1>

	<SkillBox list={css} />
	<SkillBox list={frameworks} />
	<SkillBox list={libraries} />
	<SkillBox list={languages} />
	<SkillBox list={tools} />
</Section>
