---
title: "代码优化之表驱动编程"
date: 2020-11-29
draft: true
toc: true
description: 日拱一卒，代码优化每天一点点，今天分享一个优化代码的技巧 —— 表驱动编程
images:
tags: 
  - 代码优化
  - 表驱动
---


《代码大全》对表驱动编程的描述：

表驱动方法是一种使你可以在表中查找信息，而不必用逻辑语句（if 或 case）来把他们找出来的方法。事实上，任何信息都可以通过表来挑选。在简单的情况下，逻辑语句往往更简单而且更直接。但随着逻辑链的复杂，表就变得越来越富于吸引力了。
表驱动编程的意义在于逻辑与数据的分离。（类似于事件委托）



## 示例一

现在有一个需求，需要计算当前月有多少天，我们需要封装一个函数，传入年份和月份即可得到对应的天数。

我们知道，**闰年**的 2 月份有 29 天，非闰年的 2 月份只有 28 天，因此我们需要封装一个函数用于判断一个年份是否为闰年：

> 判断闰年标准为 该年份是 4 的倍数的，且不是100的倍数

```js
/*
 * 判断某一年份是否为闰年
 * year: 
 */
function isLeapYear (year) {
  return year % 4 === 0 && year % 100 !== 0
}
```

第一个版本：

```js


function howManyDays (year, month) {

  let days = 0
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31
      break;

    case 2:
      days = isLeapYear(year) ? 29 : 28
      break;

    default:
      days = 30
      break;
  }
}
```

```js
function howManyDays (year, month) {
  if(month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ){
    return 31
  }else if(month === 2){
    return isLeapYear(year) ? 29 : 28
  }else{
    return 30
  }
}
```

```js
// 是否闰年: 4的倍数的，且不是100的倍数
function isLeapYear (year) {
  return year % 4 === 0 && year % 100 !== 0
}

function howMonyDays (year, month) {
  const the2MonthDays = isLeapYear(year) ? 29 : 28
  const monthDays = [31, the2MonthDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  return monthDays[month - 1]
}
```

改进后

```js
function howManyDays(year, month){
  const table = {
    1: 31, 3: 31, 5: 31, 7: 31, 8: 31, 10: 31, 12:31,
    4: 30, 6:30, 9: 30, 11: 30,
    2: isLeapYear(year) ? 29 : 28
  }
  return table[month]
}
```

需求：根据分数为每个同学做出评价，90 分以上（含）评价为 A，80 - 90 评价为 B，以此类推，60 以下为 E 。

按照直观感受，写出来的代码如下：

```js
function calculateGrade(score){
  if(score>=90){
    return 'A'
  }else if(score >= 80){
    return 'B'
  }else if(score >= 70){
    return 'C'
  }else if(score >= 60){
    return 'D'
  }else {
    return 'E'
  }
}
```

根据表驱动编程思维来优化

```js
function calculateGrade(score){
  const table = {
    100: 'A',
    90: 'A',
    80: 'B',
    70: 'C',
    60: 'D',
    others: 'E'
  }
  return table[Math.floor(score/10)*10] || table['others']
}
```


