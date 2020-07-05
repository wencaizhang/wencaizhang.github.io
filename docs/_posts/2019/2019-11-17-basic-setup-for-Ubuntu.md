---
title: "Basic Setup for Ubuntu"
date: 2019-11-17T09:49:31+08:00
draft: false
toc: true
images:
  - "./images/ubuntu.jpg"
tags: 
  - ubuntu
---

> Ubuntu 基础设置，包含一些常用软件安装，配置文件修改等等。

这篇文章的意义在于，当你拿到一个新的 Ubuntu 系统之后，直接按照本文的步骤进行设置，就可以得到一个顺手的开发/部署环境。不再需要逐项搜索每个软件的安装步骤了。

+ 设置国内软件镜像源
+ node
+ git
+ docker
+ nginx
+ oh-my-zsh
+ alias
+ vim

## 设置系统软件镜像源

配置系统源第一件事是修改镜像源，这样方便后续其他软件的安装。在国内可以选择阿里云的源。

```bash
# 编辑源文件
sudo vim /etc/apt/sources.list
# 在VIM编辑器内替换默认源为阿里云
:0,$ s/archive.ubuntu.com/mirrors.aliyun.com/
# 保存源文件并退出
:wq
```

## 包管理工具安装

**先更新**

``` bash
sudo apt update && apt upgrade -y
```

+ [Linux中apt与apt-get命令的区别与解释](https://www.sysgeek.cn/apt-vs-apt-get/)
+ [linux命令系列 sudo apt-get update和upgrade的区别](https://www.cnblogs.com/fenglongyu/p/8654991.html)
 

**安装常用软件**

通常会有一些是默认安装的，比如 git vim wget curl vim，如果没有，用下面方式安装即可。

``` bash
sudo apt install zsh nginx tree -y
```
## oh-my-zsh

关于 zsh 和 oh-my-zsh 可以参考：[终极 Shell——ZSH](https://zhuanlan.zhihu.com/p/19556676)

### 安装

脚本安装：

```bash
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
```

或者手动安装:

```bash
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

安装完成之后退出当前会话重新打开一个终端窗口即可。

### 插件

**(1) autojump**
github 地址 [autojump](https://github.com/wting/autojump)

下载并执行

```bash
wget https://github.com/downloads/joelthelion/autojump/autojump_v21.1.2.tar.gz
./install.sh
```

最后把以下代码加入.zshrc:

```bash
[[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh
```

## node(nvm)
nvm github 地址：[nvm-sh/nvm](https://github.com/nvm-sh/nvm)

### 方法一：脚本安装

执行脚本

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
# 或者
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```

最后，将下面内容分别添加到 `~/.bashrc`, `~/.profile`, 和 `~/.zshrc` 文件中。

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

加载配置文件：

```bash
source ~/.bashrc
```

### 方法二：git 安装

将代码克隆到用户目录下：

```bash
cd ~/
git clone https://github.com/nvm-sh/nvm.git .nvm
```

切换到最新版本

```bash
cd ~/.nvm
git checkout v0.35.1
```
激活 nvm，在命令行执行：

```bash
. nvm.sh
```

最后，将下面内容分别添加到 `~/.bashrc`, `~/.profile`, 和 `~/.zshrc` 文件中。

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

完成之后，通过 `nvm -v` 查看版本来验证是否安装成功。


## docker

### 安装 Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh
```

### 安装 Compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docke-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# 给Docker Compose 执行权限
sudo chmod +x /usr/local/bin/docker-compose

#查看Docker和Docker Compose的版本
sudo docker version
sudo docker-compose version
```

### 设置镜像源

执行下面命令进行设置

*ps: 阿里云镜像源是个人注册阿里云账号之后分配的个人专属镜像源。*

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



## vim 配置

有些系统默认没有安装

配置文件路径：

+ 全局配置文件：`/etc/vim/vimrc`
+ 当前用户配置文件：`~/.vimrc`

将下面内容粘贴到配置文件中：

```
" 左单引号表示单行注释
" 编码指定 UTF-8
set fileencodings=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
set termencoding=utf-8
set encoding=utf-8

set number " 显示行号
set cursorline " 突出显示当前行
set ruler " 打开状态栏标尺
```



## 设置别名(alias)

将所有的别名放在单独一个文件 `.bash_aliases` 中，这样更加方便管理，ubuntu 也推荐这种做法。

```bash
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```

**注意：等号两侧不能有空格!**

```bash
# 代替键盘上难以触及的 ~ 键
alias home="cd ~"

# 同样也可以为一些深层却很常用的目录设置别名
# 如：宝塔面包的 nginx 配置目录
alias ng="cd /www/server/panel/vhost/nginx"

# 回退多级目录
alias bk1="cd .."
alias bk2="cd ../.."
alias bk3="cd ../../.."
alias bk4="cd ../../../.."
alias bk5="cd ../../../../.."

# ls 相关
alias cls='clear'
alias ll='ls -l'
alias la='ls -a'

# git 相关
alias gs='git status'
alias glog="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Cr eset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

# 解压
alias -s gz='tar -xzvf'
alias -s tgz='tar -xzvf'
alias -s zip='unzip'
alias -s bz2='tar -xjvf'

# other
alias vi='vim'
alias grep="grep --color=auto"
alias tree="tree -I '*svn|*node_module*'"
```


---

本文完，感谢阅读。:stuck_out_tongue_winking_eye: 