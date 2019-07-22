# bind

链式调用 bind 会有什么结果
```js
var obj1 = {
  value: 1
}
var obj2 = {
  value: 2
}
var obj3 = {
  value: 3
}

var func = function () {
  console.log(this.value)
}

var fn1 = func.bind(obj1);
var fn2 = func.bind(obj1).bind(obj2);
var fn3 = func.bind(obj1).bind(obj2).bind(obj3);

fn1();
fn2();
fn3();
```