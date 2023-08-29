---
title: "Nginx 的安装和基本命令 | Basic Usage of Nginx"
date: "2019-11-16T11:16:00+08:00"
draft: false 
toc: true
summary: Nginx 的安装和基本命令 | Basic Usage of Nginx
images:
tags:
  - nginx
---


## 安装

```bash
# ubuntu
sudo apt install nginx -y
```

## 命令
### nginx 命令

| 描述 | 命令 | 命令二 |
| :--- | :--- | :--- | 
| 启动 | `sudo nginx` | `sudo /usr/sbin/nginx` |
| 停止 | `sudo nginx -s stop` | `sudo /usr/sbin/nginx -s stop` |
| 重启 | `sudo nginx -s restart` | `sudo /usr/sbin/nginx -s restart` |
| 重载配置文件 | `sudo nginx -s reload` | `sudo /usr/sbin/nginx -s reload` |


### nginx 目录

| 描述 | 命令 |
| :--- | :--- |
| nginx 安装目录 | `/usr/sbin/nginx` |
| 默认网站根目录 | `/usr/share/nginx/html` |
| 配置文件 | `/etc/nginx/nginx.conf ` |

### 查找 nginx 安装目录的命令

| 描述 | 命令 |
| :--- | :--- |
| 查找 nginx 安装目录 | `which nginx` |
| 查找 nginx 配置文件 | `sudo find / -name nginx.conf` |
| 检测配置文件语法是否正确： | `sudo /usr/sbin/nginx -t` |


## 常见使用场景

### (一) 静态网站

指定域名和对应的网站根目录位置，`server_name` 可以是域名、二级域名，也可以是 ip 地址。

```
server {
  listen       80;
  server_name  demo.example.com;
  location / {
    root /www/demo/;
    index  index.html index.htm;
  }
}
```


### (二) 反向代理

场景：

+ 解决跨域问题，利用 nginx 来访问其他域名下的接口
+ 当 docker 服务的端口映射到宿主机上某个端口（如 8080）时，可以设置二级域名代理 8080 端口。

```
server {
  server_name docker.example.com;
  listen 80;
 
  location / {
    proxy_pass http://localhost:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Forward-For $remote_addr;
  }
}
```

### (三) 负载均衡

```
upstream backend  {
  server backend1.example.com weight=5;
  server backend2.example.com:8080;
  server unix:/tmp/backend3;
}
 
server {
  location / {
    proxy_pass  http://backend;
  }
}
```


## 一些学习资源

[Nginx中文文档](http://www.nginx.cn/doc/)
