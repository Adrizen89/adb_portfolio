import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)

app.component('DotLottieVue', DotLottieVue)
app.use(Vue3Lottie)

app.use(router)

app.mount('#app')
