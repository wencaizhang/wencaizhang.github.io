# v-model 语法糖

在 Vue.js 中可以使用 `v-model` 来实现表单元素的双向绑定。

以最简单的 input 为例，代码如下：

```html
<input v-model="message" placeholder="请输入...">
<p>input 内容是: {{ message }}</p>
```

```js
export default {
  data() {
    return {
      message: "msg"
    };
  }
};
```

效果：

<vue-vmodel-vmodel />

通过例子可以看到，data 选项的 message 属性值会自动出现在 input 中，而在 input 中输入的内容，也会自动绑定到 data 选项的 message 属性上。

## 先来双向绑定


这个语法糖对 `my-input` 组件有一些要求：

1. 这个组件应当接受一个 prop：`value`
2. 这个组件有一个自定义事件：`input`

`my-input` 组件代码如下：

```html
<input :value="value" @input="onInput" >
```

```js
export default {
  props: [ 'value' ],
  methods: {
    onInput(e) {
      const v = e.target.value;
      this.$emit('input', v);
    }
  }
};
```

效果如下：

<vue-vmodel-my-input-parent />


## v-model

事实上，v-model 双向绑定是一个语法糖，“语法糖”可以简单理解为快捷方式。

```html
<my-input v-model="value"></my-input>
```

相当于

```html
<my-input
  :value="value"
  @input="value = $event"
>
</my-input>
```
