declare global {
	type FilterKeysByTypeValue<T extends object, TCondition> = Exclude<
		{
			[K in keyof T]: T[K] extends TCondition ? K : never;
		}[keyof T],
		undefined
	>;

	type Optional<T> = T | undefined;
	type Nullable<T> = T | null;
	type Nullish<T> = T | null | undefined;
}

export {};
