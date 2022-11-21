<template>
  <div class="cards">
    <Coffee v-for="coffee in coffees" :key="coffee" :coffee="coffee" />
  </div>
</template>

<script setup lang="ts">
import { useCoffeeStore } from "@/stores/coffeeStore"
import Coffee from '@/components/Coffee.vue'

const coffeeStore = useCoffeeStore()

coffeeStore.getCoffees()

const coffees = coffeeStore.coffees

</script>

<style scoped>
.cards {
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>