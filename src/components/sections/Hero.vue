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
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Hi, I'm <span class="text-indigo-600">Your Name</span>
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
      <div class="md:w-1/2 mt-12 md:mt-0">
        <img src="@/assets/3.jpg" alt="Developer Illustration"  class="w-full rounded-md max-w-md mx-auto">
        <!-- <img src="../assets/hero-image.svg" alt="Developer Illustration" class="w-full max-w-md mx-auto"> -->
      </div>
    </div>
  </section>
</template>