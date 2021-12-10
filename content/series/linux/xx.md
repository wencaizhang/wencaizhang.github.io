---
title: "Linux 下复制粘贴部分文件"
date: 2021-09-27
draft: true
categories:
- Linux
tags:
- 命令
series:
- Linux 技巧
---

先讲我的需求，在 `content` 目录下有很多 markdown 文件，我想要把名称中含有 `git` 的文件复制到另外一个目录中。


第一步是查到满足条件的文件，使用 `find` 命令加 `-name` 参数和通配符很容易做到：

```shell
find ./content/**/*.md -name '*git*'
```



第二步是使用 `for...in` 循环对第一步中查到的结果进行操作，但是这里的话，需要注意使用绝对路径

```shell
for i in `find /var/www/yourSiteName/content/posts/ -name '*git*'`;\
do cp $i /var/www/yourSiteName/content/series/git/;\
done
```

突然想到既然可以用反引号的方式拿到 `find` 命令的结果，那干嘛不直接用 `cp` 命令操作呢

```shell
cp `find ./content/**/*.md -name '*git*'` ./content/series/git/
```

<img width="180" height="180" src="https://static.webjam.cn/images/hai.gif" alt="嗐" style="margin: 0 auto; display: block;"/>

高射炮打蚊子，大材小用

蚊子拍要会用，高射炮也要会用