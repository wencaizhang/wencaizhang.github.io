# 手写一个 bind

```js
Function.prototype.bind = function (context) {
  var self = this;  // this 是调用 bind 的函数

  return function () {
    return self.apply(context, arguments);
  }
}
```

如果想要在函数中提前填一些参数

```js
Function.prototype.bind = function () {
  var self = this;  // this 是调用 bind 的函数
      context = [].shift.call(arguments);
      args = [].slice.call(arguments);
  return function () {
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  }
}
```