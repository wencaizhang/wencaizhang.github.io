---
title: "命令行中的复制粘贴 - pbcopy & pbpaste"
date: "2021-06-21"
draft: false
category:
  - Linux
tags:
  - 命令行
  - 效率
cover: ["https://static.webjam.cn/images/logos/terminal.svg"]
---


想要在终端中复制一个文件的内容，要么使用 cat 命令输出到终端中然后鼠标选中内容复制，要么用 VSCode 打开然后复制，总感觉稍微有点麻烦，所以就在想没有没一种更加简单的复制方式呢？ 🤔

经过一番百之+谷之，终于找到了一个完美契合需求的命令，它就是 `pbcopy`。👏



## 用法

使用方式就是在终端中使用管道符接收上一个命令的输出:

```bash
pwd | pbcopy
```

这里 `pwd` 的作用输出当前路径，现在通过管道符输出给 `pbcopy` 命令，`pbcopy` 命令直接把路径复制到系统剪切板中。


::: info 提示
命令执行后终端里并不会有什么输出，看似什么都没有发生，你不必感到奇怪，实际上这时候已经成功复制了当前路径，不信你随便找个地方粘贴一下看看会出现什么效果。
:::

## 示例

拷贝路径:

```bash
# 复制当前路径到你的剪贴板
pwd | pbcopy
```

拷贝文件中的内容:

```bash
# 复制 myfile.txt 的内容到你的剪贴板
cat myfile.txt | pbcopy
```

来一个实际可能会用到的例子，复制你的 SSH 公钥:

```bash
# 复制公钥到你的剪贴板
cat ~/.ssh/id_rsa.pub | pbcopy
```

当然你这样写也是同样的效果:

```bash
# 复制公钥到你的剪贴板
pbcopy < ~/.ssh/id_rsa.pub
```

甚至可以用来拷贝远程文件内容:

```bash
# 拷贝远程文件的内容
curl --silent 'https://raw.githubusercontent.com/vitorgalvao/custom-alfred-iterm-scripts/master/custom_iterm_script.applescript' | pbcopy
```

## 在 Linux 中使用

看了上面的例子是不是觉得 `pbcopy` 很好用？遗憾的是 Linux 系统并不提供 `pbcopy` 命令，只有 macOS 中提供，所以我们需要通过 `alias` 模拟出来:

```bash
alias pbcopy="xsel — clipboard — input"
alias pbpaste="xsel — clipboard — output"
```

::: info 提示
xsel 可以用来操作剪贴板，但是系统没有自带，需要手动安装:

```bash
sudo apt-get install xsel
```
:::

然后你就可以像上面一样使用了:

```bash
pwd | pbcopy
```


## 关于 pbpaste

与 `pbcopy` 对应，`pbpaste` 是输出你剪切板中的最后一条文本信息，例如你在网页中复制了一段代码，你就可以通过在终端执行 `pbpaste` 命令来打印这段代码:

```bash
pbpaste
```

不过目前我还没想到使用这个命令的场景，如果你知道些什么可以与我取得联系。

## 我参考的文章

- [让linux也可以使用pbcopy_秋雪夜雨寒的博客-CSDN博客](https://blog.csdn.net/longyinyushi/article/details/72783484)
- [技术|如何在 Linux 上使用 pbcopy 和 pbpaste 命令](https://linux.cn/article-9917-1.html)
- [How to use pbcopy and pbpaste. If you’re here reading this, then… | by Jorge Yau | Medium](https://medium.com/@codenameyau/how-to-copy-and-paste-in-terminal-c88098b5840d)
- [macos - 8个不可不知的Mac OS X专用命令行工具 - SegmentFault 思否](https://segmentfault.com/a/1190000000509514)


本文完，祝阅读愉快。