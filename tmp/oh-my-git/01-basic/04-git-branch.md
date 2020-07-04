# 分支

## 一、查看分支：

### 1. 查看本地分支
没有参数，列出本地已经存在的分支，当前分支的分支名前会有“`*`”号。

```bash
git branch
```

### 2. 查看远程分支

```bash
git branch -r
```

### 3. 查看本地和远程的分支

```bash
git branch -a
```

## 二、创建和切换分支：

### 1. 创建新的分支

只创建新的分支，不会切换到新建的分支。本地新建的分支如果不推送到远程，对其他人就是不可见的。

```bash
git branch <branch-name>
```

> 注意：新分支是基于当前分支而创建的，和当前分支拥有相同的提交记录。

### 2. 切换分支

分支 `<branch-name>` 既可以是本地分支，也可以是远程仓库分支。

```bash
git checkout <branch-name>
```

### 3. 创建新分支，并切换到新分支

```bash
git checkout -b <branch-name>
```

### 4. 将新创建的本地分支推送到远程

```bash
git push origin <branch-name>:<branch-name>
```

推送到远程之后，在同一代码库的其他的本地仓库中需要先执行 `git fetch` 或者 `git pull` 之后，使用 `git branch -a` 才能看到这个分支。

### 5. 拉取远程分支

会在本地新建一个分支 mybranchName ，并自动切换到该本地分支 mybranchName

```bash
git checkout -b mybranchName origin/branchName
```


## 三、删除分支：

### 1. 删除本地分支

将本地分支 `<branch-name>` 删除：

```bash
git branch -d <branch-name>
```

如果此分支没有被 merge 到其他分支，删除操作会失败，此时可以强制删除：

```bash
git branch -D <branch-name>
```

### 2. 删除远程分支。

删除远程分支：

```bash
git branch -d -r <branch-name>
```

或者，推送一个空分支到远程分支，也相当于删除远程分支：

```bash
git push origin :<branch-name>
```

### 3. 删除不存在对应远程分支的本地分支

假设这样一个场景：

1. 小伙伴 A 创建本地分支 `feature/a` 并将其推送到远程分支 `origin/feature/a`
2. 其他小伙伴在本地拉取了此分支
3. 然后，小伙伴 A 在完成对应的功能并 merge 到主分支之后，将分支 `feature/a` 删除（远程和本地都删除）
4. 当其他小伙伴再次 fetch 或者 pull 操作都不会删除他们本地的 `feature/a` 分支，而且 `git branch -a` 也看不出这个分支被删除了。

此时，使用 `prune` 命令可以将其从本地代码库分支记录中移除：

```bash
git remote prune origin
```

还有一个更简单的命令，它在 fetch 之后将不存在的远程分支从本地代码库分支记录中移除：

```bash
git fetch -p
```

但这两个命令都不会删除对应的本地分支，需手动删除。
