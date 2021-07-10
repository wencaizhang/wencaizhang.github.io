---
date: '2020-07-08'
title: 抛弃 node-sass，拥抱 dart-sass
slug: node-sass-to-dart-sass
draft: true
tags:
- sass
- node-sass
- dart-sass
description: 抛弃 node-sass，拥抱 dart-sass
author: wencaizhang
location: Beijing
image: 
meta:
  - name: title
    content: 抛弃 node-sass，拥抱 dart-sass
  - name: description
    content: 抛弃 node-sass，拥抱 dart-sass
  - name: keywords
    content: wencaizhang, Vuepress, Vue.js, Vuepress website, vuepress blog, vuepress theme, vuepress blog theme, vue blog, create vuepress blog, blog theme, create a blog
  - name: author
    content: wencaizhang
  - name: language
    content: Chinese
featured: true
---

## Sass 的历史

Sass 最初是用 Ruby 编写的，称为 Ruby Sass。然后是 LibSass，LibSass 用 C/C++ 实现。后来，Sass 官方[宣布了 sass 的全新实现：Dart Sass](https://sass-lang.com/blog/announcing-dart-sass)。

Ruby Sass 基于高级编程语言开发，优点是语法简单，扩展性强。但是在长期使用过程中逐渐发现 Ruby Sass 的编译速度太慢了，另外 Ruby Sass 要求用户在电脑上安装 Ruby，这对非 Ruby 用户并不友好。

LibSass 的优点是简单、快速、易于集成，很容易使用其他编程语言进行它进行封装。目前基于 LibSass 的封装多达**十几种**编程语言，前端最常见的就是基于 Node 封装的 node-sass 了，除此之外，还有基于 Java、Go、Lua、PHP、Python 等编程语言封装的版本，具体列表可以看[这里](https://www.sasscss.com/libsass)。

LibSass 虽然解决了 Ruby Sass 带来的问题，但是 LibSass 也有自己的缺点：底层语言使添加新功能变得相当困难。

Sass 官方最终选择了 Dart 来重写 Sass，Dart 能够保证很好的编译速度，并且 Dart 在大项目中的易用性要优于 C++ 和 Ruby，另外 Dart 是*静态类型*语言，并且易于编写、修改和维护。最后一个原因则是 Dart 可以编译为 JavaScript，能够很好的利用 node-sass 的生态系统。

## 拥抱 dart-sass

前文有提到过，Ruby Sass 需要用户安装 Ruby 才能使用，这对非 Ruby 用户相当不友好，而 node-sass 是基于 Node 封装的，所以后来慢慢地大家都开始用 node-sass 代替 Ruby Sass。

而 node-sass 的安装过程如下：

> 1. 校验本地 `node_modules` 中是否已安装 `node-sass`，版本是否一致;
>
> 2. 如未安装或版本不符，从 npm 源拉取 `node-sass` 代码;
>
> 3. 检测全局缓存和本地中是否有 `binding.node`,如有即跳过安装;
>
> 4. 没有 `binding.node` 则从 github 下载该二进制文件并将其缓存到全局;
>
> 5. 假如 binding.node` 下载失败，则尝试本地编译出该文件（这个过程需要 Python）;
>
> 6. 将版本信息写到 `package-lock.json`;

事实上每次安装 node-sass 都会卡在下载 `binding.node` 这一步，这是因为这个文件放在被墙的服务器上，所以几乎没有办法直接安装成功。

如果你去百度搜索 [node-sass 安装失败](https://www.baidu.com/s?wd=node-sass%2B%E5%AE%89%E8%A3%85%E5%A4%B1%E8%B4%A5)，就会发现搜索结果前十几页清一色都在解释失败原因和解决方案，这足以证明安装 node-sass 简直是国内广大前端开发者很难绕开的一个坑。

而解决这个问题的思路也大致相同：手动下载这个文件，并设置环境变量指向该文件，这样就不会下载而是直接利用本地的 `binding.node` 文件，或者指定下载这个文件的网址为淘宝镜像源。

尽管我们有了解决办法，可这种方案多多少少有一种 hack 的成分。

好在 Sass 官方发布了新一代的 dart-sass，让我们可以直接跳过这个问题，而且使用方式和之前的 `node-sass` 几乎一模一样，

安装 `dart-sass` 也很简单：

```bash
# 如果项目中已经安装了 node-sass，需要先卸载掉
npm unsinstall node-sass

npm install sass -S -D
```


## vue-cli 支持 dart-sass

如果你是 Vue.js 开发者，不知道有没有注意到 vue-cli 已经默认使用 dart-sass 作为 sass 实现（相关 [PR](https://github.com/vuejs/vue-cli/pull/3321)），也就是现在 Vue-CLI 在选择 sass 预处理器的时候也默认使用的 dart-sass


在 Vue 项目中，安装 `dart-sass` 也相当方便：

```bash
npm install -D sass-loader sass
```

同样的，如果之前安装过 `node-sass` 的话，需要将其卸载：

```bash
npm uninstall node-sass
```

## 语法不兼容

替换 node-sass 之后有一个地方需要注意，就是它不再支持之前 sass 的那种 `/deep/` 写法，需要统一改为 `::v-deep` 的写法。相关： issue

```scss
.a {
  /deep/ {
    .b {
      color: red;
    }
  }
}

// 修改为
.a {
  ::v-deep {
    .b {
      color: red;
    }
  }
}
```

