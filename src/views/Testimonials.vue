<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO at Company',
    content: 'Working with this developer was a pleasure. Their attention to detail and problem-solving skills are exceptional.',
    avatar: 'avatar1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager',
    content: 'Delivered the project ahead of schedule with excellent quality. Highly recommended for Vue.js projects.',
    avatar: 'avatar2.jpg',
    rating: 4
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
  <section id="testimonials" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">What People Say</h2>
      
      <div class="relative max-w-3xl mx-auto">
        <transition-group name="fade" mode="out-in">
          <div v-for="(testimonial, index) in testimonials" 
               :key="testimonial.id"
               v-show="currentTestimonial === index"
               class="text-center px-4">
            <div class="mb-6">
              <div class="flex justify-center space-x-1 text-yellow-400 mb-4">
                <i v-for="star in 5" :key="star" 
                   :class="star <= testimonial.rating ? 'fas fa-star' : 'far fa-star'"></i>
              </div>
              <p class="text-lg italic text-gray-600 dark:text-gray-300 mb-6">
                "{{ testimonial.content }}"
              </p>
              <div>
                <img :src="`../assets/${testimonial.avatar}`" 
                     :alt="testimonial.name"
                     class="w-16 h-16 rounded-full mx-auto mb-2">
                <h4 class="text-xl font-semibold text-gray-800 dark:text-white">
                  {{ testimonial.name }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
          </div>
        </transition-group>

        <button @click="prevTestimonial" 
                class="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button @click="nextTestimonial" 
                class="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>