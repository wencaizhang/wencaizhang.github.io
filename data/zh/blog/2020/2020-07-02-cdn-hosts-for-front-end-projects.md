---
title: "说一下我常用的前端 CDN 加速服务"
subtitle: ""
summary: ""
author: []
tags: [ "前端", "CDN" ]
category: []
date: "2020-07-02"
draft: false
---


> CDN 的全称是 **C**ontent **D**elivery **N**etwork，即内容分发网络。
>
> [CDN是什么？使用CDN有什么优势 - 知乎](https://www.zhihu.com/question/36514327)
>
> [什么是CDN？- 知乎](https://www.zhihu.com/question/37353035)

## 公用 CDN 的用途

### 用途一：写 DEMO

有时候需要在本地临时写一些特别简单的 demo 静态页面，对于一些第三方依赖的处理就有些纠结。

如果使用 npm 下载依赖难免就还需要 webpack 等编译工具，未免有种高射炮打蚊子的感觉，如果直接下载第三方依赖包到本地又感觉太麻烦，这时候公共 CDN 就刚好排上用场。

例如我想要快速引入一个 jQuery 来操作 DOM，直接在 HTML 文件中加上一行代码即可：

```html
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
```

即使是 Vuejs 和 Element 也可以这样操作：

```html
<link href="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.13/theme-chalk/index.css" rel="stylesheet">
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.14/vue.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.9/index.min.js"></script>
<div id="app">
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
</div>
<script>
  new Vue().$mount('#app')
</script>
```

### 用途二：用 CDN 减轻主站压力

搭建（开发）过网站的同学应该都知道，一个网站往往要依赖一些第三方库，例如 jQuery、BootStrap、Vue.js 等等，但是依赖的第三方库数量多了之后，难免会拖慢网站的打开速度，这时候适当的引入 CDN 服务是一个很好的策略。


使用 CDN 有这些好处：
1. 降低主站的压力：带宽压力和服务器请求压力
2. 增加并发请求数量：浏览器对同一个域名并发请求数量有限制，使用 CDN 会将请求分散到多个域名下，这样同一时间就可以发出更多的请求
3. 更快速的资源响应速度：请求 CDN 资源得到响应的速度，一般是比自己的服务器要快的。


## 也许你用得上的公共 CDN 服务

### BootCDN

网址：[BootCDN](https://www.bootcdn.cn/)

ps: 国内速度还是比较快的，也是我最常用的公共 CDN 服务。

> Bootstrap 中文网开源项目免费 CDN 加速服务 - 我们致力于为 Bootstrap、jQuery、Angular、Vue.js 一样优秀的开源项目提供稳定、快速、免费的 CDN 加速服务。BootCDN 是运营时间最长、用户量最大、最早同时支持 HTTPS（SSL）和 HTTP/2.0 协议的中立免费 CDN 。

### jsDelivr

网址：[jsDelivr](https://cdn.jsdelivr.net/)

好处在于是即使是个人在 GitHub 的代码仓库文件，也可以获得 CDN 加速，所以有大批网友把 jsDelivr 当做免费图床，只需要获取代码仓库对应的 CDN 链接即可。

jsDelivr 具体的链接对应规则可以参考：[jsDelivr 为开发者提供免费公共 CDN 加速服务](https://blog.csdn.net/larpland/article/details/101349605)

### CDNJS (by CloudFlare)

Everyone loves the Google CDN right? Even Microsoft runs their own CDN.
The problem is, they only host the most popular libraries.
We host it all - JavaScript, CSS, SWF, images, etc!

此仓库通过GitHub接受Fork和PR。地址：https://github.com/cdnjs/cdnjs

### 360 前端静态资源库

网址：[360 前端静态资源库](https://cdn.baomitu.com/)

> 360 前端静态资源库是由奇舞团支持并维护的开源项目免费 CDN 服务，支持 HTTPS 和 HTTP/2，囊括上千个前端资源库和 Google 字体库。
>
> 本站静态资源库数据均同步于 cdnjs，如发现版本更新不及时或未收录，欢迎向 cdnjs 提交 PR。


### 其他

国内还有一些机构提供了前端静态资源的 CDN 服务，但是因为资源数量比较少，就不是特别常用了。

+ [新浪云计算CDN公共库](http://lib.sinaapp.com/)
+ [又拍云JS库CDN服务](http://jscdn.upai.com/)
+ [七牛云存储 开放静态文件CDN](http://www.staticfile.org/)


## 风险

如果是商业项目，就不建议使用公共 CDN 服务了，毕竟不受自己控制，如果出现问题可能造成严重损失，这时候可以考虑选择一些 CDN 服务厂商。

如果是个人项目，使用 CDN 服务就可以减轻自己服务器和宽带压力，变相减少在这一方面的费用支出。

当然，单纯依赖于第三方的 CDN 都是不保险的，所以你可以给自己的网站添加一层保险：在 CDN 读取失败的时候从自己服务器获取对应的文件。

一般来说，JS 库都会向外暴露一个全局变量，根据是否存在这个全局变量从而判断出 cdn 资源是否加载成功。如果加载失败，就创建 `script` 标签从自己的服务器加载资源。示例代码如下：

```html
<script src="//cdn.staticfile.org/jquery/1.8.3/jquery.min.js"></script>
<script>
if (!window.jQuery) {
  // 从另外一个地址重新加载 jQuery 文件
  var script = document.createElement('script');
  script.src = "/js/jquery.min.js";
  document.body.appendChild(script);
}
</script>
```

当然这仅仅是重新加载了 jQuery，实际情况有可能还需要你重新调用入口函数，就不做演示了。

## 结语

祝小伙伴用上 CDN 之后，网站打开速度飞起！