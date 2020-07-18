---
title: "掘金头像旋转动画实现"
date: "2020-06-28T14:30:51+08:00"
draft: true
categories:
- CSS
tags:
- css
- 动画
---


经常出入掘金社区 ([juejin.im](https://juejin.im/)) 的朋友可能会留意到个人主页的个人头像上面有一个动画效果，是一个旋转动画，而且能越转越快。刚好自己的网站也需要展示一个头像，所以就专门研究学习一下。

<!--more-->

## 观察

对头像进行了多次研究（调戏）之后，我发现这个动画有几个特点：
1. 延迟：这个动画会在鼠标移入 1 秒左右开始执行
2. 转速：头像旋转的速度由慢到快，越来越快
3. 持续时间：动画开始执行之后，除非把鼠标移出，否则会在几十秒之后结束动画。


## 实现

使用 F12 大法（即使用 Chrome 开发工具审查元素样式），我得到了动画的实现方式：

```css
/* 基础样式 */
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
/* 鼠标移入时动画 */
img:hover {
  transition-delay: 1s;
  transition-duration: 59s;
  transform: rotate(666turn);
  transition-timing-function: cubic-bezier(.34, 0, .84, 1);
}
```
关于这几个 CSS 属性的理解：

- `transition-delay` 是动画延迟，也就是说 `1s` 之后才开始执行动画
- `transition-duration` 是动画持续时间，这里就是 `59s` 动画执行完毕
- `transform: rotate(666turn);` 是动画的结果（累积的效果）：旋转 `666turn`。一个 `turn` 就是一圈（`360deg`），这里就是要将图片旋转 666 圈
- `transition-timing-function` 用来规定规定过渡效果的时间曲线，也就是动画的运动效果（比如先慢后快），具体的值是 `cubic-bezier(.34, 0, .84, 1)` ，这叫做的“贝塞尔曲线”，根据它的取值来决定动画旋转的速度变化。

关于 `turn` 的资料很少，只有 [CSS turn详解-CSS角度值与单位](http://caibaojian.com/css3/values/angle/turn.htm) 明确说了是一圈，以及 [transform - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform) 有一个 turn 的示例


## 示例

请将你的鼠标移入下图查看效果（鼠标移入 1 秒之后开始执行动画）

<img id="rotate-demo" style="width: 100px; height: 100px; border-radius: 50%;" src="https://cdn.jsdelivr.net/gh/wencaizhang/static/avatar.png"/>
<style>
#rotate-demo:hover {
  transition-delay: 1s;
  transform: rotate(666turn);
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(.34, 0, .84, 1);
}
</style>

## 结语

技术无止境，CSS 也是博大精深，利用 `transform` 属性可以做出很多炫酷的效果，这里就先说这些，点到为止，本文全当抛砖引玉，更多的内容还需要您去研究去探索。