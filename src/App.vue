<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyNavbar from './components/MyNavbar.vue'
</script>

<template>
  <div class="flex-col w-auto">
    <header>
      <div class="flex justify-center">
        <img alt="logo" src="@/assets/logo.svg" width="55" height="55" />
        <RouterLink to="/" class="text-2xl">Agility Training Diary</RouterLink>
      </div>
      <MyNavbar />
    </header>

    <RouterView />
  </div>
</template>
