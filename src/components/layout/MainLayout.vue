<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <top-bar/>
    <div class="flex">
      <left-menu v-if="showSidebar"/>
      <div class="p-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {ElButton} from "element-plus";
import TopBar from "@/components/layout/TopBar.vue";
import LeftMenu from "@/components/layout/LeftMenu.vue";
export default {
  name: 'MainLayout',
  components: {
    LeftMenu,
    TopBar,
    ElButton
  },
  data() {
    return {
      showSidebar: true,
      activeIndex: '1'
    }
  }
}
</script>