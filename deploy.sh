#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
# 进入生成的文件夹
cp ./README.md docs/.vuepress/dist
cp ./Dockerfile docs/.vuepress/dist
cd docs/.vuepress/dist


# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

currTime=`date +%Y-%m-%d-%H-%M-$S`

git init
git add -A
git commit -m ":rocket: deploy ${currTime}"

git push -f https://github.com/wencaizhang/wencaizhang.github.io.git master

cd -
