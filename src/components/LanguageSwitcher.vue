<template>
  <select :value="$i18n.locale" @change="handleSwitchLocale">
    <option v-for="supportedLocale in supportedLocales" :value="supportedLocale">{{ $t(`nav.${supportedLocale}`) }}</option>
  </select>
</template>

<script setup lang="ts">
import { getSupportedLocale } from '@/i18n';
import i18n from '@/i18n'
import { ref } from 'vue'

const supportedLocales = ref(getSupportedLocale)

const handleSwitchLocale = (e: any) => {
  i18n.global.locale = e.target.value
  localStorage.setItem("setLocale", i18n.global.locale);
}

</script>

<style scoped>
select{
    border: none;
    padding: 0;
    color: inherit;
    font-size: 1rem;
}
</style>