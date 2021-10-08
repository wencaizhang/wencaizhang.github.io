---
title: "责任链模式"
description: "使用责任链模式降低代码耦合度，可以有效减少心智负担"
date: 2020-12-12
draft: false
categories:
- 设计模式
tags:
- 责任链模式
- promise
- 代码重构
series:
- 设计模式
---

## 背景交代

最近负责的一个前端项目随着需求和功能的升级，代码越写越复杂，尤其是登录模块的判断逻辑，就像是那老太太的缠脚布——又臭又长!

刚好趁着登录的需求变更，使用**责任链模式**把相关代码重构了一番，重构之后再看代码，啧啧，代码之整洁且逻辑清晰，忍不住要给自己送一朵小红花 🌺 —— 优秀！

<!--
先介绍一下需求，在登录页面提交数据得到响应后需要进行多重判断，如下：

-->

## 撸起袖子加油干

我们约定好，将单个判断逻辑封装成一个函数，函数接收相同的参数，返回值的统一为一个 promise。

如果判断通过，可以进行下一步判断，返回 fulfill 状态的 promise，如果未通过需要结束后续判断，则返回 rejected 状态的 promise。

这里的代码均为示意代码，其中的判断逻辑都进行了简化。

```js
function handlePwdExpired (resp) {
  if (resp.expired === 1) {
    // 密码过期处理逻辑
    console.log('密码过期，请修改密码后重新登录')
    return Promise.rejected('密码过期')
  }
  return Promise.resolve(resp)
}

function handleAuthStatus (resp) {
  if (resp.status === 1) {
    return Promise.resolve(resp)
  }
  // 实名认证未通过处理逻辑
  console.log('实名认证未通过，请耐心等待')
  return Promise.rejected('实名认证未通过')
}

function handleDefault (resp) {
  console.log('逻辑判断结束，进入系统')
}
```

定义好上面处理策略之后，我们来调用

```js
// 假定我们已经拿到了响应 
const resp = {
  status: 1,
  expired: 1,
}

Promise.resolve(resp)
  .then(resp => {
    return handlePwdExpired(resp)
  })
  .then(resp => {
    return handleAuthStatus(resp)
  })
  .then(resp => {
    return handleDefault(resp)
  })
  .catch(err => {
    console.log(err);
  })
```

