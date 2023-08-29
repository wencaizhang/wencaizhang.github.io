---
title: "MacOS 系统中设置命令行中代理"
date: "2021-05-26"
draft: false
category:
  - 其他
tags:
  - 代理
  - 命令行
---

经常在命令行终端下工作的码农们，SS 无法正常工作。

因为在终端下不支持 socks5 代理，只支持 http 代理，这就很尴尬了。

wget、curl、git、brew 等命令行工具都会变得很慢。

苹果在新系统中加入了 SIP 安全机制

会阻止第三方程序向系统目录内（/System，/bin，/sbin，/usr(除了/usr/local)）进行写操作，sudo 也不行。

办法是先把 SIP 关了，等装好软件配置好后再打开 SIP。或者改用其他软件。

因为懒得去把 SIP 关了开开了关了，找了另外一个软件 privoxy。

它刚好就是安装在/usr/local 内，不需要关闭 SIP 也可以正常使用。

1. **privoxy 安装**

安装很简单，用 brew 安装：

```bash
brew install privoxy
# 或
brew install --build-from-source privoxy
````

2. **privoxy 配置**

打开配置文件 `/usr/local/etc/privoxy/config` ：

```bash
vim /usr/local/etc/privoxy/config
```

加入下面两项配置：

```bash
# 第一行设置 privoxy 监听任意IP地址的8118端口。
listen-address 0.0.0.0:8118

# 第二行设置本地socks5代理客户端端口。
forward-socks5 / localhost:1086 .
```

> 注意：第二行结尾是一个空格和点号。


3. **启动 privoxy**

因为没有安装在系统目录内，所以启动时要打全路径。

```bash
sudo /usr/local/sbin/privoxy /usr/local/etc/privoxy/config
````

4. **查看是否启动成功**

```bash
netstat -na | grep 8118
```

如果能看到有输出结果，说明启动成功。

5.  **privoxy 使用**

在命令行终端输入如下命令，该终端即可翻墙：

```bash
export http_proxy='http://localhost:8118'
export https_proxy='http://localhost:8118'
````

原理是将 socks5 代理转化成 http 代理给命令行终端使用。

如果不想使用了取消即可。

```bash
unset http_proxy
unset https_proxy
````

#### [](https://double-c.github.io/2018/10/17/mac-ss-cmd/index.html#%E5%B0%8F%E6%8A%80%E5%B7%A7 "小技巧")小技巧

如果关闭了终端，功能就会失效，如果需要代理一直生效，则可以把上述两行代码添加到 `~/.bash_profile` 文件最后。

> iterm2 的话编辑 `~/.zshrc` 文件即可。

```bash
vim ~/.bash_profile

export http_proxy='http://localhost:8118'
export https_proxy='http://localhost:8118'
```

还可以在 `~/.bash_profile` 加入开关函数，使用起来更方便。

```bash
function proxy_off(){
  unset http_proxy
  unset https_proxy
  echo -e "已关闭代理"
}

function proxy_on() {
  export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"
  export http_proxy="http://127.0.0.1:8118"
  export https_proxy=$http_proxy
  echo -e "已开启代理"
}
```

感谢您的阅读，本文由 [CashQian](http://www.cashqian.net/) 原创提供。如若转载，请注明出处：CashQian（[http://www.cashqian.net](http://www.cashqian.net/)）
