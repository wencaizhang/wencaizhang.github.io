# 组件通信

## this.$root

在 vue 项目中**跟组件**通常是 `src/App.vue`，在任意组件中都可以通过 `this.$root` 来访问 `App.vue` 的实例。


## this.$parent

在组件中通过 `this.$parent` 来访问父组件实例

## this.$refs

在组件中通过 `this.$refs` 得到一个对象，它包含了持有注册过 ref 特性的所有 DOM 元素和组件实例。

例如，有一个子组件 `<base-input>` 注册了 `ref` 特性

```html
<base-input ref="usernameInput"></base-input>
```

那么就可以使用 `this.$refs.usernameInput` 来访问这个子组件的实例

通过这个方法，我们可以对 DOM 元素进行操作（尽管不推荐，但是有时还是无法避免直接操作 DOM 元素）：

```html
<input ref="input">
```

这时候就可以通过 `this.$refs.input.focus()` 聚焦输入框。


::: danger
`$refs` 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 `$refs`
:::




## 依赖注入

祖先组件和子孙组件实例 provide/inject



#### API

假设有两个组件：parent.vue 和 child.vue，child 是 parent 的自组件：

```js
// parent.vue
export default {
  provide: {
    name: 'parent'
  }
}

// child.vue
export default {
  inject: ['name'],
  mounted () {
    console.log(this.name);  // parent
  }
}
```

可以看到，在 parent.vue 里设置了一个 provide: name，值为 `parent`，它的作用就是将 name 这个变量提供给它的所有子组件。而在 child.vue 中，通过 inject 注入了从 parent 组件中提供的 name 变量，那么在 child 组件中，就可以直接通过 `this.name` 访问这个变量了，它的值也是 `parent`。这就是 provide / inject API 最核心的用法。

注意：

> provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。

也就是说如果上例中 `name` 的值如果是引用类型( Object, Array)，那么它就是可响应的，如果是值类型(String, Number, Boolean)，则不可响应。

### 用途

Vue.js 中可以使用 vuex 来做状态管理，可以利用 provide/inject 来做全局状态管理。


## 属性 props
组件里定义的 props，都是单向数据流，也就是只能通过父级修改，组件自己不能修改 props 的值，只能修改定义在 data 里的数据，非要修改，也是通过后面介绍的自定义事件通知父级，由父级来修改。
## 自定义事件


## bus

```js
Vue.prototype.$bus = new Vue();
```

```js
this.$bus.$emit('add-todo', 'new todo');
```

```js
created () {
  this.$bus.$on('add-todo', this.addTodo);
},
methods: {
  addTodo (todo) {
    this.todos.push(todo);
  }
}

```

## 插槽 slot


