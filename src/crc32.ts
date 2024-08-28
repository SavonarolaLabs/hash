import { crc32 } from 'scure-hash';

export function crc32Hash(data: string): string {
    return crc32(new TextEncoder().encode(data)).toString('hex');
}
