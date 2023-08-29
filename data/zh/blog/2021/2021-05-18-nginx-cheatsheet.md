---
title: "Nginx 常用配置备忘清单 | nginx-cheatsheet"
date: "2021-05-18"
draft: false
category:
- 其他
tags:
- nginx
- 备忘
---

作为软件开发工程师多多少少都该懂一些 nginx 的使用和配置，下面是 nginx 的几个经典应用场景下的配置写法，记录下来以防遗忘，用到的时候也可以直接过来拷贝。




## 端口监听

```nginx
server {
  # Standard HTTP Protocol
  # 标准的 HTTP 协议
  listen 80;

  # Standard HTTPS Protocol
  # 标准的 HTTPS 协议
  listen 443 ssl;

  # For http2
  listen 443 ssl http2;

  # Listen on 80 using IPv6
  # 使用 IPv6 监听 80 端口
  listen [::]:80;

  # Listen only on using IPv6
  # 仅使用 IPv6 监听 80 端口
  listen [::]:80 ipv6only=on;
}
```


## 访问日志

```nginx
server {
  # Relative or full path to log file
  # 为日志文件指定一个相对或绝对路径
  access_log /path/to/file.log;

  # Turn 'on' or 'off'
  # 通过 'on' 或者 'off' 控制是否启用
  access_log on;
}
```

## 域名

指定域名和对应的网站根目录位置，`server_name` 可以是域名、二级域名，也可以是 ip 地址。

```nginx
server {
  # Listen to yourdomain.com
  # 监听来自域名 yourdomain.com 的访问
  server_name yourdomain.com;

  # Listen to multiple domains
  # 监听来自多个域名的访问
  server_name yourdomain.com www.yourdomain.com;

  # Listen to all domains
  # 监听 yourdomain.com 的所有二级域名
  server_name *.yourdomain.com;

  # Listen to all top-level domains
  # 监听所有 yourdomain 的顶级域名
  server_name yourdomain.*;

  # Listen to unspecified Hostnames (Listens to IP address itself)
  # 不指定域名，监听自身 IP 的访问
  server_name "";
}
```

## 静态资源访问

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location / {
    root /path/to/website;
  } 
}
```

## 重定向

```nginx
server {
  listen 80;
  server_name www.yourdomain.com;
  return 301 http://yourdomain.com$request_uri;
}
```

```nginx
server {
  listen 80;
  server_name www.yourdomain.com;

  location /redirect-url {
    return 301 http://otherdomain.com;
  }
}
```

## 反向代理

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass http://0.0.0.0:3000;
    # where 0.0.0.0:3000 is your application server (Ex: node.js) bound on 0.0.0.0 listening on port 3000
  }

}
```

## 负载均衡

```nginx
upstream node_js {
  server 0.0.0.0:3000;
  server 0.0.0.0:4000;
  server 123.131.121.122;
}

server {
  listen 80;
  server_name yourdomain.com;

  location / {
     proxy_pass http://node_js;
  }
}
```

## SSL 证书

```nginx
server {
  listen 443 ssl;
  server_name yourdomain.com;

  ssl on;

  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/privatekey.pem;

  ssl_stapling on;
  ssl_stapling_verify on;
  ssl_trusted_certificate /path/to/fullchain.pem;

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_session_timeout 1h;
  ssl_session_cache shared:SSL:50m;
  add_header Strict-Transport-Security max-age=15768000;
}

# Permanent Redirect for HTTP to HTTPS
# 将 HTTP 访问永久重定向到 HTTPS
server {
  listen 80;
  server_name yourdomain.com;
  return 301 https://$host$request_uri;
}
```

## 感谢

文中用到的配置几乎都出自 [https://vishnu.hashnode.dev/nginx-cheatsheet](https://vishnu.hashnode.dev/nginx-cheatsheet) 这篇文章，在此基础上经过个人理解添加了一些解释说明，特此说明。