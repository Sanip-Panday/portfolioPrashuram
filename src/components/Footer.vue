<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>&copy; {{ year }} Prashuram Pandey. All rights reserved.</p>
        </div>
        <div class="flex space-x-6">
          <a href="https://github.com/Sanip-Panday" class="hover:text-indigo-400 transition duration-300">
            <span class="sr-only">GitHub</span>
            <i class="fab fa-github text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/prashuram-pandey-91b684274/" class="hover:text-indigo-400 transition duration-300">
            <span class="sr-only">LinkedIn</span>
            <i class="fab fa-linkedin text-xl"></i>
          </a>
          <a href="https://www.facebook.com/prashuram.pandey.433546/" class="hover:text-indigo-400 transition duration-300">
            <span class="sr-only">Facebook</span>
            <i class="fab fa-facebook text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>