---
title: "CSS 中的 BFC 到底是什么？"
date: 2020-06-28T14:30:51+08:00
draft: true
categories:
- CSS
tags:
- css
- bfc
---
## 什么是 BFC

> BFC 是 **B**lock **F**ormatting **C**ontext 的缩写，翻译成中文就是“块格式化上下文”

BFC 是一种规则，隔离保护作用

BFC 是用来解决各种问题的

例如，很多网站的广告部分就是 BFC 布局，广告关闭之后不能影响整体布局

广告一般是定位实现的


BFC 是一块区域，是一个完全封闭的区域，区域内部的元素无论如何布局（定位或者浮动），都对外部没有任何影响。

## BFC 元素具有的特性

1. 在 BFC 中，盒子从顶端开始垂直地一个接一个地排列（块状元素）
2. 盒子垂直方向的距离由 `margin` 决定。属于同一个 BFC 的两个相邻盒子的 `margin` 会发生重叠
3. 在 BFC 中，每个盒子的坐外边距 `margin-left` 会触碰到容器的左边缘 border-left
4. BFC 的区域不会与浮动盒子产生交集，而是紧贴浮动边缘
5. 计算 BFC 的高度时，自然也会检测到浮动的盒子高度

BFC 是一个独立的渲染区域，只有 Block-level box 参与，它规定了内部的 Block-level box 如何布局，并且与这个区域外部毫不相干。

## BFC 的作用之清除浮动

基于 BFC 的特性，即 xxxx，所以我们只要把父元素设置 BFC 就可以清除子元素的浮动。

最简单的做法就是给父元素设置 `overflow: hidden`。

例如：

```css
/* style.css */
.fl { float: left; }
.fr { float: left; }
.o { overflow: hidden; }
```

```html
<div class="bfc-box o">
  <div class="fl">左浮动</div>
  <div class="fr">右浮动</div>
</div>
```


## BFC 的作用之解决外边距塌陷

## 常见的 BFC 实现方式总结

常见的创建**块格式化上下文**的方式有很多，这里列举几种我认为比较常见的：

- 根元素(`<html>`)
- 浮动元素（元素的 `float` 不是 `none`）
- 绝对定位元素（元素的 `position` 为 `absolute` 或 `fixed`）
- 行内块元素（元素的 `display` 为 `inline-block`）
- 表格单元格（元素的 `display` 为 `table-cell`，HTML表格单元格默认为该值）
- `overflow` 值不为 `visible` 的块元素
- 弹性元素（`display` 为 `flex` 或 `inline-flex` 元素的直接子元素）
- 网格元素（`display` 为 `grid` 或 `inline-grid` 元素的直接子元素）
- 

## 结语

其实看到最后你会发现，不管在此之前知不知道 BFC 这个概念，我们在布局的时候已经无意识地在利用 BFC 来实现各种需求了。而了解 BFC 的概念之后，突然有一句话出现在脑海中：**知其然知其所以然**，以前只知道这样可以清除浮动或者那样可以解决外边距塌陷，只知道这是前人总结出的经验，但具体是什么原理却从来没有深入思考过。希望能通过这一个小小的概念，由点及面，让我们在以后的学习过程中能透过表面看到内在原理。


在写这篇文章参考了以下文章，致谢。

- [块格式化上下文 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)