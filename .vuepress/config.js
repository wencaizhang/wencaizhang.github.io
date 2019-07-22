const path = require('path');

const ohmyjs = require('./sidebar/oh-my-js');
const ohmyvue = require('./sidebar/oh-my-vue');
const ohmygit = require('./sidebar/oh-my-git');
// const ohmylinux = require('./sidebar/oh-my-linux');
const ohmylinux = require('../articles/oh-my-linux/tree');
const undercore = require('./sidebar/underscore-analysis');
const microCode = require('./sidebar/micro-code');

module.exports = {
  base: '/',
  title: '前端锦囊',
  description: '',
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
  sidebarDepth: 2, // 同时提取 h2 h3
  evergreen: true,
  extraWatchFiles: [
    '.vuepress/sidebar/oh-my-js.js',
    '.vuepress/sidebar/oh-my-vue.js',
    '.vuepress/sidebar/oh-my-git.js',
    '.vuepress/sidebar/oh-my-linux.js',
    '.vuepress/sidebar/underscore-analysis.js',
    '.vuepress/sidebar/micro-code.js',

    '../articles/oh-my-linux/tree',
  ],
  themeConfig: {
    // 百度统计
    baidu_tongji: "969e7a19e58c941d5db2a9bf87885340",
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
        text: 'gitmoji',
        link: '/articles/oh-my-git/03-git-practice/04-gitmoji.html'
      },
      {
        text: '目录',
        items: [{
            text: 'oh-my-js',
            link: '/articles/oh-my-js/'
          },
          {
            text: 'oh-my-vue',
            link: '/articles/oh-my-vue/'
          },
          {
            text: 'oh-my-git',
            link: '/articles/oh-my-git/'
          },
          {
            text: 'oh-my-linux',
            link: '/articles/oh-my-linux/'
          },
          {
            text: 'undercore源码学习',
            link: '/articles/underscore-analysis/'
          },
          {
            text: '代码片段',
            link: '/articles/micro-code/'
          },
        ]
      },
      
    ],
    sidebar: {
      '/articles/oh-my-js/': ohmyjs,
      '/articles/oh-my-vue/': ohmyvue,
      '/articles/oh-my-git/': ohmygit,
      '/articles/oh-my-linux/': ohmylinux,
      '/articles/underscore-analysis/': undercore,
      '/articles/micro-code/': microCode,
    },
  },
}
