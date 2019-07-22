# Vue.ls

[[toc]]

## Vue.ls 插件介绍

vue-ls 官网地址：[https://www.npmjs.com/package/vue-ls](https://www.npmjs.com/package/vue-ls)

vue-ls 是一款管理 localStorage, sesstionStorage 和 cookie 的 vue 插件。

这三者的 API 文档如下：

+ [Window.localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
+ [Window.sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)
+ [Document.cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)


vue-ls 的内部对这三中存储方式的 API 进行兼容处理，意义大致相当于 jQuery 兼容各个浏览器 API。

## 为什么要使用这款插件



## 如何使用

下面是安装/引入/调用三部曲：

#### 1. 安装

```bash
npm install vue-ls --save
```
或者

```bash
yarn add vue-ls
```

#### 2. 在 vue 中引入

```js
import Storage from 'vue-ls';
options = {
  namespace: 'vuejs__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
};
Vue.use(Storage, options);
//or
//Vue.use(Storage);
```

vue 调用 vue-ls 插件时，可以传入一个可选的 object 类型的配置参数 `options`，参数 `options` 有三个属性：

+ `namespace`: 命名空间，给储存的数据（key）增加前缀，可以避免和其他应用冲突
+ `name`: 指定插件对名称，如果有同名的插件存在，可以指定为其他的名字避免冲突
+ `storage`: 选择使用哪一种储存方式，有三个值可选：`session`, `local`, `memory`，分别对应 sessionStorage，localStorage，cookie


#### 3. API

vue-ls 有两种调用方式，可以使用 `Vue.ls` 全局调用，也可以使用 `this.$ls` 在组件内部调用。

下面以全局调用为例：

1. 存储数据

```js
Vue.ls.set(key, value, expire);
```

如果你使用过原生 localStorage 的 API 就知道 localStorage 只能存储字符串类型的值，因此需要我们手动进行格式转化，在存储时将其转化为字符串，然后在读取数据后再将字符串转为为 JSON 格式（JSON.stringify 和 JSON.parse() ）

现在使用 `Vue.ls` 存储和读取数据完全不需要考虑这个问题，插件内部已经帮我们做了处理。

`expire`: 过期时间，默认为 `null`，单位是毫秒。

2. 读取数据

```js
Vue.ls.get(key, def);
```

`def`:

3. 清空所有数据

```js
Vue.ls.clear();
```

清空所有数据，但是只会清空本项目储存的数据，也就是上面在 `options` 中设置过特定前缀的那些数据，不用担心误删其他不相关数据。

4. 移除指定数据

```js
Vue.ls.remove(key);
```

如果删除成功返回 `true`，否则返回 `false`。

5. 监听数据变化

```js
Vue.ls.on(key, callback);
```

监听 `key` 数据发生变化时，触发 `callback` `函数调用，callback` 有三个参数：

+ `newValue`: 改变后的新值
+ `oldValue`: 改变前的旧值
+ `url`: 发生数据变化的网页地址

6. 移除监听

```js
Vue.ls.off(key, callback);
```

移除通过 `Vue.ls.on` 进行监听的事件。
