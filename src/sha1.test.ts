import { describe, it, expect } from 'vitest';
import { sha1Hash } from './sha1';

describe('sha1Hash', () => {
    it('should return correct SHA-1 hash for "hello"', () => {
        expect(sha1Hash('hello')).toBe('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d');
    });
});
