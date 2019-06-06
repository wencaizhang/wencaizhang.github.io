const path = require('path');

// const ohmyjs = require('./sidebar/oh-my-js');
// const ohmyvue = require('./sidebar/oh-my-vue');
// const ohmygit = require('./sidebar/oh-my-git');
// const ohmylinux = require('./sidebar/oh-my-linux');
// const undercore = require('./sidebar/underscore-analysis');
// const microCode = require('./sidebar/micro-code');

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
  evergreen: true,
  extraWatchFiles: [
    './**/*',
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
      // {
      //   text: '金光闪闪',
      //   link: '/bling/'
      // },
    ],
    sidebar: {
      '/oh-my-js/': [
        {
          title: 'Array-ES3',
          collapsable: true,
          children: [
            './01-Array-ES3/',
            './01-Array-ES3/01-Array.prototype.concat',
            './01-Array-ES3/02-Array.prototype.join',
            './01-Array-ES3/03-Array.prototype.push',
            './01-Array-ES3/04-Array.prototype.pop',
            './01-Array-ES3/05-Array.prototype.shift',
            './01-Array-ES3/06-Array.prototype.unshift',
            './01-Array-ES3/07-Array.prototype.slice',
            './01-Array-ES3/08-Array.prototype.splice',
            './01-Array-ES3/09-Array.prototype.reverse',
            './01-Array-ES3/10-Array.prototype.sort',
          ]
        },
        {
          title: 'Array-ES5',
          collapsable: true,
          children: [
            './02-Array-ES5/',
            './02-Array-ES5/01-Array.prototype.forEach',
            './02-Array-ES5/02-Array.prototype.map',
            './02-Array-ES5/03-Array.prototype.filter',
            './02-Array-ES5/04-Array.prototype.some',
            './02-Array-ES5/05-Array.prototype.every',
            './02-Array-ES5/06-Array.prototype.indexOf',
            './02-Array-ES5/07-Array.prototype.lastIndexOf',
            './02-Array-ES5/08-Array.prototype.reduce',
            './02-Array-ES5/09-Array.prototype.reduceRight',
          ]
        },
        {
          title: 'Array-ES6',
          collapsable: true,
          children: [
            './03-Array-ES6/',
            './03-Array-ES6/01-Array.from',
            './03-Array-ES6/02-Array.of',
            './03-Array-ES6/10-Array.isArray',
            './03-Array-ES6/03-Array.prototype.copyWithin',
            './03-Array-ES6/04-Array.prototype.find',
            './03-Array-ES6/05-Array.prototype.findIndex',
            './03-Array-ES6/06-Array.prototype.fill',
            './03-Array-ES6/07-Array.prototype.entries',
            './03-Array-ES6/08-Array.prototype.keys',
            './03-Array-ES6/09-Array.prototype.values',
            './03-Array-ES6/10-Array.prototype.includes',
          ]
        },
        {
          title: 'String',
          collapsable: true,
          children: [
            './04-String/000-transform-string-to-tag',
            './04-String/001-String.prototype-toLowerCase-toUpperCase',
            './04-String/002-String.prototype.slice',
            './04-String/003.String.prototype.split',
            './04-String/004.String.prototype.match',
            './04-String/005-String.prototype.trim',
            './04-String/006-String.prototype.includes',
            './04-String/008-String.prototype.repeat',
            './04-String/009-String.prototype-padstart-padend',
            './04-String/04-String.prototype.search',
            './04-String/05-String.prototype.match',
            './04-String/06-String.prototype.replace',
          ]
        },
        {
          title: 'Object',
          collapsable: true,
          children: [
            './05-Object/01-Object.prototype.hasOwnProperty',
            './05-Object/02-Object.keys',
            './05-Object/03-Object.values',
            './05-Object/04-Object.entries',
            './05-Object/05-Object.assign',
            './05-Object/06-Object.is',
            './05-Object/07-Object.defineProperty',
            './05-Object/08-Object.create',
          ]
        },
        {
          title: 'Regexp',
          collapsable: true,
          children: [
            './06-Regexp/0-正则表达式预查',
            './06-Regexp/00-Regexp',
            './06-Regexp/01-Regexp.prototype.lastIndex',
            './06-Regexp/02-Regexp.prototype.test',
            './06-Regexp/03-Regexp.prototype.exec',
            './06-Regexp/100-regexp-demos',
          ]
        },
      ],
      '/oh-my-vue/': [
        {
          title: 'vuejs',
          collapsable: true,
          children: [
            '',
            './vuejs/000-findComponents',
            './vuejs/00-vue组件通信',
            './vuejs/the-difference-of-v-show-and-v-if-in-vue',
            './vuejs/01-用户登录状态管理.md',
            './vuejs/03-样式私有化.md',
            './vuejs/05-vue全局公用函数.md',
            './vuejs/05-webpack项目开发环境访问时提示：Invalid Host header.md',
            './vuejs/06-Vue点击button使input获取焦点.md',
            './vuejs/07-axios 封装.md',
            './vuejs/08-本地存储数据方案分析.md',
            './vuejs/10-webpack打包优化.md',
            './vuejs/11-键盘弹起优化.md',
            './vuejs/12-vscode自定义代码段.md',
            './vuejs/13-header-and-footer组件化.md',
          ]
        },
        {
          title: 'vuejs插件',
          collapsable: true,
          children: [
            './vuejs-plugin/02-设置网页title.md',
            './vuejs-plugin/04-vuex状态管理.md',
            './vuejs-plugin/09-vuex 状态持久化.md',
            './vuejs-plugin/vue.ls.md',
          ]
        },
      ],
      '/oh-my-git/': [
        {
          title: '基本命令',
          collapsable: true,
          children: [
            './01-基本命令/00-获取代码',
            './01-基本命令/02-记住密码',
            './01-基本命令/03-查看提交记录',
            './01-基本命令/04-分支',
            './01-基本命令/05-标签',
            './01-基本命令/06-查看修改和撤销修改',
          ]
        },
        {
          title: '常见问题',
          collapsable: true,
          children: [
            './02-常见问题/01-本地分支关联远程分支',
            './02-常见问题/02-git乱码问题',
            './02-常见问题/03-工作进行一半需切换到另一分支',
            './02-常见问题/04-修改commit信息',
            './02-常见问题/git-submodule',
          ]
        },
        {
          title: 'Git实践',
          collapsable: true,
          children: [
            './03-Git实践/01-Git基本工作流程',
            './03-Git实践/02-Git最佳实践',
          ]
        },
      ],
      '/oh-my-linux/': [
        {
          title: '常用命令',
          collapsable: true,
          children: [
            './01-常用命令/docker-command',
            './01-常用命令/00-ls命令',
            './01-常用命令/01-查找命令',
            './01-常用命令/02-解压命令',
            './01-常用命令/03-下载命令',
            './01-常用命令/04-文件传输',
            './01-常用命令/05-grep',
            './01-常用命令/06-软链接',
          ]
        },
        {
          title: '实用tips',
          collapsable: true,
          children: [
            './02-实用tips/01-设置alias',
            './02-实用tips/02-设置全局环境变量',
          ]
        },
      ],
      '/underscore-analysis/': [
        '',
        'some-concepts',
        {
          title: '集合 Collections',
          collapsable: true,
          children: [
            './Collections/_.each',
            './Collections/_.sample',
            './Collections/_.shuffle',
          ]
        },
        {
          title: '数组 Arrays',
          collapsable: true,
          children: [
            './Arrays/_.first',
            './Arrays/_.uniq',
            './Arrays/_.findIndex',
            './Arrays/_.findLastIndex',
          ]
        },
        {
          title: '函数 Functions',
          collapsable: true,
          children: [
            './Functions/_.memoize',
            './Functions/_.partial',
            './Functions/_.delay',
            './Functions/_.debounce',
            './Functions/_.throttle',
          ]
        },
        {
          title: '对象 Objects',
          collapsable: true,
          children: [
            './Objects/_.keys',
            './Objects/_.values',
            './Objects/_.isArray',
            './Objects/_.functions',
            './Objects/_.isFunction',
            './Objects/_.isUndefined',
          ]
        },
        {
          title: '工具函数 Utility',
          collapsable: true,
          children: [
            './Utility/_.noConflict',
            './Utility/_.random',
            './Utility/_.mixin',
          ]
        },
        {
          title: '链式语法 Chaining',
          collapsable: true,
          children: [
            './Chaining/',
            './Chaining/_.chain',
            './Chaining/_.prototype.value',
          ]
        },
        {
          title: '辅助函数',
          collapsable: true,
          children: [
            './helper/',
            './helper/isArrayLike',
          ]
        },
      ],
      '/micro-code/': [
        {
          title: 'JS相关',
          collapsable: true,
          children: [
            './js/sayHello',
            './js/downloadFile',
            './js/about-time',
            './js/getStyles',
            './js/isMobile',
            './js/ajax',
            './js/getParams',
            './js/iframe',
            './js/textPopup',
            './js/rollTitle',
            './js/bind',
            './js/type',
            './js/deepCopy',
          ]
        },
        {
          title: '样式相关',
          collapsable: true,
          children: [
            './styles/reset',
            './styles/common',
            './styles/meta',
            './styles/loading',
          ]
        }
      ],
    }

  },
}
