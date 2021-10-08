---
title: "linux 下复制粘贴部分文件"
date: 2021-09-27
draft: true
categories:
- Linux
tags:
- 命令
series:
- Linux 技巧
---


分两步，第一步是查到满足条件的文件，我的需求是查询 `content` 目录（包含子目录）下名称中含有 `git` 的文件

```shell
find ./content/**/*.md -name '*git*'
```

第二步是使用 for...in 循环对第一步中查到的结果进行操作，但是这里的话，需要注意使用绝对路径

```shell
for i in `find /Users/wencai/code/markdown/yourSiteName/content/posts/2019/ -name '*git*'`;\
do cp $i /Users/wencai/code/markdown/yourSiteName/content/series/git/;\
done
```

突然想到既然可以用反引号的方式拿到 `find` 命令的结果，那干嘛不直接用 `cp` 命令操作呢

```shell
cp `find ./content/**/*.md -name '*git*'` ./content/series/git
```

![嗐](https://static.webjam.cn/images/hai.gif)

高射炮打蚊子，大材小用

蚊子拍要会用，高射炮也要会用