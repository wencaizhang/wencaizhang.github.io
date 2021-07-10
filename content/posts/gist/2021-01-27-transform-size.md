---
title: "转换存储容量大小"
date: 2021-01-27
draft: false
categories:
- 短代码
type:
- code
tags:
- JavaScript

---

我们知道存储容量好几个不同的单位，如 KB、MB、GB 等等。

而在反映一块硬盘的具体容量时，总是需要根据其实际大小选用合适的单位，例如我有一块 500GB 的硬盘和一根 4GB 的内存条，就不能说成 0.5GB 的硬盘和 4000MB 的内存条。

因此，我们需要一个函数来将一个容量转换为合适的单位来表示

<!--more-->



转换存储容量大小

value 应当是以 b 位单位的
小于 1 KB，则转化成 B
小于 1 MB，则转化成 KB
小于 1 GB，则转化成 MB
以此类推，目前最大单位 PB
size: 单位大小，这里是 1000

```js
export function formatStorageSize (currValue = 0, unit = 'B', size = 1024) {

  const unites = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  if (!unites.includes(unit)) {
    return new Error('请输入标准的存储单位')
  }

  const powSize = n => {
    const max = unites.length
    return max > n ? Math.pow(size, n) : Infinity
  }

  const unitesTable = unites.map((unit, index) => {
    return { 
      suffix: unit,
      minValue: 1 * powSize(index),
      maxValue: 1 * powSize(index + 1) 
    }
  })

  console.log(unitesTable)

  // 先恢复到以 B 为单位然后进行计算
  const value = powSize(unites.indexOf(unit)) * currValue
  const { suffix, minValue } = unitesTable.find(item => item.maxValue > value)
  const ret = (value / minValue).toFixed(2) + ' ' + suffix

  return ret
}
```


## 测试代码

```js

```
