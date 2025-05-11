<template>
  <button class="theme-toggle" @click="toggleTheme">
    <span class="material-symbols-outlined">{{ icon }}</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'


const icon = ref('dark_mode') // Default to dark mode icon
const isDark = ref(true) // Default to dark mode

// Toggle theme and save preference
const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
  savePreference()
}

// Apply the current theme to the document
const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    icon.value = 'dark_mode'
  } else {
    document.documentElement.classList.remove('dark')
    icon.value = 'light_mode'
  }
}

// Save preference to localStorage
const savePreference = () => {
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Initialize theme on mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // Default to user's preferred color scheme
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

</script>

<style>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.theme-toggle:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.dark .theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Material icon sizing */
.material-symbols-outlined {
  font-size: 24px;
  vertical-align: middle;
}

/* Global dark mode styles */
:root.dark {
  --bg-color: #121212;
  --text-color: #ffffff;
  /* Add other dark mode variables here */
}

:root {
  --bg-color: #ffffff;
  --text-color: #121212;
  /* Add other light mode variables here */
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}
</style>