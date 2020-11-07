---
date: '2020-09-04'
slug: git-submodule
draft: true
tags:
- nodejs
- nvm
title: git submodule 教程
description: git submodule 也是一个较为常用的功能，本篇文章帮你更好地使用 git submodule
author: wencaizhang
location: Beijing
image: 
meta:
  - name: title
    content: git submodule 教程
  - name: description
    content: git submodule 教程
  - name: keywords
    content: wencaizhang, git, git submodule
  - name: author
    content: wencaizhang
  - name: language
    content: English
featured: true
---


## 添加子模块

在 git 仓库中执行

```bash
git submodule add https://example.com/moduleA.git
```

添加完成之后，会多出两个内容

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   .gitmodules
	new file:   moduleA
```

新文件 .gitmodules 文件用于保存子模块 URL 与已经拉取的本地目录之间的映射:

```
[submodule "moduleA"]
	path = moduleA
	url = https://example.com/moduleA.git
```

文件 .gitmodules 和 .gitignore 一样受到（通过）版本控制。 它会和该项目的其他部分一同被拉取推送。 这就是克隆该项目的人知道去哪获得子模块的原因。

另一个多出来的内容是子模块 moduleA

## 克隆一个含有子模块的仓库