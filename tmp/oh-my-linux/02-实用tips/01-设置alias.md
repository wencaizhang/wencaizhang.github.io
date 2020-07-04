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

<!-- more -->

### 修改普通用户对目录的读写权限
普通用户是没有文件的读写权限的，需要每次都临时获取 root 权限，但这样比较麻烦。
方便的做法是，修改/var/www目录的读写权限（777是linux中的最高权限，表示可读，可写，可执行）
```bash
sudo chmod 777 /var/www
```

### 设置别名 `alias`
编辑配置文件 `vim /etc/profile`，在文件中添加配置代码，例如：
```bash
alias tofe="cd /var/www/rmp/spms/front-end/"
alias gs="git status"
```