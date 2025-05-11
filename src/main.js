// import './assets/main.css'
import '@/assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
// import { createPinia } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'material-symbols'
const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
app.use(AOS.init())
import router from './router'

app.use(router).mount('#app')
// app.mount('#app');