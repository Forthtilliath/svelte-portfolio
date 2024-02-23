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

	<SkillBox title="Frameworks" list={frameworks} />
	<SkillBox title="CSS" list={css} />
	<SkillBox title="Libraries" list={libraries} />
	<SkillBox title="Languages" list={languages} />
	<SkillBox title="Tools" list={tools} />
</Section>
