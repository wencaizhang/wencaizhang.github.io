const path = require('path');
const sidebar = require('./sidebar');

const sidebarTree = sidebar();

module.exports = {
  base: '/',
  title: 'cool-fe',
  description: '',
  plugins: ['@vuepress/pwa', '@vuepress/back-to-top'],
  head: [
    ['script', {
      src: '//lib.baomitu.com/clipboard.js/2.0.4/clipboard.min.js'
    }],
    ['script', {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.1/qrcode.min.js'
    }],
    ['link', {
      rel: 'icon',
      href: '/images/js.jpg'
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
        link: '/ActionVue'
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
    sidebar: sidebarTree,
    // sidebar: {
    //   '/oh-my-js/': ohmyjs,
    //   '/oh-my-vue/': ohmyvue,
    //   '/oh-my-git/': ohmygit,
    //   '/oh-my-linux/': ohmylinux,
    //   '/underscore-analysis/': undercore,
    //   '/micro-code/': microCode,
    // },
  },
}
