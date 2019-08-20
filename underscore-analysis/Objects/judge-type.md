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

> 用法：`_.isElement(object)`

判断 object 是否是一个 DOM 元素

```js
_.isElement(jQuery('body')[0]);
// true
```

### 源码

```js
_.isElement = function(obj) {
  return !!(obj && obj.nodeType === 1);
};
```

nodeType 属性返回以数字值返回指定节点的节点类型。

如果节点是元素节点，则 nodeType 属性将返回 1。

如果节点是属性节点，则 nodeType 属性将返回 2。


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

> 用法：`_.isObject(value)`

```js
_.isObject({});
// true
_.isObject(1);
// false
```

### 源码

```js
_.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};
```

这里需要注意两点：

1. `function` 是 `Object` 类型，但是通过 `typeof` 操作符得到的结果是 `function`
2. `null` 不是 `Object` 类型，但是通过 `typeof` 操作符号得到的结果却是 `object`

其实这里也可以使用 `toString` 方法来实现，下面是我的实现方法：

```js
var isObject = function (obj) {
  var objToString = Object.prototype.toString.call(obj);
  return objToString === '[object Function]' || objToString === '[object Object]'
}
```

同样的来看下 `toString` 方法对 `function` 和 `null` 的处理结果

```js
Object.prototype.toString.call(function () {}); // '[object Function]'
Object.prototype.toString.call(null); // '[object Null]'
```

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

> 用法：`_.isBoolean(object)`

如果 `object` 是一个布尔值，返回 `true`，否则返回 `false`。

```js
_.isBoolean(null);
// false
```

### 源码

```js
_.isBoolean = function(obj) {
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
};
```

布尔值除了 `true` 和 `false`，还有一种情况，就是使用 `new` 操作符创建的实例

```js
var bool = new Boolean();

Object.prototype.toString.call(bool);
// "[object Boolean]"
```


## isDate
## isRegExp
## isError
## isSymbol
## isMap
## isWeakMap
## isSet
## isWeakSet
## isNaN

> 用法：`_.isNaN(object)`

如果 `object` 是 `NaN`，返回 `true`。 

```js
_.isNaN(NaN);
// true
isNaN(undefined);
// true
_.isNaN(undefined);
// false
```

### 源码

```js
_.isNaN = function(obj) {
  return _.isNumber(obj) && isNaN(obj);
};
```
如果 `obj` 是 `undefined`，原生的 `isNaN` 函数也会返回 `true`，underscore 中将 `undefined` 排除掉。

```js
isNaN(undefined);
// true
_.isNaN(undefined);
// false
```


## isNull

> 用法：`_.isNull(object)`

如果object的值是 null，返回true。

```js
_.isNull(null);
// true
_.isNull(undefined);
// false
```

### 源码

```js
_.isNull = function(obj) {
  return obj === null;
};
```

注意：用 `===` 来判断

```js
null == undefined;
// true
```

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