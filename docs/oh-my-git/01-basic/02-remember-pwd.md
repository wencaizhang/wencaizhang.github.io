# 记住密码

## 方法一：使用命令

```bash
git config --global credential.helper store
```

如果没有 `--global` 参数，则在当前项目下的 `.git/config` 文件中添加。

## 方法二：修改配置

在 Git 的配置文件 `.gitconfig` 里面会有你先前配好的 `name` 和 `email`，只需在下面添加如下代码即可：

```bash
[credential]
     helper = store
```

> Windows 系统文件路径为：`C:\Users\Administrator\.gitconfig`
>
> Linux 下路径为：`~/.gitconfig`

下次再输入用户名 和密码 时，`git` 就会记住，从而会在配置文件 `.gitconfig` 的同级目录下生成一个 `.git-credentials` 文件，
此文件将会明文储存用户名和密码。

