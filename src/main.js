// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import './assets/main.css'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import { createGtm } from '@gtm-support/vue-gtm'
import './assets/main.css' // Ensure Tailwind is imported here
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(
  createGtm({
    id: 'GTM-MNV9GTJS', // Replace with your Container ID
    queryParams: {
      gtm_auth: '...',
      gtm_preview: '...',
      gtm_cookies_win: 'x',
    },
    defer: false, 
    compatibility: false, 
    enabled: true, 
    debug: true, // Set to false in production
    loadScript: true,
    vueRouter: router, // Automatically track route changes as virtual page views
    trackOnNextTick: false,
  })
)


app.use(router)
app.mount('#app')