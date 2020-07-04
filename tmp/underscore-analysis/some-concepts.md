# 一些概念

## 纯函数

对于相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用，也不依赖外部环境的状态。

相同的输入，不同的输出：
```js
var arr1 = [1, 2, 3];

arr1.splice(0, 1);  // [2, 3]
arr1.splice(0, 1);  // [3]
```


相同的输入，相同的输出：
```js
var arr2 = [1, 2, 3];

arr2.slice(0, 3);  // [1, 2, 3]
arr2.slice(0, 3);  // [1, 2, 3]
```

非纯函数中，函数的行为需要由外部的系统环境决定，也就是这个函数不仅取决于输入的参数，还取决于其他的外部变量。这种对于外部的依赖，是造成系统复杂性大大提高的主要原因。

```js{9,11}
var time = 20;

// 纯函数
function fn (age) {
  return age > 20;
}

// 非纯函数
// 依赖系统环境的变量 time
function fn2 (age) {
  return age > time;
}
```

## 函数柯里化（Currying）

为了解决上面所说的非纯函数的问题，我们可以使用函数柯里化：向函数传递一部分参数来调用它，让它返回一个函数去处理剩下的参数。

事实上柯里化是一种“预加载”函数的方法，通过传递较少的参数，得到一个已经记住了这些参数的新函数，某种意义上来讲，这是一种对参数的“缓存”，是一种非常有效的编写函数的方法。

现在来改写上面的例子：

```js
var time = 20;

// 纯函数
function fn (age) {
  return age > 20;
}

// 非纯函数
function fn2 (age) {
  return age > time;
}

function fn (time) {
  return function (age) {
    return age > time;
  }
}
var test = fn(time);
test(age);
```

## 函数组合

