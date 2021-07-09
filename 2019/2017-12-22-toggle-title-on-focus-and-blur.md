---
title: 切换浏览器 tab 标签时动态设置网页 
draft: true
tag:
  - JavaScript
category: javascript
abbrlink: 4e4f3b4e
date: 2017-12-22 21:50:23
---

## 效果
在[饿了么官网](https://www.ele.me/home/)看到一个网页效果，在饿了么网页和其他标签页之间相互切换时，饿了么网页的 type: post
title，发生了变化。

<!-- more -->

饿了么官网: https://www.ele.me/home/

效果如下：

![](http://p2btijoky.bkt.clouddn.com/18-1-10/42478937.jpg)


## 代码实现

### 预备知识
1. `visibilitychange` 事件，会在浏览器标签页被隐藏或显示的时候会触发
2. `document.hidden` ，只读属性，返回一个布尔值标识当前页面是否隐藏
3. `document.visibilityState`，只读属性，返回 `document` 的可见性，有 4 个值：
  + `visible` : 此时页面内容至少是部分可见。 即此页面在前景标签页中，并且窗口没有最小化
  + `hidden` : 此时页面对用户不可见。即文档处于背景标签页或者窗口处于最小化状态，或者操作系统正处于锁屏状态
  + `prerender` : 页面此时正在渲染中， 因此是不可见的. 文档只能从此状态开始，永远不能从其他值变为此状态
  + `unloaded` : 页面从内存中卸载清除

### 具体实现
+ 使用 `document.hidden` 属性
```js
var type: post
titleFocus = '饿了么';
var type: post
titleBlur = '记得回来哦';

function toggletype: post
titleHandler(bool) {
    document.type: post
title = bool ? type: post
titleBlur : type: post
titleFocus;
}

document.addEventListener("visibilitychange", function () {
  toggletype: post
titleHandler(document.hidden);
}, false);
```
+ 使用 `document.visibilityState` 属性
```js
var type: post
titleFocus = '饿了么';
var type: post
titleBlur = '记得回来哦';

function toggletype: post
titleHandler(visibilityState) {
    document.type: post
title = visibilityState === 'hidden' ? type: post
titleBlur : type: post
titleFocus;
}

document.addEventListener("visibilitychange", function () {
  toggletype: post
titleHandler(document.visibilityState);
}, false);
```

## 其他

  此 API 存在兼容性问题，支持 IE10+ 

  推荐阅读： [Page Visibility(页面可见性) API介绍、微拓展 - 张鑫旭](http://www.zhangxinxu.com/wordpress/?p=2790)（PS：此处献上我的膝盖）
