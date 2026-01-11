
### Scope

A scope is a lexical environment where variables are accessible.

`Lexical Environment = Local Memory + Reference to Parent's Lexical Environment`

1. **What does lexical mean?**
"Lexical" simply means hierarchy or sequence. In JavaScript, "Lexical Environment" means "Where does this code sit physically inside your file?"

    - If function `c()` is written inside function `a()`, then `c` is lexically inside `a`.
    - This physical placement determines who can access what.

2. **The Scope Chain Mechanism**
Whenever an Execution Context is created, it also creates a Lexical Environment. This environment contains two things:
    - **Its Own Data:** The local variables and functions (Variable Environment).
    - **A Pointer (Reference):** A link to the Lexical Environment of its Parent (the code that physically surrounds it).

**The Search Rule:** When you try to access a variable, the JavaScript engine does a specific search:
    - First, it checks its own memory.
    - If not found, it follows the reference to its parent's memory.
    - This continues until the variable is found or the global scope is reached.

```js 
function a() {
    var b = 10;
    c();
    
    function c() {
        console.log(b); // Search starts here
    }
}

a();
console.log(b); // 🔴 Error: b is not defined
```

Step 1: The Global Context
- Memory: Contains function `a`.
- Parent: null (Global has no parent).

Step 2: Function `a` Context
- Memory: Contains variable `b` and function `c`.
- Parent: Points to Global. (Because `a` sits physically in the global file).

Step 3: Function `c` Context
- Memory: Empty (no local variables).
- Parent: Points to `a`. (Because `c` sits physically inside `a`).

The Search for `b` (inside function `c`):
- Engine checks `c`'s memory: "Do I have `b`?" -> No.
- Engine follows the link to Parent (`a`): "Do you have `b`?"
- Found! The value is 10.

The Scope Chain is determined by where the function is DEFINED, not where it is CALLED.

```js 
var b = 100;

function x() {
    var b = 10;
    y(); // We call y() inside x
}

function y() {
    console.log(b); 
}

x();
```

Does `y()` print 10 (from `x`, where it was called) or 100 (from Global, where it was defined)?
Answer: It prints 100.
Why?
Function `y` is physically defined in the Global Scope.
Therefore, its "Parent" is Global.
It doesn't matter that `x` called it. `y` ignores `x` completely. It looks at its own local memory, finds nothing, and goes straight to its lexical parent: Global.
