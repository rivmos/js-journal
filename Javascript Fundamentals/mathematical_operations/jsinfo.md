# Math Operations

### Terms - Unary, Binary and Operand

- **Operand**:  
  An operand is what operators are applied to.  
  For example, in `5 * 2`, `5` is the **left operand** and `2` is the **right operand**.  
  Operands are sometimes also called **arguments**.

- **Unary**:  
  An operator is **unary** if it has just **one operand**, e.g. the negation operator (`-`) that reverses the sign of a number.

  ```js
  let x = 1;
  x = -x;
  alert(x); // -1, unary negation was applied
  ```

- **Binary**: 
    An operator is binary if it has two operands.
    
    ```js
    let x = 1, y = 3;
    alert( y - x ); // 2, binary minus subtracts values
    ```
    We have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

    ```js
    +   // Addition: adds two numbers
    let sum = 5 + 3; // 8
    -   // Subtraction: subtracts right operand from left
    let diff = 10 - 4; // 6
    *   // Multiplication: multiplies two numbers
    let product = 6 * 2; // 12
    /   // Division: divides left operand by right
    let quotient = 8 / 2; // 4
    %   // Remainder (modulus): gives remainder of division
    let remainder = 7 % 3; // 1
    **  // Exponentiation: raises left operand to the power of right
    let power = 2 ** 3; // 8
    ```

### String Concatenation With Binary Plus(+) Operator
The + operator exists in two forms the binary and unary let's discuss the binary first.
Usually the plus operator sums the numbers but when it is applied to strings, it merges or concatenates them. 

```js 
let s = "my" + "string";
alert(s); // mystring
```

When applied to a number and string it converts the number to string and concatenates them as well

```js 
let s = 5 + "string"; // order doesn't matter here
alert(s); // 5string
```

##### Complex Scenarios: Here, operators work one after another.

The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.
```js
alert(2 + 2 + '1' ); // "41" and not "221"
```
Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

```js 
alert('1' + 2 + 2); // "122" and not "14"
```

> The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
```js
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
```

### Numeric Conversion With Unary Plus(+) Operator
The unary plus operator converts a data type to number it is shorter form of Number().

```js
// No effect on numbers
const number = 1;
alert(+number); // 1

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```

We might need to convert the strings to numbers like when let's say we have a form to add numbers then it will give us numbers in string and if summed as string they will concatenate.

```js
let apples = "2";
let oranges = "3";

alert( apples + oranges ); 
// "23", the binary plus concatenates strings
alert( +apples + +oranges ); 
// 5, both converted to numbers before the binary plus is applied

```

But why does the unary plus got applied before the binary plus? because of their higher precedence.

### Operator Presedence
When we have more than one operator in an expression then the order of execution is defined by the their presedence, or, in other words, the default priority order.

We can overide the default order by adding a part of expression in parantheses e.g, (1 + 2) * 2.

Every operator in JS has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

[Presedence Order Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) - We don't need to rember this but note that unary operators are higher than corresponding binary ones, that is why in above example the unary + executed before the binary +


### Assignment
The assignment (=) operator also has a precedence of 2 in the precedence table, which is very low. That’s why when we assign a variable like x = 2 * 2 + 1, the expression on the right is evaluated first, and then the = operator assigns the result to x.

##### Assignment = returns a value
All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

The call x = value writes the value into x and then returns it.

```js 
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```

In the example above, the result of expression (a = b + 1) is the value which was assigned to 'a' (that is 3). It is then used for further evaluations.

> We should understand how it works, because sometimes we see it in JavaScript libraries but never write code like this.


##### Chaining Assignments
```js
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

**Chained assignments evaluate from right to left**. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.


```js
/* Once again, for the purposes of readability 
it’s better to split such code into few lines: */

c = 2 + 2;
b = c;
a = c;
```

### Modify And Assign In Place

We often need to apply an operator to a variable and store the new result in that same variable.

```js
let n = 2;
n = n + 5;
n = n * 2;
```

This notation can be shortened using the operators += and *=:

```js
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14
```

Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

**Such operators have the same precedence as a normal assignment**, so they run after most other calculations:

```js
let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16

```

### Increment/Decrement

Increasing and decreasing a number by 1 is a very common operation. We have special operators for them.

- Increment (++) increases value by 1
    ```js
    let counter = 2;
    counter++; // works the same as counter = counter + 1, but is shorter
    alert( counter ); // 3
    ```
- Decrement (--) decreases value by 1
    ```js
    let counter = 2;
    counter--;// works the same as counter = counter - 1, but is shorter
    alert( counter ); // 1
    ```

>Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

The operators ++ and -- can be placed either before(prefix form) or after (postfix form) a variable, they both essestially do the same thing incrementing or decrementing by 1 but there is a difference in what they return.

**The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).**

```js
// If we’d like to increase a value and immediately use the result
let counter = 1;
let a = ++counter; // (*)
alert(a); // 2

// If we’d like to increment a value but use its previous value
let counter = 1;
let a = counter++; // (*) changed ++counter to counter++
alert(a); // 1
```

The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

```js
let counter = 1;
alert( 2 * ++counter ); // 4

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value
```

Here - One line does multiple things – not good. We advise a style of **“one line – one action”**

```js
//like this
let counter = 1;
alert( 2 * counter );
counter++;
```


 [Prev](../type_conversions/jsinfo.md) [Next](../comparisons/jsinfo.md)