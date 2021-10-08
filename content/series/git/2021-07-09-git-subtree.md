---
title: git subtree 使用记录
date: 2021-01-08
draft: false
categories:
- 其他
tags:
- git
---


参考文章：[git subtree教程](https://segmentfault.com/a/1190000012002151)


```bash
git subtree push --prefix=content/posts post master
```

目前主要使用这三个命令即可，分别是添加、更新和推送远程。

```bash
git subtree add   --prefix=<prefix> <repository> <ref>
git subtree pull  --prefix=<prefix> <repository> <ref>
git subtree push  --prefix=<prefix> <repository> <ref>
```

其中 `<prefix>` 是子模块的路径，`<repository>` 是子模块自身的 git 地址。

```json
{
  "scripts": {
    "set:posts": "git remote add posts git@github.com:wencaizhang/wencaizhang.github.io.git",
    "add:posts": "git subtree add --prefix=content/posts post master ",
    "pull:posts": "git subtree pull --prefix=content/posts post master ",
    "push:posts": "git subtree push --prefix=content/posts post master"
  }
}
```
