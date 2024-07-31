import { PluginCreator, PluginAPI, CSSRuleObject, Theme } from './types';

const PREFIX = '--tw-stars' as const;

type VarName<T extends string> = `--tw-stars-${T}`;
type ThemeShadows = Record<string, Record<'shadow' | 'size' | 'duration', string>>;
type Shadow = Record<VarName<keyof ThemeShadows>, string>;

export function animStars(height: number = 2000): PluginCreator {
	return function ({ matchUtilities, addUtilities, addBase, e }) {
		/**
		 * Add stars which add base rules for stars animation
		 * Add 3 variants of stars :
		 * - small : a lot with 1px size
		 * - medium : a lot with 3px size
		 */

		addBase({
			'@defaults anim-stars': {
				[varname('shadow')]: '',
				[varname('size')]: '',
				[varname('duration')]: ''
			}
		});

		addUtilities([
			{
				'@keyframes animStar': {
					from: { transform: 'translateY(0px)' },
					to: { transform: 'translateY(-100dvh)' }
				},
				'.stars': {
					'@defaults anim-stars': {},
					width: varcss('size'),
					height: varcss('size'),
					'border-radius': '100%',
					'box-shadow': varcss('shadow'),
					animation: `animStar ${varcss('duration')} linear infinite`
				}
			}
		]);

		// const spacings = generateSpacingsUtility(theme('spacing'), e);
		// addUtilities(spacings);

		const shadows = generateShadowsUtility(height, e);
		addUtilities(shadows);

		const themeDurations = {};
		for (let i = 25; i <= 200; i += 25) {
			themeDurations[i.toString()] = `${i}s`;
		}

		const durations = generateDurationsUtility(themeDurations, e);
		addUtilities(durations);

		matchUtilities({
			'stars-duration': (value) => ({ [varname('duration')]: value })
		});
	};
}

/**
 * Returns a string with a prefix and the given name.
 *
 * @param {T} name - The name to be prefixed.
 *
 * @example
 * ```ts
 * const PREFIX = '--tw-stars' as const;
 *
 * varname('shadow'); // --tw-stars-shadow
 * varname('size'); // --tw-stars-size
 * ```
 */
function varname<T extends string>(name: T) {
	return `${PREFIX}-${name}` as const;
}

/**
 * Returns a CSS variable reference as a string.
 *
 * @param {T} name - The name of the CSS variable.
 *
 * @example
 * ```ts
 * const PREFIX = '--tw-stars' as const;
 *
 * varcss('shadow'); // var(--tw-stars-shadow)
 * varcss('size'); // var(--tw-stars-size)
 * ```
 */
function varcss<T extends string>(name: T) {
	return `var(${varname(name)})` as const;
}

function random(n: number) {
	return Math.floor(Math.random() * n) + 1;
}

/**
 * Generates a utility object for CSS classes based on the theme spacings.
 *
 * @param {Theme} themeSpacings - The theme spacings object.
 * @param {PluginAPI['e']} e - The function for escaping CSS classes.
 * @return {CSSRuleObject>} - The utility object for CSS classes.
 *
 * @example
 * ```ts
 * const spacings = generateSpacingsUtility(theme('spacing'), e);
 * addUtilities(spacings);
 * ```
 */
function generateSpacingsUtility(
	themeSpacings: PluginAPI['theme'],
	e: PluginAPI['e']
): CSSRuleObject {
	return Object.keys(themeSpacings).reduce<CSSRuleObject>((acc, key) => {
		return {
			...acc,
			[`.stars-${e(key)}`]: {
				[varname('size')]: themeSpacings[key]
			}
		};
	}, {});
}

/**
 * Generates a utility object for CSS classes based on the theme shadows and height.
 *
 * @param {number} height - The height of the shadow.
 * @param {function} [e=(key: string) => key] - The function for escaping CSS classes. Defaults to the identity function.
 * @return {CSSRuleObject} - The utility object for CSS classes.
 *
 * @example
 * ```ts
 * const shadows = generateShadownsUtility(2000, e);
 * addUtilities(shadows);
 * ```
 */
function generateShadowsUtility(height: number, e: PluginAPI['e']): Record<string, Shadow> {
	function generateBoxShadow(pop: number, height: number) {
		let value = `${random(height)}px ${random(height)}px #fff`;

		for (let i = 2; i < Math.round(height / pop); i++) {
			value += `, ${random(height)}px ${random(height)}px #fff`;
		}
		return value;
	}

	const themeShadows: ThemeShadows = {
		small: {
			shadow: generateBoxShadow(3, height),
			size: '1px',
			duration: '50s'
		},
		medium: {
			shadow: generateBoxShadow(10, height),
			size: '2px',
			duration: '100s'
		},
		big: {
			shadow: generateBoxShadow(20, height),
			size: '3px',
			duration: '150s'
		}
	};

	return Object.keys(themeShadows).reduce<Record<string, Shadow>>((acc, key) => {
		return {
			...acc,
			[`.stars-shadow-${e(key)}`]: {
				[varname('shadow')]: themeShadows[key]['shadow'],
				[varname('size')]: themeShadows[key]['size'],
				[varname('duration')]: themeShadows[key]['duration']
			}
		};
	}, {});
}

/**
 * Generates a utility object for CSS classes based on the theme durations.
 *
 * @param {Record<string, string>} themeDurations - The theme durations object.
 * @param {PluginAPI['e']} e - The function for escaping CSS classes.
 *
 * @example
 * ```ts
 * const durations = generateDurationsUtility(themeDurations, e);
 * addUtilities(durations);
 * ```
 */
function generateDurationsUtility(
	themeDurations: Record<string, string>,
	e: PluginAPI['e']
): CSSRuleObject {
	return Object.keys(themeDurations).reduce<CSSRuleObject>((acc, key) => {
		return {
			...acc,
			[`.stars-duration-${e(key)}`]: {
				[varname('duration')]: themeDurations[key]
			}
		};
	}, {});
}
