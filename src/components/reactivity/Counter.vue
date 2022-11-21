<template>
    <div>
        <h2>Reactivity</h2>
        <div class="card">
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <button @click="counter--">-</button>
                    <h3>{{ counter }}</h3>
                    <button @click="counter++">+</button>
                </div>
                <h3 v-if="message">Counter is over 10!</h3>
                <div class="d-flex align-items-center">
                    <h3>{{ counter }} x 2 = {{ multiply }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const counter = ref(0)
let message = ref(false)

const multiply = computed(() => counter.value * 2)

watch(counter, (prev, curr) => {
    if (prev > 10) { message = ref(true) }
    else message = ref(false)
})

</script>