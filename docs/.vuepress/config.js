const path = require('path');

const ohmyjs = require('./sidebar/oh-my-js');
const ohmyvue = require('./sidebar/oh-my-vue');
const ohmygit = require('./sidebar/oh-my-git');
const ohmylinux = require('./sidebar/oh-my-linux');
const undercore = require('./sidebar/underscore-analysis');
const microCode = require('./sidebar/micro-code');

module.exports = {
  base: '/',
  title: '前端杂货铺',
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
    '.vuepress/sidebar/underscore-analysis.js',
  ],
  themeConfig: {
    // 百度统计
    baidu_tongji: "969e7a19e58c941d5db2a9bf87885340",
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'wencaizhang/oh-my-js',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'wencaizhang/oh-my-js',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
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