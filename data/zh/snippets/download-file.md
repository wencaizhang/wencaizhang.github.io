---
heading: "前端创建并下载文件"
title: "前端创建并下载文件"
date: '2021-01-27'
draft: false
type: "Javascript"

---

more 利用 HTML5 原生的 `download` 属性来下载文本信息



代码如下：

```js
/**
 * 前端创建并下载文件
 * @param {String} content 文件内容
 * @param {String} filename 文件名称
 * @param {String} MIME
 * MIME类型参考手册 http://www.w3school.com.cn/media/media_mimeref.asp
 */
export function downloadFile (content, filename, MIME = 'application/octet-stream') {
  // 创建隐藏的可下载链接
  const eleLink = document.createElement('a')
  eleLink.download = filename
  eleLink.style.display = 'none'

  // 字符内容转变成blob地址
  const blob = new Blob([content], { type: MIME })
  eleLink.href = URL.createObjectURL(blob)

  // 触发点击事件，然后移除
  document.body.appendChild(eleLink)
  eleLink.click()
  document.body.removeChild(eleLink)
}
```

其中，参数 `content` 指需要下载的文本或字符串内容，`filename` 指下载到系统中的文件名称。

代码来源：[JS前端创建html或json文件并浏览器导出下载](https://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/)