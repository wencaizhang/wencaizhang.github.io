
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
hugo --minify

# 请提前安装 upx 并登录又拍云
upx sync -w 500 ./public /
