import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "JS Journal",
  description: "A personal learning journal for JavaScript",
  base: '/js-journal/',
  head: [
    ['link', { rel: 'icon', href: '/js-journal/favicon.svg', type: 'image/svg+xml' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JavaScript Fundamentals', link: '/javascript-fundamentals/index' },
      { text: 'Functional Programming', link: '/functional-programming/index' }
    ],
    sidebar: [
      {
        text: 'JavaScript Fundamentals',
        items: [
          { text: 'Hello World', link: '/javascript-fundamentals/01-hello-world/jsinfo' },
          { text: 'Code Structure', link: '/javascript-fundamentals/02-code-structure/jsinfo' },
          { text: 'Use Strict - The Modern Way', link: '/javascript-fundamentals/03-use-strict/jsinfo' },
          { text: 'Variables', link: '/javascript-fundamentals/04-variables/jsinfo' },
          { text: 'Data Types', link: '/javascript-fundamentals/05-data-types/jsinfo' },
          { text: 'Browser Interaction', link: '/javascript-fundamentals/06-browser-interaction/jsinfo' },
          { text: 'Type Conversions', link: '/javascript-fundamentals/07-type-conversions/jsinfo' },
          { text: 'Mathematical Operations', link: '/javascript-fundamentals/08-mathematical-operations/jsinfo' },
          { text: 'Comparisons', link: '/javascript-fundamentals/09-comparisons/jsinfo' },
        ],
      },
      {
        text: 'Functional Programming',
        items: [
          { text: 'Execution Context', link: '/functional-programming/01-execution-context/jsinfo' },
          { text: 'Hoisting', link: '/functional-programming/02-hoisting/jsinfo' },
          { text: 'Scope', link: '/functional-programming/03-scope/jsinfo' },
          { text: 'Closure', link: '/functional-programming/04-closure/jsinfo' },
          { text: 'Call Stack', link: '/functional-programming/05-callstack/jsinfo' },
          { text: '\'this\' Makes Sense', link: '/functional-programming/06-this/jsinfo' },
        ],
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rivmos/js-journal' }
    ]
  }
})
