---
title: unshift()
linktitle: unshift()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false

group: ES3 Array

weight: 30
---

## 描述

将一个或多个元素**添加**到数组的开头，并返回**新数组的长度**。（修改原数组）

## 参数

| 参数     | 描述                                         |
| -------- | -------------------------------------------- |
| elementN | 非必需。要添加到数组开头的元素 |

## 示例


- 将参数插入到数组开头

```js
var arr = [1, 2, 3];

var newLen1 = arr.unshift(4); // 4
console.log(arr); // [ 4, 1, 2, 3 ]

var newLen2 = arr.unshift(5, 6); // 6
console.log(arr); // [ 5, 6, 4, 1, 2, 3 ]

var newLen3 = arr.unshift([7, 8]); // 7
console.log(arr); // [ [7, 8], 5, 6, 4, 1, 2, 3 ]
```


- 没有参数的情况

```js
var arr = [1, 2, 3];
arr.unshift(); 
// 3
// 返回数组的长度

console.log(arr); 
// [1, 2, 3]
// 并未改变原数组
```