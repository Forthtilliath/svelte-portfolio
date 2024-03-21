declare global {
	type FilterKeysByTypeValue<T extends object, TCondition> = Exclude<
		{
			[K in keyof T]: T[K] extends TCondition ? K : never;
		}[keyof T],
		undefined
	>;
}

export {};
