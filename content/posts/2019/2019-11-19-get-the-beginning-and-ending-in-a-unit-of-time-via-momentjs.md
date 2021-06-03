---
title: "Get the Beginning and Ending in a Unit of Time via Momentjs"
date: 2019-11-19T17:04:31+08:00
draft: false
toc: true
images:
tags: 
  - momentjs
---

> 根据 `moment.js` 得到一个单位时间或者时间段（如本周，上周，本月，上月，当前季度，上个季度）的开始结束时间

+ [momentjs 文档](https://momentjs.com/)

主要利用以下几项 API：

+ `format()`: 得到格式化的时间
+ `startOf()`: 得到一个单位时间的开始时间点，[文档](https://momentjs.com/docs/#/manipulating/start-of/)
+ `endOf()`: 得到一个单位时间的结束时间点
+ `add()`: 在指定时间点的基础上，加上一个时间段
+ `subtract()`: 在指定时间点的基础上，减去一个时间段
+ `week()`: 获取或设置一个时间对象的周数（第几周）
+ `month()`: 获取或设置一个时间对象的月份
+ `quarter()`: 获取或设置一个时间对象的季度


## 天


```js
// 获取当天开始结束时间
function getCurrDays () {
  let date = moment()
  let start = date.startOf('days').format('YYYY-MM-DD HH:mm:ss')
  let end   = date.endOf('days').format('YYYY-MM-DD HH:mm:ss')
  return [ start, end ]
}

// 获取昨天的开始结束时间
function getYesterday () {
  let date = moment().subtract('days',1);
  let start = date.startOf('days').format('YYYY-MM-DD HH:mm:ss')
  let end   = date.endOf('days').format('YYYY-MM-DD HH:mm:ss')
  return [ start, end ]
}

// 获取明天的开始结束时间
function getTomorrow () {
  let date = moment().add('days',1);
  let start = date.startOf('days').format('YYYY-MM-DD HH:mm:ss')
  let end   = date.endOf('days').format('YYYY-MM-DD HH:mm:ss')
  return [ start, end ]
}
```

## 周

获取某一周（本周，上周，下周）的开始结束时间，一周从周日开始到周六结束。

```js
// 本周
function getCurrWeekDays () {
  let date = moment()
  let start = date.startOf('week').format('YYYY-MM-DD HH:mm:ss')
  let end   = date.endOf('week').format('YYYY-MM-DD HH:mm:ss')
  return [ start, end ]
}
// 上一周
function getLastWeekDays () {
  let date = moment().week(moment().week() - 1)
  let start = date.startOf('week').format('YYYY-MM-DD HH:mm:ss')
  let end   = date.endOf('week').format('YYYY-MM-DD HH:mm:ss')
  return [ start, end ]
}
// 下一周
function getNextWeekDays () {
  let date = moment().week(moment().week() + 1)
  let start = date.startOf('week').format('YYYY-MM-DD HH:mm:ss')
  let end   = date.endOf('week').format('YYYY-MM-DD HH:mm:ss')
  return [ start, end ]
}
```


## 月


```js
// 本月
function getCurrMonthDays () {
  let date = moment()
  let start = date.startOf('month').format('YYYY-MM-DD')
  let end   = date.endOf('month').format('YYYY-MM-DD')
  return [ start, end ];
}
// 上个月
function getLastMonthDays () {
  let date = moment().month(moment().month() - 1)
  let start = date.startOf('month').format('YYYY-MM-DD')
  let end   = date.endOf('month').format('YYYY-MM-DD')
  return [ start, end ];
}
// 下个月
function getNextMonthDays () {
  let date = moment().month(moment().month() + 1)
  let start = date.startOf('month').format('YYYY-MM-DD')
  let end   = date.endOf('month').format('YYYY-MM-DD')
  return [ start, end ];
}
```


## 季度


```js
// 当前季度
function getCurrQuarter () {
  let date = moment()
  let start = date.startOf('quarter').format('YYYY-MM-DD')
  let end   = date.endOf('quarter').format('YYYY-MM-DD')
  return [ start, end ];
}
// 上个季度
function getLastQuarter () {
  let date = moment().quarter(moment().quarter() - 1)
  let start = date.startOf('quarter').format('YYYY-MM-DD')
  let end   = date.endOf('quarter').format('YYYY-MM-DD')
  return [ start, end ];
}
// 下个季度
function getLastQuarter () {
  let date = moment().quarter(moment().quarter() + 1)

}
```

## DRY - 

> Don't repeat yourself.

上面代码中可以看到有一个固定结构重复了好多次：

```js
function getX () {
  let date = x
  let start = date.startOf('时间单位类型').format('格式化')
  let end   = date.endOf('时间单位类型').format('格式化')
  return [ start, end ];
}
```

所以我们可以专门封装一个函数，接收三个参数（时间，时间单位，格式化），返回开始和结束时间。

```js
function getDuringTime (date, type, format) {
  let start = date.startOf(type).format(format)
  let end   = date.endOf(type).format(format)
  return [ start, end ];
}
```

有了此工具函数，将上面代码汇总如下：



```js
/**
 * @param {date} date [momentjs 时间对象]
 * @param {String} type [单位时间类型]
 * @param {String} format [时间格式]
 * type 可以接收的值： year, month, quarter, week, isoWeek, day, date, hour, minute, second
 */
function getDuringTime (date=moment(), type='days', format='YYYY-MM-DD HH:mm:ss') {
  let start = date.startOf(type).format(format)
  let end   = date.endOf(type).format(format)
  return [ start, end ];
}

// 获取当天开始结束时间
function getCurrDays () {
  let date = moment()
  return getDuringTime(date, 'days', 'YYYY-MM-DD')
}

// 获取昨天的开始结束时间
function getYesterday () {
  let date = moment().subtract('days',1)
  return getDuringTime(date, 'days', 'YYYY-MM-DD')
}

// 获取明天的开始结束时间
function getTomorrow () {
  let date = moment().add('days',1)
  return getDuringTime(date, 'days', 'YYYY-MM-DD')
}

// 获取某一周（本周，上周，下周）的开始结束时间，一周从周日开始到周六结束。
// 本周
function getCurrWeekDays () {
  let date = moment()
  return getDuringTime(date, 'week', 'YYYY-MM-DD')
}
// 上一周
function getLastWeekDays () {
  let date = moment().week(moment().week() - 1)
  return getDuringTime(date, 'week', 'YYYY-MM-DD')
}
// 下一周
function getNextWeekDays () {
  let date = moment().week(moment().week() + 1)
  return getDuringTime(date, 'week', 'YYYY-MM-DD')
}

// 本月
function getCurrMonthDays () {
  let date = moment()
  return getDuringTime(date, 'month', 'YYYY-MM-DD')
}
// 上个月
function getLastMonthDays () {
  let date = moment().month(moment().month() - 1)
  return getDuringTime(date, 'month', 'YYYY-MM-DD')
}
// 下个月
function getNextMonthDays () {
  let date = moment().month(moment().month() + 1)
  return getDuringTime(date, 'month', 'YYYY-MM-DD')
}

// 当前季度
function getCurrQuarter () {
  let date = moment()
  return getDuringTime(date, 'quarter', 'YYYY-MM-DD')
}
// 上个季度
function getLastQuarter () {
  let date = moment().quarter(moment().quarter() - 1)
  return getDuringTime(date, 'quarter', 'YYYY-MM-DD')
}
// 下个季度
function getLastQuarter () {
  let date = moment().quarter(moment().quarter() + 1)
  return getDuringTime(date, 'quarter', 'YYYY-MM-DD')
}
```


---

本文完，感谢阅读。:stuck_out_tongue_winking_eye: 