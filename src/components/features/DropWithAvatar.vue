<template>
  <div class="flex flex-wrap items-center">
    <div>
      <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <el-dropdown>
      <el-button type="text" class="text-gray-700">
        Michael james
        <el-icon class="el-icon--right">
          <arrow-down/>
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import {ArrowDown} from '@element-plus/icons-vue'
import {defineComponent} from 'vue'
import {ElDropdownMenu} from 'element-plus'

export default defineComponent({
  name: 'drop-down-with-avatar',
  components: {
    ArrowDown,
    ElDropdownMenu
  },
  methods: {
    handleClick() {
      alert('button click')
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
}

.el-avatar {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.el-dropdown-menu {
  background-color: #f5f5f5;
}
</style>
