# 获取代码
## 第一种方法：直接 clone

假设代码库的 git 地址为 https://example.git

```bash
git clone https://example.git 
```

如果想要指定代码库的文件夹名字，可以在命令后面加上目录名

```bash
git clone https://example.git dirname 

```

## 第二种方法：本地存在的目录关联到远程代码库

首先需要将目录初始化成为一个 git 仓库：

```bash
git init
```

与远程代码库进行关联：

```bash
git remote add origin https://example.git
```
