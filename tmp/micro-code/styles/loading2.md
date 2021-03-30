#  loading 2

仿 ant-design 的 `a-spin` 组件，效果如下：

<loading2 />

DOM 结构：

```html
<div id="loading-mask">
  <div class="loading-wrapper">
    <span class="loading-dot loading-dot-spin">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </span>
  </div>
</div>
```

对应样式：

```css
#loading-mask {
  position: relative;
  width: 300px;
  height: 300px;
  background: #fff;
  user-select: none;
  z-index: 9999;
  overflow: hidden;

  border: 1px solid #f2f2f2;
}

.loading-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loading-dot {
  animation: antRotate 1.2s infinite linear;
  transform: rotate(45deg);
  position: relative;
  display: inline-block;
  font-size: 64px;
  width: 64px;
  height: 64px;
  box-sizing: border-box;
}

.loading-dot i {
  width: 22px;
  height: 22px;
  position: absolute;
  display: block;
  background-color: #1890ff;
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
  animation: antSpinMove 1s infinite linear alternate;
}

.loading-dot i:nth-child(1) {
  top: 0;
  left: 0;
}

.loading-dot i:nth-child(2) {
  top: 0;
  right: 0;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.loading-dot i:nth-child(3) {
  right: 0;
  bottom: 0;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.loading-dot i:nth-child(4) {
  bottom: 0;
  left: 0;
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

@keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@-webkit-keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
</style>
```