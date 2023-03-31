<template>
  <div class="py-3 flex justify-between items-center shadow px-10 bg-white">
    <div class="md:px-10 text-center">
      <img
          class="h-8 w-auto"
          src="../../assets/images/brand/logo.svg" alt="logo">
    </div>
    <div class="flex justify-between items-center gap-8">
      <div class="bg-gray-100 w-8 h-8 rounded-full text-center flex items-center justify-center">
        <el-badge value="12" class="item">
          <el-icon size="16">
            <BellFilled/>
          </el-icon>
        </el-badge>
      </div>
      <div>
        <drop-down-with-avatar/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {ElBadge, ElIcon} from 'element-plus'
import {BellFilled} from "@element-plus/icons-vue";
import DropDownWithAvatar from "@/components/features/DropWithAvatar.vue";

export default defineComponent({
  name: 'top-bar',
  components: {
    DropDownWithAvatar,
    BellFilled,
    ElBadge,
    ElIcon
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
