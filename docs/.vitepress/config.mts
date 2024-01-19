import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: 'Xen Network',
  description: "Xen Network by Faircrypto is a cryptocurrency platform designed to adhere to the fundamental principles of crypto, making it widely accessible",

  lastUpdated: true,
  themeConfig: {
    footer: {
      copyright: 'Copyright © 2022-present Fair Crypto'
    },

    editLink: {
      pattern: 'https://github.com/faircrypto/x1-docs/edit/main/docs/:path'
    },

    nav: [
      {
        text: 'X1 Blockchain',
        link: '/go-x1/',
        activeMatch: '/go-x1/'
      },
      {
        text: 'Xen Crypto',
        link: '/xen-crypto/',
        activeMatch: '/xen-crypto/'
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/faircrypto' },
    ],
  },

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})
