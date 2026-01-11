## "use strict"
2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict" and this has to be at the top.

```js
"use strict";
// this code works the modern way
```

When you use a developer console to run code, please note that it doesn’t use strict by default.

```js
'use strict'; <Shift+Enter for a newline>
// ...your code
```

<Enter to run>

It works in most browsers, namely Firefox and Chrome.

If it doesn’t, e.g. in an old browser, there’s an ugly, but reliable way to ensure use strict. Put it inside this kind of wrapper:

```js
(function () {
  "use strict";

  // ...your code here...
})();
```

## Should we “use strict”?
Modern JavaScript supports “classes” and “modules” – advanced language structures, that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.


 [Prev](../code_structure/jsinfo.md)  [Next](../variables/jsinfo.md/)