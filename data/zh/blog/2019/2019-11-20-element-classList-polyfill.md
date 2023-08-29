---
title: "Element ClassList Polyfill"
date: "2019-11-20T15:47:47+08:00"
draft: false
images:
tags:
  - classList
  - html5
---

> 没有 `jquery` 也可以愉快的操作类名了！

## classList 介绍

classList 是访问元素类的一种方便的方法。

假设页面有这样一个元素：

```html
<div id="box" class="a b c"></div>
```

在 chrome 中打印它的 `classList`：

```js
var box = document.querySelector('#box')
var classArray = box.classList
console.log(classArray)
```

可以看到打印结果如下：


可以看到 `classList` 是一个类数组的数据结构，每一项元素都是一个类名，length 是元素类名的个数。

`classList` 是只读属性，但是它提供了几个方法来修改类名：

| 方法 | 描述 |
| :--- | :--- |
| `add` | 添加一个或多个类名 |
| `contains` | 判断是否包含指定类名 |
| `items` | 返回索引对应的类名 |
| `remove` | 移除一个或多个类名 |
| `toggle` | 切换类名 |
| `replace` | 替换类名 |
