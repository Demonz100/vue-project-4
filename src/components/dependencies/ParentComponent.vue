<template>
  <div>
    <h3>Parent: {{ parentValue }}</h3>
    <ChildComponent />
  </div>
</template>
  
<script setup lang="ts">
import { provide, ref } from "@vue/runtime-core";
import ChildComponent from "./ChildComponent.vue";

const parentValue = ref("Foo Bar")

provide('parentValue', parentValue)

</script>