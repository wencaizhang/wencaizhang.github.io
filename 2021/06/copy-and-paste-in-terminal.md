---
title: "命令行中别样的复制粘贴"
date: 2021-06-21
draft: true
categories:
  - 其他
tags:
  - 命令行

---



今天在命令行中复制当前文件路径的时候突发奇想：有没有一个命令可以直接复制 `pwd` 的输出结果，这样我就可以不需要通过鼠标来选中复制呢？

https://www.zhihu.com/question/20031178

https://zhuanlan.zhihu.com/p/42082440





假设在玩Git ，复制公钥，到你的 剪贴板 。

```bash
pbcopy < ~/.ssh/id_rsa.pub
```



```bash
cat ~/.ssh/id_rsa.pub | pbcopy
```



```bash
curl --silent 'https://raw.githubusercontent.com/vitorgalvao/custom-alfred-iterm-scripts/master/custom_iterm_script.applescript' | pbcopy
```



内容被复制到剪切板中，除了使用常规的 ctrl + v 来粘贴之外，还可以在命令行中使用 pbpaste 来打印



https://blog.csdn.net/longyinyushi/article/details/72783484



https://linux.cn/article-9917-1.html



https://medium.com/@codenameyau/how-to-copy-and-paste-in-terminal-c88098b5840d



https://segmentfault.com/a/1190000000509514



https://baijiahao.baidu.com/s?id=1593067284218736123&wfr=spider&for=pc	