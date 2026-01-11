## Execution Context Object
Everything in JavaScript happens inside this execution context. It is the environment where the JavaScript code is scanned, parsed, and executed.

When we run a JavaScript program, the very first thing the engine creates is the **Global Execution Context**.

Execution context has three* (not sure about this at the moment) parts:

1. The Memory Component (Variable Environment) - stores all the variables and functions defined in the code as key-value pairs. Allocating memory for variables and functions by skimming through the code before execution.
2. The Code Component (Thread of Execution) - executes the code line by line because js is a single-threaded language that means it can only do one thing at a time.

`Read The Following After Reading The Call Stack and Scope Chain`

3. Outer Environment (Scope Chain) - a pointer points to the parent execution context (lexical parent).
4. this binding - points to the object that the function is called on.

```js 
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
```

Phase 1: Memory Creation Phase
The JavaScript engine scans the code and allocates memory in the Memory Component:

```js 
n = undefined
square = function() {...} // entire function is stored
square2 = undefined
```

Phase 2: Code Execution (The Thread Runs)
Now, the thread of execution begins running the code line-by-line in the Code Component:

*   **Line 1: `var n = 2;`**
    The engine places the value `2` into the memory placeholder for `n`.
    Memory Update: `n: 2`
*   **Line 2-5: (Function Declaration)**
    The engine skips this because it already allocated memory for the function definition in Phase 1.
*   **Line 6: `var square2 = square(n);`**
    Here, a function is invoked.

**Crucial Concept:** Whenever a function is invoked, a **NEW Execution Context** (a mini-box) is created inside the Code Component to handle that specific function.
