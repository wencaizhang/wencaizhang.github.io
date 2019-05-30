<template>
  <div>
    <button @click="handleClickIsMobile" title="是否手机端浏览器">是否手机端浏览器</button>
    <button @click="handleClickIsWeChatBroswer" title="是否微信浏览器">是否微信浏览器</button>
    <button @click="handleViewUA" title="查看当前 userAgent ">查看当前 userAgent </button>
  </div>
</template>

<script>
export default {
  name: "isMobile",
  data() {
    return {};
  },
  methods: {
    isMobile() {
      // Android
      if (/android/i.test(navigator.userAgent)) {
        return true;
      }
      // iOS
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        return true;
      }
      return false;
    },
    isWeChatBroswer() {
      var ua = navigator.userAgent.toLowerCase();
      return /micromessenger/.test(ua);
    },

    handleClickIsMobile() {
      this.$alert.info({
        content: "是否手机端浏览器: " + this.isMobile(),
      });
    },
    handleClickIsWeChatBroswer() {
      this.$alert.info({
        content: "是否微信浏览器: " + this.isWeChatBroswer(),
      });
    },
    handleViewUA () {
      this.$alert.info({
        content: navigator.userAgent
      });
    }
  }
};
</script>

<style src='./styles/button.css'>
</style>