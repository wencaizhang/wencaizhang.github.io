---
title: 用 Docker 快速架设一个 Anki 同步服务器
date: 2021-09-30
draft: false
categories:
- other
tags:
- anki
- docker
---


Anki 是一个辅助记忆软件，最近打算用它来快速记忆一些知识，但是 Anki 的服务器架设在国外，导致同步速度很慢，为了解决这个问题，我参考[文档地址](https://github.com/ankicommunity/anki-devops-services)打算自己架设一个 Anki 同步服务器。

<!--more-->

![anki-sync-server-with-docker](https://static.webjam.cn/images/anki-sync-server-with-docker.png)

部署前要满足以下要求：

+ 技术要求：了解终端（命令行工具）、理解 IP 和域名的概念、docker 以及 docker-compose 的基本使用
+ 硬件要求：一台电脑或者一个虚拟机或者一个云服务器（总之要能够满足相关软件要求）
+ 软件要求：docker + docker-compose

下面默认你是了解这些内容的，所以不会过多解释，本文主要记录部署过程。

## 启动服务

在磁盘上新建一个 `docker-anki-server` 目录，在此目录下创建一个 `docker-compose.yml` 文件，文件内容如下。

```yml
version: "3"

services:
  anki-container:
    image: kuklinistvan/anki-sync-server:latest
    container_name: anki-container

    restart: always
    ports:
      - "27701:27701"
    volumes:
      - data:/app/data
volumes:
  data:
```

> 文档中这个配置文件的缩进有问题，导致我在启动的时候始终失败。经过我反复测试，现在这个配置是可以正常启动的。

然后在当前路径下的终端执行启动命令

```sh
docker-compose up -d
```

执行 `docker-compose ps` 命令可以看到

```bash
     Name                   Command                  State                Ports          
-----------------------------------------------------------------------------------------
anki-container   /bin/sh -c /app/scripts/st ...   Up (healthy)   0.0.0.0:27701->27701/tcp
```

这就说明服务已经正常启动了，对应的服务地址是 `http://<ip>:27701`，这个 `<ip>` 是你物理机（宿主机）的 `ip` 而非 docker 容器 `ip`。

## 相关命令

启动服务之后，我们需要新建用户以便在客户端登录时使用。

首先需要进入 docker 容器的终端：

```bash
docker exec -it anki-container /bin/sh
```

命令格式：

```bash
./ankisyncctl.py <command> [<args>]
```

可用的命令：

+ 增加一个新用户：`./ankisyncctl.py adduser <username>`
+ 删除一个用户：`./ankisyncctl.py deluser <username>`
+ 列出所有用户：`./ankisyncctl.py lsuser`
+ 修改密码：`./ankisyncctl.py passwd <username>`
+ 查看帮助：`./ankisyncctl.py --help`

示例：增加一个用户 userA

```bash
./ankisyncctl.py adduser userA
```

紧接着会提示为该用户创建密码：

```bash hl{2}
./ankisyncctl.py adduser userA
Enter password for userA:
```

输入密码后按下回车键，这个用户就创建成功了。接下来我们就可以在客户端进行同步了。

ps: 如果你只在电脑端使用 anki 软件，「域名设置」步骤可以跳过，只有安卓端才需要配置。


## 域名设置

启动服务之后，就可以通过链接 `http://<ip>:27701` 访问了。

由于安卓版 anki 要求*同步地址为 `https` 协议*，因此我又启动了一个代理服务。

我使用的 [Caddy](https://caddyserver.com/) 启动服务，这是一款使用 Go 语言开发的 web 服务器，选用 Caddy 的一个重要原因就是它使用 Let’s Encrypt 让你的站点全自动变成 HTTPS，除此之外它的配置简单很容易上手使用。

我的配置就这么简单：

```conf
anki.example.com {
  tls example@qq.com
  reverse_proxy 127.0.0.1:27701
}
```

1. 第一行声明一个二级域名 `anki.example.com`
2. 第二行告诉 caddy 为网站开启 https 并自动申请证书，后面的 email 参数是告知 CA 申请人的邮箱，
3. 第三行则是反向代理，此时访问 `anki.example.com`，实际访问的是 `127.0.0.1:27701` 的内容

## 客户端设置
###  电脑端

如果是电脑端(Windows\MacOS\Linux)，需要安装 [SyncRedirector](https://ankiweb.net/shared/info/2124817646) 插件。

SyncRedirector 插件要求 Anki 版本低于 `2.1.19`，推荐使用 `2.1.0` 和 `2.1.15` 版本。
你可以在[这里](https://apps.ankiweb.net/downloads/archive/)下载 Anki 所有版本的安装包

插件安装之后，在其设置中填写对应的地址即可

```json
{
  "msyncUrl": "https://anki.example.com/msync",
  "syncUrl": "https://anki.example.com/sync"
}
```

### 安卓端

如果是安卓端 AnkiDroid 则可以直接配置，我的 AnkiDroid 版本是 `2.13.1`。你可以通过「设置 -> 高级设置 -> 自定义同步服务器」找到配置页面。

![ankidroid-sync-server](https://static.webjam.cn/images/ankidroid-sync-server.png)

这里的配置路径和电脑端略有不同，其中同步地址是 `https://anki.example.com/`，而媒体文件同步地址是 `https://anki.example.com/msync`。

安卓下载地址：[Anki-Android · github](https://github.com/ankidroid/Anki-Android/releases)


## 总结

+ `docker-compose.yml` 文件的缩进需要注意
+ 服务启动成功后要重新创建用户
+ 电脑端需要安装插件 [SyncRedirector](https://ankiweb.net/shared/info/2124817646)
+ 如果你在安卓端使用 anki，则需要将服务配置成 `https`
+ 下载地址
  + 电脑端：[https://apps.ankiweb.net/downloads/archive/](https://apps.ankiweb.net/downloads/archive/)
  + 安卓端：[https://github.com/ankidroid/Anki-Android/releases](https://github.com/ankidroid/Anki-Android/releases)
