# JS Journal

A personal learning journal for JavaScript, focused on fundamentals and the runtime model of the language.

## Sections

- **JavaScript Fundamentals**: Core concepts including variables, data types, and browser interaction.  
  - Start here: `javascript-fundamentals/index.md`
- **Functional Programming**: Execution context, hoisting, scope, closures, the call stack, and `this`.  
  - Start here: `functional-programming/index.md`

## Running the docs locally

1. Install dependencies:

```bash
npm install
```

2. Start the VitePress dev server:

```bash
npm run docs:dev
```

Then open the URL printed in the terminal (typically something like `http://localhost:5173/js-journal/`).

## Content conventions

- **JavaScript Fundamentals**: each topic lives in its own folder with a `jsinfo.md` file (for example `hello_world/jsinfo.md`).
- **Functional Programming**: lessons are numbered markdown files (`1_execution-context.md`, `2_hoisting.md`, etc.) to make the intended reading order explicit.

For any new sections, pick one of these patterns and keep it consistent within that section.