---
title: "深入理解 Promise（一）— Promise/A+ 规范"
date: 2020-06-18
draft: true
categories:
- JavaScript
- ES6
tags:
- promise
- 异步
---


## Promise/A+规范


术语

- **Promise**: 一个有 then 方法的对象或者函数，行为符合本规范
- **thenable**: 一个定义了 then 方法的对象或函数
- **value**: 值，任何 JavaScript 的合法值
- **execption**: 异常，throw 语句抛出的值
- **reason**: 拒绝原因， 一个标识 promise 被拒绝原因的值


promise 有三个状态

- pending 表示等待
- fulfilled 表示完成
- rejected 表示拒绝
