---
title: "封装日期相关函数"
heading: "计算传入的时间戳和当前时间相差了多久"
date: '2021-01-27'
draft: false
type: "Javascript"

---

某些时候我们需要展示某个时间点相差当前时刻多久，例如“一天前”，“一个月前”等。




```js
/**
 * 计算传入的时间戳和当前时间相差了多久
 * @param {Number} timestamp [时间戳]
 */
export function getTimeDiff (timestamp) {
  // 如果精确到毫秒，时间戳是 13 位数字
  // 这里按照秒来计算，需要将毫秒转换为秒
  if (timestamp > 1 * 10 ** 12) {
    timestamp = timestamp / 1000
  }

  var currentStamptime = Date.parse(new Date()) / 1000
  var agoAt = '刚刚'
  var diff = currentStamptime - timestamp
  var points = [
    { value: 365 * 24 * 60 * 60, suffix: '年前', max: 2 },
    { value: 30 * 24 * 60 * 60, suffix: '月前', max: 11 },
    { value: 7 * 24 * 60 * 60, suffix: '周前', max: 4 },
    { value: 24 * 60 * 60, suffix: '天前', max: 6 },
    { value: 60 * 60, suffix: '小时前', max: 23 },
    { value: 10 * 60, suffix: '0分钟前', max: 5 }
  ]

  for (var i = 0; i < points.length; i++) {
    var item = points[i]
    var mode = Math.floor(diff / item.value)
    if (mode >= 1) {
      agoAt = Math.min(mode, item.max) + item.suffix
      break
    }
  }
  return agoAt
}
```