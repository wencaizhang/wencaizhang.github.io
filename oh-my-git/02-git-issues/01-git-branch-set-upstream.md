# git branch --set-upstream

在创建新分支后，使用 `git pull` 的时候多次碰见下面的情况：

![](https://raw.githubusercontent.com/wencaizhang/git-learn/master/images/git%20branch%20--set-upstream.png)

`git pull` 命令并未更新代码，而是打印出了这么一段文字。

```bash
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> release/1.0.0
```

其实，输出的提示信息说的还是比较明白的，即当前（本地）分支并未关联远程分支，因此在 `git pull` 或者 `git push` 时需要显式指定关联的远程分支，如果既没有关联远程分支，也没有在操作时指定远程分支，则会打印如上信息。

因此，有两种解决方法。一种是在 `git pull` 时指定远程分支，命令如下：

```bash
git pull origin release/1.0.0
```

使用这种方法需要在每一次 `git pull` 和 `git push` 时指定对应的远程分支，略感麻烦，因此我使用第二种方法。

第二种方法则将本地分支与远程分支建立关联，命令如下：

```
git branch --set-upstream-to=origin/release/1.0.0 release/1.0.0
```

其中，`origin/release/1.0.0` 是本地分支对应的远程分支，`release/1.0.0` 当前的本地分支。

![](https://github.com/wencaizhang/git-learn/blob/master/images/git-branch--set-upstream2.png?raw=true)
