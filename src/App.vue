<template>
  <div>
    <Navigation />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'

</script>

<style>
main{
  padding: 2rem 0;
}
</style>