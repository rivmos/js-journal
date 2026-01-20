### Closure

A Closure is not a separate concept; it is just the Lexical Environment rule applied to functions that are returned.

When a function is returned from another function, it doesn't just return the function code. It returns the function code plus a "Backpack" containing all the variables it referenced from its parent.

Even though the parent execution context is destroyed (popped off the call stack), the variables inside the "Backpack" (Closure) survive in the memory heap.

```js 
function x() {
    var b = 10;
    return function y() {
        console.log(b);
    }
}

var z = x();
z(); // Output: 10
```
**Challange:**
```js
function outer() {
    var hero = "Batman";
    
    function inner() {
        console.log(hero);
    }
    
    hero = "Superman"; // Variable is updated
    
    return inner; // Function is returned
}

var z = outer(); // outer() runs and is destroyed here
z(); // What does this print?
```

Answer: Superman

Why "Superman"? (The Reference Rule)
Many people guess "Batman" because they think the closure takes a "snapshot" or a "copy" of the variable when the function is defined. It does not.

The Closure (the "Backpack") contains a Live Reference (a pointer) to the variable in memory.

1. Line 2: Memory allocates hero = "Batman".
2. Line 4: inner is created. It gets a link pointing to that specific memory slot of hero.
3. Line 8: The code changes the value in that same memory slot to "Superman".
4. Line 10: The function returns. The outer context dies, but the memory slot for hero is kept alive because inner is holding onto the rope (reference) attached to it.
5. Line 12: When you later open the box (run the function), it looks at the memory slot and sees the current value: "Superman".

### Full Example

```js 
function createCounter() {
  let count = 0;        // private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count,
  };
}

const counter = createCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.get();       // 1
```

Benefits of Closure:
1. Data privacy – count can’t be accessed directly.
2. State preservation – value is remembered between calls.
3. No globals – avoids shared mutable state.
4. Encapsulation – logic + data stay together.
5. Multiple instances – each counter has its own memory.
6. Cleaner APIs – expose only what is needed.
7. Used everywhere – React hooks, event handlers, libraries.


### Stale Closures - When You Don't Respect The Closure