# Type Conversions
Most operators and functions automatically convert values to the expected type. For example, alert converts any value to a string, while mathematical operations convert values to numbers.

Sometimes, we need to explicitly convert a value.

### String
String conversion happens when we need the string form of a value.

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```
String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

### Numeric Conversion
Numeric conversion in **mathematical functions and expressions** happens **automatically**.

For example, when division / is applied to non-numbers:

```js 
alert( "6" / "2" ); // 3, strings are converted to numbers
```

We can use the Number(value) function to explicitly convert a value to a number:

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123
alert(typeof num); // number

// If the string is not a valid number, the result of such a conversion is NaN
let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

```

| Value        | Becomes…                                                                                       | Related Concept / Notes                                                                                     |
|--------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| undefined    | NaN                                                                                            | Undefined converted to number always gives `NaN`                                                           |
| null         | 0                                                                                              | Null is treated as 0 in numeric contexts                                                                  |
| true         | 1                                                                                              | Boolean `true` → 1                                                                                         |
| false        | 0                                                                                              | Boolean `false` → 0                                                                                        |
| string       | Whitespaces (spaces, tabs `\t`, newlines `\n`, etc.) from start/end are trimmed. If empty → 0; otherwise, the number is parsed. If parsing fails → NaN | Empty string `""` → 0; `"123"` → 123; `"12px"` → NaN; `"  45  "` → 45; `"abc"` → NaN |


**Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.**

### Boolean Conversion

Boolean conversion is the simplest one. The conversion rule:
- Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
- Other values become true.

```js
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

```

 [Prev](../browser_interaction/jsinfo.md) [Next](../mathematical_operations/jsinfo.md/)