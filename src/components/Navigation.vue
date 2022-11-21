<template>
  <header>
    <div class="d-flex align-items-center">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
        <h2>{{$t("nav.title")}}</h2>
    </div>

    <div class="d-flex align-items-center">
        <router-link :to="{name: 'home'}">{{$t("nav.home")}}</router-link>
        <router-link :to="{name: 'about'}">{{$t("nav.about")}}</router-link>

        <LanguageSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue"

</script>

<style>
header{
    display: flex;
    justify-content: space-between;
}
header a{
    color: inherit;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 0 0.5rem;
}
</style>