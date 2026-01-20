
## Hoisting
Hoisting is the direct consequence of the memory creation phase. 
`Many tutorials simplify Hoisting by saying "JavaScript moves your code to the top of the file." That is technically incorrect. The code doesn't move anywhere.`

Hoisting is a phenomenon in JavaScript where you can access variables and functions before you have initialized them in your code.

```js 
console.log(x);       // Output: undefined
getName();            // Output: "Somvir"

var x = 7;

function getName() {
    console.log("Somvir");
}
```

- **Why didn't it crash?** Because of the Global Execution Context.
- **Why is x `undefined`?** Because of the Memory Creation Phase.

## Deep Dive: Hoisting

Memory Creation Phase: Before the code runs, JS scans the file:

- It sees `var x`. It allocates memory and sets it to special placeholder: `undefined`.
- It sees function `getName`. It allocates memory and stores the entire function body.

Code Execution Phase: Now, the Code Execution Phase begins:

* **Line 1: console.log(x);**
    - The engine looks in the Memory Component.
    - Is `x` there? Yes.
    - What is its value? `undefined`.
    - Action: It prints `undefined`.

* **Line 2: getName();**
    - The engine looks in memory.
    - Is `getName` there? Yes.
    - What is its value? The full function code.
    - Action: It creates a new Execution Context and runs the function.

* **Line 4: var x = 7;**
    - The engine executes this line.
    - Action: It replaces undefined in memory with 7.

## The "Gotcha": Arrow Functions
If you use an Arrow Function (or a Function Expression), it behaves like a variable, not a function.

```js
console.log(getName); // Output: undefined
getName();            // 🔴 ERROR: getName is not a function

var getName = () => {
    console.log("Hello World");
}
```
Why the Error? Because getName is declared with `var`. In the Memory Phase, getName is treated just like any other variable—it gets allocated `undefined`.
When the execution reaches getName(), you are essentially trying to do `undefined()`. Since `undefined` is not a function, the engine throws a TypeError : getName is not a function.

## `let` and `const`
`let` and `const` are also hoisted, but they just behave differently than `var`. They are hoisted into a special zone called the Temporal Dead Zone (TDZ).

TDZ is a time between the memory creation phase and the code execution phase. It is a special zone where the variable is not accessible. Accessing a variable in the TDZ throws a ReferenceError.

```js
console.log(x);       // Output: ReferenceError: Cannot access 'x' before initialization
getName();            // Output: "Somvir"

let x = 9;

function getName() {
    console.log("Somvir");
}
```

### Contrast with `var`
1. `var` - the old way
```js 
console.log(a); // Output: undefined (No error, just weird data)
var a = 10;
```
- `var` is attached to the global object (window in the browser) and value initialized to undefined and we can access it early but it has no value yet.

2. `let` and `const` - the new way
```js 
console.log(b); // Output: ReferenceError: Cannot access 'b' before initialization
let b = 20;
```
- here memory is allocated to `b` but it is stored in a separate memory space (often called Script Scope), **NOT** the global object. It is uninitialized. The engine forbids you from touching it. The code crashes to protect us from using a variable that isn't ready.

### `const` : The Strictest Sibling of `let`
`const` behaves exactly like `let` regarding the Temporal Dead Zone, but it adds two tighter constraints:

1. You must initialize the variable when you declare it.
2. You cannot reassign the variable.

```js
let a;          // Valid
const b;        // 🔴 SyntaxError: Missing initializer in const declaration
```

```js
const b = 100;
b = 200;        // 🔴 TypeError: Assignment to constant variable.
```

## See It Happen in the Browser

If you open Chrome DevTools, go to "Sources" and put a debugger on the first line:
You will see `var` variables under the Global scope.
You will see `let` and `const` variables under a separate Script (or Block) scope.

Here is exactly what is happening inside the engine to cause that split between Global and Script.

1. The Global Scope (`var` and `function`)
Variables declared with `var` and Function Declarations are attached directly to the Global Object (window) - this pollutes the global namespace.

So JS devs created the Script Scope to prevent this. A Separate storage space for `let` and `const`. Still accessible everywhere in file but it is not attached to global object.

2. The Script Scope (`let`, `const`, and `function`)
Variables declared with `let` and `const` are from the new days of JavaScript.
