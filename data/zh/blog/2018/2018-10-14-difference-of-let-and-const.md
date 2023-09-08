---
title: js 中使用 let 和 const 的总结 
draft: false
tags:
  - javascript
  - es6
  - let
  - const
category: javascript
date: "2018-10-14 11:51:14"
---


ES6 引入了 `let` 命令用于声明**变量**，引入了 `const` 命令用于声明**常量**。然而仅仅知道这些是不够的，具体哪些场景下使用 `let`，哪些场景使用 `const` 仍然令人感到疑惑。

这两个命令的学习可参考文章：[let 和 const 命令](http://es6.ruanyifeng.com/#docs/let)，这里只参考下面一段话：

> `const` 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const` 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。

因此，我认为声明简单类型数据（数字、字符串、布尔值）的时候使用 `let`，而在声明引用类型（对象、数组）的时候使用 `const`。

## 参考

+ [let 和 const 命令](http://es6.ruanyifeng.com/#docs/let)
+ [js中 let var const 的差异和使用场景](https://blog.csdn.net/qq_35713752/article/details/81701262)