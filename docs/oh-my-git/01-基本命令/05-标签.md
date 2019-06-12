# 标签

## 一、查看标签：

标签总是和某个commit挂钩。如果这个commit既出现在master分支，又出现在dev分支，那么在这两个分支上都可以看到这个标签。

### 1. 查看标签

> 注意，标签不是按时间顺序列出，而是按字母排序的。

```bash
git tag
```

### 2. 查看指定标签的详细信息

```bash
git show v1.0.1
```

## 二、创建标签

默认标签是打在最新提交的 commit 上的。

### 1. 标签默认打在最新的 commit 上

```bash
git tag v1.0.0
```

### 2. 标签指定 commit

```bash
git tag v1.0.0 <commit-id>
```

### 3. 指定标签信息
```bash
git tag -a <tagname> -m "balabalabala..."
```

如果是多行信息，使用下面命令，会自动打开编辑器（通常是 vim）：

```bash
git tag -a <tagname>
```



## 三、推送标签到远程

### 1. 推送某个标签到远程

以标签 `v1.0.0` 为例：

```bash
git push origin v1.0.0
```

### 2. 一次性推送全部尚未推送到远程的本地标签

```bash
git push origin --tags
```

## 四、删除标签

### 1. 删除本地标签

```bash
git tag -d v1.0.1
```

### 2. 删除远程标签

如果标签已经推送到远程，就先从本地删除：

```bash
git tag -d v1.0.1
```

然后，从远程删除：

```bash
git push origin :refs/tags/v1.0.1
```
