# 工作进行一半需切换到另一分支

## 问题场景

有时候我们需要临时切换到另外一个分支进行工作，但是当前分支有尚未提交的代码，如果此时直接切换分支，有可能导致代码冲突，这时候可以先用 `git stash` 命令暂时将代码储存起来。

然后切换到目标分支进行工作，工作结束后切换回原分支，这时再使用 `git stash pop` 命令将之前储藏的命令暴露出来。

```bash
git stash
```

```bash
git stash pop
```


## Useful Link

[3 Git 工具 - 储藏（Stashing）](https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E5%82%A8%E8%97%8F%EF%BC%88Stashing%EF%BC%89)