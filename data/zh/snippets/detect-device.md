---
heading: "检测设备类型"
title: '检测设备类型'
date: "2021-01-27"
draft: false
summary: "在开发移动端网站时经常需要检查用户端设备类型，以便做出不同的调整。"
type: 'Javascript'
---

在开发移动端网站时经常需要检查用户端设备类型，以便做出不同的调整。


## 区分手机、平板和 PC

根据浏览器窗口尺寸大小检测

```js
function detectDevice() {
  var isMobile = false, isTablet = false, isLaptop = false;
  if (window.innerWidth <= 425) {
    isMobile = true
    isTablet = false
    isLaptop = false
  } else if (window.innerWidth <= 768) {
    isMobile = false
    isTablet = true
    isLaptop = false
  } else {
    isMobile = false
    isTablet = false
    isLaptop = true
  }
  return { isMobile, isTablet, isLaptop, }
}
detectDevice()
```

## 判断是否微信浏览器

通过 `userAgent` 字段进行判断。

```js
function isWeChat() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) == 'micromessenger'
}
```
