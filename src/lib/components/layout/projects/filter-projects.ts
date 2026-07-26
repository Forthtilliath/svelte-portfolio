import type { Framework } from '$lib/components/layout/skills';
import type { Project } from './projects';

export function filterProjectsByFrameworks(
	projects: Project[],
	frameworks: Framework[]
): Project[] {
	return projects.filter(
		(project) => frameworks.length === 0 || frameworks.some((f) => project.tags.includes(f))
	);
}
