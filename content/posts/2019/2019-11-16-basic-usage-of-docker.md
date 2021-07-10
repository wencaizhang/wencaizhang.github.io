---
title: "Basic Usage of Docker"
date: 2019-11-16T11:16:00+08:00
draft: false
toc: true
description: Docker 的快速安装、镜像源设置和基本使用
images:
tags: 
  - docker
---

## 使用脚本快速安装


**安装 Docker:**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh
```

**安装 docker-compose**

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" \
-o /usr/local/bin/docker-compose

# 给Docker Compose 执行权限
sudo chmod +x /usr/local/bin/docker-compose

# 查看Docker和Docker Compose的版本
sudo docker version
sudo docker-compose version
```

## 设置阿里云镜像

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://oojjt1xs.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

阿里云镜像源需要个人注册阿里云账号之后才能使用，这里我已经注册过了。



### 三个概念

> Docker三个基本概念：Registry注册中心，Image镜像，Container容器
>
> + Registry包含多个Repo（仓库）和Tag(标签)，从Registry下载Image的方式是pull <仓库名>:<标签名>，如pull ubuntu:16.04
>
> + Image是一个静态概念，相当于面向对象中的类，类不能直接使用，需要实例化。
>
> + Container是一个动态概念，相当于面向对象中的实例化，启动镜像生成容器就是实例化类的过程。只有容器才能被用户使用。

### 查看命令

| 命令 | 描述 |
| --- | --- |
| `docker images` | 列出本地镜像 |
| `docker ps` | 列出容器 |



### 创建容器

+ 创建一个新的容器，并进入交互模式的终端

    ```bash
    docker run -it centos:latest /bin/bash
    ```
    
+ 后台运行容器，并设置端口映射

  ```bash
   docker run -d -p 3000:80 centos:latest
   ```

+ 进入一个正在后台运行的容器

    ```bash
    docker attach [container-id]
    ```



### 退出容器

+ 退出容器

    ```bash
    exit
    ```
    
+ 退出容器并保持容器后台运行

    ```
    Ctrl + p + q
    ```


### 从容器创建新的镜像
 
+ 首先拿到容器 ID ，然后使用如下命令创建镜像：
 
    ```bash
    docker commit -a "镜像作者名字" -m "提交时的说明文字" [container-id] [image-name]:[tag]
    ```
    
### WordPress 启动方式

+ 创建容器

  ```bash
   docker run -it  -p 3000:80 -p  4000:8888 my_wp:v1 /bin/bash
   ```

+ 软件启动

    ```bash
    /etc/init.d/nginx start

    /etc/init.d/mysqld start

    /etc/init.d/memcached start

    /etc/init.d/php-fpm-72 start

    /etc/init.d/bt start
    ```

+ 退出容器，并保持容器在后台运行

  ```bash
   Ctrl + p + q
   ```


## 相关文档

+ [Docker命令大全 - 菜鸟教程](http://www.runoob.com/docker/docker-command-manual.html)
+ [daocloud 镜像站](https://www.daocloud.io/mirror)
+ [Docker — 从入门到实践(语雀)](https://www.yuque.com/grasilife/docker)
