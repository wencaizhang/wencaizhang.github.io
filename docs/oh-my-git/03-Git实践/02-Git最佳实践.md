# 源代码版本管理

## 一、git 最佳实践的理论基础

1. 参照英文原版 [A successful Git branching model]() 或者中文翻译 [基于git的源代码管理模型——git flow](http://www.ituring.com.cn/article/56870) 来理解整个版本管理的流程。

2. 版本管理流程模型如下

![git-model](http://nvie.com/img/git-model@2x.png)


## 具体开发中的应用场景说明

1. 在正常开发状态（非版本发布状态）下， 代码库将仅存在两个分支 ` master` 分支  和 `develop` 分支，开发人员将相关任务的 commit 提交至 `develop` 分支，每个 commit 提交需要在提交注释中附加相关修改说明以及 `JIRA中对应项目` 下相关的任务编号如"`SPMS-100`"。

2. 在版本测试发布状态（sprint开发结束需要测试发布新的版本）下， 代码库将存在 `develop` 分支， `master` 分支以及 `release` 分支。其中 `release` 分支由 `develop` 分支代码派生，由将供测试人员部署在不同的测试环境进行测试，在测试中发现的缺陷，开发人员需在 `release` 分支中进行修复并合并回 `develop` 分支。

3. 在版本发布上线状态（release分支通过测试）下， 代码库将存在 `develop` 分支， `master` 分支以及 `release` 分支。其中 `release` 分支需要合并回 `master` 分支和 `develop` 分支，并在 `master` 分支创建tag，然后将 `master` 分支发布至生产服务器，且删除 `release` 分支。

4. 在版本发布上线观察维护状态（master分支发布至生产环境）下， 代码库将存在 `develop` 分支， `master` 分支。如果在线上发现有需要立即修复的缺陷，此时需要由 `master` 分支最新的一个tag中的代码派生出 `hotfix` 分支，在缺陷修复并且测试通过后，该 `hotfix` 分支将被合并回 `develop` 分支和 `master` 分支，并在 `master` 分支创建tag，然后将 `master` 分支发布至生产服务器，且删除 `hotfix` 分支。


## 分支说明

1. `develop ` 分支是保存当前最新开发成果的分支，用于提交相关完成开发任务的commit。

2. `master ` 分支存放的应该是随时可供在生产环境中部署的代码（Production Ready state），在每个sprint结束（或者hotfix结束）且相关的代码发布后将会被更新。每个稳定的发布版本需要在该分支创建一个tag，tag名称为对应的版本号，如1.0.0；每个hotfix的发布版本也需要在该分支创建一个tag，tag名称为对应的版本号，如1.0.1。

3. `release ` 分支是为发布新的产品版本而设计的，用于保存测试过程中可能出现的修复代码提交。

4. `hotfix ` 分支是为修复生产代码中的缺陷而设计的（非sprint），由`master ` 分支最新的一个 tag 中的代码派生。

5. [基于git的源代码管理模型——git flow](http://www.ituring.com.cn/article/56870) 中提到的 `features` 分支不提交保存到 git 服务器，由开发人员在本地进行操作，在此不再赘述。

## git操作参考

关于git，网上有很多内容，详略程度各有不同，下面列出几个比较简单的入门内容供参考

+ [git参考手册](http://gitref.org/zh/)

+ [Getting Git Right](https://www.atlassian.com/git/)

+ [Git 风格指南](https://github.com/aseaday/git-style-guide)

## git-flow参考文档

+ [Using git-flow to automate your git branching workflow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/)

+ [Git flow cheatsheet](https://github.com/danielkummer/git-flow-cheatsheet)

+ [Git-flow Installation](https://github.com/nvie/gitflow/wiki/Installation)

+ [Git-flow 备忘清单](http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html)

+ [基于git的源代码管理模型——git flow](http://www.ituring.com.cn/article/56870)


## git小技巧

+ [git切换分支保存修改的代码的方法](http://www.tonitech.com/2344.html)

+ [Git远程操作详解](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)

+ [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)
