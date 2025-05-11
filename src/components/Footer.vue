<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>&copy; {{ year }} Your Name. All rights reserved.</p>
        </div>
        <div class="flex space-x-6">
          <a href="#" class="hover:text-indigo-400 transition duration-300">
            <span class="sr-only">GitHub</span>
            <i class="fab fa-github text-xl"></i>
          </a>
          <a href="#" class="hover:text-indigo-400 transition duration-300">
            <span class="sr-only">LinkedIn</span>
            <i class="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" class="hover:text-indigo-400 transition duration-300">
            <span class="sr-only">Twitter</span>
            <i class="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>