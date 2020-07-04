# 按钮秒变 loading

<loading />

```css
/* 按钮loading */
.spin-loading {
  position: relative;
}

.spin-loading::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  /* center */

  width: 4px;
  height: 4px;
  content: '';

  -webkit-animation: spinZoom 1s steps(8) infinite;
  animation: spinZoom 1s steps(8) infinite;
  border-radius: 100%;
  box-shadow:
    0 -10px 0 1px currentColor,
    10px 0 currentColor,
    0 10px currentColor,
    -10px 0 currentColor,
    -7px -7px 0 .5px currentColor,
    7px -7px 0 1.5px currentColor,
    7px 7px currentColor,
    -7px 7px currentColor;
}

/* loading动画 */
@-webkit-keyframes spinZoom {
  0% {
    -webkit-transform: scale(.75) rotate(0);
  }

  100% {
    -webkit-transform: scale(.75) rotate(360deg);
  }
}

@keyframes spinZoom {
  0% {
    transform: scale(.75) rotate(0);
  }

  100% {
    transform: scale(.75) rotate(360deg);
  }
}
```