
---
title: "推荐 JavaScript 中处理数字计算精度问题的开源库"
date: 2021-01-10
draft: false
categories:
- 其他
tags:
- 其他
- 工具
- 开源库
---


在 JavaScript 中彻底解决你0.1+0.2!==0.3的精度问题，还可以给小数按条件取值。是开发计算项目的必备良品


本篇推荐三个可用于 JavaScript 中数字计算不丢失精度的开源库，均由 [MikeMcl](https://github.com/MikeMcl) 开源（给大佬点赞👍），三个库的 API 保持一致，但侧重点不同，下面一一解释。


## 一、big.js

传送门：[https://github.com/MikeMcl/big.js](https://github.com/MikeMcl/big.js)

文档：[https://mikemcl.github.io/big.js/](https://mikemcl.github.io/big.js/)

适合只需要简单计算的项目

## 二、bignumber.js

传送门：[https://github.com/MikeMcl/bignumber.js](https://github.com/MikeMcl/bignumber.js)

文档：[https://mikemcl.github.io/bignumber.js/](https://mikemcl.github.io/bignumber.js/)

可以对小数进行向上或向下取值，适合金融类项目

## 三、decimal.js

传送门：[https://github.com/MikeMcl/decimal.js](https://github.com/MikeMcl/decimal.js)

文档：[http://mikemcl.github.io/decimal.js](：http://mikemcl.github.io/decimal.js)

decimal.js 提供了很多数学计算相关的函数，例如正弦余弦对数等函数，非常适合数学计算类需要运行很多数学函数的项目。
