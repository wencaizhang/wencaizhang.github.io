---
title: 总结 JavaScript 中的 this 指向问题
slug: this-in-javascript
draft: false
toc: true
images:
tags:
  - JavaScript
  - this指向
outputs:
  - html
  - markdown
category: JS API
date: 2019-09-29 14:49:00
---

初学 JavaScript 的时候，时常对于代码中 `this` 的值感到困惑，因为 JavaScript 中的 `this` 的值总是不确定的，每次都要将 `this` 的值打印出来才能放心。

实际上 `this` 具体指向哪个对象是在函数运行时的环境动态绑定的，而非函数被声明时的环境。

尽管如此，总还是有规律可循的，我们可以将 `this` 的场景大致分为下面 5 种：

+ 作为普通函数调用
+ 作为对象的方法调用
+ 作为构造器调用
+ 通过 `call` 和 `apply` 调用
+ 箭头函数

> 在 ES6 标准新增的箭头函数中的 `this` 是由被声明的环境即上下文来确定的。

## 情况一：作为普通函数调用

这可能是我们学习过程中最先接触到的一种函数类型。

**1) 普通函数：**

当函数作为普通函数或者匿名函数调用时，`this` 总是指向全局对象，在浏览器中这个全局对象是 `window`，而在 nodejs 中全局对象是 `global`，这里讨论的是浏览器端，所有代码都可以在 chrome 开发者工具的 console 面板中执行。

```js
window.name = 'globalName'

function printName1 () {
  console.log(this === window)
  console.log(this.name)
}
printName1()
// true
// "globalName"
```

ES5 规范提出了「严格模式」，启用方式是在整个脚本文件第一行或者函数内第一行添加一条语句 `'use strict'` 即可开启严格模式。

如果启用「严格模式」，那么 `this` 就不再是指向全局对象，而是 `undefined` 。

```js
function printName2 () {
  "use strict" // 启用严格模式
  console.log(this)  // undefined
}

printName2()
```

**2) 匿名函数：**

匿名函数自执行，这种形式封装公用库的时候最常见：

```js
window.name = 'globalName'
(function () {
  console.log(this === window)  // true
  console.log(this.name)  // "globalName"
})()
```

和普通函数一样，匿名函数中的 `this` 也是指向全局对象。

作为参数的匿名函数：

```js
window.name = 'globalName'

setTimeout(function () {
  console.log(this === window)  // true
  console.log(this.name)  // "globalName"
}, 100)

[1, 2, 3].forEach(function (item) {
  console.log(item, this.name)
  // 1 "globalName"
  // 2 "globalName"
  // 3 "globalName"
})
```

## 情况二：作为对象的方法调用

当函数作为对象当属性方法调用时，`this` 总指向这个对象。

```js
var obj = {
  name: 'obj',
  printName: function () {
    console.log(this === obj)  // true
    console.log(this.name)  // "obj"
  }
}

obj.printName()
```

但是如果一个对象的属性方法又赋值给了其他变量，那么 `this` 将发生变化，其指向只有在函数执行那一刻才能确定。例如：

```js
var obj = {
  name: 'obj',
  printName: function () {
    console.log(this === obj)  // true
    console.log(this.name)  // "obj"
  }
}

var myPrintName = obj.printName
window.name = 'globalName'

myPrintName()
// false
// "globalName"
```

当 `myPrintName` 执行时，就要按照普通函数来判断 `this` 指向了。

再来一个例子：

```js
var obj = {
  name: 'obj',
  printName: function () {
    console.log(this === obj)  // true
    console.log(this.name)  // "obj"
  }
}

var obj2 = {
  name: 'obj2',
}
obj2.printName = obj.printName

obj2.printName()
// false
// "obj2"
```

当 `obj2.printName` 执行时，`printName` 是作为 `obj2` 的属性方法来调用的，因此 `this` 指向 `obj2` 这个对象。

所以说，JavaScript 中的 this 指向无法在定义时判断，只有在其执行时才能判断。


```js
var printName () {
  console.log(this === window)
  console.log(this.name)
}
```

## 情况三：作为构造器调用

在 JavaScript 中没有「类」的概念（直到 ES6 才有类的出现），而是把函数作为构造器，通过 new 操作符来生成实例。

那么在构造函数中 `this` 就指向新生成的实例。

```js
var MyClass = function () {
  // 给实例添加 name 属性
  this.name = 'myclass'
  this.printName = function () {
    return this.name
  }
}
var obj = new MyClass()
obj.printName() // "myclass"
```

## 情况四：显式指定 this

前面的几种方法都是被动地根据代码执行时的环境来判断 `this` 具体指向哪里，那么有没有办法主动指定 `this` 指向呢。

答案当然是有的，甚至它们的出场率还相当高。

常见的显式指定 `this` 的方法主要是 `call`，`apply` 和 `bind` 来，在函数式编程中几乎离不开这三个方法。

先定义如下变量：

