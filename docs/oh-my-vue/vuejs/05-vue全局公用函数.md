# 设置全局公用函数

如果你需要让一个工具函数在每个组件可用，可以把方法挂载到 `Vue.prototype` 上。

你可以选择挂载到 `Vue` 上，但是这样就需要在使用之前 `import Vue form 'vue'`，而挂载到 `prototype` 上是为了方便组件内直接用 `this.$fn` 来使用（`$fn` 即挂载的全局函数）。

你也可以直接用 `Vue.prototype.$fn`，这样同样可以全局使用，不过在组件内就需要再 `import` 一次 `Vue` 了。

*参考：[vue 全局公用函数](https://doc.vux.li/zh-CN/development/vue-global-method.html)*

## 注册函数

> 一般建议函数名使用 $ 前缀。像 vue-router 的 $route 和 $router。

入口文件 `main.js` 中：

```js
Vue.prototype.$fn = function () {}
```

## 组件中使用

```js
export default {
  created () {
    this.$fn()
  }
}
```

## 应用实例

可以将全局提示、loading等常用功能挂载到全局方便调用，可参考 [element-ui的message组件](http://element-cn.eleme.io/#/zh-CN/component/message#quan-ju-fang-fa)