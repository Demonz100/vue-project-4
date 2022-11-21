<template>
    <div>
        <h2>Dynamic Components and Keep Alive</h2>
        <div class="card">
            <div class="d-flex">
                <button @click="activeTab = TabA">Tab A</button>
                <button @click="activeTab = TabB">Tab B</button>
                <button @click="activeTab = TabC">Tab C</button>
            </div>
            <br>
            <keep-alive>
                <component :is="activeTab"/>
            </keep-alive>
            <br>
            <h4>Data in the input field persist because keepAlive has cache and prevent vue from create a new instance</h4>
        </div>

        <h2>Dependency Injection</h2>
        <div class="card">
            <ParentComponent />
        </div>

        <Counter />

        <h2>Teleport</h2>
        <div class="card">
            <AsyncModal />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { defineAsyncComponent } from "vue"

const Counter = defineAsyncComponent( () => import("@/components/reactivity/Counter.vue"))
const ParentComponent = defineAsyncComponent( ()=> import("@/components/dependencies/ParentComponent.vue"))
const AsyncModal = defineAsyncComponent( () => import("@/components/Modal.vue"))
const TabA = defineAsyncComponent( () => import("@/components/tabs/TabA.vue"))
const TabB = defineAsyncComponent( () => import("@/components/tabs/TabB.vue"))
const TabC = defineAsyncComponent( () => import("@/components/tabs/TabC.vue"))

const activeTab = ref(TabA)

</script>

<style>
.card {
    width: 100%;
    margin: 2rem 0;
    padding: 2rem;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

button{
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    cursor: pointer;
}
</style>