export function checksum(data: string): number {
	return [...data].reduce((a, v) => a + v.charCodeAt(0), 0);
}
