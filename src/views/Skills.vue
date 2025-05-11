
<script setup>
const skills = [
  { name: 'Vue.js', level: 90, color: 'bg-green-500 dark:bg-green-600' },
  { name: 'JavaScript', level: 85, color: 'bg-yellow-500 dark:bg-yellow-600' },
  { name: 'Tailwind CSS', level: 80, color: 'bg-blue-500 dark:bg-blue-600' },
  { name: 'React', level: 75, color: 'bg-blue-400 dark:bg-blue-500' },
  { name: 'Node.js', level: 70, color: 'bg-green-400 dark:bg-green-500' },
  { name: 'UI/UX Design', level: 65, color: 'bg-purple-500 dark:bg-purple-600' }
]
</script>

<template>
  <section id="skills" class="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        My Skills
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="skill in skills" :key="skill.name" class="mb-6">
          <div class="flex justify-between mb-1">
            <span class="text-lg font-medium text-gray-700 dark:text-gray-300">
              {{ skill.name }}
            </span>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
              {{ skill.level }}%
            </span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              :class="[skill.color, 'h-2.5 rounded-full transition-all duration-500']" 
              :style="{ width: `${skill.level}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>