import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "JS Journal",
  description: "A personal learning journal for JavaScript",
  base: '/js-journal/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fundamentals', link: '/Javascript Fundamentals/index' },
      { text: 'Functional', link: '/Functional Programming/index' }
    ],
    sidebar: [
      {
        text: 'Javascript Fundamentals',
        items: [
          { text: 'Introduction', link: '/Javascript Fundamentals/index' },
          { text: 'Hello World', link: '/Javascript Fundamentals/hello_world/jsinfo' },
          { text: 'Code Structure', link: '/Javascript Fundamentals/code_structure/jsinfo' },
          { text: 'Variables', link: '/Javascript Fundamentals/variables/jsinfo' },
          { text: 'Data Types', link: '/Javascript Fundamentals/data_types/jsinfo' },
        ]
      },
      {
        text: 'Functional Programming',
        items: [
          { text: 'Introduction', link: '/Functional Programming/index' },
          { text: 'Execution Context', link: '/Functional Programming/1_execution-context' },
          { text: 'Hoisting', link: '/Functional Programming/2_hoisting' },
          { text: 'Scope', link: '/Functional Programming/3_scope' },
          { text: 'Closure', link: '/Functional Programming/4_closure' },
          { text: 'Call Stack', link: '/Functional Programming/5_callstack' },
          { text: 'This', link: '/Functional Programming/6_this' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rivmos/js-journal' }
    ]
  }
})
