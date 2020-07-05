---
title: "CSS多行文本溢出省略"
date: 2020-06-28T14:30:51+08:00
draft: true
categories:
- CSS
tags:
- css
- 文本溢出
---

## 先说单行省略

```html
<div class="elip w100" style="border: 1px solid #5184f6;">
  先说单行省略先说单行省略先说单行省略先说单行省略
</div>
```

```css
/* 单行文本溢出省略 */
.elip {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.w100 {
  width: 100px;
}
```

效果如下：

<style>
.elip {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.w100 {
  width: 100px;
}
</style>
<div class="elip w100" style="border: 1px solid #5184f6;">
  先说单行省略先说单行省略先说单行省略先说单行省略
</div>

要想实现单行文本超出宽度省略，需要满足以下几点

1. 指定一个宽度
2. 超出省略（`overflow: hidden;`）
3. 不能换行（`white-space: nowrap;`）
4. 溢出省略（`text-overflow: ellipsis;`）

单行文本溢出省略很容易实现，但是要想实现多行文本溢出省略就会复杂得多。

## 多行文本溢出省略

之所以说多行文本溢出省略不容易实现，是因为在 CSS 规范中 `text-overflow: ellipsis` 只适用于单行文本，同时并没有适用于多行文本溢出省略的规则。因此我们只能另辟蹊径来实现这个需求。

### 浏览器私有属性

```css
.box {
  width: 200px;
  overflow: hidden;
  display: -webkit-box;  /* 类似于 flexbox 的自适应布局 */
  -webkit-box-orient: vertical;  /* 元素排列方向：从上到下 */
  -webkit-line-clamp: 4;  /* 第四行后开始省略 */
}
```

  <style>
  .box {
    width: 200px;
    overflow: hidden;
    display: -webkit-box;  /* 类似于 flexbox 的自适应布局 */
    -webkit-box-orient: vertical;  /* 元素排列方向：从上到下 */
    -webkit-line-clamp: 4;  /* 第四行后开始省略 */
  }
  </style>
  <div class="box">
    多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略
    多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略
    多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略
    多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略
  </div>

这种方法的优点是写法简洁明了，但缺点就是通过私有属性实现，兼容性不好。

## 