```js
window.name = 'globalName'
function printName () {
  console.log(this.name)
}

var obj1 = { name: 'obj1' }
var obj2 = { name: 'obj2' }
var obj3 = { name: 'obj3' }
```

默认情况 this 指向全局对象 window

```js
printName()  // "globalName"
```

使用 `call` 来改变 `this` 指向：

```js
printName.call(obj1)  // "obj1"
```

使用 `apply` 来改变 `this` 指向：

```js
printName.apply(obj2)  // "obj2"
```

使用 `bind` 来改变 `this` 指向：

```js
var printName2 = printName.bind(obj3)
printName2()  // "obj3"
```

除此之外，还有一些函数也可以修改 this 指向，例如：forEach, map, filter, some, every 等。以 `forEach` 为例：

```js
var obj = { name: 'zwc' }
var arr = [ 1, 2 ]

arr.forEach(function (item, index) {
  console.log(item, this)
})
// 1 Window
// 2 Window

arr.forEach(function (item, index) {
  console.log(item, this)
}, obj)
// 1 {name: "zwc"}
// 2 {name: "zwc"}
```

`forEach` 第一个参数接收一个函数作为迭代器，用来处理数组中每一项元素，这个函数通常是一个匿名函数，函数内部的 `this` 指向全局对象。

`forEach` 第二个参数可以接收一个对象，这个对象就是参数函数中的 `this` 指向。

根据打印结果可以看到，在 `forEach` 的迭代器函数中的 `this` 已经指向了 `obj` 。


## 情况五：ES6箭头函数

### 箭头函数简介

ES6 允许使用「箭头」（`=>`）定义函数。

```js
var f = v => v

// 等同于
var f = function (v) {
  return v
}
```

除了形式更简洁之外，箭头函数没有自己的 `this`，而是**从自己作用域链的上一层继承 `this`**。


> **箭头函数总是从自己作用域链的上一层继承 `this`。**

神马意思呢？我的理解就是箭头函数内部的 `this` 指向永远是箭头函数被定义时所在的作用域的 `this`，并且无法修改。

### 无法绑定 this

使用 call 来调用箭头函数时，第一个参数会被忽略，也就是说无法修改 this 指向。apply 和 bind 也是同样现象。

```js
var printName = () => {
  console.log(this === window) // true
}

var obj = { name: 'obj' }

printName.call(obj)
```


### 例子一

来看一个例子，在不使用箭头函数的情况下，我们知道构造器函数内部 this 指向对象实例，而匿名函数的 this 是指向全局对象的，因此想要通过定时器打印对象实例的 `age` 属性，只能用一个变量 `self` 保存 `this` 的引用（即闭包）


```js
function Person(){
  // 构造器函数内部 this 指向对象实例
  this.age = 0
  var self = this
  setInterval(function () {
    // 匿名函数中 this 指向全局对象
    console.log(self.age++)
  }, 1000)
}

var p = new Person()
```

使用箭头函数之后，因为箭头函数的 `this` 继承自其被定义时所在环境的 `this`，在本例中这个 this 就是实例对象：

```js
function Person(){
  // 构造器函数内部 this 指向对象实例
  this.age = 0
  setInterval(() => {
    // 这里的 this 也指向构造函数的 this
    console.log(this.age++)
  }, 1000)
}

var p = new Person()
```

### 例子二

再说一个更实用的例子：在 Vue.js 中使用箭头函数

```js
import axios from 'axios'
export default {
  methods: {
    fetch () {
      axios.get('/userinfo')
      .then(resp => {
        this.sayHi()  // this 指向 vue 实例
      })
      .catch(err => {
        this.sayHi()  // this 指向 vue 实例
      })
    },
    sayHi () {
      setTimeout(() => {
        // this 指向 vue 实例
      }, 1000)
    }
  }
}
```

使用箭头函数之后，再也无需缓存 vue 实例，像是 `var vm = this` 这种代码统统可以消灭掉，嗯，清爽！

## 相关链接

+ [严格模式 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
+ [箭头函数 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arrow_functions)
+ [箭头函数 - ES6 入门](http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)


## 总结

在箭头函数出现之前，每一个新函数根据**它是被如何调用的**来定义这个函数的 `this` 值：

+ 如果是该函数是一个普通函数或者匿名函数
  - 在严格模式下的函数调用下，`this` 指向 `undefined`，
  - 在非严格模式的函数调用中，`this` 指向全局对象，浏览器中全局对象是  `window` ，在 nodejs 中全局对象是 `global`
+ 如果是该函数是一个构造函数，`this` 指针指向一个新的对象（实例）
+ 如果是该函数是一个对象的方法，则它的`this` 指针指向这个对象
+ 或者使用 `call` `apply` 等方法显式指定 `this` 的指向

在箭头函数中，则是根据箭头函数上下文决定其 this 指向，且无法修改 `this` 指向。


---

本文完，感谢阅读。:stuck_out_tongue_winking_eye: 