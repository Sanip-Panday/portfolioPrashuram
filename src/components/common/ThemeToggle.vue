<script setup>
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
</script>

<template>
  <button 
    @click="theme.toggleTheme"
    class="p-2 rounded-full focus:outline-none"
    :class="theme.darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'"
  >
    <i v-if="theme.darkMode" class="fas fa-sun"></i>
    <i v-else class="fas fa-moon"></i>
    <span class="sr-only">Toggle theme</span>
  </button>
</template>