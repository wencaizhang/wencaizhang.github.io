# 处理键值对

## keys

```js
var nativeKeys = Object.keys;

var has = function(obj, path) {
  return obj != null && hasOwnProperty.call(obj, path);
}

_.keys = function(obj) {
  if (!_.isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var keys = [];
  for (var key in obj) if (has(obj, key)) keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, keys);
  return keys;
};
```

1. 首先进行类型检测，如果不是 Object 类型，直接返回空数组
1. 如果浏览器支持原生方法，直接调用原生方法
1. 不支持原生方法的话，使用自己封装的方法，具体做法如下：
    1. 使用 `for in` 遍历 `obj`，拿到 `obj` 的每一个属性名
    1. 判断每个属性是否属于 `obj` 自身而非继承自原型链
    1. 如果属于自身，将属性名 push 到一个预先定义好的空数组中
    1. 最终返回存储属性名的数组

## values

```js
// Retrieve the values of an object's properties.
_.values = function(obj) {
  var keys = _.keys(obj);
  var length = keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[keys[i]];
  }
  return values;
};
```

1. 通过 [_.keys(obj)](./_.keys.html) 获取 `obj` 的属性名数组 `keys`
1. 根据 `keys` 初始化一个数组 `values`
1. 遍历 `keys` 拿到每个属性名对应的属性值，将其赋值到 `values` 对应索引的位置
1. 最终返回 `values`


## allKeys

## pairs

## invert
