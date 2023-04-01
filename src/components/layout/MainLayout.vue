<template>
  <div class="flex flex-col h-screen">
    <top-bar/>
    <div class="block md:flex">
      <left-menu v-if="showSidebar"/>
      <div class="p-12 w-full">
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