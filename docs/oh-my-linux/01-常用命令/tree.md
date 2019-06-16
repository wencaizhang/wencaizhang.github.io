# tree 命令以树形结构显示文件目录结构

tree 命令可以以树形结构显示文件目录结构，它非常适合于我们给别人介绍我们的文件目录的组成框架，

```bash
tree
```

## 指定深度

```bash
tree -L 2
```

## 忽略指定目录

```bash
tree -I '*svn|*node_module*'
```


## 常用组合

```bash
tree -L 2 -L 2 -I '*svn|*node_module*'
```