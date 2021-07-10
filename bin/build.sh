#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# hugo --minify
hugo -e production -v --i18n-warnings --minify --gc --cleanDestinationDir
