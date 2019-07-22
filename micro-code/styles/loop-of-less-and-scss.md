# SCSS 循环和 Less 循环

参考：[https://gist.github.com/danro/6196732](https://gist.github.com/danro/6196732)

## SCSS 版循环

scss 代码：

```scss
$class-slug: spacer !default;
@for $i from 1 through 4 {
  &.#{$class-slug}-#{$i*5} {
    width: 100%;
    max-width: 600px;
    height: ($i*5px);
    max-height: ($i*5px);
    min-height: ($i*5px);
    line-height: ($i*5px);
    font-size: ($i*5px);
  }
}
```

编译结果如下：


## Less 版循环

less 代码：

```less
.loop (0) {}
.loop (@index) when (@index > 0) {
  .classname-@{index} {
    top: @index * 1px;
  }
  .loop (@index - 1);
}
 
#example {
  .loop(5);
}
```

编译结果如下：

```css
#example .classname-5 {
  top: 5px;
}
#example .classname-4 {
  top: 4px;
}
#example .classname-3 {
  top: 3px;
}
#example .classname-2 {
  top: 2px;
}
#example .classname-1 {
  top: 1px;
}
```