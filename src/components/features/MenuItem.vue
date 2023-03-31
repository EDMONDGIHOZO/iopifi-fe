<template>
  <li
      :class="pageTitle === cleanPath(path) ? 'menu_item_active' : 'menu_item'"
      @click="handleNavigation"
  >
    <Icon :icon="iconName"/>
    <span>{{ title }}</span>
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'menu-item',
  props: {
    iconName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  methods: {
    handleNavigation: function () {
      console.log(this.path)
      this.$router.push(this.path)
    },
    cleanPath: function (path: string) {
      if (path === '/') {
        return 'dashboard'
      } else {
        return path.replaceAll('/', '')
      }
    }
  },
  computed: {
    pageTitle(this: any) {
      return this.$route.meta.title || this.$route.name
    },
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>e