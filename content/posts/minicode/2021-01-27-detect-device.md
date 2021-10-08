---
title: "检测设备类型"
date: 2021-01-27
draft: false
categories:
- minicode
type:
- code
tags:
- JavaScript
---

在开发移动端网站时经常需要检查用户端设备类型，以便做出不同的调整。

<!--more-->

## 方式一、检测手机平板和PC

```js
function detectDevice() {
  var isMobile = false, isTablet = false, isLaptop = false;
  if (window.innerWidth <= 425) {
    isMobile = true;
    isTablet = false;
    isLaptop = false;
  } else if (window.innerWidth <= 768) {
    isMobile = false;
    isTablet = true;
    isLaptop = false;
  } else {
    isMobile = false;
    isTablet = false;
    isLaptop = true;
  }
}
detectDevice();
```

## 判断是否微信浏览器

```js
function isWeChat () {
  const ua = navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) == "micromessenger"
}
```