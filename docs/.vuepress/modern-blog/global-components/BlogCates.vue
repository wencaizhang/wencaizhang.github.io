<template>
  <el-card
    shadow="hover"
    :body-style="{ padding: '1rem' }"
  >
    <ul class="list-unstyled">
      <li
        v-for="item in list"
        :key="item.name"
        class="d-inline-block mx-2 my-2"
      >
        <el-badge
          :value="item.pages.length"
          class="item"
        >
          <router-link
            :to="{ path: item.path, hash: 'posts' }"
            class="el-button el-button--small text-decoration-none"
          >
            {{ item.name }}
          </router-link>
        </el-badge>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  name: 'BlogCates',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="stylus">
.el-badge__content {
  z-index: 10;
}
</style>
