# Git Submodule - 子模块

## Git 子模块

在开发过程中，我们经常会遇到一种情况：某个项目需要包含并使用另一个项目，这个项目可能是第三方库，也可能是同事小伙伴独立开发维护的公共库。那么现在的问题就是：既想要让它们保持独立，又想在一个项目中使用另一个项目。

这种情况可以使用 Git 子模块解决这个问题，子模块允许你将一个 Git 仓库作为另一个 Git 仓库的子目录。它能让你将另一个仓库克隆到自己的项目中，同时还保持独立地提交代码。

## 添加子模块

向一个项目中添加子模块，需要使用命令声明：

```bash
git submodule add https://github.com/chaconinc/DbConnector
```

这时会将子模块克隆到项目中，并且在项目根目录下新建（如果之前没有）一个 `.gitsubmodule` 文件，这个配置文件保存了刚才添加的子模块的 URL 和本地目录之间的映射关系。

## 克隆含有子模块的项目

克隆含有子模块的项目，要记得加上 `--recursive` 参数，它会自动初始化并更新仓库中的每一个子模块代码。

```bash
git clone https://example.git --recursize
```

如果忘记使用这个参数，而是像平时一样去克隆项目代码，那么你得到的项目代码默认会包含子模块的目录，但只是一个空目录，其中没有任何文件。
此时，你需要运行两个命令来拉取子模块代码。

```bash
git submodule init

git submodule update
```


## 更新子模块

子模块既然是一个独立的项目，自然就有提交有更新，那么我们如何获取到子模块的最新代码呢？

```bash
git submodule update --remote
```

## 参考

- [Git 工具 - 子模块](https://git-scm.com/book/zh/v2/Git-工具-子模块)