import { describe, it, expect } from "vitest";
import {
	fletcher16Checksum,
	fletcher8Checksum,
	fletcher32Checksum,
} from "./fletcherChecksum";

describe("fletcherChecksum", () => {
	// Fletcher-8 Tests
	it('should return correct Fletcher-8 checksum for "hello"', () => {
		expect(fletcher8Checksum("hello")).toBe(0x07);
	});

	it('should return correct Fletcher-8 checksum for "world"', () => {
		expect(fletcher8Checksum("world")).toBe(0x2c);
	});

	// Fletcher-16 Tests
	it('should return correct Fletcher-16 checksum for "hello"', () => {
		expect(fletcher16Checksum("hello")).toBe(0x2d16);
	});

	it('should return correct Fletcher-16 checksum for "world"', () => {
		expect(fletcher16Checksum("world")).toBe(0xa72a);
	});

	// Fletcher-32 Tests
	it('should return correct Fletcher-32 checksum for "hello"', () => {
		expect(fletcher32Checksum("hello")).toBe(0x06270214);
	});

	it('should return correct Fletcher-32 checksum for "world"', () => {
		expect(fletcher32Checksum("world")).toBe(0x06a10228);
	});
});
