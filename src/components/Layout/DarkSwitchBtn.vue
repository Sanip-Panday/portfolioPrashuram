<template>
    <div class="light-dark">
      <button
        class="switch-toggle settings-btn dark-btn p-0 bg-transparent"
        @click="toggleTheme"
      >
        <span>
          <i class="material-symbols-outlined">{{ icon }}</i>
        </span>
      </button>
    </div>
  
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, watch } from "vue";
  import { useTheme } from "vuetify";
  
  export default defineComponent({
    name: "DarkSwitchBtn",
    setup() {
      const icon = ref("light_mode");
      const isDark = ref(true); // Control the dark mode toggle state
      const theme = useTheme(); // Vuetify theme instance
  
      // Toggle the theme between light and dark
      const toggleTheme = () => {
        // Toggle the dark mode value
        isDark.value = !isDark.value;
  
        // Update Vuetify's theme mode based on `isDark`
        theme.global.name.value = isDark.value ? "dark" : "light";
  
        // Update body class and localStorage
        if (isDark.value) {
          document.body.classList.add("dark-theme");
          icon.value = "dark_mode";
          localStorage.setItem("theme", "dark");
        } else {
          document.body.classList.remove("dark-theme");
          icon.value = "light_mode";
          localStorage.setItem("theme", "light");
        }
      };
  
      // Apply the theme on mounted based on localStorage
      onMounted(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
          document.body.classList.add("dark-theme");
          icon.value = "dark_mode";
          isDark.value = true;
          theme.global.name.value = "dark"; // Sync Vuetify theme
        }
      });
  
      return {
        icon,
        toggleTheme,
        isDark,
      };
    },
  });
  </script>
  