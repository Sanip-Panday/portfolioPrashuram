<script setup>
import { ref } from "vue";
import ThemeToggle from "../components/common/ThemeToggle.vue";

const isOpen = ref(false);
const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
    <div class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold text-gray-800 dark:text-white">
          <span class="text-indigo-600 dark:text-indigo-400">Profile</span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
          >
            {{ item.name }}
          </router-link>

          <div class="flex items-center space-x-4 ml-4">
            <ThemeToggle />
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <ThemeToggle />
          <button
            @click="isOpen = !isOpen"
            class="ml-4 text-gray-500 dark:text-gray-400 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden mt-4">
        <div class="flex flex-col space-y-2">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
            @click="isOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>