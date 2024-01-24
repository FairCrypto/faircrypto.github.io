import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { type DefaultTheme } from 'vitepress'
import {HeadConfig} from "vitepress/types/shared";

// https://vitepress.dev/reference/site-config

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'X1 Blockchain',
      link: '/x1/explore-the-network',
      activeMatch: '/x1/'
    },
    {
      text: 'Xen Crypto',
      link: '/xen-crypto/overview',
      activeMatch: '/xen-crypto/overview'
    }
  ];
}

function sidebarX1(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'X1 Blockchain',
      base: '/x1/',
      items: [
        { text: 'Explore the Network', link: 'explore-the-network' },
      ]
    },
    {
      text: 'Developer Docs',
      base: '/x1/developer/',
      items: [
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Run a Node Interactively', link: 'run-a-node-interactively' },
        { text: 'Run a Node Service', link: 'run-a-node-service' },
        { text: 'Run a Node with Docker', link: 'run-a-node-with-docker' },
        { text: 'Setup Firewall', link: 'setup-firewall' },
        { text: 'Become a Validator', link: 'become-a-validator' },
        { text: 'Register a Validator', link: 'register-a-validator' },
      ]
    }
  ]
}

function sidebarXenCrypto(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Xen Crypto',
      base: '/xen-crypto/',
      items: [
        { text: 'Overview', link: 'overview' },
        { text: 'XeNFT', link: 'xenft' },
        { text: 'Xen Stake', link: 'xen-stake' },
      ]
    }
  ]
}

export default defineConfig({
  title: 'Xen Network Documentation',
  description: "Xen Network by Faircrypto is a cryptocurrency platform designed to adhere to the fundamental principles of crypto, making it widely accessible.",

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Xen Network Docs',

    footer: {
      copyright: 'Copyright © 2024 <a href="https://faircrypto.org/">Fair Crypto</a>'
    },

    editLink: {
      pattern: 'https://github.com/faircrypto/faircrypto.github.io/edit/main/docs/:path'
    },

    sidebar: {
      '/x1/': { base: '/x1/', items: sidebarX1() },
      '/xen-crypto/': { base: '/xen-crypto/', items: sidebarXenCrypto() },
    },

    nav: nav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/faircrypto' },
    ],
  },

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  head: head()
})

function head(): HeadConfig[] {
  return [
    // adding some redirects
    [
      'script',
      { id: 'redirects' },
      `;(() => {
        const redirects = {
          '/x1': '/x1/explore-the-network',
          '/x1/': '/x1/explore-the-network',
          '/x1/developer': '/x1/developer/getting-started',
          '/x1/developer/': '/x1/developer/getting-started',
          '/xen-crypto': '/xen-crypto/overview',
          '/xen-crypto/': '/xen-crypto/overview',
          '/go-x1': '/x1/explore-the-network',
          '/go-x1/': '/x1/explore-the-network',
          '/go-x1/docs': '/x1/explore-the-network',
          '/go-x1/docs/': '/x1/explore-the-network',
          '/go-x1/docs/validators': '/x1/developer/become-a-validator',
          '/go-x1/docs/validators/': '/x1/developer/become-a-validator',
        }
        const redirect = redirects[window.location.pathname]
        if (redirect) {
          window.location.replace(redirect)
        }
      })()`
    ],

    // facebook meta
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/xen-logo.svg' }],

    // twitter meta
    ['meta', { property: 'twitter:title', content: 'XEN Network Documentation'}],
    ['meta', { property: 'twitter:card', content: 'summary'}],
    ['meta', { property: 'twitter:site', content: '@XEN_Crypto'}],
    ['meta', { property: 'twitter:description', content: 'Xen Network by Faircrypto is a cryptocurrency platform designed to adhere to the fundamental principles of crypto, making it widely accessible'}],
    ['meta', { property: 'twitter:image', content: '/xen-logo.svg'}],

    // generic meta
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ];
}

