# vuepress site

1. 克隆代码（递归克隆，将子模块一并克隆下来）
```bash
git clone --recursive https://github.com/wencaizhang/www.git
```

2. 安装 npm 依赖

```bash
yarn
```

3. 本地预览模式

```bash
yarn dev
```

4. 编译并发布到 master 分支

```bash
# 设置可执行权限
chmod +x ./deploy.sh

# 编译并提交
./deploy.sh
```
