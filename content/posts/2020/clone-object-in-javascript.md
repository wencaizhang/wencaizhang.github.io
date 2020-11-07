---
title: "JavaScript 之深浅拷贝"
date: 2020-06-28T14:30:51+08:00
draft: true
categories:
- JavaScript
tags:
- js

---

[toc]

## 基本类型和引用类型

先来看看 `JavaScript` 中两种数据类型有何异同。

**基本类型和引用类型的保存方式不同。**

基本数据类型是按值访问的。基本数据类型的值保存在栈内存中，可以直接对其操作。基本数据类型包含 5 种：`Undefined`、 `Null`、 `Boolean`、`Number` 和 `String`。

引用类型的值是按引用访问的。引用类型的值保存在堆内存中，另外在栈内存中会有一个引用指针指向堆内存中的对象，变量中保存的实际上是一个指针。在操作对象时，实际上是在操作对象的引用指针而不是实际的对象。

**另外，基本类型和引用类型的复制方式也不同。**

如果从一个变量向另一个变量复制基本类型的值，会在栈内存中创建一个新值，然后把值复制到新变量的位置上。例如：
```js
var num1 = 5;
var num2 = num1;
```
现在，将 `num1` 的值复制给 `num2` ，两个变量中的值相同，但是 `num2` 的值只是 `num1`  的值的一个副本，因此两者是相互独立的，不会互相影响。
![](http://p2btijoky.bkt.clouddn.com/18-1-24/23089597.jpg)

当一个变量向另一个变量复制引用类型的值，同样也会将储存在变量中的值复制一份到为新变量分配的空间中。但是这个值实际上是一个指针，指向储存在堆内存中的一个对象。复制结束后，两个变量存储的指针指向同一个对象，因此改变其中一个变量，就会影响到另一个变量。
```js
var obj1 = { name: 'js' }
var obj2 = obj1;
obj2.name = 'jquery';
console.log( obj1.name ); // jquery
```
![](http://p2btijoky.bkt.clouddn.com/18-1-24/53586937.jpg)

由此可见，基本数据类型的复制非常简单，直接使用赋值运算即可，无副作用。然而引用类型的复制则不能直接使用赋值运算，否则操作的仍是同一个对象，毫无意义。

故下面讨论的拷贝都是针对引用数据类型而言。

## 浅拷贝 demo

我们说的复制，其实就是希望得到一个和原有对象有相同键值对集合（属性）的新对象，那么我们可以直接遍历对象，将键值对都储存在一个新的对象下，这样新对象和原对象就有一样的键值对集合（属性），也就达到我们的目标。

等一下，这里有个问题，如果某个属性值为引用类型，储存的值为对应的引用指针，则仍然会出现新变量和原有变量相互影响的问题。

以数组为例，若数组中元素都为基本数据类型：

第一步，遍历原数组，单独拷贝其中元素：
```js
var arr = [ 1, 2, 3 ];
var newArr = [];
arr.forEach(function (item, index) {
  newArr[index] = item;
})

console.log(arr);     // [1, 2, 3]
console.log(newArr);  // [1, 2, 3]
```

第二步，修改新数组：
```js
newArr.push(4);

console.log(arr);     // [1, 2, 3]
console.log(newArr);  // [1, 2, 3, 4]
```
可以看到，修改 `newArr` ，原数组 `arr` 并未发生修改。

同样以数组为例，若数组中存在引用类型的元素：

第一步，遍历进行拷贝
```js
var arr = [ 1, 2, [ 3, 4 ] ];
var newArr = [];
arr.forEach(function (item, index) {
  newArr[index] = item;
})

console.log(arr);     // [1, 2, [3, 4]]
console.log(newArr);  // [1, 2, [3, 4]]
```

第二步，修改新数组中嵌套的数组
```js
newArr[2].push(5);

console.log(arr);     // [1, 2, [3, 4, 5]]
console.log(newArr);  // [1, 2, [3, 4, 5]]
```
我们发现，无论是 `arr` 还是 `newArr` 都发生了变化。

当属性值为基本数据类型时，我们拷贝出来的新对象和原对象**互不影响**，当属性值为引用类型时，新对象和原对象在修改引用类型的属性值时**相互影响**。

所以说这种拷贝方式不够彻底，即浅拷贝。

## 总结浅拷贝的方法

现在我们封装一个同时适用于 `Array` 和 `Object` 类型的浅拷贝的方法：

```js
function shallowCopy (obj) {
  if (typeof obj !== 'object') return obj;

  var newObj = obj instanceof Array ? [] : {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
```
注意几点：
1. 只拷贝引用类型，基本数据类型直接返回即可
2. 根据 `obj` 的类型来判断新建一个空数组或者空对象
3. 遍历时，使用 `hasOwnProperty()` 过滤出对象实例的属性

## 总结深拷贝的方法

上面演示了浅拷贝，浅拷贝存在的问题是引用类型的属性也是引用类型，但其实最终引用类型的键值也是由基本类型组成的。

如 `var person = { name: 'jake' }` 中 `person` 是引用类型，但是 `person` 的属性名和属性值都是基本类型。

所以如果我们对其进行递归浅拷贝，总会拷贝到键值均为基本数据类型的那一步。

具体代码如下：
```js
function deepCopy (obj) {
  if ( typeof obj !== 'object' ) return obj;

  var newObj = obj instanceof Array ? [] : {};

  for ( var key in obj ) {
    if ( obj.hasOwnProperty( key ) ) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy( obj[key] ) : obj[key];
    }
  }

  return newObj;
}
```

现在我们来测试一下：
```js
var arr = [ 1, 2, [ 3, 4 ] ];
var newArr = deepCopy(arr);

newArr[2].push(5);

console.log( arr[2] );     // [3, 4]
console.log( newArr[2] );  // [3, 4, 5]
```

此时尽管 `arr` 中有引用类型的元素，通过深拷贝（递归浅拷贝）得到新对象 `newArr` 之后，修改其引用类型的属性可以发现，`arr` 和 `newArr` 不再互相影响，所以这种递归拷贝的方式叫做深拷贝。

## 封装深浅拷贝的方法
上面分别总结了浅拷贝和深拷贝的方法，但是这两个方法的功能以及代码都有很大的相似度，我们可以考虑将它们封装成一个方法，通过多传入一个参数区分深拷贝和浅拷贝，如：`extend( [deep], obj )`。
大致思路如下：

1. 第一个参数 `deep` 为布尔类型，区分深浅拷贝，可忽略，忽略时视为浅拷贝（即默认值 `false`）
2. 如果传入参数 `deep` 那么第二个参数是拷贝的目标对象，如果忽略 `deep` 参数，那么第一个参数就是拷贝的目标对象。
3. 在为新建空对象的拷贝属性时，通过 `deep` 判断是否进行深拷贝。

代码如下：
```js
function extend() {
  var deep = false;
  var target = arguments[0];
  var newObj, copy;
  if ( typeof target == 'boolean' ) {
    deep = target;
    target = arguments[1];
  }
  newObj = target instanceof Array ? [] : {};
  
  if ( typeof target !== 'object' ) return target;
  
  for ( var key in target ) {
    if ( target.hasOwnProperty( key ) ) {
      copy = target[ key ];
      newObj[key] = deep && typeof copy === 'object' ? extend(deep, copy) : copy;
    }
  }

  return newObj;
}
```
以数组为例测试一下：
```js
var arr = [ 1, 2, [ 3, 4 ] ];
var newArr = extend(false, arr);
var newArr2 = extend(true, arr);

newArr[2].push(5);

console.log( arr[2] );     // [1, 2, [3, 4, 5]]
console.log( newArr[2] );  // [1, 2, [3, 4, 5]]
console.log( newArr2[2] ); // [1, 2, [3, 4]]
```
和预期一样，Good Job!

参考资料：

+ [JavaScript 高级程序设计](https://book.douban.com/subject/10546125/)

+ [for...in · MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)

+ [Object.prototype.hasOwnProperty() · MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

+ [How to Deep clone in javascript · stackoverflow](https://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript)

+ [How do I correctly clone a JavaScript object? · stackoverflow](https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object)