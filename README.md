# 前端锦囊

1. 克隆代码
```bash
git clone-b dev https://github.com/wencaizhang/wencaizhang.github.io.git
```

2. 安装 npm 依赖

```bash
yarn
```

3. 本地预览模式

```bash
yarn dev
```

4. 生成静态网站

```bash
yarn build
```

## 代码目录结构

~~这里使用了 **子模块** 的形式来组织项目，即 `oh-my-js` 等目录实际上是一个单独的仓库。~~

~~如果想要在子模块中提交代码，记得首先切换到对应分支，因为默认情况下，子模块是处于某个特定版本的，无法进行提交。~~

这里使用了 git subtree 的方式来组织各部分文章的源文件。

关于 git subtree 可以参考文章：[用 Git Subtree 在多个 Git 项目间双向同步子项目，附简明使用手册](https://tech.youzan.com/git-subtree/)


```bash
├── Dockerfile
├── README.md
├── assets
│   └── qr.png
├── deploy.sh
├── docs
│   ├── README.md
│   ├── micro-code
│   ├── oh-my-git
│   ├── oh-my-js
│   ├── oh-my-linux
│   ├── oh-my-vue
│   └── underscore-analysis
├── package.json
└── yarn.lock
```

## 部署步骤

1. 利用 shell 脚本 [deploy.sh](https://github.com/wencaizhang/wencaizhang.github.io/blob/dev/deploy.sh)，可以帮助编译并将编译结果上传到 master 分支（GitHub Pages 作为备份：[https://wencaizhang.github.io/](https://wencaizhang.github.io/)）

```bash
# 设置可执行权限
chmod +x ./deploy.sh

# 编译并提交
./deploy.sh
```

2. 利用 [DaoCloud](https://dashboard.daocloud.io/) 提供的服务，监听 master 分支提交，然后自动构建 Docker 镜像，并发布到自有主机 [https://wencaizhang.com/](https://wencaizhang.com/)。
