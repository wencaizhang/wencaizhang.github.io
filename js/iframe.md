# iframe

## 设置 iframe 高度自适应


## 实现
此方法前提条件：为方便获取 `iframe` 元素，需要知道该 `iframe` 的 `id`（当页面只有一个 `iframe` 元素时，使用类名或标签名也可以）。

此处假设 `iframe` 元素的 id 为 `iframe`。

为行文方便，后面将 `iframe` 元素指定的页面称为“子窗口或子页面”， `iframe` 元素所在的页面称为“父窗口”

### jQuery 版

```js
function resizeIframeParentHeight() {
  $("#iframe", window.parent.document).css('height', $('body').outerHeight());
}
```
1. 此方法在子窗口中，在初次加载完成或者页面高度发生变化时执行
1. `$("#iframe", window.parent.document)` 获取父窗口中的 `iframe` 元素
1. `$('body').outerHeight()` 获取 `iframe` 元素指定页面的高度

### js 版
您可以狠狠点击这里：[js版iframe高度自适应demo](http://demo.wencaizhang.com/pages/iframe-parent.html)

```js
function resizeIframeParentHeight() {
  var iframeHeight = document.body.scrollHeight;
  var iframe = window.parent.document.getElementById('iframe');
  iframe.style.height = iframeHeight + 'px';
}
```
1. 此方法在子窗口中，在初次加载完成或者页面高度发生变化时执行
1. `window.parent` 获取父窗口中 `document` ，则 `window.parent.document.getElementById('iframe')` 获取 `iframe` 元素
1. `document.body.scrollHeight` 获取 `iframe` 元素指定页面的高度