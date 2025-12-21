<script setup>
import Hero from '../components/sections/Hero.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
import ExperienceTimeline from './ExperienceTimeline.vue'
import Testimonials from './Testimonials.vue'
import Contact from './Contact.vue'
import ScrollToTop from '../components/common/ScrollToTop.vue'
</script>

<template>
  <div class="space-y-20">
    
    <Hero />
    <Skills />
    <ExperienceTimeline />
    <Projects />
    <Testimonials />
    <Contact />
    <ScrollToTop />
  </div>
</template>