# Docker 常用命令

## 安装 Docker

直接执行脚本即可：

```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh
```

查看Docker的版本

```bash
docker version
```

## 安装 docker-compose

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


## 镜像相关命令

+ 列出所有镜像

```bash
docker image ls
```

+ 删除镜像

```bash
docker image rm <image-name>
```

## 容器相关命令

+ 基于镜像新建一个容器并启动



## Compose 相关命令

Compose 命令都是针对项目的，因此需要在项目目录下也就是 docker-compose.yml 文件所在目录下执行。

+ 前台启动

所有启动的容器都在前台，控制台将会同时打印所有容器的输出信息，可以很方便进行调试。当通过 `Ctrl-C` 停止命令时，所有容器将会停止。

```bash
docker-compose up
```

+ 后台启动

在后台启动并运行所有的容器，一般推荐生产环境下使用该选项。

```bash
docker-compose up -d
```

+ 停止

停止已经处于运行状态的容器，但不删除它。通过 `docker-compose start` 可以再次启动这些容器。

```bash
docker-compose stop
```

+ 启动

启动已经存在的服务容器。

```bash
docker-compose start
```

+ 删除

删除所有（停止状态的）服务容器。推荐先执行 docker-compose stop 命令来停止容器。

选项：
+ -f, --force 强制直接删除，包括非停止状态的容器。一般尽量不要使用该选项。
+ -v 删除容器所挂载的数据卷。

```bash
docker-compose rm
```

+ 列出**项目中**的所有容器

```bash
docker-compose ps
```


## 数据卷相关命令

+ 列出所有数据卷

```bash
docker volume ls
```

+ 查看指定数据卷

```bash
docker inspect <volume-name>
```

+ 删除数据卷

```bash
docker volume rm <volume-name>
```

+ 删除无主的数据卷

```bash
docker volume prune
```


## 参考

[Docker — 从入门到实践·语雀](https://www.yuque.com/grasilife/docker)
