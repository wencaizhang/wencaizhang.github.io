---
heading: 'CSS多行文本溢出显示省略号'
title: "CSS多行文本溢出显示省略号"
date: "2023-05-29"
type: "CSS"
draft: false
summary: "CSS多行文本溢出显示省略号"
tags: ["css"]
---

import Twemoji from './Twemoji.tsx'

为了更方便地在项目中使用，我整理出来了这段 CSS 代码，其中预设了 5 个 class 样式，类名都是 `elip-line-x` 的格式， `x` 代表最多可以展示 `x` 行文字，超出部分则显示为省略号点点点(...)，预设的 `x` 的取值范围是 `1-5`（你可以进行扩展）。


```css
/* start--文本行数限制--start */
.elip-line-1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.elip-line-2, .elip-line-3, .elip-line-4, .elip-line-5 {
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

Happy Coding! <Twemoji emoji="clinking-beer-mugs" />


