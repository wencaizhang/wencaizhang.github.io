<template>
  <div>
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
export default {
  // created () {
  //   console.log(this)
  // },
}
</script>
