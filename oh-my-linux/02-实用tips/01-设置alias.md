# 设置 alias
## 简介

`alias` 命令可以将一段冗长的命令行简化成几个字母或者数字的缩写，这样就不用每次都输入那么多的字母和符号了，并且缩写完全都是自己设定的，非常的个性化，如果自己整理一个简单的标准出来，可以非常好的提升控制台终端中的工作效率。

## 示例

比如：切换到 nginx 静态网站根目录的命令是：

```bash
cd /data/wwwroot/default
```

通过 `alias` 简化，直接在命令行执行下面命令：

```bash
alias toroot="cd /data/wwwroot/default"
```

以后再想进入网站根目录的时候，只需输入 `toroo` 即可，等同于运行了 `cd /data/wwwroot/default` 命令。

## 具体设置

上面示例中直接在命令行中执行 `alias toroot="cd /data/wwwroot/default"` 仅临时有效，把当前窗口（ssh 连接）关闭之后，设置随之失效。

想要让设置永久有效，需要将其写入配置文件中，修改文件 `~/.bashrc` 或者 `/etc/bashrc`，将命令直接添加在文件中即可。

这两个文件的区别是：`~/.bashrc` 只对当前用户有效，对其他用户无效，而 `/etc/bashrc` 对所有用户都有效。

