<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import MenuButton from './MenuButton.vue'
import CloseMenuButton from './CloseMenuButton.vue'

//Mobile Device State
const isOpen = ref(false)

//Toggle Menu Function
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="flex flex-col space-y-2 p-4">
    <MenuButton :isOpen="isOpen" :toggleMenu="toggleMenu" />

    <!-- NAVIGATION HIDDEN ON MOBILE DEVICES -->
    <ul v-if="!isOpen" class="hidden md:flex space-x-2">
      <li>
        <RouterLink to="/dashboard" class="block hover:bg-green-100 p-2">Dashboard</RouterLink>
      </li>
      <li>
        <RouterLink to="/trainings" class="block hover:bg-green-100 p-2"
          >Training Records</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/new-training" class="block hover:bg-green-100 p-2"
          >Add New Training</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/dogs" class="block hover:bg-green-100 p-2">Dog Profile</RouterLink>
      </li>
      <li>
        <RouterLink to="/statistics" class="block hover:bg-green-100 p-2"
          >Statistics & Progress</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/settings" class="block hover:bg-green-100 p-2">Settings</RouterLink>
      </li>
      <li>
        <RouterLink to="/login" class="block hover:bg-green-100 p-2">Login/Registration</RouterLink>
      </li>
    </ul>

    <!-- NAVIGATION SHOWN WHEN MENU OPENED-->
    <div v-if="isOpen" class="absolute top-16 left-0 w-full bg-green-500 p-4 md:hidden">
      <ul class="space-y-4">
        <li>
          <RouterLink
            @click="closeMenu"
            to="/dashboard"
            class="block text-gray-800 hover:bg-gray-200 p-2"
            >Dashboard</RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="closeMenu"
            to="/trainings"
            class="block text-gray-800 hover:bg-gray-200 p-2"
            >Training Records</RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="closeMenu"
            to="/new-training"
            class="block text-gray-800 hover:bg-gray-200 p-2"
            >Add New Training</RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="closeMenu"
            to="/dogs"
            class="block text-gray-800 hover:bg-gray-200 p-2"
            >Dog Profile</RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="closeMenu"
            to="/statistics"
            class="block text-gray-800 hover:bg-gray-200 p-2"
            >Statistics & Progress</RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="closeMenu"
            to="/settings"
            class="block text-gray-800 hover:bg-gray-200 p-2"
            >Settings</RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="closeMenu"
            to="/login"
            class="block text-gray-800 hover:bg-gray-200 p-2"
            >Login/Registration</RouterLink
          >
        </li>
      </ul>

      <!-- CLOSE MENU BUTTON -->
      <CloseMenuButton @click="closeMenu" />
    </div>
  </nav>
</template>
