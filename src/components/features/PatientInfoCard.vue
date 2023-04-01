<template>
  <div class="white_container space-y-3">
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-2xl text-primary capitalize">Patient Information</h3>
      <span
          @click="$emit('onExpand')"
          class="cursor-pointer text-gray-400 hover:text-gray-500"
      >
        {{ expanded ? 'Collapse' : 'Expand' }}
      </span>
    </div>
    <div v-if="expanded" class="space-y-4">
      <div class="info_row">
        <h4>Patient's name</h4>
        <strong>John carl</strong>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="info_row">
          <h4>Patient's name</h4>
          <strong>John carl</strong>
        </div>
        <div class="info_row">
          <h4>City</h4>
          <strong>Los Angels</strong>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="info_row">
          <h4>State</h4>
          <strong>11301 W Olympic Blvd Ste 114</strong>
        </div>
        <div class="info_row">
          <h4>Zip code</h4>
          <strong>2320402</strong>
        </div>
      </div>
      <div class="info_row">
        <h4>Latest notes</h4>
        <strong>
          He uses cannabis by smoking, eating or inhaling a vaporized form of drug. Cannabis often precedes or is used
          along with other substances, such as alcohol.
        </strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'patient-info-card',
  props: ['expanded'],
  emits: ['onExpand'],

})


</script>

<style scoped>

</style>