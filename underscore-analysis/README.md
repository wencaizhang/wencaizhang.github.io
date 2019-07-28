# underscore 架构

[源码地址](https://github.com/jashkenas/underscore/blob/master/underscore.js)



## 作用域包裹

与其他第三方库一样，underscore 也通过**立即执行函数**来包裹自己的代码。

```js
(function() {
  // 代码
})()
```

这样做有两个好处：

1. 避免全局污染：所有的逻辑、变量的定义都被封装到该函数的作用域内部。
2. 隐私保护：在立即执行函数中声明的函数、变量等，除非是主动向外部暴露，否则无法在外部获得。



## 模块化

```js
// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
if (typeof define == 'function' && define.amd) {
  define('underscore', [], function() {
    return _;
  });
}
```


## _ 是一个对象

`_` 是一个函数对象，所有的 api 都会被挂载到这个对象上，如 `_.each`，`_.map` 等。



## _ 也是一个函数

但同时，`_` 也是一个函数，用 `_(obj)` 的形式来创建 underscore 的实例 instance，instance 享有和 `_` 相同的函数。



## mixin 为 _ 添加功能

`_.mixin(obj)` 可以为 underscore 对象混入 `obj` 具有的功能。

underscore 内部正是通过这一功能将 `_` 的所有静态方法，添加到原型 `_.prototype` 上，使得 underscore 的实例也具有了这些静态方法。



## 链接式调用

用过 jQuery 的同学都知道，利用 jQuery 链式调用的模式，可以对同一个 DOM 元素进行多次操作，例如

```js
$('.div').css('color', 'red').addClass('active').show();
```

事实上 underscore 也是支持链式调用的，但是调用方式和我们平常使用 underscore 有所区别，而是类似 jQuery。

```js
var result = _([-1, 1, 2, 3])  // 首先生成 underscore 对象
  .chain()                     // 然后通过 chain 方法声明链式调用
  .filter(function (value, index) {  // filter 过滤符合条件的元素
    return value > 0;
  })
  .map(function (value, index) {     // map 映射为需要的数据
    return value * value;
  })
  .value();

console.log(result);
// [1, 4, 9]
```

具体的实现方式会在[链式调用](./Chaining/README)中详细分析。

