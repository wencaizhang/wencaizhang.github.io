# 找到任意组件的实例

## vm.$options

任意的 vue 组件实例都有一个 `$options` 属性，这个属性包含了组件的自定义属性。

例如：自定义的 `customOption` 属性
```js
new Vue({
  customOption: 'foo',
  created: function () {
    console.log(this.$options.customOption) // => 'foo'
  }
})
```

另外，`vm.$parent` 和 `vm.$children` 分别是当前实例的父组件实例和直接子组件实例。

可参考 vue.js 官方文档中[实例属性](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7)章节。

## 由一个组件，向上找到最近的指定组件

```js
// 由一个组件，向上找到最近的指定组件
function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}
export { findComponentUpward };
```

## 由一个组件，向上找到所有的指定组件

```js
// 由一个组件，向上找到所有的指定组件
function findComponentsUpward(context, componentName) {
  let parents = [];
  const parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}
export { findComponentsUpward };
```

## 由一个组件，向下找到最近的指定组件

```js
// 由一个组件，向下找到最近的指定组件
function findComponentDownward(context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;

      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}
export { findComponentDownward };
```

## 由一个组件，向下找到所有指定的组件

```js
// 由一个组件，向下找到所有指定的组件
function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}
export { findComponentsDownward };
```

## 由一个组件，找到指定组件的兄弟组件

```js
// 由一个组件，找到指定组件的兄弟组件
function findBrothersComponents(context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  let index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
}
export { findBrothersComponents };
```

## 参考

[https://github.com/icarusion/vue-component-book](https://github.com/icarusion/vue-component-book/blob/master/src/utils/assist.js)