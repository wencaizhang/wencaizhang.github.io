---
title: "快速生成连续数字和字母列表"
date: "2021-11-25"
draft: false
category:
- js
tags:
- js
---


# 快速生成连续数字和字母列表


有时候你需要生成一系列的数字或字母。

## 生成数字列表

### 方法一：直接枚举

```js
function generateNumberList () {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}
```

### 方法二：循环

```js
function generateNumberList () {
  const numberList = []
  for (let i = 0; i <= 9; i++) {
    numberList.push(i)
  }
  return numberList
}
console.log(generateNumberList())
```

### 方法二：Array.from

`Array.from` 可以将「类似数组的对象」转换成数组，然后再将数组的索引映射为新对象。

```js
function generateNumberList () {
  return Array.from({ length: 10 }).map((x, i) => i)
}
```


## 生成 A-Z 的 26 个英文字母列表

### 方法一：直接枚举

```js
function generateLetterList () {
  return [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
		'Y', 'Z'
  ]
}
```

### 方法二：`String.fromCharCode()`


完整的 UTF 16 表格

```js
function generateLetterList () {
  const arr = []
  for (let i = 65; i < 90; i++) {
    arr.push(String.fromCharCode(i))
  }
	return arr
}
console.log(generateLetterList())
```


## 参考

- [String.fromCharCode() - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
