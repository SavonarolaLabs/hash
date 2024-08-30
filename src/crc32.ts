export function crc32Hash(data: string): string {
	let crc = 0xffffffff;
	for (let byte of data) {
		crc = crc ^ byte.charCodeAt(0);
		for (let i = 0; i < 8; i++) {
			if ((crc & 1) == 1) {
				crc = (crc >>> 1) ^ 0xedb88320;
			} else {
				crc = crc >>> 1;
			}
		}
	}
	crc = crc ^ 0xffffffff;
	return crc.toString(16).padStart(8, "0");
}
