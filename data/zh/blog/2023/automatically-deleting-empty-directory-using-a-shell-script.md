---
title: "高效清理：使用 shell 脚本自动删除所有空的子目录"
date: "2023-03-22"
category: ["其他"]
tags: ["shell", "bash"]
draft: false
summary: "本文介绍了使用 shell 脚本自动删除所有空的子目录，主要包括以下几个方面的内容： 最简单的方式：使用 find 命令删除空目录。这种方式的命令非常简单，只需要使用 find $work_dir_name -type d -empty -delete 就能够找到 $work_dir_name 目录下的所有空目录并删除。 进阶的方式：使用 find 命令删除空目录并输出提示信息。这种方式的命令稍微复杂一些，需要使用 -exec 选项执行命令，使用 rmdir 命令删除目录，同时输出删除的目录信息。 终极的方式：编写 shell 脚本，循环查找并删除空目录。这种方式使用 while 循环查找并删除空目录，直到所有的空目录都被删除为止。该脚本同时可以输出删除的目录信息。 对于每种方式，本文都给出了相应的命令和代码示例，并对每种方式进行了详细的解释和说明。此外，本文还介绍了一些基本的 shell 命令和语法，如 -exec、while、-n 等，这些内容对于使用 shell 脚本进行文件操作非常重要。最后，本文也给出了一些技巧和注意事项，帮助读者更好地理解和应用这些命令和代码示例。"
authors: ["default"]
cover: ["https://static.webjam.cn/images/logos/bash.svg"]
---




## 核心命令

```sh
find . -type d -empty -delete
```

命令的作用是查找当前目录下的所有空目录并删除。

其中，`-type d` 表示只查找目录，`-empty` 表示只查找空目录，`-delete` 表示删除查找到的目录。


## 进阶

```sh
find $work_dir_name -type d -empty -exec rmdir {} \; -exec echo "Removed empty directory: " {} \; -prune
```

其中，`-exec rmdir {} \;` 表示执行 `rmdir` 命令删除查找到的目录，`-exec echo "Removed empty directory: " {} \;` 表示输出提示信息，`-prune` 表示不再查找已经删除的目录。


在shell脚本中，{}是一个特殊的字符串，用于表示-exec选项的参数。在这个脚本中，-exec rmdir {} \;的意思是，对于find命令查找到的每一个空文件夹，都执行rmdir命令删除该文件夹。{}会被find命令替换为查找到的文件夹的路径。\;是用于告诉find命令，-exec选项的参数结束了。

## 终极

因为清理空目录的工作可能每隔一段时间就要执行一次，所以把直接在终端执行的命令改成可执行的脚本更方便重复使用。

```sh
#!/bin/bash

# 删除所有空的子目录

# 指定要在哪个目录下执行脚本
work_dir_name="./"

while [ -n "$(find $work_dir_name -type d -empty)" ]; do
    find $work_dir_name -type d -empty -exec rmdir {} \; -exec echo "Removed empty directory: " {} \; -prune
done
```

这里我们使用了 `while` 循环，使用 `-n` 来检测只要还存在空目录，则循环继续执行。循环体内是删除空目录的命令。


`-n` 是一个测试条件，用于检查字符串是否为空。也就是说在这个脚本中，`-n "$(find $work_dir_name -type d -empty)"` 用来检查是否存在空目录。如果存在，则执行循环体中的命令，否则跳出循环，这样可以保证把所有的空目录全部删除掉。

这一行代码的意思是查找 `$work_dir_name` 目录下所有空的子目录并删除。其中，`-type d` 表示查找目录，`-empty` 表示查找空目录，`-delete` 表示删除查找到的目录。

如果想要在删除空目录时输出提示信息，可以使用下面这段代码：

```sh
find $work_dir_name -type d -empty -exec rmdir {} \; -exec echo "Removed empty directory: " {} \; -prune
```



如果想要删除所有空目录，包括非直接子目录，可以使用下面这段代码：

```sh
while [ -n "$(find $work_dir_name -type d -empty)" ]; do
   find $work_dir_name -type d -empty -exec rmdir {} \; -exec echo "Removed empty directory: " {} \; -prune
done
```


其中，`while [ -n "$(find $work_dir_name -type d -empty)" ]` 表示当查找到空目录时执行循环，`-exec rmdir {} \; -exec echo "Removed empty directory: " {} \; -prune` 同上。


[Linux find 命令 | 菜鸟教程 (runoob.com)](https://www.runoob.com/linux/linux-comm-find.html)