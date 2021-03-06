---
date: '2020-07-08'
title: 优雅覆盖 Vue.js 组件内部样式
slug: cover-styles-in-vuejs-project
draft: true
tags:
- sass
- node-sass
- dart-sass
description: 优雅覆盖 Vue.js 组件内部样式
author: wencaizhang
location: Beijing
image: 
meta:
  - name: title
    content: 优雅覆盖 Vue.js 组件内部样式
  - name: description
    content: 优雅覆盖 Vue.js 组件内部样式
  - name: keywords
    content: wencaizhang, Vuepress, Vue.js, Vuepress website, vuepress blog, vuepress theme, vuepress blog theme, vue blog, create vuepress blog, blog theme, create a blog
  - name: author
    content: wencaizhang
  - name: language
    content: Chinese
featured: true
---

在 Vue.js 组件中使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `>>>` 操作符：

```html
<style scoped>
.a >>> .b { /* ... */ }
</style>
```

上述代码将会编译成：

```css
.a[data-v-f3f3eg9] .b { /* ... */ }
```

有些像 Sass 之类的预处理器无法正确解析 `>>>`。这种情况下你可以使用 `/deep/` 或 `::v-deep` 操作符取而代之 —— 两者都是 `>>>` 的别名，同样可以正常工作

