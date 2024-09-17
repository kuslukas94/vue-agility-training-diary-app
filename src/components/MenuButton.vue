<script>
export default {
  props: {
    toggleMenu: {
      type: Function,
      required: true
    }
  }
}
</script>

<template>
  <button @click="toggleMenu" class="block md:hidden">
    <svg
      class="w-8 h-8 text-black"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
</template>
