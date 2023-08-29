---
title: "设置input的placeholder的字体样式"
heading: "设置input的placeholder的字体样式"
date: '2021-06-06'
draft: false
type: "CSS"

---

设置input占位符的样式



HTML 代码：

```html
<input type="text" placeholder="请设置用户名">
```

CSS 代码：

```css
input::-webkit-input-placeholder {    /* Chrome/Opera/Safari */
  color: red;
}
input::-moz-placeholder { /* Firefox 19+ */  
  color: red;
}
input:-ms-input-placeholder { /* IE 10+ */
  color: red;
}
input:-moz-placeholder { /* Firefox 18- */
  color: red;
}
```


::: normal-demo 示例：

```html
<input type="text" placeholder="请设置用户名">
```

```css
input::-webkit-input-placeholder,    /* Chrome/Opera/Safari */
input::-moz-placeholder, /* Firefox 19+ */  
input::-ms-input-placeholder, /* IE 10+ */
input::-moz-placeholder { /* Firefox 18- */
  color: red;
}
```

:::
