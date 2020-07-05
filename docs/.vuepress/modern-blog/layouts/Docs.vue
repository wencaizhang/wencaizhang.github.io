<template>
  <el-container>
    <el-main class="">
      <el-row
        :gutter="10"
        align="center"
        class="py-3"
      >
        <el-col
          v-for="key in Object.keys(docs)"
          :key="key"
          :sm="24"
          :md="12"
          style="margin-bottom: 20px;"
        >
          <h3>{{ key }}</h3>
          <el-col
            v-for="doc in docs[key]"
            :key="doc.name"
            :sm="24"
            :md="12"
          >
            <router-link
              :to="doc.path"
              class="text-decoration-none"
            >
              {{ doc.title }}
            </router-link>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'IDocs',
  computed: {
    docs () {
      const menu = {}
      this.$pagination._matchedPages.forEach(item => {
        const group = item.frontmatter.group
        menu[group] = menu[group] || []
        menu[group].push(item)
      })
      return menu
    },
  },
}
</script>

<style lang="stylus" scoped>
.el-container {
  max-width: 1100px;
  margin-right: auto !important;
  margin-left: auto !important;
  min-height: 80vh;

  .project-card.card {
    margin: .5rem;
    background: linear-gradient(45deg, darken($accentColor, 30%), darken($accentColor, 70%));
    color: lighten($accentColor, 80%);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
    transition: all 0.4s;

    a:hover {
      text-decoration: none;
    }

    &:hover {
      transform: scale(0.99);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    }

    .project-card--links a {
      color: $accentColor;

      &:hover {
        color: lighten($accentColor, 30%);
      }
    }

    .project-card-header {
      display: flex;
      margin-bottom: 1rem;
      justify-content: space-between;
      align-items: center;

      .project-icon {
        font-size: 3em;
        position: relative;
        top: 0.3rem;
        color: lighten($accentColor, 50%);
      }
    }

    p.project-description {
      color: lighten($accentColor, 60%);
      margin: 1.5rem auto;
    }

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
  }
}
</style>
