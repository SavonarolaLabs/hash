# Simple Hash Algorithms Guide

This guide provides simple instructions to help you implement the first five hash functions in this project. These algorithms are straightforward and serve as a good starting point.

## 1. XOR-based Hash

### Description
The XOR-based hash is a very basic hashing algorithm that works by repeatedly applying the XOR operation to the bytes of the input data.

### Algorithm
1. Initialize a variable `hash` to `0`.
2. For each byte (or character) in the input string:
   - XOR the `hash` with the byte value.
3. Return the resulting `hash`.

### Example in Pseudocode
```
hash = 0
for each byte in data:
    hash = hash XOR byte
return hash
```

## 2. Additive Checksum

### Description
An additive checksum is a simple way to check the integrity of data by summing the byte values of the input data.

### Algorithm
1. Initialize a variable `sum` to `0`.
2. For each byte (or character) in the input string:
   - Add the byte value to `sum`.
3. Return the resulting `sum`.

### Example in Pseudocode
```
sum = 0
for each byte in data:
    sum = sum + byte
return sum
```

## 3. Fletcher's Checksum

### Description
Fletcher's checksum is an improvement over simple checksums by using two running sums to provide better error detection.

### Algorithm
1. Initialize two variables `sum1` and `sum2` to `0xFF`.
2. For each byte (or character) in the input string:
   - Add the byte value to `sum1`, then take `sum1 % 255`.
   - Add `sum1` to `sum2`, then take `sum2 % 255`.
3. Combine `sum1` and `sum2` into a single checksum value.
   - Return `(sum2 << 8) | sum1`.

### Example in Pseudocode
```
sum1 = 0xFF
sum2 = 0xFF
for each byte in data:
    sum1 = (sum1 + byte) % 255
    sum2 = (sum2 + sum1) % 255
checksum = (sum2 << 8) | sum1
return checksum
```

## 4. LRC (Longitudinal Redundancy Check)

### Description
LRC is a form of checksum where the XOR of all bytes is calculated. It ensures that the total XOR sum is zero for valid data.

### Algorithm
1. Initialize a variable `lrc` to `0`.
2. For each byte (or character) in the input string:
   - XOR the `lrc` with the byte value.
3. Return the resulting `lrc`.

### Example in Pseudocode
```
lrc = 0
for each byte in data:
    lrc = lrc XOR byte
return lrc
```

## 5. CRC32 (Cyclic Redundancy Check)

### Description
CRC32 is a more complex checksum used for error-checking in digital networks and storage devices. It involves polynomial division over binary data.

### Algorithm
1. Initialize a variable `crc` to `0xFFFFFFFF`.
2. For each byte (or character) in the input string:
   - XOR `crc` with the byte value.
   - For 8 iterations:
     - If the last bit of `crc` is `1`, right-shift `crc` and XOR with the polynomial `0xEDB88320`.
     - Otherwise, just right-shift `crc`.
3. XOR the final `crc` value with `0xFFFFFFFF`.
4. Return the resulting `crc`.

### Example in Pseudocode
```
crc = 0xFFFFFFFF
for each byte in data:
    crc = crc XOR byte
    for 8 times:
        if crc & 1 == 1:
            crc = (crc >> 1) XOR 0xEDB88320
        else:
            crc = crc >> 1
crc = crc XOR 0xFFFFFFFF
return crc
```
