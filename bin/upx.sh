
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

############################
#
# 请提前安装 upx 并登录又拍云
#
############################

# 切换到正确到存储空间
upx switch blog-930901-upyun

# 使用 sync 同步
upx sync -w 500 ./public /
