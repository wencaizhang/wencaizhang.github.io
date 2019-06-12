# Vue.js 中 v-show 与 v-if 区别

## 区别

问：v-show与 v-if 有什么区别？

答：v-show只是 CSS 级别的 display: none; 和 display: block; 之间的切换，而 v-if 决定是否会渲染代码块的内容（或组件）

## 使用时机

问：什么时候用 v-show，什么时候用 v-if ？

答：频繁操作时，使用 v-show，一次性渲染完的，使用 v-if 。

## 性能

问：什么时候用 v-show，什么时候用 v-if ？

答：频繁操作时，使用 v-show，一次性渲染完的，使用 v-if 。

## slot

问：slot 的显示隐藏控制应该用 v-show 还是 v-if ？

答：应该用 v-if。因为前面说过了，v-show 仅仅是 CSS 级别的 display: none; 和 display: block; 之间的切换，而 slot 是类似与 template 的抽象元素，而非真是的元素，并不具备 display 这个属性。