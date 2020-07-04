# axios 封装

## 拦截器

如果你想要在每次发送 ajax 请求或者收到 ajax 响应的时候进行一些处理，那么你可以使用 axios 请求拦截器和响应拦截器

#### 请求拦截器

```js
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
```

#### 响应拦截器

```js
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```
