import { describe, it, expect } from 'vitest';
import { crc32Hash } from './crc32';

describe('crc32Hash', () => {
    it('should return correct CRC32 hash for "hello"', () => {
        expect(crc32Hash('hello')).toBe('3610a686');
    });
});
