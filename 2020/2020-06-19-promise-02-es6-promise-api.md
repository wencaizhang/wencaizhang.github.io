---
title: "深入理解 Promise（二）— ES6 Promise API"
date: 2020-06-19
draft: true
categories:
- JavaScript
- ES6
tags:
- promise
- 异步
---


Promise 是一个构造函数，它的使用方式如下：
```javascript
new Promise(function (resolve, reject) {
  // resolve(value)
  // reject(reason)
})
```

Promise 接收一个函数作为参数，这个函数有两个参数（函数类型的参数），分别是 resolve 和 reject。

执行 resolve 时，Promise 状态由 pending 改为 fulfilled ；执行 reject 时，Promise 状态由 pending 改为 rejected

## Promise 静态方法



#### `Promise.resolve(param)`


等同于是 `new Promise(function (resolve, reject) { resolve(param) })` ，也就是立即将 Promise 的状态设置为 resolve

#### Promise.reject(reason)


等同于是 `new Promise(function (resolve, reject) { reject(param) })` ，也就是立即将 Promise 的状态设置为 rejected

#### Promise.all([p1, ..., pn])

输入一组 promise 返回一个新的 promise，这组 promise 全部都是 fulfilled 状态 Promise.all 才是 fulfilled 状态

#### Promise.allSettled([p1, ..., pn])


输入一组 promise 返回一个新的 promise，这组 promise 的状态全部改变之后，Promise.allSettled 编程 fulfilled 状态

#### Promise.race([p1, ..., pn])

输入一组 promise 返回一个新的 promise， 结果 promise 的状态跟随第一个变化的 promise 状态

## Promise 实例方法


#### promise.then(onFulfilled, onRejected)

promise 状态改变之后的回调，返回新的 promise 对象

#### promise.catch(function (reason) {})

promise 状态为 rejected 的回调

#### promise.finally(function(reason) {})

不管 promise 是什么状态，都会执行

> **注意点**
> - then、catch 返回的  promise 都是新的 promise，不是原来的 promise
> - Promise 对象的错误会“冒泡”，知道被捕获位置，错误会被下一个 catch 语句捕获。



## 实践

最佳实践

- 不要忘记 catch 捕捉错误
- then 方法中使用 return
- 传递函数给 then 方法
- 不要把 promise 写成嵌套



> 题目：
> 3 秒之后亮一次红灯，再过 2 秒亮一次绿灯，再过 1 秒亮一次黄灯，用 promise 实现多次交替亮灯的效果
> 用 console.log 模拟亮灯




