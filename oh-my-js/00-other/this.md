# JavaScript 中 this 总结

this 的指向大致分为下面 4 种：

+ 作为对象的方法调用
+ 作为普通函数调用
+ 构造器调用
+ 通过 call 和 apply 调用


## 作为对象的方法调用

```js
var obj = {
  name: 'obj',
  getName: function () {
    console.log(this.name);
  }
}

obj.getName();  // "obj"
```

在以形如 `obj.fn()` 的方式执行方法时，方法内部的 this 总是指向 `.` 前面的 `obj`。

需要注意的是，只有在执行方法的时候才能确定 this 指向，这一原则同样适用于下面几种情况。

例子：

```js
this.name = 'global object';
var obj = {
  name: 'obj',
  getName: function () {
    console.log(this.name);
  }
}

var obj2 = { name: 'obj2' }
obj2.getName = obj.getName;
var getName = obj.getName;

// this 只有在函数调用时才能确定下来
obj.getName();   // "obj"
obj2.getName();  // "obj2"
getName();       // "global object"
```

## 作为普通函数调用

#### 在全局作用域下的普通函数

```js
this.name = 'global object';
var getName = function () {
  console.log(this.name);
}

// this 指向全局对象
getName();  // "global object"
```

#### 或者是在某个局部作用域下的普通函数

```js
this.name = 'global object';
var obj = {
  name: 'obj',
  getName () {
    var fn2 = function () {
      console.log( this.name )
    }
    fn2();
  }
}

// this 指向全局对象
obj.getName();  // "global object"
```


## 构造器调用

```js
var MyClass = function () {
  this.name = 'myclass';
  this.getName = function () {
    return this.name;
  }
}
var obj = new MyClass();
obj.getName(); // "myclass"
```

## 显式指定

call，apply 和 bind 都可以显式指明 this 的指向，可以说是指哪打哪。

```js
var getName = function () {
  console.log(this.name);
}

var obj1 = {
  name: 'obj1'
}
var obj2 = {
  name: 'obj2'
}
var obj3 = {
  name: 'obj3'
}

getName.call(obj1);  // "obj1"
getName.apply(obj2); // "obj2"
var getName2 = getName.bind(obj3);
getName2();          // "obj3"
```


## 匿名函数

```js
window.name = 'window';
(function () {
  console.log(this.name);
})()
```

## ES6箭头函数

**箭头函数总是从自己作用域链的上一层继承 this。**

先来定义一个 obj 对象：

```js
this.name = 'global object';

var obj = {
  name: 'obj',
  getName () {

    var fn1 = () => {
      console.log(this.name)
    }
    var fn2 = function () {
      // 这里的 this 总是只 window
      console.log( this.name )
    }

    fn1();
    fn2();
  }
}
```

执行函数：

```js
obj.getName();
// "obj"
// "global object"
```

变形记第一集：

```js
var getName = obj.getName;
getName();
// "global object"
// "global object"
```

变形记第二集：

```js
// 将方法赋值为另一个对象的属性
var obj2 = { name: 'obj2' }
obj2.getName = obj.getName;

obj2.getName();
// "obj2"
// "global object"
```