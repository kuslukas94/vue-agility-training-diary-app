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

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'My Trainings', href: '/trainings' },
  { name: 'Add New Training', href: '/new-training' },
  { name: "Dog's Profile", href: '/dogs' },
  { name: 'Statistics & Progress', href: '/statistics' },
  { name: 'Settings', href: '/settings' },
  { name: 'Login/Registration', href: '/login' }
]
</script>

<template>
  <nav class="bg-white shadow-md z-50">
    <div class="sticky top-0">
      <div class="flex space-y-2 p-4 justify-center">
        <MenuButton :isOpen="isOpen" :toggleMenu="toggleMenu" />

        <!-- NAVIGATION ON DESKTOP-->
        <ul v-if="!isOpen" class="hidden md:flex space-x-8 w-screen">
          <li>
            <RouterLink
              v-for="(link, index) in links"
              :key="index"
              :to="link.href"
              class="hover:bg-green-100 p-4"
            >
              {{ link.name }}</RouterLink
            >
          </li>
        </ul>

        <!-- NAVIGATION SHOWN WHEN MENU OPENED ON MOBILE DEVICES-->
        <div v-if="isOpen" class="relative top-0 left-4 w-full bg-green-500 p-4 md:hidden">
          <ul class="space-y-2">
            <li>
              <RouterLink
                @click="closeMenu"
                v-for="(link, index) in links"
                :key="index"
                :to="link.href"
                class="block text-gray-800 hover:bg-gray-200 p-2"
                >{{ link.name }}</RouterLink
              >
            </li>
          </ul>

          <!-- CLOSE MENU BUTTON -->
          <CloseMenuButton @click="closeMenu" />
        </div>
      </div>
    </div>
  </nav>
</template>
