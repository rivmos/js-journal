# Condtionals
Sometimes we want to perform different actions based on different conditions.

## If statement & `?` (conditional or question mark operator)
The `if` statement evaluates the expression inside the parentheses.

The result is internally converted to a Boolean using the **ToBoolean**
conversion algorithm.
Values that convert to `false` are called **falsy values**.
Values that convert to `true` are called **truthy values**.


If the result is `true`, the block executes.

```js
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
```

## Boolean Conversion
The `if (…)` statement evaluates the expression in the parentheses and then converts the result to a Boolean.
*Recalling Conversion Rules
- A number `0`, an empty string `""`, `null`, `undefined`, and `NaN` all become `false`. Because of that they are called “falsy” values.
- Other values become `true`, so they are called “truthy” (`[]` and `{}` are always truthy).

### Truthy Examples

The following values are truthy:

if ("hello")   // true
if (42)        // true
if ([])        // true
if ({})        // true

## `else` clause
The else block is executed when the condition is falsy.

## `else if`
`else if` allows checking multiple conditions sequentially.
The first condition that evaluates to true will execute its block,
and the rest will be skipped.
```js
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```
The `if` condition is evaluated first.

If it is falsy, the next `else if` condition is evaluated.
If a condition becomes truthy, its block executes and the rest of the
conditions are skipped.

If none match, the `else` block executes.


## Conditional Operator
Sometimes we might want to assign a value to a variable based on a condition, so here we use conditional operator (aka ternary operator as it is the only operator in JS that has 3 operands)
```js
const isAuthenticated = token ? true : false;
```

We can also use sequence of conditional operator 
```js
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

```

## Execution Flow

JavaScript evaluates conditional statements from top to bottom.

1. Evaluate `if` condition
2. If truthy → execute block and exit
3. Otherwise check `else if`
4. Continue until a condition matches
5. If none match → `else` executes

## Nested Contitions
Conditionals can be nested inside each other.
```js
if (isLoggedIn) {
  if (isAdmin) {
    showAdminPanel();
  }
}
```
