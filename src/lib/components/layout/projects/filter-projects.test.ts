import { describe, expect, it } from 'vitest';
import { filterProjectsByFrameworks } from './filter-projects';
import type { Project } from './projects';

function makeProject(name: string, tags: Project['tags']): Project {
	return {
		name: { fr: name, en: name },
		description: { fr: '', en: '' },
		tags,
		repo: `https://github.com/Forthtilliath/${name}`
	};
}

const react = makeProject('react-project', ['React', 'Tailwind']);
const svelte = makeProject('svelte-project', ['Sveltekit', 'Typescript']);
const both = makeProject('full-stack-project', ['React', 'Sveltekit', 'Zod']);

const allProjects = [react, svelte, both];

describe('filterProjectsByFrameworks', () => {
	it('returns every project when no framework is selected', () => {
		expect(filterProjectsByFrameworks(allProjects, [])).toEqual(allProjects);
	});

	it('returns only projects matching the selected framework', () => {
		expect(filterProjectsByFrameworks(allProjects, ['React'])).toEqual([react, both]);
	});

	it('acts as an union (OR) when several frameworks are selected', () => {
		expect(filterProjectsByFrameworks(allProjects, ['React', 'Sveltekit'])).toEqual([
			react,
			svelte,
			both
		]);
	});

	it('returns an empty array when no project matches', () => {
		expect(filterProjectsByFrameworks(allProjects, ['SolidJS'])).toEqual([]);
	});

	it('does not mutate the original array', () => {
		const copy = [...allProjects];
		filterProjectsByFrameworks(allProjects, ['React']);
		expect(allProjects).toEqual(copy);
	});
});
