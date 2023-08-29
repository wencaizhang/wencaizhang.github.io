---
title: 鼠标悬浮后 icon 侧向翻转效果
date: "2023-02-14"
tags: ["CSS", "SVG"]
draft: false
summary: "draft"
images: ["/static/images/img.jpg"]
authors: ["default"]
---


在某网站看到了一个鼠标悬浮后 icon 侧向翻转效果，所以 f12 把代码扒出来了。

这个特效中可以学到什么？

1. 使用 symbol 元素定义一个 svg 模版，然后使用 use 元素可以多次调用这个 svg 图形，有点类似类和实例的关系。可进一步查看文档：[symbol - SVG：可缩放矢量图形 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/symbol)
2. 复习了 CSS 变量的使用方法
    - 新知识点：通常大家都会把 CSS 变量定义在 `:root` 伪元素下，但是在 ShadowRoot 中会失效
3. 获取了 5 个高清的前端技能 icon（如有需要查看下面代码自取）
4. 学到了一个 CSS 动画效果的思路




::: normal-demo 鼠标悬浮到图标上看看效果吧

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="icon-html5" viewBox="0 0 1024 1024">
    <path d="M116.7 63.8l71.9 806.9 322.8 89.6 323.7-89.8 72.1-806.7H116.7zm634 263.9H372l9 101.3h360.7l-27.2 303.8-203 56.3-202.7-56.3-13.9-155.4h99.4l7.1 79 110.2 29.7.3-.1L622 656.3 633.5 528h-343l-26.7-299.2h495.7l-8.8 98.9z" fill="#e44d26" data-spm-anchor-id="a313x.7781069.0.i0"></path>
  </symbol>
  <symbol id="icon-css3" viewBox="0 0 1024 1024">
    <path d="M512 512zM280.2 328.1H648l-8.8 102H398.1l8 99.9h224.6l-11.2 128.2-106.9 29.7h-.1l-.2-.6L405.2 657l-6.9-79h-96.4l13.5 155.4 196.7 56.4 197.1-56.2L753 230.2H272.2z" fill="#264de4"></path>
    <path d="M128.3 64.3l69.8 806 313.4 89.3 314.3-89.3 69.9-806H128.3zm637.6 756.5-254.3 72.3L258 820.8l-60-692.5h628l-60.1 692.5z" fill="#264de4" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path>
  </symbol>
  <symbol id="icon-vue" viewBox="0 0 1024 1024">
    <path d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z" fill="#41b883"></path>
    <path d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z" fill="#34495e"></path>
  </symbol>
  <symbol id="icon-node" viewBox="0 0 1024 1024">
    <path d="M512 78.933c-11.52.0-23.467 2.987-33.28 8.534L161.28 270.933C140.8 282.88 128 305.067 128 328.96v366.08c0 23.893 12.8 46.08 33.28 58.027l83.2 47.786c40.533 19.627 54.187 20.054 72.96 20.054 59.733.0 94.293-36.267 94.293-99.414V360.107c0-5.12-4.266-9.387-9.386-9.387h-39.68c-5.547.0-9.814 4.267-9.814 9.387v361.386c0 28.16-29.013 55.894-75.52 32.427L189.867 704a11.093 11.093.0 01-4.694-8.96V328.96c0-3.84 1.707-7.253 4.694-8.96l317.44-183.04c2.56-1.707 6.826-1.707 9.386.0L834.133 320c2.987 1.707 4.694 5.12 4.694 8.96v366.08c0 3.413-1.707 6.827-4.694 8.96l-317.44 183.04c-2.56 1.707-6.826 1.707-9.813.0l-80.213-48.64c-3.414-1.28-6.827-1.707-8.96-.427-22.614 12.8-26.88 15.36-47.787 21.76-5.12 1.707-13.227 4.694 2.987 13.654l105.813 62.72c10.24 5.973 21.333 8.96 33.28 8.96s23.04-2.987 33.28-8.96l317.44-183.04C883.2 741.12 896 718.933 896 695.04V328.96c0-23.893-12.8-46.08-33.28-58.027L545.28 87.467c-9.813-5.547-21.333-8.534-33.28-8.534m85.333 262.4c-90.453.0-144.64 37.974-144.64 101.974.0 68.693 53.76 88.746 140.8 97.28 103.68 10.24 111.787 25.6 111.787 46.08.0 35.413-28.587 50.346-95.147 50.346-84.48.0-102.4-20.906-108.8-62.72a9.643 9.643.0 00-9.386-7.68h-40.96c-5.12.0-8.96 3.84-8.96 9.387.0 52.907 29.013 116.907 168.106 116.907 100.267.0 157.867-39.68 157.867-108.8.0-68.694-46.08-86.614-143.787-99.84-98.56-12.8-108.373-19.627-108.373-42.667.0-19.2 8.533-44.8 81.493-44.8 64 0 89.174 14.08 98.987 58.027.853 4.266 4.693 7.253 8.96 7.253h41.387c2.133.0 4.693-.853 6.4-2.987 1.706-1.706 2.986-4.266 2.133-6.826-5.973-75.947-56.32-110.934-157.867-110.934z" fill="#8bc34a"></path>
  </symbol>
  <symbol id="icon-miniapp" viewBox="0 0 1024 1024">
    <path d="M513.5 940.36A428.48 428.48.0 01346.77 117.3a428.47 428.47.0 01333.46 789.39A425.62 425.62.0 01513.5 940.36zm0-805.35c-207.87.0-377 169.11-377 377s169.12 377 377 377 377-169.12 377-377S721.37 135 513.5 135z" fill="#1e7ffe"></path>
    <path d="M616.3 298.81c68.69.0 124.59 51.64 124.59 115.59.0 19.9-5.68 39.32-16.11 56.85-15.63 25.58-40.73 44.53-71 53.53-8.06 2.37-14.22 3.32-19.9 3.32a23.69 23.69.0 010-47.38 13.37 13.37.0 005.21-.94c20.37-5.69 36.48-17.53 45.48-33.17a60.2 60.2.0 009-32.21c0-37.42-34.58-68.21-76.74-68.21a85.62 85.62.0 00-41.7 10.89c-22.26 12.79-35.52 34.11-35.52 57.32v198.5c0 40.26-22.27 77.22-59.22 98.06A130.31 130.31.0 01415.44 728c-68.7.0-124.6-51.64-124.6-115.59.0-19.9 5.69-39.33 16.11-56.85C322.58 530 347.69 511 378 502c8.53-2.36 14.21-3.31 19.9-3.31a23.69 23.69.0 010 47.37 13.19 13.19.0 00-5.21.95c-20.38 6.16-36.48 18-45.48 33.16a60.25 60.25.0 00-9 32.22c0 37.42 34.58 68.21 77.22 68.21a85.61 85.61.0 0041.69-10.89c22.26-12.79 35.52-34.11 35.52-57.32v-198c0-40.27 22.27-77.22 59.22-98.06 19.42-11.85 41.69-17.53 64.43-17.53z" fill="#f4b426"></path>
  </symbol>
  <symbol id="icon-flutter" viewBox="0 0 1024 1024">
    <path d="M610.73.0 98.134 512 256 669.867 925.184.512H611.285L610.731.0zm.598 472.405L335.232 747.904l276.053 276.053h314.582L650.24 747.99l275.627-275.626H611.37z" fill="#009bea"></path>
  </symbol>
