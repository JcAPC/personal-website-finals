

import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/home.vue'

import './assets/main.css'

const app = createApp(App)
app.component('Home', Home)
app.mount('#app')