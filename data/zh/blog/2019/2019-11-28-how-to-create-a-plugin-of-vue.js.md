---
title: "如何创建一个 Vue.js 插件"
date: "2019-11-28T15:39:43+08:00"
draft: false
cover: ["https://static.webjam.cn/images/logos/vue.svg"]
tags:
  - vue.js
  - plugin
---


## Vue.js 插件介绍

Vue.js 插件以一种更优雅的方式来为 Vue 添加全局功能。

插件的使用方法很简单，只需要在 `new Vue()` 之前通过 Vue.js 提供的 `use` 方法来注册（启用）插件即可：

```js
import MyPlugin from "MyPlugin";

// 要在 new Vue() 之前调用 use 方法
Vue.use(MyPlugin)
// 也可以传入一个可选的选项对象
Vue.use(MyPlugin, { someOption: true })
```

## 如何自己开发一个插件

上面讲到，通过 `Vue.use` 方法来注册插件， `Vue.use` 方法接收两个参数，第一个是插件，第二个是一个可选的选项对象

```js
Vue.use(MyPlugin, { someOption: true })
```

而 `Vue.use` 方法执行时是调用由 `MyPlugin` 提供的 `install` 方法，因此上面代码相当于：

```js
MyPlugin.install(Vue, { someOption: true })
```

`install` 方法接收两个参数，`Vue` 构造函数和调用插件时传入的可选的选项对象。

因此，只要是一个向外暴露 `install` 方法的模块，就可以作为 Vue 的插件，例如：

```js
// MyPlugin.js
MyPlugin.install = function (Vue, options) {
  console.log('hello, MyPlugin');
}
export default MyPlugin;
```

这便是一个最简单的 Vue.js 插件了。

当然，我们开发插件不可能只是为了打印一句话，而是有更重要的使命等待我们去完成，因为 `install` 方法第一个参数是 `Vue` 构造函数，所以你可以围绕着 `Vue` 来扩展更多更强大的功能，另外 `install` 第二个参数可以接收一个配置选项对象，这样可以使你提供的功能更加灵活更具有可配置性。

```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

ps: 有的同学担心插件会被多次注册，其实 `Vue.use` 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。

## live demos

我们常见的库 [Element UI](https://element.eleme.cn/#/zh-CN/component/quickstart#wan-zheng-yin-ru) 也是以插件形式引入，而且组件库内部的单个组件也都是插件形式存在，如 [ElButton](https://github.com/ElemeFE/element/blob/dev/packages/button/index.js)

另外，[awesome-vue](https://github.com/vuejs/awesome-vue#components--libraries) 集合了大量由社区贡献的插件和库，有兴趣的同学可以自行研究学习。

## 相关链接


+ [Element UI 文档](https://element.eleme.cn/#/zh-CN/component/quickstart#wan-zheng-yin-ru)
+ [Element UI 源码](https://github.com/ElemeFE/element)
+ [插件 - Vue.js 文档](https://cn.vuejs.org/v2/guide/plugins.html)


---

本文完，感谢阅读。:stuck_out_tongue_winking_eye: 