</svg>


<div class="icon-wrapper flex flex-wrap items-center justify-around max-w-4xl mx-auto py-8">
  <a href="#" class="mb-8">
    <div class="layer">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span>
        <svg class="icon-svg">
          <use xlink:href="#icon-html5"></use>
        </svg>
      </span>
    </div>
    <span class="text">HTML5</span>
  </a>
  <a href="#" class="mb-8">
    <div class="layer">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span>
        <svg class="icon-svg">
          <use xlink:href="#icon-css3"></use>
        </svg>
      </span>
    </div>
    <span class="text">CSS3</span>
  </a>
  <a href="#" class="mb-8">
    <div class="layer">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span>
        <svg class="icon-svg">
          <use xlink:href="#icon-node"></use>
        </svg>
      </span>
    </div>
    <span class="text">Node.js</span>
  </a>
  <a href="#" class="mb-8">
    <div class="layer">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span>
        <svg class="icon-svg">
          <use xlink:href="#icon-vue"></use>
        </svg>
      </span>
      </div>
    <span class="text">Vue.js</span>
  </a>
  <a href="#" class="mb-8">
    <div class="layer">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span>
        <svg class="icon-svg">
          <use xlink:href="#icon-miniapp"></use>
        </svg>
      </span>
    </div>
    <span class="text">小程序</span>
  </a>
