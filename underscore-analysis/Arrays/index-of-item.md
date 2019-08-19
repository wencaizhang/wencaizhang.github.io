# 查找元素索引


## indexOf

```js
_.indexOf([1, 2, 3], 2);
// 1
```

## lastIndexOf

```js
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// 4
```

## findIndex

```js
_.findIndex([4, 6, 8, 12], isPrime);
// -1 // not found
_.findIndex([4, 6, 7, 12], isPrime);
// 2
```

## findLastIndex

```js
var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
_.findLastIndex(users, {
  name: 'Ted'
});
// 3
```