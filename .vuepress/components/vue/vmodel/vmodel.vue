<template>
  <div class="box">
    <input v-model="message" placeholder="请输入...">
    <p>input 内容是: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "msg"
    };
  }
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.box {
  border: 1px solid #f2f2f2;
  background-color: #f2f2f2;
  padding: 10px;
  margin: 10px 0;
}
</style>
