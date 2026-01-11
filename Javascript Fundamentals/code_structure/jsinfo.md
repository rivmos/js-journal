# ⚡ JavaScript Statements & Comments

In JavaScript, **statements** are commands that perform actions — each statement tells the engine to *do something*.

While semicolons are *technically optional*, **industry best practice** (and used by the top 1% of devs) is to **always end each statement with a semicolon** `;`.

---

## 🧩 Statements

```js
alert('Hello'); alert('World');
```

Here, both statements are on the same line — each separated by a semicolon.

---

### ✅ Readable Form

To make code **cleaner and readable**, each statement is written on its own line:

```js
alert('Hello');
alert('World');
```

---

## ⚙️ Semicolon Omission (Automatic Semicolon Insertion)

JavaScript automatically inserts semicolons **in most cases** where a line break appears.
This mechanism is known as **ASI (Automatic Semicolon Insertion)**.

```js
alert('Hello')
alert('World')
```

🧠 However, **this is not always safe** — newlines are **not** always interpreted as semicolons.

---

### ⚠️ When Omission Causes Problems

For example, when an expression is **incomplete**, JavaScript will *not* insert a semicolon:

```js
alert(3 +
1
+ 2); // ✅ Works fine (output: 6)
```

But this one breaks:

```js
alert("Hello")

[1, 2].forEach(alert);
```

The engine interprets it as:

```js
alert("Hello")[1, 2].forEach(alert);
```

💥 **Error:** `alert(...)` returns `undefined`, and `undefined[1, 2]` is invalid.

Hence, always **use semicolons explicitly** — it avoids subtle, production-breaking bugs.

---

## 💬 Comments

Comments are **non-executable** parts of code — used to describe logic or temporarily disable code.

---

### 🗒️ Single-Line Comment

Use `//` for single-line comments:

```js
// This comment occupies a line of its own
alert('Hello');

alert('World'); // This comment follows a statement
```

---

### 💜 Multi-Line Comment

Use `/* ... */` for multi-line or block comments:

```js
/* Commenting out the code
alert('Hello');
alert('World');
*/
```

> 🏁 **Golden Rule:**
> Even though JavaScript tries to “help” you by inserting semicolons, professionals don’t rely on guesses — they write explicit, intentional code.

 [Prev](../code_structure/jsinfo.md) [Next](../use_strict/jsinfo.md)