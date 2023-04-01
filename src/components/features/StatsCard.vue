<template>
  <div>
    <div>
      <p class="text-gray-400">{{props.title}}</p>
      <div>
          <span class="font-bold text-2xl">
            {{ props.value}}
          </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  value: String
})

</script>