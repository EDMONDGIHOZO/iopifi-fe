<template>
  <div class="bg-white w-full pt-10 md:w-[228px] min-h-screen bg-opacity-30 md:bg-opacity-100">
    <ul class="menu_container">
      <menu-item
          v-for="menu in menuItems" :key="menu.index"
          :icon-name="menu.icon"
          :title="menu.title"
          :path="menu.path"
      />
      <li>
        <hr style="border: 1px solid #F3F6F7;">
      </li>
      <menu-item
          icon-name="solar:headphones-round-linear"
          title="Support"
          path="/support"
      />
    </ul>
    <div class="pb-20 w-full text-center absolute bottom-0">
      <span class="text-center text-gray-400">© IOPifi Providers 2023</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuItem from "@/components/features/MenuItem.vue";
import type {MenuProps} from "@/types/ui";
import menuData from '../../utils/menu.json'

const menuItems: MenuProps[] = menuData

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style scoped>

</style>