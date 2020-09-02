---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "说一下我常用的前端 CDN 加速服务"
subtitle: ""
summary: ""
authors: []
tags: [ "前端", "CDN" ]
categories: []
date: 2020-07-02T19:58:34+08:00
lastmod: 2020-07-02T19:58:34+08:00
featured: false
draft: false
---

搭建（开发）过网站的同学应该都知道，一个网站往往要依赖一些第三方库，例如 jQuery、BootStrap、Vue.js 等等，但是依赖的第三方库数量多了之后，难免会拖慢网站的打开速度，这时候适当的引入 CDN 服务是一个很好的策略。

> CDN 的全称是 **C**ontent **D**elivery **N**etwork，即内容分发网络。
>
> [CDN是什么？使用CDN有什么优势 - 知乎](https://www.zhihu.com/question/36514327)
>
> [什么是CDN？- 知乎](https://www.zhihu.com/question/37353035)

使用 CDN 有这些好处：
1. 降低主站的压力：带宽压力和服务器请求压力
2. 增加并发请求数量：浏览器对同一个域名并发请求数量有限制，使用 CDN 会将请求分散到多个域名下，这样同一时间就可以发出更多的请求
3. 更快速的资源响应速度：请求 CDN 资源得到响应的速度，一般是比自己的服务器要快的。


### BootCDN

网址：[BootCDN](https://www.bootcdn.cn/)

> Bootstrap 中文网开源项目免费 CDN 加速服务 - 我们致力于为 Bootstrap、jQuery、Angular、Vue.js 一样优秀的开源项目提供稳定、快速、免费的 CDN 加速服务。BootCDN 是运营时间最长、用户量最大、最早同时支持 HTTPS（SSL）和 HTTP/2.0 协议的中立免费 CDN 。

### jsDelivr

网址：[jsDelivr](https://cdn.jsdelivr.net/)

jsDelivr 提供 npm，GitHub，WordPress 等项目的镜像。也就是说开发者托管在 GitHub 的代码、发布到 npm 的项目、发布到 WordPress.org 的项目（插件或主题）等文件，都可以使用 jsDelivr 的 cdn 加速功能。

其他的 cdn 托管的大都是知名开源前端库，而个人开发者想要让自己的文件也享受 cdn 服务，除了使用专业的 cdn 服务（如七牛云、又拍云）之外，还有一个很好的选项就是把文件托管到 GitHub，使用 jsDelivr 的加速服务。

jsDelivr 具体的使用规则略微复杂，可以参考：[jsDelivr 为开发者提供免费公共 CDN 加速服务](https://blog.csdn.net/larpland/article/details/101349605)

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


## 加一道保险

当然，单纯依赖于第三方的 CDN 都是不保险的，所以你可以给自己的网站添加一层保险：在 CDN 读取失败的时候从自己服务器获取对应的文件。

一般来说，JS 库都会向外暴露一个全局变量，根据是否存在这个全局变量从而判断出 cdn 资源是否加载成功。如果加载失败，就创建 `script` 标签从自己的服务器加载资源。示例代码如下：

```html
<script src="//cdn.staticfile.org/jquery/1.8.3/jquery.min.js"></script>
<script>
if (!window.jQuery) {
  var script = document.createElement('script');
  script.src = "/js/jquery.min.js";
  document.body.appendChild(script);
}
</script>
```

## 结语

祝小伙伴用上 CDN 之后，网站打开速度飞起！