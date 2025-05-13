<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const message = ref('');
const messageType = ref('');

// Method to send email
const submitForm = async () => {
  try {
    console.log('Form data:', form.value);
    const response = await axios.post('http://localhost:5000/v1/send-email', form.value);
    message.value = response.data.message;
    console.log('Response:', response.data.success);
    messageType.value = 'success';
    if (response.data.success) {
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    }
  } catch (error) {
    message.value = 'Failed to send email';
    messageType.value = 'error';
  }
};
</script>
<template>
  <section id="contact" class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Get In Touch</h2>
      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input v-model="form.name" type="text" id="name" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input v-model="form.email" type="email" id="email" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea v-model="form.message" id="message" rows="4" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"></textarea>
          </div>
          <div>
            <button type="submit"
              class="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>