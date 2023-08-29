---
date: "2020-07-06"
slug: create-my-cli-with-nodejs
draft: true
tags:
- nodejs
- 脚手架
title: 使用 Node.js 构建自己的脚手架
summary: 使用 Node.js 构建自己的脚手架
author: wencaizhang
location: Beijing
featured: true
---


## title

### title

相关的 npm 包：

- `commander`: 定义命令，解析命令
- `inquirer`: 做出交互，如提问
- `chalk`: 命令行输出五颜六色的字体
- `ora`: loading 效果、图标

#### chalk 基本使用

```js
const chalk = require('chalk')

console.log('hello chalk')

console.log(chalk.red('hello, chalk'))

console.log(chalk.red.bgBlue('hello, chalk'))
```

## 一个 cli 工具的基本工作流程

1. 输入初始化命令
2. 执行交互代码
3. 与用户交互
4. 根据用户指令下载模板
5. 模板下载完成
