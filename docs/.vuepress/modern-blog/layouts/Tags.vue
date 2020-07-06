<template>
  <div id="vuperess-theme-blog__tags-layout">
    <BlogTags :tags="$frontmatterKey.list" />
  </div>
</template>

<script>
export default {
  created () {
    console.log(this)
  },
}
</script>
