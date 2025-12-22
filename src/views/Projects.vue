<script setup>
  import emailNodeImg from '@/assets/email.png'
  import chatapp from '@/assets/chatappl.jpg'
  import ecom from '@/assets/ecom.jpg'
  
  // import chatAppImg from '../assets/chat-app.jpg'
const projects = [
 
  {
    title: 'Node Email Project',
    description: 'A Node.js project to send emails and save records in MongoDB using Nodemailer.',
    tags: ['Node.js', 'MongoDB', 'Nodemailer'],
    image: emailNodeImg,
    link: './projects/NodeEmail/index.html' // relative link to your Node Email project HTML
  },
   {
    title: 'Chat Application',
    description: 'A private real-time chat application built using MEVN stack (MongoDB, Express, Vue.js, Node.js).',
    tags: ['MEVN', 'Node.js', 'MongoDB', 'Vue.js'],
    image: chatapp, // put a screenshot of your chat app in assets
    link: './projects/NodeEmail/index.html'
  },
   {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and checkout process.',
    tags: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    image: ecom,
    link: './projects/NodeEmail/index.html'
  },
]
</script>

<template>
  <section id="projects" class="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <img 
            class="h-48 w-full object-cover" 
            :src="project.image" 
            :alt="project.title"
          >
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            <a 
              :href="project.link" 
              class="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition duration-300"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>