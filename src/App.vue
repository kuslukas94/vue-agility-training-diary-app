<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyNavbar from './components/MyNavbar.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="55" height="55" />

    <div class="wrapper">
      <RouterLink to="/">Agility Training Diary</RouterLink>
      <MyNavbar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
