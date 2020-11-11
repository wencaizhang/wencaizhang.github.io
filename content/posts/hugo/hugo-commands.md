---
title: "Hugo 常用命令备忘"
date: 2020-06-28T15:56:51+08:00
draft: true
categories:
- hugo
tags:
- hugo
series:
- Hugo Guide
---



我的网站静态网站生产工具



## 安装



如果系统是 MacOS，你可以使用 `brew` 来安装：



```bash
brew install hugo
```



如果系统是 Windows 或 Linux，可以去 [hugo/releases](https://github.com/spf13/hugo/releases) 页面下载相应的二进制文件（记得设置环境变量）

## 初始化一个网站



```bash
hugo new <site-name> <path>
```





与 hexo clean 类似的命令是

```bash
hugo --gc --cleanDestinationDir
```

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

但是这种方法压缩出来的 HTML 中属性值是没有引号的，只有当属性值是多个值当时候才有引号，像下面这样：

```html
<html lang=en>
  <meta name=viewport content="width=device-width,initial-scale=1">
</html>
```

