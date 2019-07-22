# webpack打包优化

### 好处
1. 提升 webpack 打包速度和项目体积：将 webpack 入口的 chunk 文件中所有公共的代码提取出来，减少代码体积；同时提升 webpack 打包速度。

2. 利用缓存机制：依赖的公共模块文件一般很少更改或者不会更改，这样独立模块文件提取出可以长期缓存。

## 用法



参考文章：[webpack实现静态资源缓存的那点事](https://www.cnblogs.com/wonyun/p/8146139.html)

