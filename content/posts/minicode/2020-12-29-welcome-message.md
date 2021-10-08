---
title: "欢迎提示语分享"
date: 2020-12-29
draft: false
categories:
- minicode
type:
- code
tags:
- JavaScript

---

当用户登录你的系统时，如果能够给出一个友好有趣的提示语，想必更能让你的用户感受到开发者的用心。

<!--more-->

今天分享一个当用户登入系统的友好提示语：

```js
function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  const timeMap = {
    9: '早上好',
    11: '上午好',
    13: '中午好',
    20: '下午好',
    24: '晚上好'
  }
  const key = Object.keys(timeMap).find(key => hour <= key)
  return timeMap[key]
}

function welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
```


<button id="welcome-btn" class="ui-button" data-type="success" width="100%">点我试试</button>


<script>

function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  const timeMap = {
    9: '早上好',
    11: '上午好',
    13: '中午好',
    20: '下午好',
    24: '晚上好'
  }
  const key = Object.keys(timeMap).find(key => hour <= key)
  return timeMap[key]
}

function welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function handleClick () {
  const msg = `${timeFix()}, ${welcome()}`
  console.log(msg)
  if (LightTip) {
    new LightTip().success(msg)
  };
}
// handleClick()
document.getElementById('welcome-btn').addEventListener('click', handleClick)

</script>
