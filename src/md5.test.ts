import { describe, it, expect } from 'vitest';
import { md5Hash } from './md5';

describe('md5Hash', () => {
    it('should return correct MD5 hash for "hello"', () => {
        expect(md5Hash('hello')).toBe('5d41402abc4b2a76b9719d911017c592');
    });
});
