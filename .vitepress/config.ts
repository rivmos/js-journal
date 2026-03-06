import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "JS Journal",
  description: "A personal learning journal for JavaScript",
  base: '/js-journal/',
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
          { text: 'Hello World', link: '/javascript-fundamentals/hello_world/jsinfo' },
          { text: 'Code Structure', link: '/javascript-fundamentals/code_structure/jsinfo' },
          { text: 'Variables', link: '/javascript-fundamentals/variables/jsinfo' },
          { text: 'Data Types', link: '/javascript-fundamentals/data_types/jsinfo' },
          { text: 'Browser Interaction', link: '/javascript-fundamentals/browser_interaction/jsinfo' },
          { text: 'Type Conversions', link: '/javascript-fundamentals/type_conversions/jsinfo' },
          { text: 'Mathematical Operations', link: '/javascript-fundamentals/mathematical_operations/jsinfo' },
        ],
        collapsed: true,
      },
      {
        text: 'Functional Programming',
        items: [
          { text: 'Execution Context', link: '/functional-programming/1_execution-context' },
          { text: 'Hoisting', link: '/functional-programming/2_hoisting' },
          { text: 'Scope', link: '/functional-programming/3_scope' },
          { text: 'Closure', link: '/functional-programming/4_closure' },
          { text: 'Call Stack', link: '/functional-programming/5_callstack' },
          { text: '\'this\' Makes Sense', link: '/functional-programming/6_this' },
        ],
        collapsed: true,
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rivmos/js-journal' }
    ]
  }
})
