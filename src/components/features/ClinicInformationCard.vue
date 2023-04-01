<template>
  <div class="white_container space-y-3">
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-2xl text-primary capitalize">Clinic Information</h3>
      <span
          @click="$emit('onExpand')"
          class="cursor-pointer text-gray-400 hover:text-gray-500"
      >
        {{ expanded ? 'Collapse' : 'Expand' }}
      </span>
    </div>
    <div v-if="expanded">
      <div class="info_row">
        <h4>Clinic's name</h4>
        <strong>Downtown home care</strong>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="info_row">
          <h4>Address</h4>
          <strong>11301 W Olympic Blvd Ste 114</strong>
        </div>
        <div class="info_row">
          <h4>City</h4>
          <strong>Los Angels</strong>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="info_row">
          <h4>State</h4>
          <strong>California</strong>
        </div>
        <div class="info_row">
          <h4>Zip code</h4>
          <strong>5600</strong>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="info_row">
          <h4>Phone number</h4>
          <strong>+1 (310)-222-8763</strong>
        </div>
        <div class="info_row">
          <h4>Email</h4>
          <strong>email@email.com</strong>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'clinic-info-card',
  props: ['expanded'],
  emits: ['on-expand'],
  method: {
    handleExpansion() {
      this.$emit('on-expand')
    }
  }
})

</script>
