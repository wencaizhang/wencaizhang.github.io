# shell 脚本登录远程服务器

前提是执行脚本的服务器安装了 `expect` 软件

## expect 安装方法

+ centos 安装 expect

```bash
yum install -y expect
```

+ ubuntu 安装 expect

```bash
apt-get install -y expect
```

## 脚本内容

```sh
#!/usr/bin/expect
 
set timeout 30
 
set password "iforget123456"
 
spawn ssh -l root coolfe.fun
 
expect "password:"
 
send "$password\n"
 
interact
```