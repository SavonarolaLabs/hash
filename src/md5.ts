import { md5 } from 'scure-hash';

export function md5Hash(data: string): string {
    return md5(new TextEncoder().encode(data)).toString('hex');
}
