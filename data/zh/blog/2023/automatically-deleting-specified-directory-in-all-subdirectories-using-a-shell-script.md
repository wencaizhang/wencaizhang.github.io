---
title: 高效清理：使用 shell 脚本自动删除所有子目录下的指定目录
date: "2023-03-22"
tags: ["shell", "bash"]
draft: false
summary: "使用 shell 脚本自动删除所有子目录下的指定目录"
images: ["/static/images/img.jpg"]
authors: ["default"]
---

```sh
#!/bin/bash

# 指定要在哪个目录下执行脚本
work_dir_name="./"

# 所有要删除的文件，注意格式：双引号包裹，空格隔开

dir_names=(
  "test"
  "test2"
)


# 遍历所有子目录
for dir in $(find $work_dir_name -type d); do
  # 判断当前目录是否为指定名称目录之一
  if [[ "${dir_names[@]}" =~ "$(basename $dir)" ]]; then
    # 删除指定名称目录
    rm -rf $dir
    echo "删除目录: $dir"
  fi
done
```