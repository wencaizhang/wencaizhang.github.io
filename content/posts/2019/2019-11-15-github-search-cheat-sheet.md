---
title: "Github 搜索规则备忘单"
date: 2019-11-15T14:55:11+08:00
draft: true
toc: true
images:
tags: 
  - github
  - search
---


GitHub’s search supports a variety of different operations. Here’s a quick cheat sheet for some of the common searches.

For more information, visit our search help section.

## 基本搜索

<table>
  <thead>
    <tr>
      <th>示例</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>cat stars:&gt;100</code></td>
      <td>搜索和 cat 相关的且超过 100 star 的仓库.</td>
    </tr>
    <tr>
      <td><code>user:defunkt</code></td>
      <td>找到 defunkt 用户下的所有仓库</td>
    </tr>
    <tr>
      <td><code>tom location:"San Francisco, CA"</code></td>
      <td>找到所有位于 “San Francisco, CA” 且和 tom 相关的用户</td>
    </tr>
    <tr>
      <td><code>join extension:coffee</code></td>
      <td>Find all instances of join in code with coffee extension.</td>
    </tr>
    <tr>
      <td><code>NOT cat</code></td>
      <td>排除所有包含 cat 的结果</td>
    </tr>
  </tbody>
</table>


## 搜索代码仓库

Repository search looks through the projects you have access to on GitHub. You can also filter the results:

你可以添加过滤条件：

<table>
  <thead>
    <tr>
      <th>示例</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>pugs pushed:&gt;2013-01-28</code></td>
      <td>Pugs 相关的仓库且最新代码提交时间在 2013-01-28 之后</td>
    </tr>
    <tr>
      <td><code>node.js forks:&lt;200</code></td>
      <td>所有 node.js 相关仓库且少于 200 forks.</td>
    </tr>
    <tr>
      <td><code>jquery size:1024..4089</code></td>
      <td>代码库的大小在 1024 和 4089 kB 之间的 jquery 相关仓库</td>
    </tr>
    <tr>
      <td><code>gitx fork:true</code></td>
      <td>Repository search includes forks of gitx.</td>
    </tr>
    <tr>
      <td><code>gitx fork:only</code></td>
      <td>Repository search returns only forks of gitx.</td>
    </tr>
  </tbody>
</table>


## 搜索代码

Code search looks through the files hosted on GitHub. You can also filter the results:

<table>
  <thead>
    <tr>
      <th>示例</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>install repo:charles/privaterepo</code></td>
      <td>Find all instances of install in code from the repository charles/privaterepo.</td>
    </tr>
    <tr>
      <td><code>shogun user:heroku</code></td>
      <td>Find references to shogun from all public heroku repositories.</td>
    </tr>
    <tr>
      <td><code>join extension:coffee</code></td>
      <td>Find all instances of join in code with coffee extension.</td>
    </tr>
    <tr>
      <td><code>system size:&gt;1000</code></td>
      <td>Find all instances of system in code of file size greater than 1000kbs.</td>
    </tr>
    <tr>
      <td><code>examples path:/docs/</code></td>
      <td>Find all examples in the path /docs/.</td>
    </tr>
    <tr>
      <td><code>replace fork:true</code></td>
      <td>Search replace in the source code of forks.</td>
    </tr>
  </tbody>
</table>

## 搜索 Issue

Issue search looks through issues and pull requests on GitHub. You can also filter the results:

<table>
  <thead>
    <tr>
      <th>示例</th>
      <th>Finds issues…</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>encoding user:heroku</code></td>
      <td>Encoding issues across the Heroku organization.</td>
    </tr>
    <tr>
      <td><code>cat is:open</code></td>
      <td>Find cat issues that are open.</td>
    </tr>
    <tr>
      <td><code>strange comments:&gt;42</code></td>
      <td>Issues with more than 42 comments.</td>
    </tr>
    <tr>
      <td><code>hard label:bug</code></td>
      <td>Hard issues labeled as a bug.</td>
    </tr>
    <tr>
      <td><code>author:mojombo</code></td>
      <td>All issues authored by mojombo.</td>
    </tr>
    <tr>
      <td><code>mentions:tpope</code></td>
      <td>All issues mentioning tpope.</td>
    </tr>
    <tr>
      <td><code>assignee:rtomayko</code></td>
      <td>All issues assigned to rtomayko.</td>
    </tr>
    <tr>
      <td><code>exception created:&gt;2012-12-31</code></td>
      <td>Created since the beginning of 2013.</td>
    </tr>
    <tr>
      <td><code>exception updated:&lt;2013-01-01</code></td>
      <td>Last updated before 2013.</td>
    </tr>
  </tbody>
</table>


## 搜索用户

User search finds users with an account on GitHub. You can also filter the results:

<table>
  <thead>
    <tr>
      <th>示例</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>fullname:"Linus Torvalds"</code></td>
      <td>Find users with the full name "Linus Torvalds".</td>
    </tr>
    <tr>
      <td><code>tom location:"San Francisco, CA"</code></td>
      <td>Find all tom users in "San Francisco, CA".</td>
    </tr>
    <tr>
      <td><code>chris followers:100..200</code></td>
      <td>找到 chris 相关的用户，并且 followers 数量在 100 到 200 之间</td>
    </tr>
    <tr>
      <td><code>ryan repos:&gt;10</code></td>
      <td>用户名和 ryan 相关的，且拥有超过 10 个仓库的用户</td>
    </tr>
  </tbody>
</table>


## 相关链接

+ [github 搜索页面](https://github.com/search)

+ [github 可视化高级搜索页面](https://github.com/search/advanced)

+ [github 搜索功能介绍](https://help.github.com/en/github/searching-for-information-on-github/about-searching-on-github)