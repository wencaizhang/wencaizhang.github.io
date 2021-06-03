---
title: "代码段 | 自定义浏览器滚动条样式"
date: 2020-06-28T14:30:51+08:00
draft: true
categories:
- CSS
tags:
- css
- 滚动条
---


## 滚动条相关伪类

可以使用以下伪元素选择器去修改各式webkit浏览器的滚动条样式:

- `::-webkit-scrollbar` — 整个滚动条
- `::-webkit-scrollbar-button` — 滚动条上的按钮 (上下箭头)
- `::-webkit-scrollbar-thumb` — 滚动条上的滚动滑块
- `::-webkit-scrollbar-track` — 滚动条轨道
- `::-webkit-scrollbar-track-piece` — 滚动条没有滑块的轨道部分
- `::-webkit-scrollbar-corner` — 当同时有垂直滚动条和水平滚动条时交汇的部分
- `::-webkit-resizer` — 某些元素的corner部分的部分样式(例:textarea的可拖动按钮)

## 代码段
```css
/* 滚动条整体样式 */
::-webkit-scrollbar {
  width: 1rem;
  height: 1rem;
  background:hsla(0,0%,100%,.4);
}
/* 滚动条轨道 */
::-webkit-scrollbar-track {
  border-radius: 0;
}

/* 滑块部分 */
::-webkit-scrollbar-thumb {
  border-radius: 0;
  /* background-color: rgba(81,132,246, .3); */
  background: linear-gradient(180deg, #6e2ee5, #5184f6);
  -webkit-transition:background-color .1s;
  transition:background-color .1s;
  border-radius: 30px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, .25), inset -2px -2px 2px rgba(0, 0, 0, .25);
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(81,132,246, .5);
}
/* 滚动条里面轨道 */
::-webkit-scrollbar-track {
  background: linear-gradient(90deg, #f2f2f2, #f2f2f2 1px, #f2f2f2 0, #f2f2f2);
}
```
