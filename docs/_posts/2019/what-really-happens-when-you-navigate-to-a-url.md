---
title: 「译」从 URL 输入到页面展现发生了什么 
author: wencaizhang
draft: true
toc: true
tag:
  - interview
  - http
category:  []
date: 2018-05-22 11:26:00
---

# 「译」从 URL 输入到页面展现发生了什么

> 本文翻译自：[What really happens when you navigate to a URL](http://igoro.com/archive/what-really-happens-when-you-navigate-to-a-url/#)
>
> 为方便理解，本文采用意译，如有兴趣，可阅读英文原文

<!-- more -->

## 步骤：
1. 在浏览器中输入网址
1. 浏览器查找域名对应的 IP 地址
1. 浏览器向服务器发送 HTTP 请求
1. 服务器响应并进行重定向
1. 浏览器向真正的服务器重新发送 HTTP 请求
1. 服务器处理 HTTP 请求
1. 服务器响应请求，返回 HTML 页面
1. 浏览器渲染 HTML 页面
1. 浏览器请求静态资源，如 css 文件、图片、js 文件
1. 浏览器发送异步请求


作为软件开发者，你肯定对 web 应用如何工作以及它工作过程中包含的技术（浏览器、HTML、web server、request handlers 等等）都有一个高水平的认知。

这篇文章中，我们会对当你访问一个 URL 时发生的一系列事情进行深入研究。

## 1. 在浏览器中输入网址

输入网址 `facebook.com`，故事从这里开始：

![在浏览器中输入网址](http://igoro.com/wordpress/wp-content/uploads/2010/02/image4.png)

## 2. 浏览器查找域名对应的 IP 地址

![找域名对应的 IP 地址](http://igoro.com/wordpress/wp-content/uploads/2010/02/image13.png)

访问一个 URL 的第一步就是得到域名对应的 IP 地址，DNS（Domain Name System，域名系统，万维网上作为域名和IP地址相互映射的一个分布式数据库）查找顺序如下：

1. 浏览器缓存（Browser cache）
1. 系统缓存（OS cache）
1. 路由器缓存（Router cache）
1. ISP DNS 缓存（ISP DNS cache）
1. 递归查找（Recursive search）

这里有一个图来描述 DNS 递归查找的过程

![DNS递归查找](http://igoro.com/wordpress/wp-content/uploads/2010/02/500pxAn_example_of_theoretical_DNS_recursion_svg.png)

> 关于 DNS 有件值得担心的事是整个域名像是 wikipedia.org 或者 facebook.com 看起来像是仅仅映射到单一的一个 IP 地址。幸运的是，这里有一些缓解瓶颈的方法：
>
> + Round-robin DNS(轮询调度 DNS)是 DNS 查询结果为多个 IP 地址而不是仅仅一个 IP 地址的解决方案。例如它就解决了 facebook.com 实际上对应着四个 IP 地址的问题。
> + Load-balancer (负载均衡)是通过硬件监听指定 IP 地址并且将请求转发到其他服务器。大型网站是使用昂贵的高性能负载均衡器的典型例子。
> + Geographic DNS (地理域名系统)通过映射一个域名到不同的 IP 地址的方式提升了可扩展性，这种方法依赖于客户端的地理位置。
> + Anycast (任播)是将一个 IP 地址映射到多个物理服务器的路由技术。不幸的是，任播并不适合 TCP 协议，因此在这种情况下几乎不会使用它。

> 绝大部分 DNS 服务器本身使用任播协议来实现 DNS 的高可用性和低延迟性。
>
> 任播(anycast): 是一种网络寻址和路由的策略，使得资料可以根据路由拓朴来决定送到“最近”或“最好”的目的地。

## 3. 浏览器向服务器发送 HTTP 请求

![向服务器发送 HTTP 请求](http://igoro.com/wordpress/wp-content/uploads/2010/02/image22.png)

我们可以非常确定 Facebook 的主页没有被缓存到浏览器中，因为动态页面很快会过期甚至立即过期（把过期时间设置为过去某一时间点）。
 
所以，浏览器会将请求发送到 Facebook 的服务器。

```
GET http://facebook.com/ HTTP/1.1
Accept: application/x-ms-application, image/jpeg, application/xaml+xml, [...]
User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; [...]
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
Host: facebook.com
Cookie: datr=1265876274-[...]; locale=en_US; lsd=WW[...]; c_user=2101[...]
```
 
`GET` 请求说明这个 URL 是用来获取的 `http://facebook.com` 这个页面的 ，浏览器通过 header 中的 `User-Agent` 来标识自己（用户使用的操作系统及版本，浏览器及版本等等），通过 `Accept` 和 `Accept-Encoding` 规定接收哪种类型的响应信息。header 头 `Connection` 则要求服务器保持 TCP 连接保持连接状态以便于进一步请求。
 
另外，这个请求还携带了浏览器在这个域名下的 `cookie`。你可能已经知道，`cookie` 是在不同页面中记录网站网站状态的键值对。也就是说，`cookie` 储存着登录用户的用户名、服务器分配给用户的密码、用户的一些设置等等。`cookie` 会被储存在客户端的一个文本文件中，每次请求都会一起发送给服务器端。
 
> 你可以通过很多工具去查看原生 HTTP 请求和对应的响应信息。我最喜欢的工具是 fiddler，但是仍然有很多别的工具（例如：Firebug），这些工具会给你很大的帮助当你优化一个网站的时候。
 
> 除了 `GET` 请求，另外你非常熟悉的另外一种类型的请求是 `POST` 请求，经常被用作表单提交。`GET` 请求通过它的 url 发送参数（例如：`http://robozzle.com/puzzle.aspx?id=85`）,而 `POST` 请求在 request body 中（就在 request header 下面）发送参数。
 
> 在 URL `http://facebook.com/` 中，末尾的 `/` 是非常重要的。在这个例子中，浏览器可以很安全地在末尾增加 `/` 。而对于 URL `http://example.com/folderOrFile`，浏览器就不能自动增加一个 `/` ，因为浏览器不清楚 `folderOrFile` 是一个目录还是一个文件。在这种情况下，浏览器将会以不带 `/` 的形式访问这个 URL ，服务端将会返回一个重定向的响应信息，这就导致了一个不必要的请求和响应。
 
 
 
## 4. The facebook server responds with a permanent redirect
 
服务器响应并进行重定向
 
![The facebook server responds with a permanent redirect](http://igoro.com/wordpress/wp-content/uploads/2010/02/image8.png)
 
 
这是 Facebook 服务端针对浏览器请求返回的响应信息。
 
```
HTTP/1.1 301 Moved Permanently
Cache-Control: private, no-store, no-cache, must-revalidate, post-check=0,
      pre-check=0
Expires: Sat, 01 Jan 2000 00:00:00 GMT
Location: http://www.facebook.com/
P3P: CP="DSP LAW"
Pragma: no-cache
Set-Cookie: made_write_conn=deleted; expires=Thu, 12-Feb-2009 05:09:50 GMT;
      path=/; domain=.facebook.com; httponly
Content-Type: text/html; charset=utf-8
X-Cnection: close
Date: Fri, 12 Feb 2010 05:09:51 GMT
Content-Length: 0
```
 
服务端通过响应一个永久性转移的 HTTP 状态码来告诉浏览器去访问 `http://www.facebook.com/` 而不是 `http://facebook.com/` 。
 
> 关于服务端一定要将 `http://facebook.com/` 重定向到 `http://www.facebook.com/` ，而不是立即将用户希望看到的页面返回到浏览器，这里有一些有趣的原因。
>
> 其中一个原因和搜索引擎排名有关。如有同一个页面有两个 URL，例如 `http://www.igoro.com/` 和`http://igoro.com/`，搜索引擎可能会认为它们是两个不同的网站，每个 URL 的访问量都低于它们的总和就导致较低的排名。搜索引擎理解永久性转移（301），而且会将两个 URL 的点击量合并成一个单独的排名。
>
> 同样的，相同内容对应多个 URL 是不利于缓存的。当一个内容拥有多个名字的时候，它将有可能被缓存多次。
 
## 5. The browser follows the redirect
 
浏览器向真正的服务器重新发送 HTTP 请求
 
![The browser follows the redirect](http://igoro.com/wordpress/wp-content/uploads/2010/02/image23.png)
 
浏览器现在知道 `http://www.facebook.com/` 才是应该访问的正确地址，因此它发送了另外一个 `GET` 请求
 
```
GET http://www.facebook.com/ HTTP/1.1
Accept: application/x-ms-application, image/jpeg, application/xaml+xml, [...]
Accept-Language: en-US
User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; [...]
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
Cookie: lsd=XW[...]; c_user=21[...]; x-referer=[...]
Host: www.facebook.com
```
 
header 头的信息和第一次请求相同。
 
## 6. The server ‘handles’ the request
 
服务器处理 HTTP 请求
 
![The server ‘handles’ the request](http://igoro.com/wordpress/wp-content/uploads/2010/02/image9.png)
 
 
服务端将会接收到 `GET` 请求，然后加工处理并且返回一个响应信息。
 
这看起来像是一个简单的任务，但实际上这里发生了很多有趣的事情 —— 即使是一个像我的博客这样简单的网站也是如此，更不用说像 Facebook 这样大规模可扩展的网站了。
 
### Web server software
 
web 服务器（如 IIS 或者 Apache）接收到 HTTP 请求然后决定运行哪一个请求处理程序去处理这个请求。一个请求处理程序（由 ASP、.NET、PHP、Ruby 等构建）是一个读取请求和生成 HTML 响应的程序。
 
在这个简单的例子中，请求处理程序可以被储存在一个文件中xxx，例如 `http://example.com/folder1/page1.aspx` 这个 URL 会被映射到 `/httpdocs/folder1/page1.aspx` 这个文件。web 服务器同样也可以被配置，这样便于手工指定请求处理函数，因此文件 `page1.aspx` 对应的公开 URL 可以是 `http://example.com/folder1/page1`。
 
> 每一个动态网站都面临一个有意思的难题就是如何储存数据。小型网站通常会有一个 SQL 数据库去储存他们的数据，但是那些储存庞大数据或者拥有很多访客甚至两者兼具的网站，就必须找到一个方法通过多个服务器去将数据分割开。
 
### Request handler
 
请求处理程序读取请求，以及请求的参数和 `cookie` 。随后它会读取并且有可能更新一些存储在服务端的数据。然后，程序会生成 HTML 响应
 
## 7. The server sends back a HTML response
 
服务器响应请求，返回 HTML 页面
 
![The server sends back a HTML response](http://igoro.com/wordpress/wp-content/uploads/2010/02/image10.png)
 
下面是服务端生成并返回的响应信息：
 
```
HTTP/1.1 200 OK
Cache-Control: private, no-store, no-cache, must-revalidate, post-check=0,
    pre-check=0
Expires: Sat, 01 Jan 2000 00:00:00 GMT
P3P: CP="DSP LAW"
Pragma: no-cache
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
X-Cnection: close
Transfer-Encoding: chunked
Date: Fri, 12 Feb 2010 09:05:55 GMT
 
2b3
��������T�n�@����[...]
```
 
响应信息数据大小为 36kb ，xxxxx
 
header 中字段 `Content-Encoding`
 
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"
      lang="en" id="facebook" class=" no_js">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-language" content="en" />
...
```
 
除了压缩之外，header 头指定了是否缓存以及如何缓存这个页面，xxx cookie ，隐私信息，等等
 
> 注意这里的 header 头中 `Content-Type` 被设置为 `text/html` 。header 告知浏览器将响应内容（response content）当做 HTML 渲染，而不是文件进行下载。浏览器将会通过 header 去决定如何解释相应信息，但是也会参考其他因素，比如 URL 扩展内容。
 
## 8. The browser begins rendering the HTML
 
浏览器渲染 HTML 页面
 
![The browser begins rendering the HTML](http://igoro.com/wordpress/wp-content/uploads/2010/02/image6.png)
 
在浏览器接受全部的 HTML 文档信息之前，它就已经开始渲染网站了。
 
## 9. The browser sends requests for objects embedded in HTML
 
浏览器请求静态资源，如 css 文件、图片、js 文件
 
![The browser sends requests for objects embedded in HTML](http://igoro.com/wordpress/wp-content/uploads/2010/02/image11.png)
 
 
## 10. The browser sends further asynchronous (AJAX) requests
 
浏览器发送异步请求
 
![The browser sends further asynchronous (AJAX) requests](http://igoro.com/wordpress/wp-content/uploads/2010/02/image12.png)
 
在 Web 2.0 时代，即使在页面渲染完毕，客户端也还是同服务端保持通信。
 
例如，Facebook 聊天功能会保持更新你的朋友列表当他们进来或者离开。为了更新你的在记录中的朋友列表，你的浏览器中的 JavaScript 必须向服务端发送一个异步请求。这个异步请求时一个程序化构造的 GET 或者 POST 请求通过一个特殊的 URL。在 Facebook 这个例子中，客户端发送一个 `POST` 请求指向 `http://www.facebook.com/ajax/chat/buddy_list.php` ，它去获取一个关于你有哪些朋友在线的列表。
 
这个模式有时叫做 `AJAX` ，代表着 `Asynchronous JavaScript And XML`，但即使这样也没有一个特殊的理由要求服务端必须把响应格式化为 `XML` 格式。例如，Facebook 在异步请求响应中返回 JavaScript 代码段。
 
> 通过 fiddler 可以查看浏览器发出的异步请求。事实上，你不仅可以被动地观察这些请求，你利用 fiddler 同样也可以修改和发送请求。
 
> Facebook chat 提供了一个关于 `AJAX` 的有趣问题的一个例子：将数据从服务器推送到客户端。因为 `HTTP` 是一个请求-响应模式的协议，所以服务器不能向客户端发送新的消息。相反，客户端必须每隔几秒钟得到服务端的响应以便于查看是否有新的消息到达。
>
> 长轮询是一个有趣的技巧，它可以减少
 
 
## 小结
 
关于 web 网站中各个部分如何协同工作，希望本文能对你有所启发。