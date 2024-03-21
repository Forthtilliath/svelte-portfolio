export function sortStrings(a: string, b: string): number {
	return a.localeCompare(b);
}

export function sortStringsByKey<T extends object>(key: FilterKeysByTypeValue<T, string>) {
	return (a: T, b: T): number => sortStrings(a[key] as string, b[key] as string);
}
