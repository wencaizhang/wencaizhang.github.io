---
title: "Hugo 常用命令备忘"
date: 2020-06-28T15:56:51+08:00
draft: true
categories:
- hugo
tags:
- hugo
---

与 hexo clean 类似的命令是 hugo --gc --cleanDestinationDir

在 Hugo 中，没有 hexo d 一键部署 public 文件夹到 GitHub 的操作，你需要自己新建脚本，但我建议使用 Git 管理整个站点，然后上传整个站点到 GitHub 以通过持续集成的方式部署，而非用 Git 直接部署 public 生产版代码，因为这其实是非常可笑的——Git 是用来管理源码的。

#### 启动服务

```bash
hugo server
```

由于默认生成的文章模板里面有 `draft: true`，故需加上 `-D` 参数才能渲染草稿：

```bash
hugo server -D 
```

#### 生成静态文件

```bash
hugo
```

生成的静态文件存放 `public` 文件夹中。

添加 `--minify` 参数可以在编译过程中压缩 HTML、JS、CSS 等文件：

```bash
hugo --minify 
```
