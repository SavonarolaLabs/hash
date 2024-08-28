import { sha1 } from 'scure-hash';

export function sha1Hash(data: string): string {
    return sha1(new TextEncoder().encode(data)).toString('hex');
}
