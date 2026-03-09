# "use strict"
Strict mode was introduced in ECMAScript 5 (2009) to make JavaScript safer and remove problematic language behaviors. Strict mode was introduced in ECMAScript 5 (2009).

It enables a restricted version of JavaScript that helps catch common mistakes,
prevents unsafe actions, and removes some problematic language features.

To keep older JavaScript code working, strict mode is NOT enabled by default.
Developers must explicitly enable it using the directive:


```js
"use strict";
// this code works the modern way
```

Developer consoles usually do not run code in strict mode by default.

```js
'use strict'; `<Shift+Enter for a newline>`
// ...your code
```

`<Enter to run>`

It works in most browsers, namely Firefox and Chrome.

If it doesn’t, e.g. in an old browser, there’s an ugly, but reliable way to ensure use strict. Put it inside this kind of wrapper:

```js
(function () {
  "use strict";

  // ...your code here...
})();
```

## Should we “use strict”?
Modern JavaScript features such as:

• ES Modules (import/export)
• Classes

automatically enable strict mode.

Example:
```js
// module.js
export function test() {}
class User {}
```

Because of this, modern JavaScript projects rarely add "use strict" manually.