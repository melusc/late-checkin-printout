import {browser} from '$app/environment';

const sp = new URLSearchParams(
	typeof location === 'undefined' ? '?' : location.search,
);

function get<T = string>(
	name: string,
	validate: (v: string) => boolean,
): T | undefined {
	const value = sp.get(name);

	if (value && validate(value)) {
		return value as T;
	}

	if (browser) {
		throw new Error(`Invalid value for ${name}, got ${value}.`);
	}

	return undefined as T;
}

const gender =
	get<'m' | 'f' | 'd'>('gender', v => ['m', 'f', 'd'].includes(v as string)) ??
	'm';
const room = Number.parseInt(
	get('room', v => Number.isFinite(Number.parseInt(v, 10))) ?? '22',
	10,
);
const name = get('name', () => true) ?? 'Mickey';
const surname = get('surname', () => true) ?? 'Mouse';
const showGerman =
	get('showGerman', v => v === 'false' || v === 'true') !== 'false';
const showEnglish =
	get('showEnglish', v => v === 'false' || v === 'true') !== 'false';

export const data = {
	gender,
	room,
	name,
	surname,
	showGerman,
	showEnglish,
} as const;
