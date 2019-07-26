<template>
  <input :value="value" @input="onInput" >
</template>

<script>
export default {
  props: [ 'value' ],
  methods: {
    onInput(e) {
      const v = e.target.value;
      this.$emit('input', v);
    }
  }
};
</script>
