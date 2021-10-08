---
title: 封装简易 DOM 选择器
date: 2021-07-21
draft: false
categories:
- 其他
tags:
- dom
---

JavaScript 原生的 DOM 选择器代码写起来太长了，我们像一个简单的办法来简化一下吧。

<!--more-->

偶然间发现 Chrome 开发工具的 console 面板内置了两个方法 `$` 和 `$$`，作用和 `document.querySelector` 以及 `document.querySelectorAll` 这两个方法类似。

测试后发现这两个变量只在开发工具的 console 面板中才能使用，如果想要在代码中使用，就需要我们自己来封装了。但是要注意确保不会和 jQuery 的符号 `$` 冲突。

```js
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
```

测试代码：

```js
console.log($('body'));

console.log($$('div'));
```

## 思考题

思考一下，为什么不能像下面这样用直接赋值的方式来封装？


{{% notice tip "Tip" %}}
提示：思考封装前后 `this` 的分别指向谁？
{{% /notice %}}

```js
// 方式一
const $ = document.querySelector
const $$ = document.querySelectorAll

// 方式二
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
```

