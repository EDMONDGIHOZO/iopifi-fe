<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">{{
        props.title
      }}</h1>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="props.path">
        <span class="text-gray-400">{{ props.title }}</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <span class="text-primary">{{ props.currentView }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import {ArrowRight} from '@element-plus/icons-vue';

const props = defineProps({
  title: String,
  path: String,
  currentView: String
})

</script>
