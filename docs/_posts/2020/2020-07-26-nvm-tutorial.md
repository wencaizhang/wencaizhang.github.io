---
date: '2020-07-26'
slug: nvm-tutorial
tags:
- blog
- python
title: nvm 安装使用说明
description: Create a modern vuepress blog in 5 minutes!
author: wencaizhang
location: Beijing
image: 
meta:
  - name: title
    content: Create a modern vuepress blog in 5 minutes!
  - name: description
    content: create a modern vuepress blog
  - name: keywords
    content: wencaizhang, Vuepress, Vue.js, Vuepress website, vuepress blog, vuepress theme, vuepress blog theme, vue blog, create vuepress blog, blog theme, create a blog
  - name: author
    content: wencaizhang
  - name: language
    content: English
featured: true
---


## 安装 nvm

在 Linux 和 MacOS 上，你可以直接使用下面两个命令来安装 nvm：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# 或者
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

以上任意一条命令都会下载并执行一个脚本文件，这个脚本会克隆 nvm 的源码到 `~/.nvm` 目录下，而且尝试将下面代码添加到当前到命令行配置文件中

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

该文件依赖于你当前使用的命令行解释器（可能是 `~/.bash_profile`, `~/.zshrc`, `~/.profile`, 或者 `~/.bashrc`），我使用的是 zsh，因此我的配置文件是 `~/.zshrc`，添加代码之后，需要重新加载配置文件才能生效：

```sh
source ~/.zshrc
```

提示：如果安装之后使用 `nvm` 命令，得到了 `nvm: command not found` 的提示，可以尝试把命令行窗口关闭再重新打开尝试 `nvm` 命令



## 配置加速镜像源


配置环境变量，将 `NVM_NODEJS_ORG_MIRROR` 指向淘宝镜像源 `http://npm.taobao.org/mirrors/node`

```sh
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
```

## 常用命令

**(1) 列出已安装 node 版本**

这个命令只会列出通过 nvm 安装的 node 版本，如果是自行安装的 node 并不会被列出来。

```sh
nvm ls
```


你可以通过以下命令来列出远程服务器上所有的可用版本：

```sh
nvm ls-remote
```


Windows 的话，就是：

```sh
nvm ls available
```


**(2) 安装多版本 node**

安装指定版本 node 的命令格式如下：

```sh
nvm install <version>
```

例如，我们要安装4.2.2版本，可以用如下命令：

```sh
nvm install 4.22
```

另外 nvm 遵守语义化版本命名规则。例如，你想安装最新的 4.2 系列的最新一个版本的话，可以运行：

```sh
nvm install 4.2
```

那么 nvm 会自动寻找 4.2.x 中最高的版本来安装。

**(3) 切换 node 版本**

```sh
nvm use <version>
```



## .nvmrc

当你使用 nvm 的时候，通常代表着你有


## 参考文章

- [nvm GitHub](https://github.com/nvm-sh/nvm)
