<template>
  <div>
    <h5>GrandChild: {{ grandParentValue }}</h5>
  </div>
</template>
  
<script setup lang="ts">
import { inject } from "@vue/runtime-core";

const grandParentValue = inject('parentValue')
</script>