<template>
  <div id="vuperess-theme-blog__tags-layout">
    <BlogCates :list="$frontmatterKey.list" />
  </div>
</template>

<script>
export default {
  created () {
    console.log(this)
  },
}
</script>
