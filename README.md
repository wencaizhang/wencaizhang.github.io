# 前端锦囊

1. 克隆代码（递归克隆，将子模块一并克隆下来）
```bash
# 拉取代码，同时拉取子模块
git clone --recursive -b dev https://github.com/wencaizhang/wencaizhang.github.io.git
```

2. 安装 npm 依赖

```bash
yarn
```

3. 本地预览模式

```bash
yarn dev
```

4. 生成静态网站

```bash
yarn build
```

5. 编译并发布到 master 分支

利用 shell 脚本 [deploy.sh](https://github.com/wencaizhang/wencaizhang.github.io/blob/vuepress/deploy.sh)，可以帮助编译并将编译结果上传到 master 分支：

```bash
# 设置可执行权限
chmod +x ./deploy.sh

# 编译并提交
./deploy.sh
```

## 构建

+ 使用 Vue 驱动的静态网站生成器 [vuepress](https://vuepress.vuejs.org/zh/) 进行构建
+ 部署在自有主机：[https://wencaizhang.com/](https://wencaizhang.com/)
+ 利用 GitHub Pages 作为备份：[https://wencaizhang.github.io/](https://wencaizhang.github.io/)
