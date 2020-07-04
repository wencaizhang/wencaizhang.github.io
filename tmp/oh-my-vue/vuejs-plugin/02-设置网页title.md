
# 动态设置网页 title

单页面应用的一个问题就是网页 title 无法随着路由而变化，这里我们使用 `vue-wechat-title` 解决这个问题。

#### 安装：

```sh
npm install vue-wechat-title --save
```

#### 引用
```js
import vueRouter from "vue-router"
import VueWechatTitle from 'vue-wechat-title'

Vue.use(VueWechatTitle)
Vue.use(vueRouter)
```

#### 调用

```js
<router-view v-wechat-title='$route.meta.title'></router-view>
```


#### 给每个路由设置 title

```js
{
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
        title: '已有账号？请登录'
    }
},
{
    path: '/forget',
    name: 'forget',
    component: Forget,
    meta: {
        title: '找回密码'
    }
}
```