# Hash Functions in TypeScript

This project contains implementations of various hash functions in TypeScript, along with corresponding tests using Vitest.

## Priority Order for Implementation

1. **XOR-based Hash** (Simple)

    - **File:** `src/xorHash.ts`
    - A basic hash function that uses the XOR operation on each byte of the input data.

2. **Additive Checksum** (Simple)

    - **File:** `src/checksum.ts`
    - A simple checksum that sums the byte values of the input data.

3. **Fletcher's Checksum** (Moderate)

    - **File:** `src/fletcherChecksum.ts`
    - A more complex checksum using two running sums for error detection.

4. **LRC (Longitudinal Redundancy Check)** (Simple)

    - **File:** `src/lrc.ts`
    - An XOR-based checksum that ensures the sum of all bytes is zero.

5. **CRC32 (Cyclic Redundancy Check)** (Moderate)

    - **File:** `src/crc32.ts`
    - A polynomial-based checksum used in network protocols and file integrity checks.

6. **MD5 (Moderate)**

    - **File:** `src/md5.ts`
    - A widely-used hash function that produces a 128-bit hash value, though not recommended for cryptographic use due to vulnerabilities.

7. **SHA-1 (Moderate)**

    - **File:** `src/sha1.ts`
    - A cryptographic hash function that produces a 160-bit hash value, also considered insecure for cryptographic purposes.

8. **SHA-256 (Complex)**
    - **File:** `src/sha256.ts`
    - A secure cryptographic hash function that produces a 256-bit hash value, commonly used in security protocols.

## How to Use

### Install Dependencies

```bash
npm install
```
