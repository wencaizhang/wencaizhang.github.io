<template>
  <ul
    v-if="items.length"
    class="sidebar-links"
  >
    <li
      v-for="(item, i) in items"
      :key="i"
    >
      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="i === openGroupIndex"
        :collapsable="item.collapsable || item.collapsible"
        :depth="depth"
        @toggle="toggleGroup(i)"
      />
      <SidebarLink
        v-else
        :sidebar-depth="sidebarDepth"
        :item="item"
      />
    </li>
  </ul>
</template>

<script>
import SidebarGroup from '@theme/components/SidebarGroup.vue'
import SidebarLink from '@theme/components/SidebarLink.vue'
import { isActive } from '../util'

export default {
  name: 'SidebarLinks',

  components: { SidebarGroup, SidebarLink },
  props: {
    items: {
      type: Array,
      required: true,
    },
    depth: { // depth of current sidebar links
      type: Number,
      required: true,
    },
    sidebarDepth: { // depth of headers to be extracted
      type: Number,
      required: false,
      default: 2,
    },
  },

  data () {
    return {
      openGroupIndex: 0,
    }
  },

  watch: {
    '$route' () {
      this.refreshIndex()
    },
  },

  created () {
    this.refreshIndex()
  },

  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items,
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },

    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },

    isActive (page) {
      return isActive(this.$route, page.regularPath)
    },
  },
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => c.type === 'page' && isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>
