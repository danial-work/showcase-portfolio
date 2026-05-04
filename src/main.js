// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import './assets/main.css'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import './assets/main.css' // Ensure Tailwind is imported here
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')