# Hello World

JavaScript programs can be inserted **almost anywhere** inside an HTML document using the `<script>` tag.

```html

<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert('Hello, world!');
  </script>

  <p>...After the script.</p>

</body>
</html>

```

The script runs **as the browser reads the HTML**, so the alert will show *before* the last paragraph is rendered.

---

### Historical Note: `type` Attribute

In the old **HTML4** standard, every `<script>` tag was required to have a `type` attribute — typically `type="text/javascript"`.

In modern HTML5, this is **no longer required**. The browser assumes JavaScript by default.

However, you can specify `type="module"` for JavaScript **modules**, which enables modern ES module behavior.

> Try running the HTML in the folder to see this in action.

---

### The `src` Attribute

If the `<script>` tag has a `src` attribute, it loads external JavaScript — and **any inline code inside the tag is ignored**.

```html
<script src="file.js">
  alert(1); // ignored, because src is set
</script>
```

Always put **external scripts** either in the `<head>` (with `defer`) or before the closing `</body>` tag to avoid blocking rendering.
