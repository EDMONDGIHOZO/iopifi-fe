<script setup lang="ts">
import {RouterView} from 'vue-router'
import TopBar from "@/components/layout/TopBar.vue";
import LeftMenu from "@/components/layout/LeftMenu.vue";
</script>

<template>
  <main>
    <top-bar/>
    <section>
      <left-menu/>
      <div class="content_wrapper">
        <RouterView/>
      </div>
    </section>
  </main>
</template>

