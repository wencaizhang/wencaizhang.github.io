# 数组去重

## Set

> 兼容性极差

```js
function uniq (arr) {
  return [...new Set(arr)];
}
```

## 利用对象属性唯一

> 前提：数组元素是 Number \ String 类型
> 如果是 Number 类型，会被转化成 String 类型（对象属性是 String 类型）

```js
function uniq (arr) {
  const obj = {}
  arr.forEach(item => {
    obj[item] = true;
  });
  return Object.keys(obj);
}
```

## 遍历数组

```js
function uniq (arr) {
  const ret = [];
  arr.forEach(item => !ret.includes(item) && ret.push(item));
  return ret;
}
```