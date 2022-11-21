<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <h2>{{$t("main.title")}}</h2>
      <router-link :to="{ name: 'playground' }">Playground</router-link>
    </div>
    <CoffeeListing />
  </div>
</template>

<script setup lang="ts">
import CoffeeListing from "@/components/CoffeeListing.vue";

</script>
