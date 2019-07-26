<template>
  <section class="popup-area">
    <div class="text">Click Me!</div>
  </section>
</template>

<script>
import fnTextPopup from "./fnTextPopup.js";
export default {
  name: "",
  mounted() {
    fnTextPopup(document.querySelector(".popup-area"));
  }
};
</script>

<style>
.popup-area {
  background: #f2f2f2;
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
}
.popup-area .text {
  line-height: 200px;
  padding: 0;
  margin: 0;
}
.text-popup {
  position: absolute;
  z-index: 99;
  animation: textPopup 1s;
  color: red;
  user-select: none;
  white-space: nowrap;
}
@keyframes textPopup {
  0%,
  100% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
  }
}
</style>
