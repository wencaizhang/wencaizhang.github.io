---
date: '2020-07-26'
slug: nvm-tutorial
draft: true
tags:
- nodejs
- nvm
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

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

该文件依赖于你当前使用的命令行解释器（可能是 `~/.bash_profile`, `~/.zshrc`, `~/.profile`, 或者 `~/.bashrc`），我使用的是 zsh，因此我的配置文件是 `~/.zshrc`，添加代码之后，需要重新加载配置文件才能生效：

```bash
source ~/.zshrc
```

提示：如果安装之后使用 `nvm` 命令，得到了 `nvm: command not found` 的提示，可以尝试把命令行窗口关闭再重新打开尝试 `nvm` 命令



## 配置加速镜像源


配置环境变量，将 `NVM_NODEJS_ORG_MIRROR` 指向淘宝镜像源 `http://npm.taobao.org/mirrors/node`

```bash
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
```

## 常用命令



## .nvmrc

当你使用 nvm 的时候，通常代表着你有


## 参考文章

- [nvm GitHub](https://github.com/nvm-sh/nvm)
