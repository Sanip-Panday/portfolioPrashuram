<script setup>
const experiences = [
  {
    id: 1,
    year: '2022 - Present',
    company: 'Tech Solutions Inc.',
    role: 'Senior Frontend Developer',
    description: 'Leading the frontend team in building responsive web applications using Vue.js and React.',
    tags: ['Vue.js', 'React', 'TypeScript']
  },
  {
    id: 2,
    year: '2020 - 2022',
    company: 'Digital Creative Agency',
    role: 'Frontend Developer',
    description: 'Developed and maintained client websites with a focus on performance and accessibility.',
    tags: ['JavaScript', 'CSS', 'WordPress']
  }
]
</script>

<template>
  <section id="experience" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">My Journey</h2>
      
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-1/2 w-1 h-full bg-indigo-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
        
        <!-- Timeline items -->
        <div v-for="(exp, index) in experiences" :key="exp.id" 
             class="relative mb-12">
          <div :class="[
            'flex items-center justify-between w-full',
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          ]">
            <div :class="[
              'w-5/12 px-6 py-4 rounded-lg shadow-md',
              index % 2 === 0 ? 'bg-indigo-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
            ]">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ exp.role }}</h3>
              <h4 class="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{{ exp.company }}</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-3">{{ exp.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in exp.tags" :key="tag" 
                      class="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 text-xs font-medium rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <div class="w-1/12 flex justify-center">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white font-bold shadow-lg">
                {{ exp.year }}
              </div>
            </div>
            
            <div class="w-5/12"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>