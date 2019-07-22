# 解决 Invalid Host header

执行命令 `npm run dev` 启动本地服务器之后，发现只能在本地访问，不能通过局域网ip和服务器域名来访问。 

在项目的根目录的 `package.json` 文件中的  `dev` 命令字段中添加 `--host 192.168.1.5`（本机 ip 地址）。

这样就能通过 ip 访问了，但是通过服务器域名访问时会显示 `Invalid Host header`，这是由于新版 webpack-dev-server 出于安全考虑，默认检查 hostname，如果 hostname 不是配置内的，将中断访问。

解决办法是在 build 目录中的 webpack.base.config.js 中添加如下 webpack-dev-server 配置：

```js
devServer: {
      disableHostCheck: true,
}
```