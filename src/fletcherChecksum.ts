export function fletcher8Checksum(data: string): number {
	let sum1 = 0xf,
		sum2 = 0xf;
	for (const char of data) {
		sum1 = (sum1 + char.charCodeAt(0)) % 0xf;
		sum2 = (sum2 + sum1) % 0xf;
	}
	return (sum2 << 4) | sum1;
}

export function fletcher16Checksum(data: string): number {
	let sum1 = 0xff;
	let sum2 = 0xff;
	[...data]
		.map((c) => c.charCodeAt(0))
		.forEach((byte) => {
			sum1 = (sum1 + byte) % 0xff;
			sum2 = (sum2 + sum1) % 0xff;
		});
	return (sum2 << 8) | sum1;
}

export function fletcher32Checksum(data: string): number {
	let sum1 = 0xffffffff;
	let sum2 = 0xffffffff;
	[...data]
		.map((c) => c.charCodeAt(0))
		.forEach((byte) => {
			sum1 = (sum1 + byte) % 0xffffffff;
			sum2 = (sum2 + sum1) % 0xffffffff;
		});
	return (sum2 << 16) | sum1;
}
