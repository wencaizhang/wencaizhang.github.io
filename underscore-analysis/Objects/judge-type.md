# 类型判断

## isEqual

执行两个对象之间的优化深度比较，确定他们是否应被视为相等。

```js
var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
stooge == clone;
// false
_.isEqual(stooge, clone);
// true
```

## isMatch

> 用法：`_.isMatch(object, properties)`

告诉你properties中的键和值是否包含在object中。

```js
var stooge = {name: 'moe', age: 32};
_.isMatch(stooge, {age: 32});
// true
```

## isEmpty
## isElement

## isArray

类型检测，用于判断一个值是否是 Array 类型

### 源码

```js
var ObjProto = Object.prototype;
var toString = ObjProto.toString;
var nativeIsArray = Array.isArray;

_.isArray = nativeIsArray || function(obj) {
  return toString.call(obj) === '[object Array]';
};
```

源码里有很多用将原生对象或方法赋值给局部变量的操作，这样做主要有两个好处：
1. 缓存变量，利于压缩：例如这里的 `toString` 如果不使用局部变量，它应该是 `Object.prototype.toString`，这个写法在压缩时无法被压缩，一个字母都少不得，而使用了局部变量之后，可以随意压缩。
2. 减少了对象成员的访问深度，性能提升。

上面代码还原之后，代码其实应该是这样的：

```js
_.isArray =  Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};
```

## isObject
## isArguments


## _.isFunction

判断 `obj` 是否为一个函数，如果 `obj` 是一个函数，返回 `true`，否则返回 `false` 。

```js
if (typeof /./ !== 'function') {
  _.isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}
```

## isString
## isNumber
## isFinite
## isBoolean
## isDate
## isRegExp
## isError
## isSymbol
## isMap
## isWeakMap
## isSet
## isWeakSet
## isNaN
## isNull

## isUndefined

`_.isUndefined` 用来判断一个值是否为 `undefined`。 

### 不可靠的 undefined

当一个变量被定义，但是没有被赋值的时候，它的初始值就是 `undefined`，或者在一个函数执行时没有传入对应对实参，那么这个参数的的值就是 `undefined` 。

为了保证代码正常运行，我们通常会对变量或参数判断是否为 `undefined`，如下所示：

```js
var a;
if (a === undefined) {
  // do something
} else {

}

function fn (a) {
  if (a === undefined) {

  } else {

  }
}

fn();
```

然而，直接使用 `a === undefined` 进行判断不是百分百准确的，**因为 `undefined` 是可以被人为修改的**。

因为 `undefined` 不是保留字或关键字，所以 `undefined` 可以被当作变量名使用，这种情况下上面的写法就不够严谨了。

```js
var a;
var undefined = 1;  // Chrome undefined; IE8 1
console.log(a === undefined);  // Chrome false; IE8 true

function fn (a) {
  var undefined = 1;
  console.log(undefined);
  console.log(a === undefined);
}

fn();
```

实际测试发现，在 Chrome 中全局作用域下，`undefined` 不可被重写，局部作用域（函数内部）`undefined` 可以被重写。

### 如何准确地获取 undefined

1. 变量被定义，但是没有被赋值

```js
var result = (function () {
  var a;
  return a;
})()

console.log(result); // undefined
```

2. 声明了参数，执行时没有传入实参

```js
var result = (function(a) {
  return a;
})()

console.log(result); // undefined
```

3. 函数没有 `return` 语句或者 `return` 没有指定具体的值，默认 `return undefined`。

```js
var result = (function () {})()

console.log(result); // undefined
```

4. 最简洁，内存开销最小的 `void 0`
```js
// 这两种方式相同，且开销最小
console.log( void(0) )  // undefined
console.log( void 0 )  // undefined
```

### _.isUndefined 源码

```js
_.isUndefined = function(obj) {
  return obj === void 0;
};
```

可以看到 underscore 中使用了上面第 4 种方式来得到 `undefined` ，除此之外，第 2 种也是很常用的，例如在 jquery 插件中常见到的一个结构：

```js
;(function($, doc, win, undefined) {
  // some code
})(jQuery, document, window)
```