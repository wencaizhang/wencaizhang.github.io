---
title: "Request Methods With Axios"
date: "2019-11-22T15:46:45+08:00"
draft: false
cover: ["https://static.webjam.cn/images/logos/axios.svg"]
tags:
  - ajax
  - axios
---

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

Axios 有以下特点：

+ 支持浏览器和node.js
+ 支持promise
+ 能拦截请求和响应
+ 能转换请求和响应数据
+ 能取消请求
+ 自动转换JSON数据
+ 浏览器端支持防止CSRF(跨站请求伪造)


axios 的详细使用都可以在 [https://github.com/axios/axios](https://github.com/axios/axios) 中看到，本文主要将在项目实践中如何进一步封装 axios ，使得 axios 更符合实际需求。


## 封装步骤

### 全局配置

全局配置是指配置 `baseURL` `timeout` 等选项。

全局配置会影响到每个请求，可以直接对 axios 配置，也可以创建 axios 的实例，对实例进行配置。

axios 和 axios 实例的区别就在于，axios 可以创建多个实例，不同实例之间的配置可以不同，并且不会影响到 axios 这个源头。

直接配置 axios：

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.timeout = 2000;
```

或者配置 axios 实例：

```js
import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  baseURL: "https://api.example.com",
  timeout: 2000, // 请求超时时间(单位：毫秒)
});
```


### 拦截器

axios 拦截器分为「请求拦截器」和「响应拦截器」，它们相当于是项目 http 请求的大门。

每次发送请求时要经过「请求拦截器」这道门，请求得到响应时也要经过「响应拦截器」这道门。

有了拦截器，方便我们对每个请求进行一些处理，比如：

1. 发送请求时，判断用户的登录状态或者用户权限，不满足条件的或者跳转登录页面或者弹窗提示
2. 发送请求时，添加特定的 headers
3. 请求得到响应时，根据响应状态码做不同处理：
   + 200: 响应成功
   + 404: 未找到资源
   + 409: 用户没有相应权限

```js
import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  baseURL: "https://api.example.com",
  timeout: 2000 // 请求超时时间(单位：毫秒)
});


// request 拦截器
request.interceptors.request.use(
  config => {
    // 设置 token，或者其他设置
    config.headers["token"] = 'token_123';
    return config;
  },
  err => {
    return Promise.reject(err)
  },
);

// response 拦截器
request.interceptors.response.use(
  resp => resp.data,
  error => {
    if (error.response) {
      const data = error.response.data;
      let msg = data.desc || data.exception || '';

      switch (error.response.status) {
        case 401:
          // 提示：登录过期，跳转登录页面重新登录
          break;
        case 403:
          // 提示：权限不足
          break;
        case 404:
          // 提示：资源不存在
          break;
        default:
          // 提示：请求失败
          break;
      }
    }
    return Promise.reject(error);
  }
);
```

### 封装各类型请求

这一步封装主要是为了统一 axios 中不同请求类型的参数要求。

以 POST 和 GET 为例，封装之前

```js
const payload = { ID: 12345 }

// get 请求，params 属性值是携带的参数
axios.get('/user', {
  params: payload
})
// post 请求
axios.post('/user', payload)
```

封装之后：

```js
const payload = { ID: 12345 }

GET('/user', payload)
POST('/user', payload)
```

封装之后，每种类型的请求方法都接受两个参数：url 和需要传递到服务端的数据 payload。

这里我封装了 `GET` `POST` `PUT` `DELETE` 四种方法，分别对应 `get` `post` `put` `delete` 类型的请求：

```js
export function GET (url, payload) {
  return request.get(url, {
    params: payload
  });
}

export function POST (url, payload) {
  return request.post(url, payload);
}

export function PUT (url, payload) {
  return request.put(url, payload);
}

export function DELETE (url, payload) {
  return request.delete(url, {
    data: payload
  });
}
```




使用方法：

```js
// 示例：
import { GET, POST, PUT, DELETE } from '@/utils/request.js'

const payload = { username: 'admin', password: '123456' }
POST('/login', payload)
  .then(resp => {
    // 请求成功
  })
  .catch(err => {
    // 请求失败
  })
  .finally {
    // 成功/失败都会执行这里代码
  }
```

## 其他

### post 请求数据格式

默认情况下，axios 中 post 请求的 `Content-Type` 字段对应的值是 `application/json` ，此时是以 json 格式向服务端发送数据。

如果想要以 `FormData` 形式发送数据，你可以这样解决

```js
import axios from "axios";
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  url,
  method: 'POST',
  data: qs.stringify(data),
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
};
axios(options);
```

那么前面对 POST 方法的封装也要进行修改：

```js
import qs from 'qs';
export function POST (url, payload) {
  const options = {
    url,
    method: 'POST',
    data: qs.stringify(data),
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  };
  return request(options);
}
```

疑问：
全局设置是否有效
// 设置 post 请求的 Content-Type
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


### 挂载到 vue 原型上

```js
import { GET, POST, PUT, DELETE } from '@/utils/request.js'
Vue.prototype.$http = {
  get: GET,
  post: POST,
  put: PUT,
  delete: DELETE
}
```

挂载到原型上之后，就可以在任意的 vue 组件内通过 vue 实例调用请求：

```js
this.$http.get('/user', { id: 123 })
```


## 完整代码

<details>

  <summary>
  完整的 request.js 代码在此，请点击展开完整代码
  </summary>


```js
// request.js
import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  baseURL: "https://api.example.com",
  timeout: 2000, // 请求超时时间(单位：毫秒)
});

// request 拦截器
request.interceptors.request.use(
  config => {
    // 设置 token，或者其他设置
    config.headers["token"] = 'token_123';
    return config;
  },
  err => {
    return Promise.reject(err)
  },
);

// response 拦截器
request.interceptors.response.use(
  resp => resp.data,
  error => {
    if (error.response) {
      const data = error.response.data;
      let msg = data.desc || data.exception || '';

      switch (error.response.status) {
        case 401:
          // 提示：登录过期，跳转登录页面重新登录
          break;
        case 403:
          // 提示：权限不足
          break;
        case 404:
          // 提示：资源不存在
          break;
        default:
          // 提示：请求失败
          break;
      }
    }
    return Promise.reject(error);
  }
);

export function GET (url, payload) {
  return request.get(url, {
    params: payload
  });
}

export function POST (url, payload) {
  return request.post(url, payload);
}

export function PUT (url, payload) {
  return request.put(url, payload);
}
export function PATCH (url, payload) {
  return request.patch(url, payload);
}

export function DELETE (url, payload) {
  return request.delete(url, {
    params: payload
  });
}
```
</details>



---

本文完，感谢阅读。:stuck_out_tongue_winking_eye: 