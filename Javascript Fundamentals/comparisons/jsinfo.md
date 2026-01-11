## Comparisons

#### What Does A Comparison Give
All comparison operators return a boolean value:
- `true` – means “yes”, “correct” or “the truth”.
- `false` – means “no”, “wrong” or “not the truth”.

```js
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

// A comparison result can be assigned to a variable, just like any value:
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true
```

#### String Comparison
To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order. In other words, strings are compared letter-by-letter.

```js
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

<details>
    <summary>The Algorithm</summary>

    The algorithm to compare two strings is simple:

    Compare the first character of both strings.
    If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
    Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
    Repeat until the end of either string.
    If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
    In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

    The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

    G is the same as G.
    l is the same as l.
    o is greater than e. Stop here. The first string is greater.
</details>


This is not a real dictionary, but Unicode order
The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same.

For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). We’ll get back to specific details and consequences of this later.

#### Comparing Different Types
When comparing values of different types, JavaScript converts the values to numbers.

```js
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.
alert( true == 1 ); // true
alert( false == 0 ); // true
```

> It is possible that at the same time:
Two values are equal.
One of them is true as a boolean and the other one is false as a boolean.
```js 
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```

From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.
