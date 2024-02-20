declare module 'forth-flip-words' {
	export namespace Flip {
		type OptionsDelay =
			| {
					delay: string;
					delayFn?: undefined;
			  }
			| {
					delay?: undefined;
					delayFn: (i: number) => string;
			  }
			| {
					delay?: undefined;
					delayFn?: undefined;
			  };
		type Options = {
			translateY?: string;
			colors?: string[];
		} & OptionsDelay;
	}
}
