<template>
  <div class="white_container space-y-4">
    <h3 class="text-primary font-bold text-xl">Attendance</h3>
    <div class="flex justify-between items-center flex-wrap gap-3">
      <div class="flex items-center justify-between gap-8">
        <el-button class="border-none" size="large" :color="colors.primary" type="primary" plain>Today</el-button>
        <div class="flex items-center justify-between">
          <Icon class="w-6" icon="material-symbols:keyboard-arrow-left"/>
          <span>All days</span>
          <Icon class="w-6" icon="material-symbols:keyboard-arrow-right"/>
        </div>
      </div>
      <div>
        <el-button size="large" :color="colors.primary" type="primary" class="border-none" plain>Daily</el-button>
        <el-button size="large" :color="colors.primary" type="text" class="text-gray-400" plain>Weekly</el-button>
        <el-button size="large" :color="colors.primary" type="text" class="text-gray-400" plain>Monthly</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {colors} from "@/constants/colors";

export default defineComponent({
  name: 'attendance-table',
  computed: {
    colors() {
      return colors
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>