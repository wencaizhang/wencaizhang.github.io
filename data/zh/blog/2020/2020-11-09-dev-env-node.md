---

title: "打造高效的 Node.js 开发环境"
date: "2020-11-09"
draft: true
toc: true
summary: Node.js 是前端开发必不可少的环境，本文介绍如何打造高效的 Node.js 开发环境。
tags:
  - node
  - npm
  - nvm
  - yarn
  - http-server
  - git-open

header: https://static.webjam.cn/images/nodejs.png
image: https://static.webjam.cn/images/nodejs.png

---


安装和切换不同的 Node.js 版本，快速切换 npm 镜像源，以及推荐一些我常用的 npm 包。


## 一、Node.js 版本管理工具

~~Node.js 的版本更新非常快，如果是新项目当然建议使用最新版本，但是更多的是更新迭代的项目，这类项目会对 Node.js 和 npm 的版本所有要求，当遇到这类项目的时候，如果我们电脑上的 Node.js 版本和项目要求的版本有冲突的时候，就~~

### 1.1 介绍和安装



如果你是一个前端开发者，如果你打算安装 Node.js 环境，那么我强烈建议你使用 [nvm](https://github.com/nvm-sh/nvm) ！

nvm 是一个来安装/切换 Node.js 版本的工具，使用 nvm 可以很方便地管理你的电脑上的 Node.js 版本。


Linux 用户可以通过命令安装：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

这个脚本会克隆 nvm 的源码到 `~/.nvm` 目录下，而且尝试将下面代码添加到当前到命令行配置文件中

```bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

```

安装完成之后，打开（重启）终端，如果能够使用 `nvm --version` 命令打印出版本号，则证明环境变量配置成功，否则就需要手动将上面代码添加到你的 profile 文件之后（`~/.bash_profile`, `~/.zshrc`, `~/.profile`, 或者 `~/.bashrc`，具体是哪个根据你使用到 bash 来决定）

MacOS 用户可以使用上面命令安装，但我更推荐用 brew 来安装，这样有两点好处，一是命令很短，二是升级/卸载方便


```bash
brew install nvm
```


*Windows 上可以使用 [nvm-windows](https://github.com/coreybutler/nvm-windows)，安装也很方便，下载相应的二进制文件进行安装即可。*

### 2.2 用法

nvm 的用法并不复杂，下面来看一些简单的例子。

**(1) 查看可用的 node 版本**

这个命令只会列出通过 nvm 安装的 node 版本，如果是自行安装的 node 并不会被列出来。

```bash
nvm ls # 查看本地已安装的 node 版本
```


列出远程服务器上所有的可用版本：

```bash
nvm ls-remote

# Windows 的话，就是：

nvm ls available
```


**(2) 安装其他版本 node**

安装指定版本 node 的命令格式如下：

```bash
nvm install <version>
```

例如，我们要安装4.2.2版本，可以用如下命令：

```bash
nvm install 4.22
```

另外 nvm 遵守语义化版本命名规则。例如，你想安装最新的 4.2 系列的最新一个版本的话，可以运行：

```bash
nvm install 4.2
```

那么 nvm 会自动寻找 4.2.x 中最高的版本来安装。

**(3) 切换 node 版本**

如果对应的 node 版本不存在，nvm 会自动下载然后切换为指定版本。

```bash
nvm use <version>
```


### 2.3 .nvmrc 文件

你可以在项目中创建一个 `.nvmrc` 文件用于记录当前项目适用的 node 版本，使用 `nvm use` 命令可以直接切换到 `.nvmrc` 文件记录的版本

这个功能在以不同 node 版本为开发环境的项目之间切换会比较好用。

需要注意的是，`.nvmrc` 文件记录的版本一定是 nvm 可以理解的数字或字符串。

### 2.4 安装路径

前面在安装的时候说过，安装过程会拉取一份 nvm 的源码到用户目录下：

```bash
/Users/<你的用户名>/.nvm
```

当你使用 nvm 安装不同版本 node 时，会将 node 安装到 `.nvm` 下的 `versions/node` 目录下。

```bash
/Users/<你的用户名>/.nvm
  ├── ...其他目录和文件
  └── versions
      └── node
          ├── v14.6.0
          └── v14.9.0
```

另外不同版本安装的的 npm 包相互独立，例如我 v14.6.0 和 v14.9.0 版本分别安装了 cnpm 和 yarn，那么它们的路径分别是：


```bash
# cnpm 安装在 v14.6.0 目录下的 /lib/node_modules 中
/Users/wencai/.nvm/versions/node/v14.6.0/lib/node_modules/cnpm

# yarn 安装在 v14.9.0 目录下的 /lib/node_modules 中
/Users/wencai/.nvm/versions/node/v14.9.0/lib/node_modules/yarn
```

这种目录组织方式实现按不同 node 版本使用不同全局 node 模块的需求，有得必有失，这样一来全局模块只能切换到对应到 node 版本之后才能使用，不过优点大于缺点，顶多就是在其他版本下再安装一次。



## 二、NPM 镜像源管理工具

由于 npm 官方镜像源服务器架设在国外，在国内访问的速度并不快，所以涌现了很多国内的镜像源，其中[淘宝镜像源](https://developer.aliyun.com/mirror/NPM)最广为人知。其用法也相当简单，例如安装 cnpm 包的命令如下：

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

只需要在安装命令后面加上一个 `registry` 的参数即可，但说实话我每次在用的时候都需要临时复制淘宝镜像源的网址，仍会觉得有点麻烦。

[nrm](https://www.npmjs.com/package/nrm) 的出现正好解决了这一痛点，`nrm` 可以帮你简单快速地切换不同的 npm 镜像源，包括 `npm`, `cnpm`, `taobao`, `nj(nodejitsu)`，以及自建的镜像源。


安装命令：

```bash
npm install -g nrm
```

nrm 的用起来很简单，不用担心会带来更多的心智负担，用法就像这样：

```bash
nrm ls  # 列出所有镜像源

  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

可以看到有很多可选项，我当前使用的是淘宝镜像源，切换和查看镜像源的命令如下：


```bash
nrm use cnpm  # 切换镜像源为 cnpm（淘宝镜像源）

nrm current   # 显示当前镜像源名称
```

更多的命令可以查看[文档](https://www.npmjs.com/package/nrm)



## 三、推荐 NPM 好用的包


### 3.1 Yarn

Yarn 是 Facebook 开发的用于替代 npm 的包管理工具，官网宣传有以下优点：

> 1.速度快
> Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。
>
> 2.安全
>在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
>
> 3.可靠
>使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

一开始的时候 npm 还没有可以锁定依赖版本的功能（package-lock.json），而 Yarn 利用 yarn.lock 可以做到，所以就改用了 Yarn，后来 npm 也添加了这个功能，现在就是 npm 和 yarn 混着用，毕竟这两者的 API 差不多，但是 Yarn 更加简洁一些。

使用 Yarn 最起码有一个肉眼可见的好处，那就是每次启动项目的时候可以少打一个单词：

```bash
# use npm
npm run dev

# use yarn
yarn dev
```

来一个 npm 和 yarn 的命令对比，正好也可以作为一个对 yarn 和 npm 命令的梳理：

|        | npm   | yarn  |
|  ----  | ----  | ----  |
| 初始化一个新项目  | `npm init` | `yarn init` |
| 添加依赖  | `npm install xxx` | `yarn add xxx` |
| 安装依赖  | `npm install` | `yarn` |
| 执行脚本  | `npm run dev` | `yarn dev` |



### 3.2 http-server

http-server 可以很方便地在本地文件目录启动一个 http 服务，除了指定目录、端口、服务地址等基本功能外，还有 gzip/brotli、自动打开浏览器、代理、CORS、HTTPS 等一系列功能，详细文档看[这里](https://www.npmjs.com/package/http-server)。

一条命令进行安装：

```bash
npm install http-server -g
```

下面说几个应用场景：

#### 1. 临时开发简单的静态页面

无需 gulp / webpack 那些复杂的配置。

现在前端工程化是大势所趋，但也少不了有些时候只是想写一个简单的 HTML 页面或者是快速验证一些 API 用法，如果还要坚持用工程化的方式创建一个项目，就好比是高射炮打蚊子 — 大材小用。

其实除了开发简单页面，也可以用于向小伙伴展示自己的炫酷页面，如果有了这个工具，就不必将自己的代码压缩-发送-下载-解压-浏览器中打开这么个繁琐步骤来，万一页面有所改动则需要重复前面步骤。

所以一个简单好用的启动 HTTP 服务的工具对前端来讲还是必不可少的，相比于依赖编辑器/IDE 的插件来说，http-server 的好处是在命令行启动，不依赖于任何编辑器，随处可用，想用就用，想停就停，随心所欲。

使用方法也很简单：

```bash
http-server ./
```


#### 2. 验证 Vue / React 等项目打包结果。

因为开发环境和生产环境所使用的 vue.js 代码是不完全相同的，以及代码中的 CSS 代码会被重新组合成新的文件导致样式上的覆盖问题。所以有时候我们希望能够在部署之前就能验证一下 build 之后的代码。

这种情况下，我们可以现在本地 build 出生产环境代码，然后使用 http-server 启动 http 服务，配合 proxy 功能来代理接口请求。

```bash
http-server ./dist --proxy https://proxy-api-demo.com
```

#### 3. 局域网内传输文件。

一般情况下如果我们需要分享文件的时候，都是直接发到 （QQ/微信/钉钉）群里，高级一点的会有自己团队内部的网盘（如 NextCloud）。

但是如果是文件较大（聊天群一般文件有大小限制且容易被消息流淹没）又不愿意上传到云端（太麻烦），就可以使用 http-server 在要分享的目录下启动一个本地服务器，直接把地址发给小伙伴自行下载，由于是处在同一个局域网，下载速度想必也是杠杠滴。

要注意不同网址的区别，以  `http://127.0.0.1` 开头的只能自己本机访问，以 `http://192.168` 开头的网址，你的小伙伴才能访问。

```bash
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080  # 只能本机访问
  http://192.168.11.146:8080  # 局域网内都可以访问
Hit CTRL-C to stop the server
```

### 3.3 git-open

![git-open 示例图](https://static.webjam.cn/images/git-open.gif)

git-open 是我日常使用频率非常高，仅次于 npm/yarn，强烈建议安装使用，安装命令如下：

```bash
npm install git-open -g
```


假如你本地有一个从 GitLab / GitHub 克隆下来的仓库，你可以在通过 git-open 直接在浏览器中打开仓库对应的网站，甚至你可以指定仓库下更详细的页面（如指定远程、分支、Issues)。

例如：

```bash
git open
# 打开仓库主页

git open someremote
# 打卡仓库的 someremote 远程仓库的主页

git open someremote somebranch
# 打卡仓库的 someremote 远程仓库的 somebranch 分支

git open --issue
# 打开仓库的 issues 页面
```





