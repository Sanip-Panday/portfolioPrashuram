<script setup>
const socialLinks = [
  { name: 'GitHub', icon: 'github', url: '#' },
  { name: 'LinkedIn', icon: 'linkedin', url: '#' },
  { name: 'Twitter', icon: 'twitter', url: '#' }
]
</script>

<template>
  <section class="py-20">
    
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
      
      <div class="md:w-1/2">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 rounded-3xl blur-3xl opacity-40"></div>

        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Hi, I'm <span class="text-indigo-600">Prashuram Pandey</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mt-4">
          A passionate Frontend Developer creating beautiful, responsive web applications.
        </p>
        <div class="mt-8">
          <a href="#contact" class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
            Contact Me
          </a>
        </div>
        <div class="flex mt-8 space-x-4">
          <!-- <a v-for="link in socialLinks" :key="link.name" :href="link.url" 
             class="text-gray-600 hover:text-indigo-600 transition duration-300">
            <span class="sr-only">{{ link.name }}</span>
            <i class="fab fa-{{ link.icon }} text-2xl"></i>
          </a> -->
          <router-link
           v-for="link in socialLinks" :key="link.name"
            :to="link.url"
            class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
          >
          <span class="sr-only">{{ link.name }}</span>
          <i class="fab fa-{{ link.icon }} text-2xl"></i>
          </router-link>
        </div>
      </div>
      <!-- <div class="md:w-1/2 mt-12 md:mt-0">
        <img src="@/assets/PRASHURAM.jpg" alt="Developer Illustration"  class="w-full rounded-md max-w-md mx-auto">
      </div> -->
      <!-- <div class="md:w-1/2 mt-12 md:mt-0 flex justify-center">
  <img 
    src="@/assets/PRASHURAM.jpg" 
    alt="Developer Illustration"
    class="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white filter saturate-125 contrast-110 sepia-10 hover:scale-105 transition-transform duration-500"
  >
</div> -->
<div class="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
  <!-- Glowing Background -->

  <!-- Image Frame -->
  <!-- <div class="relative z-10 p-4 bg-white rounded-3xl shadow-2xl"> -->
    <img 
      src="@/assets/PRASHURAM.jpg" 
      alt="Developer Illustration"
      class="w-full max-w-md rounded-2xl shadow-xl filter saturate-150 contrast-120 brightness-105 hover:scale-105 hover:rotate-1 transition-all duration-700"
    >
  <!-- </div> -->
</div>


    </div>
  </section>
</template>