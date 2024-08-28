import { describe, it, expect } from 'vitest';
import { sha256Hash } from './sha256';

describe('sha256Hash', () => {
    it('should return correct SHA-256 hash for "hello"', () => {
        expect(sha256Hash('hello')).toBe('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824');
    });
});
