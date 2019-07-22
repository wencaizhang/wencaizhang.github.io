# header 和 footer 组件化

我们在建设网站时总会遇到这样的问题：在大部分的页面我们需要显示 header 和 footer，分别用于展示网站 logo、顶部导航和底部版权信息等内容。

在 vue 项目中我们可以将 header 和 footer 单独抽取为两个组件，然后在每个路由对应的组件中分别引入 header 和 footer 。

这种方法相对来说已经很简洁了，但是仍然存在一些问题，即重复代码太多（需要重复的引入 header 和 footer，然后在 template 中进行渲染）。

> Don't repeat youself.

这里有另外一种更加简单的方式，其关键思路是利用 vue-router 的命名视图来解决这个问题。（vue-router 命名视图：[文档地址](https://router.vuejs.org/zh/guide/essentials/named-views.html)）

下面是一个简单示例：

在 App.vue 中创建三个视图（`router-view`)，它们有不同的 `name` 属性，如果没有则默认为 `default`。

```html
<template>
  <div id="app">
    <router-view name='header'></router-view>
    <router-view ></router-view>
    <router-view name='footer'></router-view>
  </div>
</template>
```

在路由文件 router.js 中进行路由设置，在 `components` 属性中分别为上面三个视图传入不同的组件。

`components` 是一个 Object，它的每个键分别对应着 App.vue 中的三个视图的 `name` 值，它的属性值是一个组件，会被渲染到相应的视图中。

例如在路由 home 下，三个路由视图分别由 `Header` ，`Home` ， `Footer` 三个组件渲染。

如果某个页面不需要渲染 header 和 footer ，则无需理会 header 视图和 footer 视图，也就是说不需要给 `components` 的 `header` 属性和 `footer` 属性设置属性值。甚至可以用更简洁的写法，使用 `component` 替换掉 `components` （注意 `s` ）。

例如路由 login 中的 `component: Login` 。

```js
import Header from "../components/Header"
import Footer from "../components/Footer"

import Home from "../pages/Home"
import Login from "../pages/Login"

export default [
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      header: Header,
      footer: Footer
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]
```