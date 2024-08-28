import { describe, it, expect } from 'vitest';
import { xorHash } from './xorHash';

describe('xorHash', () => {
    it('should return 0 for an empty string', () => {
        expect(xorHash('')).toBe(0);
    });

    it('should return correct XOR hash for "hello"', () => {
        expect(xorHash('hello')).toBe(104 ^ 101 ^ 108 ^ 108 ^ 111);
    });
});
