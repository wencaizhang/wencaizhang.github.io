---
title: "Hugo Quick Start"
date: 2020-06-28T14:30:51+08:00
draft: true
categories:
- hugo
tags:
- hugo
---

## 安装 Hugo

Hugo 是用 Go 语言写的，支持多个平台，而且官方提供了构建好的二进制文件，只需要下载合适你系统版本的 Hugo 二进制文件即可。

为了方便使用，建议把它安装到你的 PATH 环境变量所在的位置。

在 macOS 上还可以通过命令进行安装：

```bash
brew install hugo
```


## 生成站点

使用Hugo快速生成站点，比如希望生成到 `/path/to/site` 路径：

```bash
$ hugo new site /path/to/site
```

这样就在 `/path/to/site` 目录里生成了初始站点，进去目录：

```bash
$ cd /path/to/site
```

站点目录结构：

```
  ▸ archetypes/
  ▸ content/
  ▸ layouts/
  ▸ static/
    config.toml
```

## 创建文章

创建一个 about 页面：

```bash
$ hugo new about.md
```

`about.md` 自动生成到了 `content/about.md` ，打开 `about.md` 看下：

```md
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
$ hugo new post/first.md
```

打开编辑 `post/first.md` ：

```md
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

```md
# 创建 themes 目录
$ cd themes
$ git clone https://github.com/spf13/hyde.git
```

## 运行Hugo

在你的站点根目录执行 `Hugo` 命令进行调试：

```bash
$ hugo server --theme=hyde --buildDrafts
```

（注明：v0.15 版本之后，不再需要使用 --watch 参数了）

浏览器里打开： `http://localhost:1313`

## 部署

假设你需要部署在 `GitHub Pages` 上，首先在 GitHub 上创建一个 Repository，命名为：`coderzh.github.io` （coderzh替换为你的github用户名）。

在站点根目录执行 Hugo 命令生成最终页面：

```bash
$ hugo --theme=hyde --baseUrl="http://coderzh.github.io/"
```

（注意，以上命令并不会生成草稿页面，如果未生成任何文章，请去掉文章头部的 draft=true 再重新生成。）

如果一切顺利，所有静态页面都会生成到 public 目录，将pubilc目录里所有文件 push 到刚创建的 Repository 的 master 分支。

```bash
$ cd public
$ git init
$ git remote add origin https://github.com/coderzh/coderzh.github.io.git
$ git add -A
$ git commit -m "first commit"
$ git push -u origin master
```

浏览器里访问：http://coderzh.github.io/