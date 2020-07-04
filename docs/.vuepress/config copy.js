const path = require('path');
const sidebar = require('./sidebar');

// const sidebarTree = sidebar();

const ohmyjs = require('../oh-my-js/tree')
const ohmygit = require('../oh-my-git/tree')
const ohmyvue = require('../oh-my-vue/tree')
const ohmylinux = require('../oh-my-linux/tree')
const microCode = require('../micro-code/tree')
const underscore = require('../underscore-analysis/tree')

module.exports = {
  base: '/',
  title: 'cool-fe',
  description: '',
  plugins: ['@vuepress/pwa', '@vuepress/back-to-top',[
    // 'vuepress-plugin-dehydrate',
    {
      // 禁用 SSR
      noSSR: '404.html',
      // 移除 scripts
      noScript: [
        // 支持 glob patterns
        '**/*.html',
        'foo/*.html',
        '**/static.html',
      ],
    },
  ],],
  head: [
    ['script', {
      src: '//lib.baomitu.com/clipboard.js/2.0.4/clipboard.min.js'
    }],
    // ['script', {
    //   src: 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.1/qrcode.min.js'
    // }],
    ['link', {
      rel: 'icon',
      href: 'data:image/png;base64,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'
    }],
  ],
  markdown: {
    lineNumbers: true
  },
  // permalink: "/:slug",
  evergreen: true,
  extraWatchFiles: [

  ],
  extend: '@vuepress/theme-default',
  themeConfig: {
    repo: 'wencaizhang/wencaizhang.github.io',
    // 百度统计
    // baidu_tongji: "969e7a19e58c941d5db2a9bf87885340",
    // sidebarDepth: 2, // 同时提取 h2 h3
    serviceWorker: {
      // updatePopup: true, // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      updatePopup: { 
         message: '发现新内容', 
         buttonText: '刷新',
      },
    },
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: 'ActionVue',
        link: '/ActionVue/'
      },
      {
        text: 'gitmoji',
        link: '/oh-my-git/03-git-practice/04-gitmoji.html'
      },
      {
        text: '目录',
        items: [{
            text: 'oh-my-js',
            link: '/oh-my-js/'
          },
          {
            text: 'oh-my-vue',
            link: '/oh-my-vue/'
          },
          {
            text: 'oh-my-git',
            link: '/oh-my-git/'
          },
          {
            text: 'oh-my-linux',
            link: '/oh-my-linux/'
          },
          {
            text: 'undercore源码学习',
            link: '/underscore-analysis/'
          },
          {
            text: '代码片段',
            link: '/micro-code/'
          },
        ]
      },
      
    ],
    // sidebar: sidebarTree,
    sidebar: {
      '/oh-my-js/': ohmyjs,
      '/oh-my-vue/': ohmyvue,
      '/oh-my-git/': ohmygit,
      '/oh-my-linux/': ohmylinux,
      '/underscore-analysis/': underscore,
      '/micro-code/': microCode,
    },
  },
}