</div>
```

```css
svg {
  vertical-align: middle;
}

.icon-wrapper {
  --html5: #E44D26;
  --css3: #264DE4;
  --vue: #41B883;
  --node: #8BC34A;
  --miniapp: #1E7FFE;
  --flutter: ##009bea
}

.icon-svg {
  display: block;
  width: 40px;
  height: 40px;
  margin: 5px auto;
  fill: hsla(240, 1%, 48%, 0.5)
}


.icon-wrapper {
  height: 120px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.icon-wrapper a {
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative
}

.icon-wrapper a .layer {
  width: 55px;
  height: 55px;
  transition: transform 0.3s;
  border-radius: 4px;
  border: 1px solid hsl(0, 0%, 95%);
}

.icon-wrapper a:hover .layer {
  transform: rotate(-35deg) skew(20deg);
}

.icon-wrapper a .layer span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.icon-wrapper a .layer span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 4px;
  transition: all 0.3s
}

.icon-wrapper a:hover .layer span:last-child {
  box-shadow: none !important
}

.icon-wrapper a .layer span {
  display: inline-flex;
  justify-content: center;
  align-items: center
}

.icon-wrapper a .layer span.fab {
  font-size: 30px;
  line-height: 55px;
  text-align: center
}

.icon-wrapper a:hover .layer span:nth-child(1) {
  opacity: 0.2
}

.icon-wrapper a:hover .layer span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px)
}

.icon-wrapper a:hover .layer span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px)
}

.icon-wrapper a:hover .layer span:nth-child(4) {
  opacity: 0.8;
  transform: translate(15px, -15px)
}

.icon-wrapper a:hover .layer span:nth-child(5) {
  opacity: 1;
  transform: translate(20px, -20px)
}

.icon-wrapper a:nth-child(1):hover .layer span,
.icon-wrapper a:nth-child(1):hover .text {
  color: var(--html5);
  border-color: var(--html5)
}

.icon-wrapper a:nth-child(2):hover .layer span,
.icon-wrapper a:nth-child(2):hover .text {
  color: var(--css3);
  border-color: var(--css3)
}

.icon-wrapper a:nth-child(3):hover .layer span,
.icon-wrapper a:nth-child(3):hover .text {
  color: var(--vue);
  border-color: var(--vue)
}

.icon-wrapper a:nth-child(4):hover .layer span,
.icon-wrapper a:nth-child(4):hover .text {
  color: var(--node);
  border-color: var(--node)
}

.icon-wrapper a:nth-child(5):hover .layer span,
.icon-wrapper a:nth-child(5):hover .text {
  color: var(--miniapp);
  border-color: var(--miniapp)
}

.icon-wrapper a:nth-child(1):hover .layer span {
  box-shadow: -1px 1px 3px var(--html5)
}

.icon-wrapper a:nth-child(2):hover .layer span {
  box-shadow: -1px 1px 3px var(--css3)
}

.icon-wrapper a:nth-child(3):hover .layer span {
  box-shadow: -1px 1px 3px var(--vue)
}

.icon-wrapper a:nth-child(4):hover .layer span {
  box-shadow: -1px 1px 3px var(--node)
}

.icon-wrapper a:nth-child(5):hover .layer span {
  box-shadow: -1px 1px 3px var(--miniapp)
}

.icon-wrapper a .text {
  position: absolute;
  left: 50%;
  bottom: -5px;
  opacity: 0;
  min-width: 100%;
  transform: translateX(-50%);
  transition: bottom 0.3s ease, opacity 0.3s ease;
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace, inconsolata, Menlo, Monaco, courier new, monospace, "Source Code Pro", "Noto Serif SC", monospace
}

.icon-wrapper a:hover .text {
  bottom: -35px;
  opacity: 1
}

.icon-svg {
  width: 100%;
  height: 100%
}
```
:::