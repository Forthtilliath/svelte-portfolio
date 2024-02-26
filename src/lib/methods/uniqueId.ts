const idMap = new Map<string, number>();

/**
 * Generates a unique identifier with an optional prefix.
 *
 * @param {string} prefix - An optional prefix for the unique identifier.
 * @return {string} The generated unique identifier.
 */
export function uniqueId(prefix: string = ''): string {
	const id = (idMap.get(prefix) ?? 0) + 1;
	idMap.set(prefix, id);
	return prefix + id;
}
