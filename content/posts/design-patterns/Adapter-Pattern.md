---
title: "适配器模式"
date: 2020-12-12
draft: false
categories:
- 设计模式
tags:
- 适配器模式
- 代码重构
series:
- 设计模式
---

## 背景交代

## 场景一：转换数据格式


Vue 中的 computed 属性就是现成的一个适配器：

```js
const vm = new Vue({
  data: {
    authors: [ '张教授', '王教授']
  },
  computed: {
    authorsText () {
      return this.authors.join('、')
    }
  }
})
```

又比如

## 撸起袖子加油干