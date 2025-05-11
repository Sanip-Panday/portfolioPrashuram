<script setup>
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and checkout process.',
    tags: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    image: 'project1.jpg',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'project2.jpg',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my work and skills with smooth animations.',
    tags: ['Vue.js', 'GSAP', 'Tailwind CSS'],
    image: 'project3.jpg',
    link: '#'
  }
]
</script>

<template>
  <section id="projects" class="py-20 ">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title" 
             class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img class="h-48 w-full object-cover" :src="`../assets/${project.image}`" :alt="project.title">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag" 
                    class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                {{ tag }}
              </span>
            </div>
            <a :href="project.link" class="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>