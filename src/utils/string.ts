import { IncomingMessage } from 'http';
import { SnakeToCamel } from '@/utils/type';

/**
 * Converts a snake case string to a camel case.
 *
 * @param from - snake case string
 * @returns camel case string
 * @template T
 */
export function snakeToCamel<T extends string>(from: string): SnakeToCamel<T> {
	return from
		.split('_')
		.map((token, index) =>
			index > 0 ? token.charAt(0).toUpperCase() + token.slice(1) : token
		)
		.join('') as SnakeToCamel<T>;
}

export function padZero(value: number | string, maxLength: number) {
	return String(value).padStart(maxLength, '0');
}

/**
 * Remove HTML tags (with or without attributes) from string.
 * Similar to PHP's strip_tags but do not handle PHP tags.
 * Inspired by Twig.js: https://github.com/twigjs/twig.js/blob/071be04a7f0fa31ca313a3eebce1a275f6562308/demos/node_express/public/vendor/twig.js#L1891
 */
export function removeTags(input: string) {
	const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
	return input.replace(tags, '');
}

/**
 * Convert string to number or undefined (Router周りで使うことを想定)
 */
export function toNumeric(string: string | undefined) {
	if (!string || Number.isNaN(Number(string))) {
		return undefined;
	}
	return Number(string);
}

/** Add (`&#8203;`) after each slash in the value, excluding slashes inside HTML tags. */
export function appendZeroWidthSpaceToSlashes(value: string) {
	return value.replace(/([^<])\/([^>])/g, '$1/&#8203;$2');
}

/** Add (`&#8203;`) after each comma in the value */
export function appendZeroWidthSpaceToCommas(value: string) {
	return value.replace(/,/g, ',&#8203;');
}

/**
 * Convert readable stream to string.
 */
export const readableStreamToString = (
	readable: IncomingMessage
): Promise<string> => {
	return new Promise((resolve, reject) => {
		let data = ``;
		readable.on(`data`, chunk => {
			data += chunk;
		});
		readable.on(`end`, () => {
			resolve(data);
		});
		readable.on(`error`, error => {
			reject(error);
		});
	});
};

/**
 * Insert a backslash before characters
 */
export const escapeWithBackslash = (value: string, search: string) => {
	return value.replaceAll(search, `\\${search}`);
};

/**
 * Converts "zen-kaku" (full-width) alphabets and numbers to "han-kaku" (half-width) in a string.
 * The function replaces all occurrences of "zen-kaku" alphabets and numbers with their "han-kaku" counterparts.
 *
 * @param {string} string - The input string containing "zen-kaku" characters to be converted.
 * @returns {string} The input string with all "zen-kaku" alphabets and numbers converted to "han-kaku".
 */
export function convertZenkakuToHankaku(string: string): string {
	// Regular expression to match "zen-kaku" alphabets and numbers
	const zenkakuRegex = /[Ａ-Ｚａ-ｚ０-９]/g;

	return string.replace(zenkakuRegex, match => {
		// Get the Unicode code point of the matched "zen-kaku" character
		const code = match.charCodeAt(0);

		// Check if the character is within the range of full-width alphabets (U+FF01 to U+FF5E)
		if (code >= 0xff01 && code <= 0xff5e) {
			// Convert the "zen-kaku" alphabet to its "han-kaku" counterpart by subtracting the offset (0xfee0)
			return String.fromCharCode(code - 0xfee0);
		}

		// Check if the character is the full-width zero (U+FF10)
		if (code === 0xff10) {
			// Convert the full-width zero to the "han-kaku" zero (0)
			return '0';
		}

		// Check if the character is within the range of full-width numbers (U+FF11 to U+FF19)
		if (code >= 0xff11 && code <= 0xff19) {
			// Convert the "zen-kaku" number to its "han-kaku" counterpart by subtracting the offset (0xfee0)
			return String.fromCharCode(code - 0xfee0);
		}

		// Return the original character for characters that are not "zen-kaku" alphabets or numbers
		return match;
	});
}

/**
 * Calculates the width of a multibyte string.
 * @param {string} string - The input string to calculate the width for.
 * @returns {number} The width of the multibyte string.
 */
export function calculateMultiByteWidth(string: string) {
	let width = 0;

	for (let i = 0; i < string.length; i++) {
		// Get the code point of the current character.
		const code = string.codePointAt(i);

		// If the code point is not valid, return the current width.
		if (!code) {
			return width;
		}

		// If the character is a single-byte ASCII character, add 1 to the width.
		if (code <= 0x7f) {
			width += 1;
		} // If the character is a multibyte character, check its width.
		else {
			width += 2;
		}
	}

	return width;
}

/**
 * 指定のキーを対象のオブジェクトから削除します。
 *
 * @param {Record<K, V>} target - 対象のオブジェクト
 * @param {...K} keys - 削除したいキー
 * @returns {Record<K, V>} - 指定のキーが削除されたオブジェクト
 * @template K, V
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const omit = <K extends string | number = string, V extends any = any>( // eslint-disable-line @typescript-eslint/no-explicit-any
	target: Record<K, V>,
	...keys: K[]
): Record<K, V> => {
	let omitted = target;
	for (const key of keys) {
		// eslint-disable-next-line no-empty-pattern
		const { [key]: {} = {}, ...rest } = omitted;
		omitted = rest as Record<K, V>;
	}
	return omitted;
};
