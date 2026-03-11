# Logical Operators
In classical programming languages, logical operators are typically used
with boolean values only. In JavaScript, they can be applied to values
of any type, and the result can also be any type.

There are 4 logical operators in JS, `||` (OR), `&&` (AND), `!` (NOT) and `??` (Nullish Coalescing).

## The `||` Operator
The `||` operator returns true if **at least one operand is truthy**., as there can be 4 scenarios with this operator,

```js
true || true // true
true || false // true
false || true // true
false || false // false
```
How we can use it in conditional statements

```js
if(age < 15 || age > 25){
    return 'Not Eligible'
}
```
### How `||` Works in JavaScript
The OR || operator does the following:

- Evaluates operands from left to right.
- For each operand, JavaScript checks whether it is truthy or falsy.
If a truthy value is found, the operator stops and returns the
original operand (not the boolean conversion).
- If all operands are falsy, the last operand is returned.

- Usage: Getting the first truthy value
```js
const userName = nickName || firstName || lastName || 'Guest';
```

- Usage: Short-circuit evaluation
In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
```js
true || alert("not printed");
false || alert("printed");
/* This happens because `||` stops evaluating operands as soon as it
encounters a truthy value. */
```

### Mental Model for `||`

A chain of `||` returns the **first truthy value**,
or the **last value if none are truthy**.

Execution steps:

1. Evaluate the left operand
2. If it is truthy → return it
3. Otherwise evaluate the next operand
4. Continue until a truthy value is found
5. If none are truthy → return the last value

## The `&&` Operator
The `&&` operator returns `true` if all operands are truthy.

```js
true && true // true
true && false // false
false && true // false
false && false // false 
```
The `&&` operator behaves similarly to `||`,
but instead of returning the first truthy value,
it returns the **first falsy value**.

```js
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
```

### The AND && operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were truthy), returns the last operand.

> Note: The precedence of AND && operator is higher than OR ||. So the code `a && b || c && d` is essentially the same as if the && expressions were in parentheses: `(a && b) || (c && d)`.

### Mental Model for `&&`

A chain of `&&` returns the **first falsy value**,
or the **last value if all operands are truthy**.

```js
1 && 5        // 5
1 && 0        // 0
null && 5     // null
1 && 2 && 3   // 3
```

## The `!` Operator
The `!` operator accepts a single operand and does the following:

- Converts the operand to a boolean using the **ToBoolean** conversion.
- Returns the logical negation of that boolean value (Returns the inverse value).

```js
alert( !true ); // false
alert( !0 ); // true
```

A double NOT !! is sometimes used for converting a value to boolean type:

```js
!""      // true
!!""     // false

!42      // false
!!42     // true
```
That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, this results in a plain value-to-boolean conversion. 
`!!value` is commonly used as a shorthand to convert any value
to its boolean equivalent.

```js
const isLoggedIn = !!user;
```

> Note: The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

