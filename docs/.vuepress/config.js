const path = require('path');

const ohmyjs = require('./sidebar/oh-my-js');
const ohmyvue = require('./sidebar/oh-my-vue');
const ohmygit = require('./sidebar/oh-my-git');
const ohmylinux = require('./sidebar/oh-my-linux');
const undercore = require('./sidebar/underscore-analysis');
const microCode = require('./sidebar/micro-code');

module.exports = {
  base: '/',
  title: '前端锦囊',
  description: '',
  head: [
    ['script', {
      src: 'https://cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js'
    }],
    ['link', {
      rel: 'icon',
      href: '/images/js.jpg'
    }],
  ],
  markdown: {
    lineNumbers: true
  },
  evergreen: true,

  extraWatchFiles: [
    './**/*',
  ],
  themeConfig: {
    // 百度统计
    baidu_tongji: "969e7a19e58c941d5db2a9bf87885340",

    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: 'oh-my-x系列',
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

        ]
      },
      {
        text: 'undercore源码学习',
        link: '/underscore-analysis/'
      },
      {
        text: '代码片段',
        link: '/micro-code/'
      },
    ],
    sidebar: {
      '/oh-my-js/': ohmyjs,
      '/oh-my-vue/': ohmyvue,
      '/oh-my-git/': ohmygit,
      '/oh-my-linux/': ohmylinux,
      '/underscore-analysis/': undercore,
      '/micro-code/': microCode,
    }

  },
}