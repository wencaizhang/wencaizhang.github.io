const path = require('path');
const fs = require('fs');

/**
// 最终要得到 sidebar 属性值的数据结构
// 同时，嵌套层级只一级，即 children 只会出现一次
const ret = {
  sidebar: {
    '/oh-my-js/': [
      {
        title: 'Array-ES3',
        collapsable: true,
        children: [
          './00-other/this',
          './00-other/prototype',
          './00-other/bind',
          './00-other/closure',
          './00-other/call-and-apply',
        ]
      },
    ]
  }
}
 */

const sidebar = {};
// 会跳过下列文件夹
const blacklistReg = /(imgs)|(images)|(^\.)|(\.js)/;
const includeDir = [
  'oh-my-js',
  'oh-my-vue',
  'oh-my-git',
  'oh-my-linux',
  'underscore-analysis',
  'micro-code',
]
function travel (dir, callback) {
  fs.readdirSync(dir).forEach(file => {

    let pathname = path.join(dir, file);
    if (!includeDir.some(dir => pathname.includes(dir))) {
      // 如果不是指定的目录，代码执行结束
      return;
    }
    if (blacklistReg.test(file)) {
      return;
    }
    const arr = pathname.split('/')
    let deep = arr.indexOf(file);

    if (deep === 0) {
      // arr: [ 'oh-my-js' ]
      if (file == 'README.md') {
        return;
      }
      sidebar[`/${arr[0]}/`] = sidebar[`/${arr[0]}/`] || [];
      console.log(sidebar)
    }
    else if (deep === 1) {
      // arr: [ 'oh-my-js', '01-Array-ES3' ]
      if (file == 'README.md') {
        sidebar[`/${arr[0]}/`].unshift(`/${arr[0]}/`);
      } else {
        sidebar[`/${arr[0]}/`].push({
          title: arr[1],
          collapsable: false,
          children: []
        })
      }
    }
    else {
      // arr: [ oh-my-js, 01-Array-ES3, 01-Array.prototype.concat.md ]
      // file: 01-Array.prototype.concat.md
      console.log(arr + '---' + file);
      const base = '/';
      const item = sidebar[`/${arr[0]}/`].find(item => {
        return item.title === arr[1];
      })
      if (file == 'README.md') {
        item && item.children.unshift(base + arr.join('/').replace(file, ''));
        return;
      }
      // arr.shift();
      item && item.children.push( base + arr.join('/'));
    }

    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback)
    }
  })
}

function run () {
  let dir = './'
  travel(dir, () => {})
  fs.writeFileSync('db.js', 'var sidebar = ' + JSON.stringify(sidebar),"utf-8")
  return sidebar;
}
// run();
module.exports = run;