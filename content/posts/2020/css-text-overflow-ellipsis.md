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
<div class="elip w100" style="border: 1px solid #5184f6; margin: 2rem 0">
  先说单行省略先说单行省略先说单行省略先说单行省略
</div>

要想实现单行文本超出宽度省略，需要满足以下几点

1. 设置宽度
2. 隐藏溢出内容（`overflow: hidden;`）
3. 强制文本在一行显示（`white-space: nowrap;`）
4. 溢出进行省略（`text-overflow: ellipsis;`）

只要满足了上面 4 点，单行文本的溢出省略就很容易实现。但现实情况中，除了单行文本外还有很多场景是需要实现多行文本溢出省略的，接下来我们一起来看如何实现这个需求。

## 多行文本溢出省略

之所以说多行文本溢出省略不容易实现，是因为在 CSS 规范中 `text-overflow: ellipsis` 只适用于单行文本，同时并没有适用于多行文本溢出省略的规则。因此我们只能另辟蹊径来实现这个需求。

### 方法一：浏览器私有属性

```css
.box {
  width: 200px;
  padding: 0;  /* padding 必须为 0 */
  overflow: hidden;
  display: -webkit-box;  /* 类似于 flexbox 的自适应布局 */
  -webkit-box-orient: vertical;  /* 元素排列方向：从上到下 */
  -webkit-line-clamp: 4;  /* 第四行后开始省略 */
}
```

  <style>
  .box {
    width: 200px;
    padding: 0;
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
<!--
### 方法二：双重伪元素


<p>
有一天，螃蟹撞到了田螺。田螺说:“蟹蟹，你撞到我了”，螃蟹说:“不用谢”。田螺回道:“谢你妹啊，我是说你撞到我了，你是不是瞎啊”，螃蟹一脸委屈地说:“我不是虾啊，我是螃蟹”
</p>

<style>
p {
  height: 210px;
  overflow: hidden;
  position: relate
}

p::before {
  content: "...";
}
</style>
https://wencaizhang.github.io/study/p/elip.html
### 
-->