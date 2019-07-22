#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cp ./Dockerfile docs/.vuepress/dist
cd docs/.vuepress/dist

# 发布到自定义域名
echo 'coolfe.fun' > CNAME

currTime1=`date +%Y-%m-%d`
currTime2=`date +%H:%M:%S`

git init
git add -A
git commit -m ":rocket: deploy @${currTime1} ${currTime2}"

git push -f https://github.com/wencaizhang/wencaizhang.github.io.git master

cd -
