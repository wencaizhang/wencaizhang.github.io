---
title: "Basic Usage of Traefik"
date: "2019-11-16T11:16:00+08:00"
draft: false
images:
tags:
  - traefik
  - docker
---

# Traefik 初体验

Traefik 是什么？

> Træfɪk 是一个为了让部署微服务更加便捷而诞生的现代HTTP反向代理、负载均衡工具。 它支持多种后台 (Docker, Swarm, Kubernetes, Marathon, Mesos, Consul, Etcd, Zookeeper, BoltDB, Rest API, file…) 来自动化、动态的应用它的配置文件设置。

简而言之，traefik 是一个可以替代 nginx 的 web 服务器，它的好处有很多，其中最吸引我的有两点：

+ 自动生成 HTTPS 证书（Let's Encrypt）
+ 自动发现服务（Auto Service Discovery），可以和 Docker 更好的结合

下面就来体验一下 traefik 吧。

## 安装 traefik

traefik 支持二进制文件、docker镜像、手动编译三种安装方式，这里我选择的是 docker 镜像安装。

新建一个 `traefik` 目录，然后创建一个 `docker-compose.yml` 文件，使用 traefik 官方镜像定义一个名为 `reverse-proxy` 的服务。

```yml
version: '3'

services:
  reverse-proxy:
    # 官方镜像 2.0
    image: traefik:v2.0
    # Enables the web UI and tells Traefik to listen to docker
    command:
      - "--api.insecure=true"
      - "--providers.docker"
    ports:
      - "80:80"
      - "8080:8080"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

然后通过下面命令启动 `reverse-proxy` 服务：

```bash
sudo docker-compose up -d reverse-proxy
```

此时可以通过 IP + 8080 端口访问到 traefik 提供的 dashboard。

这里有一些细节需要注意：

+ 启用 traefik 的 API 功能，使 traefik 向外暴露一些诸如路由、服务、中间件之类的信息（默认是 8080 端口）。

```yml
command:
  - "--api.insecure=true"
ports:
  - "8080:8080"
```

+ 通知 traefik 去监听 docker 的事件流

```yml
command:
  - "--providers.docker"
```

+ 挂载 `/var/run/docker.sock`，用于监听 docker 事件流

```yml
volumes:
  - /var/run/docker.sock:/var/run/docker.sock
```


## 自动发现服务

上面 reverse-proxy 服务

以 whoami 服务为例，whoami 是一个查看主机信息的服务，镜像大小只有 7M 左右，非常适合用于测试。

新建目录 whoami，并创建 `docker-compose.yml` 文件，文件内容如下：

```yml
version: "3.3"

services:
  whoami:
    image: "containous/whoami"
    labels:
      - "traefik.enable=true"
      # 指定 whoami 服务的域名
      - "traefik.http.routers.whoami.rule=Host(`whoami.wencaizhang.com`)"
      - "traefik.http.routers.whoami.entrypoints=web"
    networks:
      - traefiknet

networks:
  traefiknet:
    external: true
```

在 whoami 目录下启动服务：

```bash
sudo docker-compose up -d whoami
```

前面已经提到 `reverse-proxy` 能够监听到 docker 事件流，所以当 whoami 服务启动之后，可以直接访问 `whoami.wencaizhang.com`，来查看 whoami 服务输出的相关信息了。




创建 Docker 网络

```bash
docker network create -d bridge traefik-net
```