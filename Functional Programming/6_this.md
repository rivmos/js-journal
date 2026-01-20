## this Keyword

In JavaScript, `this` is **not** assigned when the function is written; it is assigned when the function is **CALLED**. (Except for arrow functions—we'll get to those).

1. Default Binding or Global Binding
If you call a function "bare" (not on an object), `this` points to the global object (window in browsers) or undefined (in strict mode).

```js
function foo() {
    console.log(this);
}
foo(); // In non-strict mode: Window {...}
       // In strict mode: undefined
```
2. Implicit Binding
When a function is called as a property of an object, `this` points to the object to the left of the dot.

```js
const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};
person.greet(); // Hello, John
```
3. Explicit Binding
When we want to force `this` to be whatever we want. We can use the `call()`, `apply()`, or `bind()` methods to explicitly set `this`.   

```js
function greet() {
    console.log(`Hello, ${this.name}`);
}
const person = { name: 'John' };
greet.call(person); // Hello, John
greet.apply(person); // Hello, John
const greetPerson = greet.bind(person);rows a "Stack Over
greetPerson(); // Hello, John
```

4. Lexical Binding (Arrow Functions)
Arrow functions do not have their own `this` binding. Instead, they inherit `this` from the parent scope. They "search" for this in their outer scope during the Creation Phase and lock onto it forever.

```js
class EditorService {
  private _onSave() {
    console.log(this.canvas); // Scenario 2: Expects 'this' to be 'EditorService'
  }

  constructor() {
    // Scenario: We pass the function to 'debounce'.
    // Debounce will call it later as callback() -> Scenario 1 (Default Binding)!
    // Result: this.canvas = undefined.canvas -> CRASH.
    this.debouncedSave = debounce(this._onSave.bind(this), 300);
  }
}
```

We can use Arrow Functions to avoid .bind(this) entirely.

```js
class EditorService {
  // Arrow function: captures 'this' from the constructor/class scope immediately.
  private _onSave = () => {
    console.log(this.canvas); // 'this' is now PERMANENTLY bound to the instance.
  }

  constructor() {
    // Now we can pass it safely! No .bind(this) needed.
    this.debouncedSave = debounce(this._onSave, 300);
  }
}
```

It works with arrow functions because of the Scope Chain.

Remember the Execution Context Object? It has a pointer to its Outer Environment.

Regular Functions: Create their own `this` in their Memory Component.
Arrow Functions: Do NOT create a `this`. When you use `this` inside an arrow function, JS says: "I don't have a `this`, let me look at my pointer to the parent's environment."


**Interview Favourite Question:**
What is logged? (Hint: Look at how the function inside `setTimeout` is being called).

```js
const obj = {
  id: 42,
  printId: function() {
    setTimeout(function() {
      console.log(this.id);
    }, 100);
  }
};

obj.printId();



```

- `obj.printId()` is an implicit binding, so `this` points to `obj`.
- The function inside `setTimeout` is a callback, and it's not called as a method of an object, so it's a default binding.

**Important:**
- `this` is NOT lexical
- `this` is NOT based on scope
- `this` is NOT preserved automatically
- `this` depends ONLY on the call-site

Fixing the above: 

```js
// 1. Arrow function (lexical this)
setTimeout(() => console.log(this.id), 100);
// Arrow functions do not have their own this
// They capture this from the surrounding scope
```
```js
// 2. Bind
setTimeout(function() {
  console.log(this.id);
}.bind(this), 100);
// .bind(this) creates a new function
// the function’s this is permanently fixed
// Call-site no longer matters
const boundFn = originalFn.bind(obj);
boundFn(); // always obj
// No closure trick
// No lexical this
// Forced call-site behavior
```
```js
// 3. Store reference

printId: function () {
  const self = this;
  setTimeout(function () {
    console.log(self.id);
  }, 100);
}
// self is a normal variable
// Variables are resolved via lexical scope
// Inner function closes over self
// this is closure at work
// this is irrelevant here

```

**Test: To Check Understanding**

```js
function print() {
  console.log(this.x);
}

const a = { x: 1 };
const b = { x: 2 };

const fn = print.bind(a);
fn.call(b);
fn.apply(b);
```
Output: 1 - `bind` beats `call` and `apply`

**Remember:** Arrow functions can not be fixed with `bind`, `call`, or `apply`

```js
const arrow = () => {
  console.log(this);
};

arrow.call({ a: 1 });
```
```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(this.name);
  };
}

const u = new User("Sam");
u.greet();

```

#### Event Handlers

```js
button.addEventListener("click", function () {
  console.log(this);
});
```
**Result** : `this` === button
**But**

```js
button.addEventListener("click", () => {
  console.log(this);
});
```
**Result** : `this` comes from surrounding scope
