# Data Types
A value in JS is always of certain type e.g. a string or a number, these are data types and there are 8 in JS.

In JS, a variable can at one moment be a string and then store a number:

```js 
// no error
let message = "hello";
message = 123456;

/*
this is possible because JS is dynamically typed language - meaning 
that there exist data types, but variables are not bound to any of them.

*/
```
## Number

The number type represents both integer and floating point numbers.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

##### Infinity
Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

```js
alert( 1 / 0 ); // Infinity - devision by zero
alert( Infinity ); // Infinity - refrenced directly
```

##### NaN
NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

```js
alert( "not a number" / 2 ); // NaN, such division is erroneous

// NaN is sticky. Any further mathematical operation on NaN returns NaN:
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
```

> So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result but **there’s only one exception to that: NaN ** 0 is 1**.

## Bigint

**Normal Number - 64-bit floating-point**

- Stored in fixed 64 bits.
- Uses the IEEE 754 format — it encodes both fractional parts (decimals) and integers.
- Great for scientific or everyday arithmetic - because cpus handle it efficiently as they are fast.
- But limited precision → max safe integer = 2^53 - 1.

```js
typeof 42 // 'number'
```

**So we needed a different type, BigInt - Arbitrary-precision integer**
- Stored in variable size (not 64 bits - it grows as big as needed).

- Only represents whole integers (no decimals).

- It sacrifices speed for precision and scale.

- Used for things like:
    - Huge IDs
    - Cryptography
    - Financial or scientific computation

```js
typeof 42n // 'bigint'
```

**So why not make all numbers BigInt?**

- **Performance**: BigInt is slower; every operation must handle arbitrary-length numbers.
- **Decimals**: BigInt can’t represent 3.14n — it’s strictly integers.
- **Compatibility**: Tons of existing code and APIs expect the old Number behavior.
- **Hardware**: CPUs natively handle 64-bit floats efficiently.


**Why n at the end?**
That n is how JavaScript tells the engine:
> “Hey, this literal is not a normal 64-bit Number — it’s a BigInt.”

## String
A string in JavaScript must be surrounded by quotes.

```js
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

## Boolean
The boolean type has only two values: true and false.

```js
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```

Boolean values also come as a result of comparisons:

```js
let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")
```

## Null and Undefined

| Value      | Meaning                                           | Type                         | Who sets it           | Example                                          |
|------------|--------------------------------------------------|------------------------------|----------------------|--------------------------------------------------|
| undefined  | “There is no value here (not yet assigned)”     | 'undefined'                  | JavaScript itself    | a variable you declared but never assigned      |
| null       | “There should be a value, but it’s intentionally empty” | 'object' (historical bug) | You, the developer   | an object property or function return intentionally set empty |

**Their Types**
```js
typeof undefined // 'undefined'
typeof null      // 'object'  ← historical bug from 1995 that we still live with
```

**Loose equality (==)**
```js
undefined == null // true  ✅ (they are treated as equal in loose comparison)
```

**Strict equality (===)**
```js
undefined === null // false ❌ (they are different types)
```

## Object

The object type is special.

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

## The typeof Operator

The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

```js
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1) // built-in object that provides mathematical operationss
typeof null // "object"  (2)
typeof alert // "function"  (3)
```

You may also come across another syntax: typeof(x). **It’s the same as typeof x**.

To put it clear: **typeof is an operator, not a function**. The parentheses here aren’t a part of typeof. **It’s the kind of parentheses used for mathematical grouping.**

Usually, such parentheses contain a mathematical expression, such as (2 + 2), but here they contain only one argument (x). Syntactically, they allow to avoid a space between the typeof operator and its argument, and some people like it.

Some people prefer typeof(x), although the typeof x syntax is much more common.



### The Historical Bug
- The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.



 [Prev](../variables/jsinfo.md) [Next](../browser_interaction/jsinfo.md/)