# 时间（戳）相关

> 时间戳是指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(**北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒**)起至现在的总秒数。
>
> 如果推荐 [Moment.js - JavaScript 日期处理类库](http://momentjs.cn/)

## JavaScript 获取当前时间戳

方法一：

```js
var timestamp = Date.parse(new Date());
```

方法二：

```js
var timestamp = new Date().valueOf();
```

方法三：

```js
var timestamp = new Date().getTime();
```

第一种获取的时间戳是精确到秒，第二种和第三种是获取的时间戳精确到毫秒。


## 根据时间戳获取对应时间信息

```js
/**
 * 根据时间戳，获取对应时间信息：年月日时分秒
 * @param {Number} timestamp [时间戳]
 * 如果时间戳为空，则按当前时间计算
 */
export function getTimeInfo(timestamp) {
  const date = timestamp ? new Date(timestamp) : new Date();
  const timeInfo = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds()
  };
  return timeInfo;
}
```

## 将正常时间格式转化为时间戳

```js{9}
/**
 * 将正常时间格式转化为时间戳
 * 如果不传入时间参数，默认按照当前时间计算
 * @param {String} time [正常时间格式，如：2019-04-01 13:10:10]
 */
export function getTimestamp(time) {
  // 没有对 time 做合法性校验
  // 假设传入的 time 都是合法的时间格式：2019-04-01 13:10:10
  const date = time ? new Date(time.replace(/-/g, '/')) : new Date();
  const timestamp = date.getTime(); // 13 位数字，精确到毫秒
  return timestamp;
}
```

::: danger 注意
在部分苹果机型（如苹果X）上，下面代码会得到 NaN
```js
const time = '2019-04-01 13:10:10';
const date = new Date(time); // -> NaN
```

解决办法是把横杠 `-` 替换成斜线 `/`：
```js
const time = '2019-04-01 13:10:10';
const date = new Date(time.replace(/-/g, '/'));
// -> Mon Apr 01 2019 13:10:10 GMT+0800 (中国标准时间)
```
:::

## 将时间戳转化为正常时间格式

```js
/**
 * 将时间戳转化为时间
 * @param {String} timestamp 时间戳，默认值是当前时间的时间戳
 * @param {String} formats 最终返回的时间格式
 * YYYY|MM|DD|hh|mm|ss，分别是年/月/日/时/分/秒，可自由组合成想要的时间格式
 */
export function dateFormat(timestamp, formats = 'YYYY-MM-DD hh:mm:ss') {
  const date = timestamp ? new Date(timestamp) : new Date();
  const timeInfo = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };

  Object.keys(timeInfo).forEach(key => {
    timeInfo[key] = String(timeInfo[key]).padStart(2, 0)
  })
  return formats.replace(/YYYY|MM|DD|hh|mm|ss/gi, matches => timeInfo[matches]);
}
```

如果浏览器不支持 padStart 方法，可以使用下面 polyfill

```js
String.prototype.padStart = function (targetLength, padString) {
  targetLength = targetLength>>0;
  padString = String((typeof padString !== 'undefined' ? padString : ' '));
  if (this.length > targetLength) {
    return String(this);
  } else {
    targetLength = targetLength-this.length;
    if (targetLength > padString.length) {
        padString += padString.repeat(targetLength/padString.length);
    }
    return padString.slice(0,targetLength) + String(this);
  }
}
```

## 将时间戳转化为星期几

```js
/**
 * 将时间戳转化为星期几，如果不传入时间戳，就按照当前时间计算
 * @param {String} timestamp 时间戳
 */
export function getWeekDay(timestamp) {
  // 一周的第一天是周日
  const map = ["日", "一", "二", "三", "四", "五", "六"];
  const date = timestamp ? new Date(timestamp) : new Date();
  const index = date.getDay();
  return "星期" + map[index];
}
```

## 计算传入的时间戳和当前时间相差了多久

```js
/**
 * 计算传入的时间戳和当前时间相差了多久
 * @param {Number} timestamp [时间戳]
 */
function getTimeDiff (timestamp) {
  // 如果精确到毫秒，时间戳是 13 位数字
  // 这里按照秒来计算，需要将毫秒转换为秒
  if (timestamp > 1 * 10 ** 12) {
    timestamp = timestamp / 1000;
  }

  var currentStamptime = Date.parse(new Date()) / 1000;
  var agoAt = '刚刚';
  var diff = currentStamptime - timestamp;
  var points = [
    { value: 365 * 24 * 60 * 60, suffix: '年前', max: 2 },
    { value: 30 * 24 * 60 * 60,  suffix: '月前', max: 11 },
    { value: 7 * 24 * 60 * 60,   suffix: '周前', max: 4 },
    { value: 24 * 60 * 60,       suffix: '天前', max: 6 },
    { value: 60 * 60,            suffix: '小时前', max: 23 },
    { value: 10 * 60,            suffix: '0分钟前', max: 5 }
  ];

  for (var i = 0; i < points.length; i++) {
    var item = points[i];
    var mode = Math.floor(diff / item.value);
    if (mode >= 1) {
      agoAt = Math.min(mode, item.max) + item.suffix;
      break;
    }
  }
  return agoAt;
}
```