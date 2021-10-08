---
title: Git 分支之批量删除分支
date: 2021-07-24
draft: false
categories:
- git
tags:
- dom
---



```bash
#!/usr/bin/env sh

cat ./branch.txt | while read line
do
	git push origin :${line}
	# echo ${line}
done
```