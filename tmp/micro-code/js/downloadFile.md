# 前端创建并下载文件

```js
/**
 * 前端创建并下载文件
 * @param {String} content 文件内容
 * @param {String} filename 文件名称
 * @param {String} MIME
 * MIME类型参考手册 http://www.w3school.com.cn/media/media_mimeref.asp
 */
function downloadFile (content, filename, MIME="application/octet-stream") {
  // 创建隐藏的可下载链接
  const eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.style.display = 'none';

  // 字符内容转变成blob地址
  const blob = new Blob([content], {type: MIME});
  eleLink.href = URL.createObjectURL(blob);

  // 触发点击事件，然后移除
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}
```