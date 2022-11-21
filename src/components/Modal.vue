<template>
    <div>
        <div>
            <button @click="showModal = true">Open Modal</button>
            <h4>The modal will be teleported to nest under the body tag</h4>
        </div>
        <teleport to="body">
            <div v-if="showModal == true" class="modal-container">
                <div class="modal">
                    <h2>This is a message to test out the modal</h2>
                    <br>
                    <button @click="showModal = false">Close Modal</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(false)
</script>

<style scoped>
.modal-container {
    background-color: rgba(0, 0, 0, 0.441);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.modal {
    background-color: white;
    padding: 2rem;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}
</style>