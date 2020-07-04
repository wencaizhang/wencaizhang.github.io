# 从 url 中获取参数

## 方法一：split

```js
function getParams () {
  var searchStr = window.location.search.split('?')[1]
  var params = {};
  searchStr.split('&').forEach(function(item) {
    var tempArr = item.split('=');
    params[ tempArr[0] ] = tempArr[1];
  });
  return params;
}
```

## 方法二：replace + regexp

先上代码：
```js
var querystring = window.location.search.slice(1);
parse(querystring);

function parse (querystring) {
    var querystring = querystring || '';
    var reg = /([^=&]+)=([^=&]*)/ig;
    var json = {};

    querystring.replace(reg, function (match, $1, $2) {
        json[$1] = $2
    })
    return json;
}
```

1. 利用字符串的 `replace` 方法，如果第一个参数是正则表达式， 并且其为全局匹配模式，同时第二个参数是一个函数，那么每次匹配到的时候，这个函数都会被调用。
1. 正则 `/([^=&]+)=([^=&]*)/ig` 的含义为，使用 `=` 连接，且 `=` 前后的字符串都不能以 `=` 或者 `&` 开头。

**function 参数含义：**

1. 匹配字符串
2. 正则表达式分组内容，没有分组则没有该参数
3. 匹配项在字符串中的 `index`
4. 原字符串

|      | `match`    | `$1`     | `$2`    | `index`   | `origin`         |
|---    | ---       | ---     | ---     |  ---    |  ---            |
| 第一次 | `ie=UTF-8`  | `ie`     | `UTF-8`  | `0`     | `ie=UTF-8&wd=regexp` |
| 第二次 | `wd=regexp` | `wd`     | `regexp` | `9`     | `ie=UTF-8&wd=regexp` |