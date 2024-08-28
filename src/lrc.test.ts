import { describe, it, expect } from 'vitest';
import { lrc } from './lrc';

describe('lrc', () => {
    it('should return correct LRC for "hello"', () => {
        expect(lrc('hello')).toBe(104 ^ 101 ^ 108 ^ 108 ^ 111);
    });
});
