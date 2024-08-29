export function lrc(data: string): number {
	return [...data].reduce((a, v) => a ^ v.charCodeAt(0), 0);
}
