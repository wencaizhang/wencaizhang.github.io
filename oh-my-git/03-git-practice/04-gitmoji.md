# gitmoji

<img :src="$withBase('/images/gitmoji.gif')" alt="gitmoji" style="max-width: 50%;">


## 简介

你是否已经受够了枯燥无味的 git commit message，这里介绍一个有趣的东西 - gitmoji。

**`git + emoji -> gitmoji`**

一句话概括，就是利用 emoji 表情来辅助说明不同的 commit 信息类型，让信息更加直观，更加有趣。

然鹅 emoji 的数量非常庞大，而且 emoji 的含义并不是那么清晰，甚至每个人都有各自独特的理解。

幸好有一个开源项目 [https://github.com/carloscuesta/gitmoji](https://github.com/carloscuesta/gitmoji) 筛选出了一部分用于提交信息的 emoji，并且帮我们解释和统一规范了 emoji 在提交时的含义。


## 使用方法

在提交代码时直接把 emoji 代码（`:tada:`) 当作普通提交信息使用即可：

```bash
git commit -m ":tada: 项目初始化"

# or
git commit -m ":memo: update README"
```

当你提交到远程就可以在 github 页面中看到如下效果：

:tada: 项目初始化

:memo: update README

## 详细 emoji 代码

根据[https://github.com/carloscuesta/gitmoji](https://github.com/carloscuesta/gitmoji)这个项目，我制作了一个表格（如下所示），您可以狠狠地点击“**代码**”列，对应的 emoji 代码将会自动复制到系统剪贴板中。

enjoy yourself!

<div class="gitmoji-table">

| 表情                        | 代码                          | meaning (en)                                | 含义(zh)                   |
| :-------------------------- | :---------------------------- | :------------------------------------------ | :------------------------- |
| :art:                       | `:art:`                       | Improving structure / format of the code.   | 改进结构和代码格式         |
| :zap:                       | `:zap:`                       | Improving performance.                      | 优化性能                   |
| :fire:                      | `:fire:`                      | Removing code or files.                     | 移除代码或文件             |
| :bug:                       | `:bug:`                       | Fixing a bug.                               | 修复 BUG                   |
| :ambulance:                 | `:ambulance:`                 | Critical hotfix.                            | 核心代码修复               |
| :sparkles:                  | `:sparkles:`                  | Introducing new features.                   | 添加新特性                 |
| :memo:                      | `:memo:`                      | Writing docs.                               | 编写文档                   |
| :rocket:                    | `:rocket:`                    | Deploying stuff.                            | 部署程序                   |
| :lipstick:                  | `:lipstick:`                  | Updating the UI and style files.            | 更新界面和样式文件         |
| :tada:                      | `:tada:`                      | Initial commit.                             | 初始化提交                 |
| :white_check_mark:          | `:white_check_mark:`          | Adding tests.                               | 添加测试代码               |
| :lock:                      | `:lock:`                      | Fixing security issues.                     | 修复安全问题               |
| :apple:                     | `:apple:`                     | Fixing something on macOS.                  | 修复 MacOS 平台上的问题    |
| :penguin:                   | `:penguin:`                   | Fixing something on Linux.                  | 修复 Linux 平台上的问题    |
| :checkered_flag:            | `:checkered_flag:`            | Fixing something on Windows.                | 修复 Windows 平台上的问题  |
| :robot:                     | `:robot:`                     | Fixing something on Android.                | 修复 Android 平台上的问题  |
| :green_apple:               | `:green_apple:`               | Fixing something on iOS.                    | 修复 iOS 平台上的问题      |
| :bookmark:                  | `:bookmark:`                  | Releasing / Version tags.                   | 发布一个版本               |
| :rotating_light:            | `:rotating_light:`            | Removing linter warnings.                   | 移除警告信息               |
| :construction:              | `:construction:`              | Work in progress.                           | 正在进行中                 |
| :green_heart:               | `:green_heart:`               | Fixing CI Build.                            | 修复 CI 构建               |
| :arrow_down:                | `:arrow_down:`                | Downgrading dependencies.                   | 降级依赖                   |
| :arrow_up:                  | `:arrow_up:`                  | Upgrading dependencies.                     | 升级依赖                   |
| :pushpin:                   | `:pushpin:`                   | Pinning dependencies to specific versions.  | 固定依赖版本               |
| :construction_worker:       | `:construction_worker:`       | Adding CI build system.                     | 添加 CI 构建系统           |
|                             |
| :chart_with_upwards_trend:  | `:chart_with_upwards_trend:`  | Adding analytics or tracking code.          | 添加分析或追踪代码         |
| :recycle:                   | `:recycle:`                   | Refactoring code.                           | 重构代码                   |
| :whale:                     | `:whale:`                     | Work about Docker.                          | 在 Docker 中运行           |
| :heavy_plus_sign:           | `:heavy_plus_sign:`           | Adding a dependency.                        | 添加依赖                   |
|                             |
| :heavy_minus_sign:          | `:heavy_minus_sign:`          | Removing a dependency.                      | 移除依赖                   |
| :wrench:                    | `:wrench:`                    | Changing configuration files.               | 修改配置文件               |
| :globe_with_meridians:      | `:globe_with_meridians:`      | Internationalization and localization.      | 国际化和本地化             |
| :pencil2:                   | `:pencil2:`                   | Fixing typos.                               | 修复拼写错误               |
| :hankey:                    | `:hankey:`                    | Writing bad code that needs to be improved. | 改进垃圾代码               |
| :rewind:                    | `:rewind:`                    | Reverting changes.                          | 回退修改                   |
| :twisted_rightwards_arrows: | `:twisted_rightwards_arrows:` | Merging branches.                           | 合并分之                   |
| :package:                   | `:package:`                   | Updating compiled files or packages.        | 更新已编译的文件或包       |
| :alien:                     | `:alien:`                     | Updating code due to external API changes.  | 由于外部API更改而更新代码  |
| :truck:                     | `:truck:`                     | Moving or renaming files.                   | 移除或重命名文件           |
| :page_facing_up:            | `:page_facing_up:`            | Adding or updating license.                 | 添加或更新许可证           |
| :boom:                      | `:boom:`                      | Introducing breaking changes.               | 引入重大变化               |
| :bento:                     | `:bento:`                     | Adding or updating assets.                  | 增加或更新资源文件         |
| :ok_hand:                   | `:ok_hand:`                   | Updating code due to code review changes.   | 更新代码，因为代码审核变更 |
| :wheelchair:                | `:wheelchair:`                | Improving accessibility.                    | 提高可访问性               |
| :bulb:                      | `:bulb:`                      | Documenting source code.                    | 添加源码注释               |
| :beers:                     | `:beers:`                     | Writing code drunkenly.                     | 醉酒状态写代码             |
| :speech_balloon:            | `:speech_balloon:`            | Updating text and literals.                 | 更新文本和字面量           |
| :card_file_box:             | `:card_file_box:`             | Performing database related changes.        | 执行数据库相关的变化       |
| :loud_sound:                | `:loud_sound:`                | Adding logs.                                | 添加日志                   |
| :mute:                      | `:mute:`                      | Removing logs.                              | 移除日志                   |
| :busts_in_silhouette:       | `:busts_in_silhouette:`       | Adding contributor(s).                      | 添加贡献者                 |
| :children_crossing:         | `:children_crossing:`         | Improving user experience / usability.      | 提高用户体验/可用性        |
| :building_construction:     | `:building_construction:`     | Making architectural changes.               | 架构调整                   |
| :iphone:                    | `:iphone:`                    | Working on responsive design.               | 响应式设计                 |
| :clown_face:                | `:clown_face:`                | Mocking things.                             | 模拟数据                   |
| :egg:                       | `:egg:`                       | Adding an easter egg.                       | 添加一个彩蛋               |
| :see_no_evil:               | `:see_no_evil:`               | Adding or updating a .gitignore file        | 添加或更新 .gitignore 文件 |
| :camera_flash:              | `:camera_flash:`              | Adding or updating snapshots                | 添加或更新快照             |
| :alembic:                   | `:alembic:`                   | Experimenting new things                    | 尝试新特性                 |
| :mag:                       | `:mag:`                       | Improving SEO                               | 优化 SEO                   |
| :wheel_of_dharma:           | `:wheel_of_dharma:`           | Work about Kubernetes                       | 在 Kubernetes 平台工作     |
| :label:                     | `:label:`                     | Adding or updating types (Flow, TypeScript) | 添加或者更新类型系统       |

</div>

## 更多关于 emoji

这里只显示了 git commit 相关的 emoji 代码，除此之外，你还可以安装 chrome 插件 Chromoji - Emoji for Google Chrome 来查看更多的 emoji 代码。

enjoy yourself again.

<style>
.gitmoji-table tr td:first-child {
  font-size: 1.5em;
}
.gitmoji-table tr td:nth-child(2) {
  cursor: pointer;
}
.gitmoji-table tr td:nth-child(2):hover {
  background-color: lightblue;
}
</style>


<gitmoji-copy />
