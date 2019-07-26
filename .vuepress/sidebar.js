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

function travel (dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    if (blacklistReg.test(file)) {
      return;
    }
    let pathname = path.join(dir, file)
    const arr = pathname.split('/')
    let deep = arr.indexOf(file);

    if (deep === 1) {
      if (file == 'README.md') {
        return;
      }
      sidebar[`/${file}/`] = [];
    } else if ( deep === 2) {
      if (file == 'README.md') {
        sidebar[`/${arr[1]}/`].unshift('');
        return;
      }
      sidebar[`/${arr[1]}/`].push({
        title: file,
        collapsable: false,
        children: []
      })
    } else {
      const base = './' + arr[2] + '/';
      const item = sidebar[`/${arr[1]}/`].find(item => {
        return item.title === arr[2];
      })
      if (file == 'README.md') {
        item && item.children.unshift(base);
        return;
      }
      item && item.children.push( base + arr[3]);
    }

    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback)
    }
  })
}

function run () {
  let dir = './articles'
  travel(dir, () => {})
  fs.writeFileSync('db.js', 'var sidebar = ' + JSON.stringify(sidebar),"utf-8")
  return sidebar;
}
// run();
module.exports = run;