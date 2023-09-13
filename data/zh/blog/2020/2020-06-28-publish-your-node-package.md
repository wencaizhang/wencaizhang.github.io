---
title: "发布 NPM 包的正确姿势"
date: "2020-06-28T14:30:51+08:00"
draft: true
category:
- Node
tags:
- npm
cover: ["https://static.webjam.cn/images/logos/npm.svg"]
---

> NPM 的全称：Node Package(包) Manager(管理器)。


## NPM 是什么



## 如何发布 NPM

#### 关键字段

NPM 包的配置主要都在 `package.json` 中，这个文件中有很多重要的字段

```json
{
  "name": "node package",
  "version": "0.1.0",
  "scripts": {
    "dev": "npm run serve",
  },
  "dependencies": {
  },
  "devDependencies": {
  }
}

```

#### 命名空间

#### 在终端登录

#### 忽略文件配置

`.npmignore`

新建一个文件，名为.npmignore，是不需要发布到npm的文件和文件夹，规则和.gitignore一样。如果你的项目底下有.gitignore但是没有.npmignore，那么会使用.gitignore里面的配置

```bash
.*
*.md
*.yml
build/
node_modules/
src/
test/
```

## 版本号的知识

major，minor 或者 patch