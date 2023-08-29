---
title: "给博客搭配随机图片"
date: "2021-01-08"
draft: false
category:
- 其他
tags:
- 其他
- 工具
---

# 给博客搭配随机图片

每次写文章给博文配图是一件很麻烦的事情，一张张地找，有时候质量还不好，于是乎，我就去寻找了一波背景图api接口，这下妈妈再也不用担心我文章不会配图了，

API 调用方式很简单，就是直接把 api 地址当做图片地址来访问，当服务器接收到访问时会自动重定向到一个随机的图片地址。

下面列举几个


## 一、小歪API

网址: [https://api.ixiaowai.cn/](https://api.ixiaowai.cn/)

> 目前系统共收录 1000+ 张图片 API最后更新时间:2020-03-25
>
> 图片均为https，采用新浪图片，**高速访问**

### 1.1 直接使用

- 图片API基本调用格式：
  + 二次元动漫: [https://api.ixiaowai.cn/api/api.php](https://api.ixiaowai.cn/api/api.php)
  + mc酱动漫: [https://api.ixiaowai.cn/mcapi/mcapi.php](https://api.ixiaowai.cn/mcapi/mcapi.php)
  + 高清壁纸: [https://api.ixiaowai.cn/gqapi/gqapi.php](https://api.ixiaowai.cn/gqapi/gqapi.php)

- 文字API基本调用格式：
  + 一言语录: [https://api.ixiaowai.cn/ylapi/index.php](https://api.ixiaowai.cn/api/ylapi.php)
  + 舔狗日记: [https://api.ixiaowai.cn/tgrj/index.php](https://api.ixiaowai.cn/tgrj/index.php)

### 1.2 JSON 格式

访问上面的 api 会直接重定向到一个随机图片地址，你可以在 api 后面添加参数 `type=json` 来得到一个 JSON 格式的结果：

例如：

- 图片列：[https://api.ixiaowai.cn/api/api.php?return=json](https://api.ixiaowai.cn/api/api.php?return=json)
- 文字列：[https://api.ixiaowai.cn/ylapi/index.php/?code=js](https://api.ixiaowai.cn/ylapi/index.php/?code=js)

返回 JSON 数据示例

```json
{
  "code": "200",
  "imgurl": "https://tva3.sinaimg.cn/large/0072Vf1pgy1fodqoysytvj31hc0u0qcq.jpg",
  "width": "1920",
  "height": "1080"
}
```

## 二、动漫星空

目前 动漫星空 共收录 8千万+ 张4K精美图片
动漫星空随机图片API，高速，免费，无广告
注意： 目前仅提供1080P接口，2K和4K接口后续开放，更多动态请持续关注 动漫星空API官网 及 动漫星空微信公众号 ，第一时间获取官方更新信息
HTML调用格式
1080P： 

```
https://api.dongmanxingkong.com/suijitupian/acg/1080p/index.php
```

参数： type=json
JSON调用格式
1080P： 

```
https://api.dongmanxingkong.com/suijitupian/acg/1080p/index.php?return=json
```

JSON数据

```json
{
  "code": "200",
  "imgurl": "https://tvax2.sinaimg.cn/large/0072Vf1pgy1fodqpio0roj31kw0v47wh.jpg",
  "width": "2048",
  "height": "1120"
}
```

## 三秋API接口站

目前系统共收录 3k9+ 张图片 API最后更新时间:2020-07-14

图片均为https，采用又拍云存储，高速访问

- 自判断二次元API：[https://api.ghser.com/random/api.php](https://api.ghser.com/random/api.php)
- PC随机二次元API：[https://api.ghser.com/random/pc.php](https://api.ghser.com/random/pc.php)
- PE随机二次元API：[https://api.ghser.com/random/pe.php](https://api.ghser.com/random/pe.php)
- 随机二次元风景API：[https://api.ghser.com/random/bg.php](https://api.ghser.com/random/bg.php)
