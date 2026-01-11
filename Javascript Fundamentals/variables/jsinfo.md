# Variables

JavaScript application needs to work with information and **variables are used to store this information**. A variable is a “named storage” for data

The statement below **creates (in other words: declares)** a variable with the name “message” and with some data put into it using assignment operator = :

```js
let message;

message = "Hello"; 

// The string is now saved into the memory area associated with the variable
```

We can combine the variable declaration and assignment into a single line

```js 
let message = 'Hello!'; // define the variable and assign the value
alert(message); // Hello!
```

#### Declaring Multiple In A Single Line
```js
let user = 'John', age = 25, message = 'Hello';

//OR

let user = 'John',
  age = 25,
  message = 'Hello';

// not recommended for better readablity
// we should use single line per variable
```

#### Copying Data

We can also declare two variables and copy data from one into the other.

```js
let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

```

#### Declaring Twice

A variable should be declared only once.

```js
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
```

## Variable naming
There are two limitations on variable names in JavaScript:

- The name must contain only letters, digits, or the symbols $ and _.
- The first character must not be a digit.
- let, class, return, and function are reserved and can't be used as variable.

```js 
let userName;
let test123;

// When the name contains multiple words, camelCase is commonly used. 
```

```js 
// the dollar sign '$' and the underscore '_' can also be used in names
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3
```

> **Case matters**
> Variables named apple and APPLE are two different variables.

#### Variable Declaration and "use strict"
Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put "use strict" in our scripts to maintain compatibility with old scripts.

```js
// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5
```

This is a bad practice and would cause an error in strict mode:

```js

"use strict";

num = 5; // error: num is not defined
```

# Constants

When a programmer is sure that a variable will never change, they can declare it with const to guarantee and communicate that fact to everyone.


```js 
const myBirthday = '18.04.1982';

/*
Variables declared using const are called “constants”. 
They cannot be reassigned. An attempt to do so would cause an error:
*/ 

myBirthday = '01.01.2001'; // error, can't reassign the constant!
```

#### Constants that are known before execution or difficult to rememeber

```js 
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

> **Name Things Right!!**
> Spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

 [Prev](../code_structure/jsinfo.md) [Next](../data_types/jsinfo.md/)