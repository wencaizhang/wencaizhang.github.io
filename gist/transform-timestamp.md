---
title: "将正常时间格式转化为时间戳"
date: 2021-01-27
draft: false
categories:
- 短代码
type:
- code
tags:
- JavaScript
- 日期
---


使用 JavaScript 内置方法将正常时间格式转化为时间戳

<!--more-->

```js
/**
 * 将正常时间格式转化为时间戳
 * @param {String} time [正常时间格式，如：2019-04-01 13:10:10]
 */
export function getTimestamp (time = null) {
  // 没有对 time 做合法性校验
  // 假设传入的 time 都是合法的时间格式：2019-04-01 13:10:10
  const date = time ? new Date(time.replace(/-/g, '/')) : new Date()
  const timestamp = date.getTime() // 13 位数字，精确到毫秒
  return timestamp
}
```
