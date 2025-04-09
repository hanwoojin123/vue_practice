import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/styles/common.css'
import './assets/styles/reset.css'
import './assets/styles/font.css'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
