---
title: "闪耀你的div"
heading: "闪耀你的div"
date: '2021-01-27'
draft: false
type: "CSS"

---

想让你的网页可以 blingbling 地闪耀吗？



```css
.flash-wrap {
  position: relative;
  overflow: hidden;
}

.flash-wrap::after {
  content: "";
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  transform: skewx(-25deg);
  background-image:
    -webkit-linear-gradient(0deg, rgba(255, 255, 255, 0),
    rgba(255, 255, 255, .5),
    rgba(255, 255, 255, 0));
  z-index: 10;
}

.flash-wrap:hover::after {
  animation: flash 2s ease infinite;
  animation-delay: .5s;
}

@keyframes flash {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}
```

