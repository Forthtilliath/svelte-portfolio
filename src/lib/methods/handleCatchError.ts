/**
 * Handle an error with a default message.
 *
 * If the error is an instance of Error, it will log the error message to the console and do nothing.
 * Otherwise, it will log the default message to the console.
 *
 * @param {unknown} error The error to handle
 * @param {string} [defaultMessage="Unknown error"] The default message to log if the error is not an instance of Error
 */
export function handleCatchError(error: unknown, defaultMessage: string = 'Unknown error'): void {
	if (error instanceof Error) {
		console.error(error.message);
		return;
	}
	console.error(defaultMessage);
}

/**
 * Handle error with a callback and log the error message to the console.
 *
 * @template T Type of the return value
 * @param {unknown} error The error to handle
 * @returns {(callback: (err: string) => T, defaultMessage?: string) => T} Callback to handle the error
 */
export function handleCatchErrorWithCallback<T>(
	error: unknown
): (callback: (err: string) => T, defaultMessage?: string) => T {
	return function (callback: (err: string) => T, defaultMessage: string = 'Unknown error'): T {
		if (error instanceof Error) {
			console.error(error.message);
			return callback(error.message);
		}

		return callback(defaultMessage);
	};
}
