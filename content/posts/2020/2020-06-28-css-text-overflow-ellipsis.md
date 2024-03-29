---
title: "CSS多行文本溢出显示省略号显示点点点..."
date: 2020-06-28T14:30:51+08:00
draft: false
description: "CSS多行文本溢出显示省略号显示点点点..."
categories:
- CSS
tags:
- css
- 文本溢出
---

## 一、单行省略

```html
<div class="elip w100" style="border: 1px solid #5184f6;">
  两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。
</div>
```

```css
/* 单行文本溢出省略 */
.elip {
  overflow: hidden;         /* 隐藏溢出内容 */
  white-space: nowrap;      /* 不换行，强制文本在一行显示 */
  text-overflow: ellipsis;  /* 溢出的部分进行省略 */
}
.w100 {
  /* 设置宽度，一定不要忘了 */
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
<div class="elip w100" style="border: 1px solid #5184f6; margin: 1rem 0">
  两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。
</div>

要想实现单行文本超出宽度省略，需要满足以下几点


只要满足了上面 4 点，单行文本的溢出省略就很容易实现。但现实情况中，除了单行文本外还有很多场景是需要实现多行文本溢出省略的，接下来我们一起来看如何实现这个需求。

## 二、多行文本溢出省略

之所以说多行文本溢出省略不容易实现，是因为在 CSS 规范中 `text-overflow: ellipsis` 只适用于单行文本，同时并没有适用于多行文本溢出省略的规则。因此我们只能另辟蹊径来实现这个需求。

### 使用浏览器私有属性来实现

```css
.box {
  width: 200px;
  padding: 0 !important;  /* padding 必须为 0 */
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
.border {
  border: 1px solid #ccc;
}
.p-0 {
  padding: 0 !important;
}
.p-4 {
  padding: 1rem;
}
</style>
  <p>padding 为 0</p>
<div class="box border p-0">
  有一天，螃蟹撞到了田螺。田螺说:“蟹蟹，你撞到我了”，螃蟹说:“不用谢”。田螺回道:“谢你妹啊，我是说你撞到我了，你是不是瞎啊”，螃蟹一脸委屈地说:“我不是虾啊，我是螃蟹” 

  有一天，螃蟹撞到了田螺。田螺说:“蟹蟹，你撞到我了”，螃蟹说:“不用谢”。田螺回道:“谢你妹啊，我是说你撞到我了，你是不是瞎啊”，螃蟹一脸委屈地说:“我不是虾啊，我是螃蟹” 
</div>
  <p>padding 为 1rem</p>
<div class="box border p-4">
  有一天，螃蟹撞到了田螺。田螺说:“蟹蟹，你撞到我了”，螃蟹说:“不用谢”。田螺回道:“谢你妹啊，我是说你撞到我了，你是不是瞎啊”，螃蟹一脸委屈地说:“我不是虾啊，我是螃蟹” 

  有一天，螃蟹撞到了田螺。田螺说:“蟹蟹，你撞到我了”，螃蟹说:“不用谢”。田螺回道:“谢你妹啊，我是说你撞到我了，你是不是瞎啊”，螃蟹一脸委屈地说:“我不是虾啊，我是螃蟹” 
</div>

其中 **padding 必须保证为 0**，否则立马破功，这一点很容易被忽略掉，有兴趣的可以测试一下。

这种方法的优点是写法简洁明了（相对于使用 js 截取文本），但缺点就是通过私有属性实现，不过经测试在 chrome、firefox、safari 以及移动端和小程序都能生效，所以大部分场景还是可以使用这个方法的。

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

## 三、代码总结

原理搞明白之后，为了更方便地在项目中使用，我整理出来了这段 CSS 代码，其中预设了 5 个 class 样式，类名都是 `elip-line-x` 的格式，其中 `x` 代表最多可以展示 `x` 行文字，超出部分显示省略号点点点，`x` 的取值范围是 `1-5`。

```css
/* start--文本行数限制--start */
.elip-line-1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.elip-line-2,
.elip-line-3,
.elip-line-4,
.elip-line-5 {
  padding: 0 !important;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.elip-line-2 { -webkit-line-clamp: 2; }
.elip-line-3 { -webkit-line-clamp: 3; }
.elip-line-4 { -webkit-line-clamp: 4; }
.elip-line-5 { -webkit-line-clamp: 5; }
/* end--文本行数限制--end */
```

有了上面这段代码，直接给任意元素加上 `elip-line-x` 类即可轻松实现最多 `x` 行文字显示省略号点点点效果。如果最多显示 5 行不满足你的需求，你也可以根据代码扩展到任意行数。