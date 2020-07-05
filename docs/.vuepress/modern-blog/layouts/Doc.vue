<template>
  <div id="vuperess-theme-blog__post-layout">
    <Toc />
    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        slot="top"
        name="sidebar-top"
      />
      <slot
        slot="bottom"
        name="sidebar-bottom"
      />
    </Sidebar>
    <main class="vuepress-blog-theme-content">
      <!-- <el-card
        body-style="padding: 1rem 2rem;"
        class="my-4"
      >
        <div>
          <h1 class="text-center text-capitalize">
            {{ $page.frontmatter.title || $page.title }}
          </h1>
          <hr>
          <p class="text-secondary">
            {{ $page.frontmatter.description }}
          </p>
          <ul class="languages-list">
            <li
              v-for="lang in $page.frontmatter.languages"
              :key="lang"
            >
              {{ lang }}
            </li>
          </ul>
        </div>
      </el-card> -->
      <el-card body-style="padding: 1rem 2rem;">
        <h1
          class=""
          style="margin: 1rem 0 2rem;"
        >
          {{ $page.frontmatter.title || $page.title }}
        </h1>
        <Content :key="$page.frontmatter.title" />
      </el-card>
    </main>
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
export default {
  name: 'IDoc',
  components: {
    Toc,
    Sidebar,
  },
  data () {
    return {
      isSidebarOpen: false,
    }
  },
  computed: {
    sidebarItems () {
      const data = resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath,
      )
      console.log('sidebarItems', data)
      return data
    },
  },
  created () {
    console.log(this)
  },
  mounted () {
    console.log(this)
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
  },
}
</script>

<style lang="stylus" scoped>
.languages-list {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  color: lighten($accentColor, 40%);
  font-family: monospace;

  li {
    padding: 0 5px;
  }
}
</style>
<style src="prismjs/themes/prism-okaidia.css"></style>
