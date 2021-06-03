---
title: "docker 和 docker-compose 的安装"
date: 2020-06-28T14:30:51+08:00
draft: true
categories:
- docker
tags:
- docker
- docker-compose
---


### docker 安装

直接执行脚本即可：

```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh
```

查看Docker的版本

```bash
docker version
```

### 安装 docker-compose

直接执行脚本即可：

```bash
curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

安装完成之后设置权限

```bash
chmod +x /usr/local/bin/docker-compose
```

查看Docker Compose的版本

```bash
docker-compose version
```
