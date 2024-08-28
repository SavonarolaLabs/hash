import { sha256 } from 'scure-hash';

export function sha256Hash(data: string): string {
    return sha256(new TextEncoder().encode(data)).toString('hex');
}
