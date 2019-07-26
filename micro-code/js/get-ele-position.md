# 获取元素位置

## getBoundingClientRect

`getBoundingClientRect` 方法返回元素的大小及其相对于视口(浏览器窗口左上角)的位置

此方法返回一个对象，包含以下属性：

<div style="display: flex; justify-content: space-between;">
<ul style="margin-top: 0;">
  <li> left: 元素<strong>左边框</strong>距离窗口<strong>左边框</strong>的距离 </li>
  <li> top: 元素<strong>顶部</strong>距离窗口<strong>顶部</strong>的距离 </li>
  <li> bottom: 元素<strong>顶部</strong>距离窗口<strong>顶部</strong>的距离 </li>
  <li> right: 元素<strong>右边框</strong>距离窗口<strong>左边框</strong>的距离 </li>
  <li> width: 元素宽度 </li>
  <li> height: 元素高度 </li>
</ul>

<img src="../images/rect.png" style="width: 300px;">
</div>

```js
var img = document.querySelector('img')
img.getBoundingClientRect();
// {
//   bottom: -222
//   height: 300
//   left: 780
//   right: 1080
//   top: -522
//   width: 300
//   x: 780
//   y: -522
// }
```

用这个方法得到的都是相对于浏览器窗口的位置，如果想要得到相对于**文档**的位置，只需要加上滚动距离即可。  

```js
var img = document.querySelector('img')
var rectObj = img.getBoundingClientRect();

var X = rectObj.left + document.documentElement.scrollLeft;
// 780
var Y = rectObj.top + document.documentElement.scrollTop;
// 304
```

## 参考

+ [Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

+ [用Javascript获取页面元素的位置 - 阮一峰](http://www.ruanyifeng.com/blog/2009/09/find_element_s_position_using_javascript.html)