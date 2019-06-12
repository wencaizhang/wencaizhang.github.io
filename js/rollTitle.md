# 网页 title 标题滚动

## 说明

标题滚动对象 `rollTitle` 提供以下 API:

1. `start(title, delay, callback)`:
    + `title`: 滚动时的标题，非必需，默认是当前网页 title；
    + `delay`: 滚动频率，可自定义滚动频率，默认 300ms 滚动一次；
    + `callback`: 每次滚动，都会调用 `callback` 函数。
1. `stop()`: 停止标题滚动效果；
1. `reset(title)`: 重置标题，可以指定新标题，默认是执行 `start()` 时的文档标题。

## 效果展示

您可以狠狠地点击下面按钮在本页面开启滚动效果或停止滚动效果：

<rollTitle />
<Alert />

## 代码

```js
var rollTitle = {
  timer: "",
  title: "",
  start: function(title, delay, callback) {
    var delay = delay || 300;
    var title = title || document.title;
    var step = 0;
    var len = title.length;
    var changeTitle = function(step) {
      //根据时间每次将切割后前面的字加到后面，直到step比标题个数还大，重新开始
      document.title = title.substring(step, len) + title.substring(0, step);
    };
    this.title = document.title;
    this.stop();
    this.timer = setInterval(function() {
      changeTitle(step);
      callback && typeof callback === "function" && callback();
      step++;
      if (step > len) step = 0;
    }, delay); //根据需求自己调整速度
  },
  stop: function() {
    clearInterval(this.timer);
  },
  reset: function (title) {
    document.title = title || this.title
  },
};
```

启动标题滚动效果：

```js
rollTitle.start();
```

取消滚动效果

```js
rollTitle.stop();
```

还原标题

```js
rollTitle.reset();
```