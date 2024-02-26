declare module 'forth-flip-words' {
	export namespace Flip {
		type OtherOptions = {
			translateY?: string;
			colors?: [string, string, string, string];
			duration?: string;
			classNames?: {
				wrapper?: string;
				face?: string | [string, string, string, string];
			}
		};

		type OptionsWithDelay = {
			delay: string;
			delayFn?: never;
		} & OtherOptions;

		type OptionsWithDelayFn = {
			delay?: never;
			delayFn: (i: number) => string;
		} & OtherOptions;

		type Options = OptionsWithDelay | OptionsWithDelayFn;
	}
}
