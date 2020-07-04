# 设置欢迎语

## 根据不同时段打招呼

```js
function sayHello() {
  const time = new Date();
  const hour = time.getHours();
  const timeObj = {
    9:  '早上好',
    11: '上午好',
    13: '中午好',
    20: '下午好',
    24: '晚上好',
  };
  const key = Object.keys(timeObj).find(key => hour <= key);
  return timeObj[key];
}
```

## 随机打招呼

```js
function welcome() {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  let index = Math.floor((Math.random()*arr.length))
  return arr[index]
}
```