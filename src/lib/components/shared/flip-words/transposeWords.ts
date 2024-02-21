export function transposeWords(arr: string[]): string[][] {
	const largerWord = arr.reduce((max, word) => Math.max(max, word.length), 0);
	const wordsWithSameLength = arr.map((word) => word + ' '.repeat(largerWord - word.length));
	return wordsWithSameLength[0].split('').map((_, i) => wordsWithSameLength.map((row) => row[i]));
}
