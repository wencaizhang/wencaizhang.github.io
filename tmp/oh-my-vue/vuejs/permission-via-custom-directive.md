# 自定义指令实现按钮级权限控制

注册一个全局自定义指令 `v-permission`

（ps: 可以直接写在 main.js 中，也可以写到专门注册指令的文件里然后在 main.js 中引入）

```js
Vue.directive('permission', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted (el, binding) {
    const { value: roles } = binding;

    // getRole() 获取当前用户角色或者权限
    // 这里仅作示意，具体代码由开发者自行编写
    const currRoles = getRole();

    if (!Array.isArray(roles)) {
      throw new Error(`need roles! Like v-permission="['admin', 'editor']"`)
      return;
    }

    // 判断准入权限和当前权限是否有交集
    const hasPermission = hasroles.some(item => currRoles.includes(item))

    // 没有交集，证明当前权限不足，则删除当前 el
    !hasPermission && el.parentNode && el.parentNode.removeChild(el);
  }
})
```

使用方式：

```html
<button v-permission="['admin']">创建</button>
<button v-permission="['admin', 'editor']">编辑</button>
```

::: tip
`getRole()` 方法的返回值也应当和 `v-permission` 的绑定值保持相同格式: `['admin', 'editor']`
:::

## 参考

+ [官方文档 - 自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html)