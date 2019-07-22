## vuex 状态持久化（本地化）—— `vuex-persistedstate`

### 安装

```sh
$ npm install vuex-persistedstate
```

### 使用

```js
import createPersistedState from "vuex-persistedstate";

const store = new Vuex.Store({
  // ...
  plugins: [createPersistedState()]
});
```

### API

**`createPersistedState([options])`**：通过配置选项创建实例。

你可以通过下面给出的选项配置你需要的插件实例：

`key <String>`: The key to store the persisted state under. (default: vuex)

`paths <Array>`: An array of any paths to partially persist the state. If no paths are given, the complete state is persisted. (default: [])

`reducer <Function>`: A function that will be called to reduce the state to persist based on the given paths. Defaults to include the values.

`subscriber <Function>`: A function called to setup mutation subscription. Defaults to store => handler => store.subscribe(handler)

`storage <Object>`: Instead for (or in combination with) getState and setState. Defaults to localStorage.

`getState <Function>`: A function that will be called to rehydrate a previously persisted state. Defaults to using storage.

`setState <Function>`: A function that will be called to persist the given state. Defaults to using storage.

`filter <Function>`: A function that will be called to filter any mutations which will trigger setState on storage eventually. Defaults to `() => true`

`arrayMerger <Function>`: A function for merging arrays when rehydrating state. Defaults to function (store, saved) { return saved } (saved state replaces supplied state).


### 自定义

如果你不想在 `localStorage` 中储存 Vuex 的状态，你可以轻松地使用 [cookies](https://github.com/js-cookie/js-cookie) 实现这个功能（或任何其他你可以想到的）：

```js
import { Store } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

const store = new Store({
  // ...
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});
```

实际上，`storage` 可以传递任何遵循存储协议（`getItem`，`setItem`，`removeItem`等）的对象:

```js
createPersistedState({ storage: window.sessionStorage });
```

你可以在这里传入一个 [dom-storage](https://github.com/js-cookie/js-cookie) 的实例，当这个插件与服务器端渲染结合使用时非常有用。