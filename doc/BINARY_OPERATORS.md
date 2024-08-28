# JavaScript Binary Operators Guide

This document provides a reference for common binary operators in JavaScript, including their usage and examples. This guide is handy for implementing hash functions or other low-level operations.

## 1. Bitwise AND (`&`)

### Description

Performs a bitwise AND operation on two operands. Each bit of the output is `1` if the corresponding bits of both operands are `1`, otherwise `0`.

### Syntax

```javascript
result = a \& b;
```

### Example

```javascript
let a = 5;   // 0101 in binary
let b = 3;   // 0011 in binary
let result = a \& b; // 0001 in binary, which is 1 in decimal
```

## 2. Bitwise OR (`|`)

### Description

Performs a bitwise OR operation on two operands. Each bit of the output is `1` if the corresponding bit of either operand is `1`.

### Syntax

```javascript
result = a | b;
```

### Example

```javascript
let a = 5; // 0101 in binary
let b = 3; // 0011 in binary
let result = a | b; // 0111 in binary, which is 7 in decimal
```

## 3. Bitwise XOR (`^`)

### Description

Performs a bitwise XOR operation on two operands. Each bit of the output is `1` if the corresponding bits of the operands are different.

### Syntax

```javascript
result = a ^ b;
```

### Example

```javascript
let a = 5; // 0101 in binary
let b = 3; // 0011 in binary
let result = a ^ b; // 0110 in binary, which is 6 in decimal
```

## 4. Bitwise NOT (`~`)

### Description

Inverts the bits of its operand. The result is the one's complement of the operand.

### Syntax

```javascript
result = ~a;
```

### Example

```javascript
let a = 5; // 0101 in binary
let result = ~a; // 1010 in binary (in two's complement form, it's -6 in decimal)
```

## 5. Left Shift (`<<`)

### Description

Shifts the bits of the first operand to the left by the number of positions specified by the second operand. Bits shifted off to the left are discarded, and zeros are shifted in from the right.

### Syntax

```javascript
result = a << b;
```

### Example

```javascript
let a = 5; // 0101 in binary
let result = a << 1; // 1010 in binary, which is 10 in decimal
```

## 6. Right Shift (`>>`)

### Description

Shifts the bits of the first operand to the right by the number of positions specified by the second operand. Bits shifted off to the right are discarded, and the sign bit is used to fill in from the left.

### Syntax

```javascript
result = a >> b;
```

### Example

```javascript
let a = 5; // 0101 in binary
let result = a >> 1; // 0010 in binary, which is 2 in decimal
```

## 7. Unsigned Right Shift (`>>>`)

### Description

Shifts the bits of the first operand to the right by the number of positions specified by the second operand. Bits shifted off to the right are discarded, and zeros are shifted in from the left. This operation treats the first operand as an unsigned 32-bit integer.

### Syntax

```javascript
result = a >>> b;
```

### Example

```javascript
let a = -5; // 11111111111111111111111111111011 in binary (32-bit two's complement form)
let result = a >>> 1; // 01111111111111111111111111111101 in binary, which is 2147483645 in decimal
```

## 8. Addition (`+`)

### Description

Performs addition between two numbers.

### Syntax

```javascript
result = a + b;
```

### Example

```javascript
let a = 5;
let b = 3;
let result = a + b; // 8
```

## 9. Subtraction (`-`)

### Description

Performs subtraction between two numbers.

### Syntax

```javascript
result = a - b;
```

### Example

```javascript
let a = 5;
let b = 3;
let result = a - b; // 2
```

## 10. Multiplication (`*`)

### Description

Performs multiplication between two numbers.

### Syntax

```javascript
result = a * b;
```

### Example

```javascript
let a = 5;
let b = 3;
let result = a * b; // 15
```

## 11. Division (`/`)

### Description

Performs division between two numbers.

### Syntax

```javascript
result = a / b;
```

### Example

```javascript
let a = 6;
let b = 3;
let result = a / b; // 2
```

## 12. Modulus (`%`)

### Description

Returns the remainder after division of one number by another.

### Syntax

```javascript
result = a % b;
```

### Example

```javascript
let a = 5;
let b = 3;
let result = a % b; // 2
```
