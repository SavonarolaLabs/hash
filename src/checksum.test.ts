import { describe, it, expect } from 'vitest';
import { checksum } from './checksum';

describe('checksum', () => {
    it('should return 0 for an empty string', () => {
        expect(checksum('')).toBe(0);
    });

    it('should return correct checksum for "hello"', () => {
        expect(checksum('hello')).toBe(104 + 101 + 108 + 108 + 111);
    });
});
