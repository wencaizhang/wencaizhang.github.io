# vuex 状态管理

从使用的角度来看

- 存取状态
- 用户操作
- 异步请求

[toc]

## What is this

Vuex 是使用 vue 开发大型项目用来管理应用状态的一个很好的选择。

这里尽量不出现各种概念，只有一些很基本的使用方法，目的是可以让您在最短的时间内将 Vuex 使用起来。然后在使用的过程中，再去慢慢理解体会其中的设计理念。

## 使用

### 引入

#### 1. 安装

```bash
npm install vuex -D
```

#### 2. 创建实例

在 src 目录下创建 store 目录，然后新建 index.js，内容如下：

```js
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```

#### 3. 将状态从根组件“注入”到每一个子组件中

把上面创建的 store 对象提供给 vue 实例的 “store” 选项，这可以把 store 的实例注入所有的子组件，进而在所有的子组件中都可以通过 `this.$store` 访问到 store 对象。

```js
import Vue from 'vue'
import store from './store'

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
```

### 实战

#### 在子组件中访问 `store` 对象

```js
// ... some code
computed: {
    count () {
        return this.$store.state.count
    }
}
```

#### getter

Vuex 的状态存储是响应式的，读取状态最简单的方法就是在计算属性中返回某个状态。

如果不是简单返回某个状态，而是需要对某个状态做一些处理（派生出一些状态），恰好也有别的组件需要用到的时候，就可以用 `getter` 属性，相当于是 Vuex 的计算属性。


例如：`state` 中有数组 `todos`，现在要获取数组中 `done` 属性值为 `true` 的元素：

```js
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
        
        return state.todos.filter(todo => todo.done)
    }
  }
})
```

在子组件调用    
```js
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
```


## 一些链接

+ [Vuex 文档](https://vuex.vuejs.org/zh/guide/)