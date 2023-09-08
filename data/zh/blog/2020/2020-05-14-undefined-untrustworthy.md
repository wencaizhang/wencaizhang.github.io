---
title: "不可靠的 undefined"
date: "2020-05-14"
draft: false
category:
- JavaScript
tags:
  - javascript
  - undefined
---

JavaScript 中有六种基本数据类型：`Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`(在 ES6 中新增)，除此之外还有一种复杂数据类型 `Object`。

今天我们聊聊其中的一种类型：`Undefined`。

## 先来说说什么是 undefined

当一个变量被定义却没有被赋值的时候，它的初始值就是 `undefined`，或者在一个函数执行时没有传入对应对实参，那么这个参数的的值就是 `undefined`。

## 为什么说 undefined “不可靠”

为什么说我说 `undefined` 是“不可靠”的呢？因为 `undefined` 是可以被人为修改的。

不信你看：

```js
function fn () {
  var undefined = 1
  console.log(undefined)
}

fn()  // 1
```

在函数 `fn` 中，定义了一个变量 `undefined` 并赋值为 `1`，在此之后所有的 `undefined` 的值就变成了 `1`，而不是一开始所说的初始值 `undefined` 了。

上面的例子是在函数内部定义的变量，其实函数外部也可以将 `undefined` 定义为一个变量。

```js
var undefined = 1  // Chrome undefined; IE8 1
console.log(undefined)
```

幸运的是，这种写法只在 IE8 上面才生效，Chrome 浏览器中无法生效。在 Chrome 中 `undefined` 的值就是 `undefined` 无法被修改（但第一个函数的例子仍然可以在 Chrome 中生效）。

之所以有这种现象，是因为 `undefined` 不是 JavaScript 的保留字或关键字，所以 `undefined` 可以被当作变量名使用，考虑到这种这种被当做变量名使用的情况，如果我们在开发中直接使用 `undefined` 就可能会有风险了（有可能某个插件中篡改了 `undefined` 的值）。

## 如何准确地获取 undefined

考虑到上面 `undefined` 被重新赋值的情况，我们就需要找到能够得到“真实”的 `undefined` 的方法。下面是我想到的几个方法：

### 1. 变量被定义，但是没有被赋值

根据 `undefined` 的定义，如果一个变量被创建了却没有赋予它一个值，那这个变量的值就是 `undefined`，这里在一个匿名函数中创建一个变量，但不给它赋值，而是直接将它作为函数返回值，通过匿名函数立即执行的方式得到真实的 `undefined` 值。

```js
var result = (function () {
  var a;
  return a;
})()

console.log(result); // undefined
```

### 2. 函数参数的缺省值是 undefined

这也是根据 `undefined` 的产生规则，一个函数在执行时，如果它的一个参数没有被传值，那这个参数的值就是 `undefined`。

```js
var result = (function(a) {
  return a;
})()

console.log(result); // undefined
```

### 3. 函数默认返回值是 undefined。

这是根据函数返回值的规则，如果函数没有 `return` 语句或者 `return` 没有指定具体的值，默认函数的返回值就是 `undefined`。

```js
var result = (function () {})()

console.log(result); // undefined
```

### 4. 最简洁易用的写法

这个是在看 [underscore源码](https://github.com/jashkenas/underscore/blob/1.10.2/underscore.js#L1375) 的时候学到的，相比上面几种方法，这种写法非常简洁，而且也更容易使用，非常推荐使用这种方法。

```js
// 这两种方式相同，且开销最小
console.log( void(0) )  // undefined
console.log( void 0 )  // undefined
```

## 一些 JS 库的做法

这里主要参考了 underscore 和 jQuery 插件的做法

在 underscore 中有一个用来判断是否为 undefined 的工具函数（[源码在此](https://github.com/jashkenas/underscore/blob/1.10.2/underscore.js#L1375)）

```js
_.isUndefined = function(obj) {
  return obj === void 0;
};
```

可以看到 underscore 使用了 void 0 的方法

jQuery 的插件中经常会使用下面结构来包裹代码

```js
;(function($, doc, win, undefined) {
  // some code
})(jQuery, document, window)
```

这则是利用函数中不给参数传值，该参数就是 `undefined` 的规则来实现的。

## 总结

> 牛顿年老时写道：“我并不知道我在世人眼中是什么模样，对我来说，我似乎只像是一个在海边玩耍的男孩，不时找一颗平滑的卵石，或是比较美丽的贝壳来取悦自己，而真理的大海则横陈在我面前，一无发现。”

我此刻的感受也是如此，JavaScript 的原理和延伸出来的写法浩如烟海，甚至一个小小的 `undefined` 都值得细细品味。在真理的大海面前，我似乎也只是一个在海边玩耍的男孩。

共勉~

（完）

---

参考文章：
- [undefined - MDN ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)