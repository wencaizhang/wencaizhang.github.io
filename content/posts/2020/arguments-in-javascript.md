---
title: "JavaScript 的参数研究"
date: 2019-12-03T10:12:31+08:00
draft: true
toc: true
images:
tags: 
  - 参数
  - 面试题
---



## 缘起

在一次群聊中看到如下的一段代码，要求判断最终的打印结果是什么：

```js
function getObj (obj) {
  obj.age = 18;
  obj = {
    name: 'jason',
    age: 26,
  }
  return obj;
}
var p = {
  name: 'bob',
  age: 20,
}

var p2 = getObj(p)
console.log(p)
console.log(p2)
```
