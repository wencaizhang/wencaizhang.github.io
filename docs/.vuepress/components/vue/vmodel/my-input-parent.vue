<template>
  <div class="box">
    <my-input :value="value" @input="value = $event"/>
    <p>{{value}}</p>
  </div>
</template>

<script>
import myInput from "./my-input";
export default {
  components: {
    myInput
  },
  data() {
    return {
      value: ""
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
