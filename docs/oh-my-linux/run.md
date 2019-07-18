# run

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 前端编译，生成静态文件
npm run build

# 变量：服务器IP、用户名、密码、目标路径
host="wencaizhang.com"
user="root"
# passwd="password"
targetDir="/root/temp/"

# 删除远程服务器目录
ssh ${user}@${host} > /dev/null 2>&1 << eeooff
rm -rf ${targetDir}
eeooff

# 将 dist 目录发送到服务器
scp -r ./assets ${user}@${host}:${targetDir}

cd -
```