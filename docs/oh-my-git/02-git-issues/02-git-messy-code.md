## Git 乱码

在 Linux 如果要提交的文件名是中文的，使用 `git status` 或者 `git commit` 的时候就会把中文显示为一串数字如下：

```bash
create mode 100644 "\346\265\213\350\257\225"
```

## 解决方案

此时只需要添加相应的配置即可显示正常的中文。

### 方法一：执行命令

```bash
git config --global core.quotepath false
```

### 方法二：修改配置

手动更改 Git 配置文件 `~/.gitconfig`，编辑添加如下内容：

```bash
[core]
    quotepath = false
```
