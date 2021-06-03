---
title: "Hugo Quick Start"
date: 2020-06-27T14:30:51+08:00
draft: true
categories:
- hugo
tags:
- hugo
series:
- Hugo Guide
image: https://static.webjam.cn/images/logos/hugo-logo-wide.svg
---

## Hugo 是什么

Hugo 是一个静态网站生成器，同类型工具我使用过的还有 Hexo、Vuepress 等。

使用之后我的体验如下：

- Hexo 是基于 Node.js 开发，有丰富的主题，但是编译速度不够快。如果作为一个博客生成工具使用，考虑到后期博客组件增加，编译速度会越来越慢，那么体验就不够舒服

- Vuepress 的优点则是基于 Vue.js 开发，主题也是基于 Vue.js 开发，对于前端开发比较友好，而且是构建出来的网站是单页面，体验更佳，但缺点也很明显，同样是基于 Node.js 构建，速度上和 Hexo 有同样的问题，

所以，感觉这两者更适合文档类（文档数量有限）的场景。

而 Hugo 就不一样来，简直可以叫做性能小怪兽，编译速度飞快，能够很好的解决上面两个工具带来的痛点。

因此，我会把 hugo 作为个人网站（博客）构建工具，把 Vuepress 作为文档构建工具。

## 安装 Hugo

Hugo 是用 Go 语言写的，支持多个平台，而且官方提供了构建好的二进制文件，只需要下载合适你系统版本的 Hugo 二进制文件即可。

如果你的系统是 MacOS，你可以直接使用 `brew` 来安装：

```bash
brew install hugo
```

如果系统是 Windows 或 Linux，可以去 [hugo/releases](https://github.com/gohugoio/hugo/releases) 页面下载相应的二进制文件，为了方便使用，建议把它安装到你的 `PATH` 环境变量所在的位置。

## 生成站点

使用Hugo快速生成站点，比如希望生成到 `/path/to/site` 路径：

```bash
hugo new site /path/to/site
```

也可以直接在当前路径下创建站点，比如：

```bash
hugo new site my-hugo-site
```

这样就会在当前路径下生成一个 `my-hugo-site` 目录，目录结构和功能如下：

```
.
├── archetypes
│   └── default.md
├── config.toml
├── content
├── data
├── layouts
├── static
└── themes
```

我们主要关心三个目录/文件即可：

`themes` 目录下存放站点使用的主题，主题需要单独下载。
`content` 目录是存放站点的内容文件（markdown 文件）
`config.toml` 是站点和主题的配置文件

## 创建文章

创建一个 about 页面：

```bash
hugo new about.md
```

`about.md` 自动生成到了 `content/about.md` ，打开 `about.md` 看下：

```markdown
+++
date = "2015-10-25T08:36:54-07:00"
draft = true
title = "about"

+++

正文内容
```

内容是 `Markdown` 格式的，`+++` 之间的内容是 TOML 格式的，根据你的喜好，你可以换成 YAML 格式（使用 --- 标记）或者 JSON 格式。

创建第一篇文章，放到 `post` 目录，方便之后生成聚合页面。

```bash
hugo new post/first.md
```

打开编辑 `post/first.md` ：

```markdown
---
date: "2015-10-25T08:36:54-07:00"
title: "first"
 
---

### Hello Hugo

 1. aaa
 1. bbb
 1. ccc
```


## 安装皮肤

到 皮肤列表 挑选一个心仪的皮肤，比如你觉得 Hyde 皮肤不错，找到相关的 GitHub 地址，创建目录 themes，在 themes 目录里把皮肤 git clone 下来：

```markdown
# 创建 themes 目录
cd themes
git clone https://github.com/spf13/hyde.git
```

## 运行Hugo

在你的站点根目录执行 `Hugo` 命令进行调试：

```bash
hugo server -D --theme=hyde
```

浏览器里打开： `http://localhost:1313`

## 部署

部署之前需要先将 Markdown 文件编译成静态 HTML 网站，直接执行 `hugo` 命令即可

```bash
hugo
```

生成的静态文件存放 `public` 文件夹中，你可以使用 nginx、GitHub pages 或者 gitee pages 来部署自己的网站。

如果你想进一步压缩 HTML、JS、CSS 等文件，你可以在编译的时候添加 `--minify` 参数

```bash
hugo --minify
```

但是这种方法压缩出来的 HTML 中属性值是没有引号的。

```html
<html lang=en>
</html>
```

只有当属性值是多个值当时候才有引号，像下面这样：

```html
<meta name=viewport content="width=device-width,initial-scale=1">
```
