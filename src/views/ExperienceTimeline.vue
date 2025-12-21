<script setup>
const experiences = [
  {
    id: 1,
    year: 'Mar 2024 – Present',
    company: 'Brosoft Pvt. Ltd.',
    role: 'Frontend Developer',
    description: 'Completed a 6-month internship (Mar 2024 – Aug 2024) and continued as full-time developer. Developed and maintained frontend components using JavaScript and Vue.js. Collaborated with team members on client-based projects.',
    tags: ['JavaScript', 'Vue.js', 'Frontend']
  },
  {
    id: 2,
    year: 'Apr 2024 – Present',
    company: 'Millennium Hostel',
    role: 'Teacher – Mathematics & Computer',
    description: 'Teaching Classes 8, 9, and 10 with simplified explanations and examples to improve student understanding.',
    tags: ['Teaching', 'Mathematics', 'Computer Science']
  }
]

const education = [
  {
    id: 1,
    year: '2019 – 2024',
    degree: 'Bachelor of Information Technology (BIT)',
    details: 'CGPA: 3.14 | 4-year program with 1-year extension due to COVID-19'
  },
  {
    id: 2,
    year: '2016 – 2018',
    degree: '+2 (Computer Science)',
    details: 'CGPA: 3.06'
  },
  {
    id: 3,
    year: 'Passed 2016',
    degree: 'SLC (Computer)',
    details: 'CGPA: 3.40'
  }
]
</script>
<template>
  <section id="experience" class="py-16 bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Experience & Education</h2>

      <!-- Experiences Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="exp in experiences" :key="exp.id" class="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ exp.role }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ exp.company }} | {{ exp.year }}</p>
          <p class="text-gray-600 dark:text-gray-300 mb-3 text-sm">{{ exp.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in exp.tags" :key="tag" class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full">{{ tag }}</span>
          </div>
        </div>

        <!-- Education Grid -->
        <div v-for="edu in education" :key="edu.id" class="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ edu.degree }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ edu.year }}</p>
          <p class="text-gray-600 dark:text-gray-300 mb-3 text-sm">{{ edu.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
