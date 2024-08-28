import { describe, it, expect } from 'vitest';
import { fletcherChecksum } from './fletcherChecksum';

describe('fletcherChecksum', () => {
    it('should return correct Fletcher checksum for "hello"', () => {
        expect(fletcherChecksum('hello')).toBe(0x1F2F);
    });
});
