<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: 'Sagar Bartaula',
    role: 'Full Stack Developer at Brosoft Pvt. Ltd.',
    content: 'Delivered the project ahead of schedule with excellent quality. Highly recommended for Vue.js projects.',
    avatar: 'avatar2.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Ramji Subedi',
    role: 'Senior Full Stack Developer at Brosoft Pvt. Ltd.',
    content: 'Working with Prashuram was a pleasure. His attention to detail and problem-solving skills are exceptional.',
    avatar: 'avatar1.jpg',
    rating: 4
  },
  {
    id: 3,
    name: 'Mohan Niraula',
    role: 'Manager at Millennium Hostel',
    content: 'Prashuram is very professional and skilled. Explains complex concepts in a simple and understandable way.',
    avatar: 'avatar3.jpg',
    rating: 5
  }
])

const currentTestimonial = ref(0)

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length
}

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length
}
</script>

<template>
  <section id="testimonials" class="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">What People Say</h2>
      
      <div class="relative max-w-4xl mx-auto">
        <transition name="fade" mode="out-in">
          <div 
            v-if="testimonials[currentTestimonial]" 
            :key="testimonials[currentTestimonial].id"
            class="text-center px-4 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <!-- Stars -->
            <div class="flex justify-center space-x-1 text-yellow-400 mb-4">
              <i v-for="star in 5" :key="star" 
                 :class="star <= testimonials[currentTestimonial].rating ? 'fas fa-star scale-110 transition-transform duration-300' : 'far fa-star'"></i>
            </div>

            <!-- Content -->
            <p class="text-lg italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              "{{ testimonials[currentTestimonial].content }}"
            </p>

            <!-- Avatar + Name -->
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full overflow-hidden mb-3 border-4 border-indigo-200 dark:border-indigo-700">
                <img :src="`../assets/${testimonials[currentTestimonial].avatar}`" 
                     :alt="testimonials[currentTestimonial].name" 
                     class="w-full h-full object-cover">
              </div>
              <h4 class="text-xl font-semibold text-gray-800 dark:text-white">
                {{ testimonials[currentTestimonial].name }}
              </h4>
              <p class="text-gray-600 dark:text-gray-400">
                {{ testimonials[currentTestimonial].role }}
              </p>
            </div>
          </div>
        </transition>

        <!-- Navigation -->
        <button @click="prevTestimonial" 
                class="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-indigo-100 dark:hover:bg-indigo-900 transition">
          <i class="fas fa-chevron-left text-gray-800 dark:text-white"></i>
        </button>
        <button @click="nextTestimonial" 
                class="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-indigo-100 dark:hover:bg-indigo-900 transition">
          <i class="fas fa-chevron-right text-gray-800 dark:text-white"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
