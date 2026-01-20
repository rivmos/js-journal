## Execution Context Object
Everything in JavaScript happens inside this execution context. It is the environment where the JavaScript code is scanned, parsed, and executed.

When we run a JavaScript program, the very first thing the engine creates is the **Global Execution Context**.

Execution context has three core parts:

1. **Variable Environment** - stores all the variables and functions declaration defined in the code as key-value pairs. Allocating memory for variables and functions by skimming through the code before execution.
2. **Lexical Environment** - local memory and a pointer to outer lexical environment (lexical parent) - this is how JavaScript resolves variable lookups.
3. `this` binding - Every execution context has a value of `this`.


## Execution Process
The Execution happens in two phases:

1. Memory Creation Phase
2. Code Execution Phase

```js 
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
```

## Memory Creation Phase

**Phase 1:** Memory Creation Phase
The JavaScript engine scans the code and allocates memory in the Memory Component:

```js 
n = undefined
square = function() {...} // entire function is stored
square2 = undefined
```

## Code Execution Phase

**Phase 2:** Code Execution (The Thread Runs)
Now, the thread of execution begins running the code line-by-line in the Code Component:

*   **Line 1: `var n = 2;`**
    The engine places the value `2` into the memory placeholder for `n`.
    Memory Update: `n: 2`
*   **Line 2-5: (Function Declaration)**
    The engine skips this because it already allocated memory for the function definition in Phase 1.
*   **Line 6: `var square2 = square(n);`**
    Here, a function is invoked and a new execution context is created to handle the function.
    - A New Execution Context is created.
    - It goes through its own Memory Phase (allocating space for `num` and `ans`).
    - It goes through its own Execution Phase.
    - Once return `ans` is hit, the value replaces the undefined in the Global memory for `square2`, and that local context is deleted.
